import { Card } from "@/components/ui/card";
import { Palette, Sparkles, Pencil, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Tatuagens Coloridas",
      description: "Trabalhos vibrantes e cheios de vida com as melhores tintas do mercado",
    },
    {
      icon: Sparkles,
      title: "Black & Grey",
      description: "Realismo e sombreamento perfeito em tons de preto e cinza",
    },
    {
      icon: Pencil,
      title: "Minimalista",
      description: "Designs clean e elegantes com traços precisos e delicados",
    },
    {
      icon: Layers,
      title: "Cobertura",
      description: "Renovação de tatuagens antigas com técnicas especializadas",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Especializados em diversos estilos para atender seu gosto único
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
