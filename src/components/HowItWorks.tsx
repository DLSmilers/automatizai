import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, MessageCircle, BarChart3, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "1. Conecte no WhatsApp",
      description: "Adicione o número do Cofrin em seus contatos e inicie uma conversa. É rápido e fácil!",
      color: "primary"
    },
    {
      icon: MessageCircle,
      title: "2. Converse Naturalmente",
      description: "Digite seus gastos e rendimentos como se estivesse falando com um amigo. O bot entende linguagem natural.",
      color: "secondary"
    },
    {
      icon: BarChart3,
      title: "3. Visualize Dados",
      description: "Acesse seu dashboard personalizado com gráficos, relatórios e insights sobre sua vida financeira.",
      color: "accent"
    }
  ];

  const chatExample = [
    { user: true, message: "Gastei R$ 25 no almoço hoje" },
    { user: false, message: "✅ Registrado! Gasto de R$ 25,00 em Alimentação. Seu total hoje: R$ 67,50" },
    { user: true, message: "Recebi R$ 1200 do freelance" },
    { user: false, message: "💰 Ótimo! Receita de R$ 1.200,00 registrada em Freelance. Saldo mensal: +R$ 890,50" }
  ];

  return (
    <section id="como-funciona" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em apenas 3 passos simples, você terá controle total de suas finanças
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="h-full hover-lift transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-${step.color} rounded-full flex items-center justify-center mx-auto mb-6 glow-effect`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chat Demo */}
        <div className="max-w-4xl mx-auto animate-scale-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Veja o <span className="text-gradient">Cofrin</span> em Ação
            </h3>
            <p className="text-muted-foreground">
              Exemplo real de conversa com o chatbot financeiro
            </p>
          </div>

          <Card className="glass-card overflow-hidden">
            <div className="bg-primary p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Cofrin - Assistente Financeiro</p>
                  <p className="text-white/70 text-sm">Online</p>
                </div>
              </div>
            </div>
            
            <CardContent className="p-6 space-y-4 max-h-96 overflow-y-auto">
              {chatExample.map((message, index) => (
                <div key={index} className={`flex ${message.user ? 'justify-end' : 'justify-start'} animate-fade-in`} style={{ animationDelay: `${index * 0.5}s` }}>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.user
                        ? 'bg-primary text-white ml-4'
                        : 'bg-muted text-foreground mr-4'
                    }`}
                  >
                    <p className="text-sm">{message.message}</p>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-start animate-fade-in" style={{ animationDelay: '2s' }}>
                <div className="bg-muted text-foreground max-w-xs lg:max-w-md px-4 py-2 rounded-lg mr-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <span className="text-xs text-muted-foreground">Cofrin está digitando...</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;