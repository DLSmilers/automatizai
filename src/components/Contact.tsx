import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Phone, MapPin, Send, Clock, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sanitizeInput, validateContactForm, createSafeWhatsAppUrl, createRateLimiter, ValidationError } from "@/utils/security";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Rate limiter: max 3 attempts per 5 minutes
  const rateLimiter = createRateLimiter(3, 5 * 60 * 1000);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    // Check rate limiting
    if (!rateLimiter()) {
      toast({
        title: "Muitas tentativas",
        description: "Por favor, aguarde alguns minutos antes de tentar novamente.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    setValidationErrors([]);
    
    try {
      // Sanitize all inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message)
      };
      
      // Validate form data
      const errors = validateContactForm(sanitizedData);
      
      if (errors.length > 0) {
        setValidationErrors(errors);
        toast({
          title: "Erro de validação",
          description: "Por favor, corrija os campos destacados.",
          variant: "destructive",
        });
        return;
      }
      
      // Simulate form submission with security measures
      // In production, this would send to a secure backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em até 24 horas.",
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setValidationErrors([]);
      
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente em alguns minutos.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear validation error for this field when user starts typing
    if (validationErrors.some(error => error.field === name)) {
      setValidationErrors(prev => prev.filter(error => error.field !== name));
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const getFieldError = (fieldName: string) => {
    return validationErrors.find(error => error.field === fieldName);
  };
  
  const handleSecureWhatsApp = (phone: string, message?: string) => {
    try {
      const safeUrl = createSafeWhatsAppUrl(phone, message);
      window.open(safeUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      toast({
        title: "Erro",
        description: "Número de telefone inválido.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+55 (11) 99999-9999",
      action: "Chamar no WhatsApp",
      link: "https://wa.me/5511999999999"
    },
    {
      icon: Mail,
      title: "Email",
      info: "daniel@automatizai.com.br",
      action: "Enviar email",
      link: "mailto:daniel@automatizai.com.br"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "+55 (11) 99999-9999",
      action: "Ligar agora",
      link: "tel:+5511999999999"
    }
  ];

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para automatizar seu negócio? Vamos conversar sobre como podemos ajudar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="w-6 h-6 text-primary" />
                  <span>Envie uma Mensagem</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className={`mt-1 ${getFieldError('name') ? 'border-destructive' : ''}`}
                        placeholder="Seu nome"
                        aria-describedby={getFieldError('name') ? 'name-error' : undefined}
                      />
                      {getFieldError('name') && (
                        <p id="name-error" className="text-sm text-destructive mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {getFieldError('name')?.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={254}
                        className={`mt-1 ${getFieldError('email') ? 'border-destructive' : ''}`}
                        placeholder="seu@email.com"
                        aria-describedby={getFieldError('email') ? 'email-error' : undefined}
                      />
                      {getFieldError('email') && (
                        <p id="email-error" className="text-sm text-destructive mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {getFieldError('email')?.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">WhatsApp</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`mt-1 ${getFieldError('phone') ? 'border-destructive' : ''}`}
                        placeholder="(11) 99999-9999"
                        aria-describedby={getFieldError('phone') ? 'phone-error' : undefined}
                      />
                      {getFieldError('phone') && (
                        <p id="phone-error" className="text-sm text-destructive mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {getFieldError('phone')?.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="subject">Assunto *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        maxLength={200}
                        className={`mt-1 ${getFieldError('subject') ? 'border-destructive' : ''}`}
                        placeholder="Interesse no Cofrin"
                        aria-describedby={getFieldError('subject') ? 'subject-error' : undefined}
                      />
                      {getFieldError('subject') && (
                        <p id="subject-error" className="text-sm text-destructive mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {getFieldError('subject')?.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      maxLength={2000}
                      className={`mt-1 min-h-[120px] ${getFieldError('message') ? 'border-destructive' : ''}`}
                      placeholder="Conte-nos mais sobre seu projeto ou interesse em nossos chatbots..."
                      aria-describedby={getFieldError('message') ? 'message-error' : undefined}
                    />
                    {getFieldError('message') && (
                      <p id="message-error" className="text-sm text-destructive mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {getFieldError('message')?.message}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      {formData.message.length}/2000 caracteres
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 transition-colors disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="animate-scale-in">
            <div className="space-y-6">
              {/* Contact Methods */}
              {contactInfo.map((contact, index) => (
                <Card key={index} className="hover-lift transition-all duration-300 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{contact.title}</h3>
                        <p className="text-muted-foreground">{contact.info}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (contact.link.startsWith('https://wa.me/')) {
                            const phone = contact.link.replace('https://wa.me/', '');
                            handleSecureWhatsApp(phone);
                          } else {
                            window.open(contact.link, '_blank', 'noopener,noreferrer');
                          }
                        }}
                        className="hover-lift"
                      >
                        {contact.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Business Hours */}
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-muted-foreground">Sábado: 9h às 12h</p>
                      <p className="text-sm text-primary font-medium mt-2">
                        Respondemos em até 2 horas durante o horário comercial
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Localização</h3>
                      <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Atendemos clientes em todo o Brasil
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Prefere falar diretamente no <span className="text-gradient">WhatsApp</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              Clique no botão abaixo e converse diretamente com Daniel Miranda Nascimento
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 transition-colors"
              onClick={() => handleSecureWhatsApp("5511999999999", "Olá! Gostaria de saber mais sobre os chatbots da AutomatizaÍ")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;