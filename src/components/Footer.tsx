import { MessageCircle, Mail, Phone, Code, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Produtos", href: "#produtos" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" }
  ];

  const services = [
    { name: "Cofrin - Chatbot Financeiro", href: "#produtos" },
    { name: "Desenvolvimento Personalizado", href: "#contato" },
    { name: "Consultoria em Automação", href: "#contato" },
    { name: "Integração WhatsApp Business", href: "#contato" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gradient">AutomatizaÍ</span>
                <p className="text-xs text-muted-foreground">Chatbots Inteligentes</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Especialistas em desenvolvimento de chatbots para WhatsApp. 
              Transformamos conversas em resultados.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>daniel@automatizai.com.br</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Fale Conosco</h3>
            <p className="text-sm text-muted-foreground">
              Pronto para automatizar seu negócio? Entre em contato!
            </p>
            <div className="space-y-2">
              <button
                onClick={() => window.open("https://wa.me/5511999999999", '_blank')}
                className="w-full bg-secondary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary/90 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => scrollToSection("#contato")}
                className="w-full border border-border text-foreground px-4 py-2 rounded-lg text-sm hover:bg-muted transition-colors"
              >
                Formulário de Contato
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} AutomatizaÍ. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Desenvolvido com</span>
              <Heart className="w-4 h-4 text-primary fill-current" />
              <span>por</span>
              <span className="font-medium text-primary">Daniel Miranda Nascimento</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Code className="w-4 h-4" />
              <span>Tecnologia & Inovação</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;