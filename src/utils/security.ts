import DOMPurify from 'dompurify';

// Input sanitization utilities
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [] });
};

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html);
};

// Email validation (enhanced beyond HTML5)
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Brazilian phone number validation
export const validateBrazilianPhone = (phone: string): boolean => {
  // Remove all non-numeric characters
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Brazilian phone patterns:
  // Mobile: 11 digits (country code + area code + 9 + 8 digits)
  // Landline: 10 digits (country code + area code + 8 digits)
  const mobileRegex = /^55\d{2}9\d{8}$/; // With country code
  const landlineRegex = /^55\d{2}\d{8}$/; // With country code
  const mobileLocalRegex = /^\d{2}9\d{8}$/; // Without country code
  const landlineLocalRegex = /^\d{2}\d{8}$/; // Without country code
  
  return mobileRegex.test(cleanPhone) || 
         landlineRegex.test(cleanPhone) || 
         mobileLocalRegex.test(cleanPhone) || 
         landlineLocalRegex.test(cleanPhone);
};

// Safe URL creation for WhatsApp links
export const createSafeWhatsAppUrl = (phone: string, message?: string): string => {
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Validate phone number
  if (!validateBrazilianPhone(cleanPhone)) {
    throw new Error('Invalid phone number format');
  }
  
  // Add country code if not present
  const formattedPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
  
  // Sanitize and encode message
  const encodedMessage = message ? encodeURIComponent(sanitizeInput(message)) : '';
  
  return `https://wa.me/${formattedPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
};

// Input length validation
export const validateLength = (input: string, min: number, max: number): boolean => {
  const length = input.trim().length;
  return length >= min && length <= max;
};

// Rate limiting helper (client-side basic implementation)
export const createRateLimiter = (maxAttempts: number, windowMs: number) => {
  const attempts: number[] = [];
  
  return (): boolean => {
    const now = Date.now();
    
    // Remove old attempts outside the window
    while (attempts.length > 0 && attempts[0] <= now - windowMs) {
      attempts.shift();
    }
    
    // Check if under limit
    if (attempts.length < maxAttempts) {
      attempts.push(now);
      return true;
    }
    
    return false;
  };
};

// Form validation errors
export interface ValidationError {
  field: string;
  message: string;
}

export const validateContactForm = (data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): ValidationError[] => {
  const errors: ValidationError[] = [];
  
  // Name validation
  if (!validateLength(data.name, 2, 100)) {
    errors.push({ field: 'name', message: 'Nome deve ter entre 2 e 100 caracteres' });
  }
  
  // Email validation
  if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Email inválido' });
  }
  
  // Phone validation (optional)
  if (data.phone && data.phone.trim() && !validateBrazilianPhone(data.phone)) {
    errors.push({ field: 'phone', message: 'Número de telefone inválido' });
  }
  
  // Subject validation
  if (!validateLength(data.subject, 5, 200)) {
    errors.push({ field: 'subject', message: 'Assunto deve ter entre 5 e 200 caracteres' });
  }
  
  // Message validation
  if (!validateLength(data.message, 10, 2000)) {
    errors.push({ field: 'message', message: 'Mensagem deve ter entre 10 e 2000 caracteres' });
  }
  
  return errors;
};