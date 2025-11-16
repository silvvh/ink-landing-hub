import { Award, Clock, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Experiência",
      description: "Mais de 10 anos de experiência em diversos estilos de tatuagem",
    },
    {
      icon: Heart,
      title: "Paixão",
      description: "Cada trabalho é feito com dedicação e amor pela arte",
    },
    {
      icon: Clock,
      title: "Qualidade",
      description: "Utilizamos os melhores equipamentos e materiais do mercado",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre o Estúdio
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Somos um estúdio especializado em transformar ideias em arte corporal. 
              Com anos de experiência, oferecemos um ambiente profissional, seguro e 
              acolhedor para você realizar a tatuagem dos seus sonhos.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nossa missão é criar obras únicas que expressem sua personalidade e 
              história, sempre com o mais alto padrão de qualidade e higiene.
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
