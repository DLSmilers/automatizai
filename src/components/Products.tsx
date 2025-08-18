import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, MessageCircle, BarChart3, DollarSign, Calendar, FileText, Smartphone, ArrowRight, Clock } from "lucide-react";
import dashboardImage from "@/assets/dashboard-demo.jpg";

const Products = () => {
  const cofrinFeatures = [
    "Registro de gastos via WhatsApp",
    "Controle de rendimentos e receitas",
    "Armazenamento seguro em banco de dados",
    "Dashboard interativo com gráficos",
    "Relatórios personalizados sob demanda",
    "Gestão financeira simplificada",
    "Histórico completo de transações",
    "Categorização automática de gastos"
  ];

  const upcomingBots = [
    {
      name: "EduBot", 
      description: "Assistente educacional para cursos e materiais de estudo",
      icon: FileText,
      status: "Planejamento"
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções inteligentes de chatbot para transformar sua comunicação no WhatsApp
          </p>
        </div>

        {/* Cofrin - Featured Product */}
        <div className="mb-20">
          <Card className="overflow-hidden hover-lift glass-card border-primary/20">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Product Info */}
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="/lovable-uploads/1c5af128-d18e-4597-a669-89785cf192c7.png" 
                    alt="Logo do Cofrin"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <CardTitle className="text-2xl md:text-3xl mb-2">Cofrin</CardTitle>
                    <Badge className="bg-secondary text-secondary-foreground">Disponível Agora</Badge>
                  </div>
                </div>
                
                <CardDescription className="text-lg mb-6">
                  Seu assistente financeiro pessoal no WhatsApp. Controle gastos, 
                  monitore rendimentos e visualize sua saúde financeira com facilidade.
                </CardDescription>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {cofrinFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-primary hover:bg-primary/90 transition-colors"
                    onClick={() => window.open('https://wa.me/5571829984718471', '_blank')}
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    Experimentar Grátis
                  </Button>
                  <Button 
                    variant="outline" 
                    className="hover-lift"
                    onClick={() => window.open('https://automatizai-dashboard.lovable.app/dashboard/HgiMhIjFWOJY67Ch2XqLV7SqXpWnAeAv', '_blank')}
                  >
                    <img 
                      src="/lovable-uploads/1c5af128-d18e-4597-a669-89785cf192c7.png" 
                      alt="Logo do Cofrin"
                      className="w-4 h-4 mr-2 object-contain"
                    />
                    Veja Cofrin em Ação
                  </Button>
                </div>
              </CardContent>

              {/* Right - Dashboard Preview */}
              <div className="relative p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-secondary/5">
                <img
                  src={dashboardImage}
                  alt="Dashboard do Cofrin mostrando gráficos financeiros"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 glass-card p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    <span className="text-xs font-medium">Dados em Tempo Real</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Upcoming Products */}
        <div className="animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Próximos <span className="text-gradient">Lançamentos</span>
            </h3>
            <p className="text-muted-foreground">
              Expandindo nosso portfólio com soluções inovadoras para diferentes setores
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingBots.map((bot, index) => (
              <Card key={index} className="hover-lift transition-all duration-300 hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                      <bot.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {bot.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{bot.name}</CardTitle>
                  <CardDescription>{bot.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" disabled>
                    Em Breve
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para <span className="text-gradient">automatizar</span> seu negócio?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato e descubra como nossos chatbots podem transformar sua comunicação
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 transition-colors">
              Falar com Especialista
              <MessageCircle className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;