import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Lightbulb, Target, Users, Award, Zap } from "lucide-react";
import danielProfile from "@/assets/daniel-profile.jpg";

const About = () => {
  const stats = [
    { label: "Anos de Experiência", value: "5+", icon: Award },
    { label: "Projetos Desenvolvidos", value: "50+", icon: Code },
    { label: "Clientes Satisfeitos", value: "100+", icon: Users },
    { label: "Automações Criadas", value: "200+", icon: Zap }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre buscamos as mais avançadas tecnologias para criar soluções que realmente fazem a diferença."
    },
    {
      icon: Target,
      title: "Foco no Cliente",
      description: "Cada chatbot é desenvolvido pensando nas necessidades específicas e objetivos de nossos clientes."
    },
    {
      icon: Code,
      title: "Excelência Técnica",
      description: "Código limpo, arquitetura sólida e as melhores práticas de desenvolvimento em cada projeto."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sobre a <span className="text-gradient">AutomatizaÍ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Especialistas em desenvolvimento de chatbots inteligentes para WhatsApp
          </p>
        </div>

        {/* Founder Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <Card className="overflow-hidden hover-lift glass-card">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Photo */}
              <div className="relative p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="relative">
                  <img
                    src={danielProfile}
                    alt="Daniel Miranda Nascimento - Fundador da AutomatizaÍ"
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full animate-float glow-effect opacity-30" />
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Daniel Miranda Nascimento</h3>
                  <Badge className="bg-primary text-primary-foreground mb-4">Fundador & Desenvolvedor Principal</Badge>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Especialista em desenvolvimento de chatbots e automação conversacional, Daniel possui mais de 5 anos de experiência 
                    criando soluções inovadoras para WhatsApp. Formado em Tecnologia da Informação, ele fundou a AutomatizaÍ com a 
                    missão de democratizar o acesso à automação inteligente.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">WhatsApp Business API</Badge>
                      <Badge variant="outline">Processamento de Linguagem Natural</Badge>
                      <Badge variant="outline">Inteligência Artificial</Badge>
                      <Badge variant="outline">Node.js & React</Badge>
                      <Badge variant="outline">Banco de Dados</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Visão:</h4>
                    <p className="text-muted-foreground">
                      "Acredito que a automação deve ser acessível e intuitiva. Cada chatbot que desenvolvo tem o objetivo 
                      de simplificar a vida das pessoas e potencializar os resultados dos negócios."
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-slide-up">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-lift">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="animate-scale-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Nossos <span className="text-gradient">Valores</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam cada projeto e relacionamento que construímos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift transition-all duration-300 hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Nossa <span className="text-gradient">Missão</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Automatizar e otimizar a comunicação empresarial através de soluções inteligentes de chatbot, 
              tornando a tecnologia de IA conversacional acessível a todos os tipos de negócio. Acreditamos 
              que cada conversa pode ser transformada em uma oportunidade de crescimento e eficiência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;