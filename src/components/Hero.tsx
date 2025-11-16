import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tattoo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          Arte na Pele
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Transformamos suas ideias em obras de arte permanentes com técnica e criatividade
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="text-lg px-8 bg-gradient-accent hover:shadow-glow transition-all duration-300"
            onClick={scrollToContact}
          >
            Agendar Sessão
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 border-primary/50 hover:border-primary hover:bg-primary/10"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Portfólio
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-primary" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
