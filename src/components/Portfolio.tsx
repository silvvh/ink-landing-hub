import { Card } from "@/components/ui/card";
import tattoo1 from "@/assets/tattoo-1.jpg";
import tattoo2 from "@/assets/tattoo-2.jpg";
import tattoo3 from "@/assets/tattoo-3.jpg";
import tattoo4 from "@/assets/tattoo-4.jpg";

const Portfolio = () => {
  const works = [
    { id: 1, image: tattoo1, title: "Realismo", category: "Black & Grey" },
    { id: 2, image: tattoo2, title: "Oriental", category: "Colorida" },
    { id: 3, image: tattoo3, title: "Geométrica", category: "Minimalista" },
    { id: 4, image: tattoo4, title: "Floral", category: "Realismo" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nosso Trabalho</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada tatuagem é única, feita com dedicação e atenção aos detalhes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <Card 
              key={work.id}
              className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <p className="text-primary text-sm">{work.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
