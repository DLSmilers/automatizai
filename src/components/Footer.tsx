import { MessageCircle, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Produtos", href: "#produtos" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Sobre", href: "#sobre" }
  ];

  const services = [
    { name: "Cofrin - Chatbot Financeiro", href: "#produtos" },
    { name: "EduBot - Assistente Educacional", href: "#produtos" },
    { name: "Desenvolvimento Personalizado", href: "#sobre" },
    { name: "Integração WhatsApp Business", href: "#sobre" }
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

          {/* App Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sobre a Plataforma</h3>
            <p className="text-sm text-muted-foreground">
              Chatbots inteligentes para automatizar suas conversas e processos.
            </p>
            <div className="space-y-2">
              <button
                onClick={() => window.open("https://wa.me/5571981171533", '_blank')}
                className="w-full bg-secondary text-white px-4 py-2 rounded-lg text-sm hover:bg-secondary/90 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Suporte WhatsApp</span>
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