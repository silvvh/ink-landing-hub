import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    { icon: Phone, text: "(11) 9999-9999", href: "tel:+5511999999999" },
    { icon: Mail, text: "contato@tattoostudio.com", href: "mailto:contato@tattoostudio.com" },
    { icon: MapPin, text: "São Paulo, SP", href: "#" },
    { icon: Instagram, text: "@tattoostudio", href: "https://instagram.com" },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pronto para começar sua próxima tatuagem? Agende uma consulta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 bg-card border-border animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Seu Telefone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Conte-nos sobre sua ideia de tatuagem..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-32 bg-background border-border"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-accent hover:shadow-glow transition-all duration-300"
                size="lg"
              >
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-foreground">{info.text}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Segunda a Sexta: 10h - 20h</p>
                <p>Sábado: 10h - 18h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
