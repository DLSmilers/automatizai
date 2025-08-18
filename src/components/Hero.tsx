import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-chatbot.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transforme suas{" "}
                <span className="text-gradient">conversas</span>{" "}
                em resultados
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Desenvolvemos chatbots inteligentes para WhatsApp que automatizam processos 
                e revolucionam a experiência do usuário. Conheça o poder da automação conversacional.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp Nativo</p>
                  <p className="text-sm text-muted-foreground">Integração total</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Automação IA</p>
                  <p className="text-sm text-muted-foreground">Respostas inteligentes</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Dados Seguros</p>
                  <p className="text-sm text-muted-foreground">Proteção total</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 transition-colors text-lg px-8"
                onClick={() => scrollToSection('produtos')}
              >
                Conhecer o Cofrin
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 hover-lift"
                onClick={() => scrollToSection('como-funciona')}
              >
                Como Funciona
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Desenvolvido por especialistas em automação</p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">24/7</p>
                  <p className="text-xs text-muted-foreground">Disponível</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">IA</p>
                  <p className="text-xs text-muted-foreground">Inteligente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Chatbot AutomatizaÍ para WhatsApp em ação"
                className="w-full h-auto rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full animate-float glow-effect opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full animate-float glow-effect opacity-20" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;