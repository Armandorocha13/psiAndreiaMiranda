import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-psychologist-beige overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/1.jpg')] bg-cover bg-center opacity-20"></div>

      <div className="container-custom relative z-10 flex flex-col md:flex-row items-center py-20">
        {/* Text Section */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6 leading-tight">
            Psicoterapia para <span className="text-psychologist-gold">transformação</span> e bem-estar
          </h1>
          <p className="text-lg md:text-xl text-psychologist-text-light mb-8 max-w-lg">
            Psicanálise clínica, focada em proporcionar suporte e acolhimento para adultos e adolescentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-psychologist-gold hover:bg-psychologist-blue text-white border-none">
              <a href="https://wa.me/5521978637863" aria-label="Agendar consulta com Andrea Miranda">Agendar Consulta</a>
            </Button>
            <Button asChild variant="outline" className="border-psychologist-text-light text-psychologist-text-light hover:bg-psychologist-text-light hover:text-white">
              <a href="#about" aria-label="Conheça o trabalho da Andrea Miranda">Conheça meu trabalho</a>
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-psychologist-blue opacity-20"></div>
            <img 
              src="/4.jpg"
              alt="Andrea Miranda Psicanalista" 
              className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about" 
        aria-label="Role para saber mais"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-psychologist-text-light hover:text-psychologist-gold transition-colors"
      >
        <span className="text-sm mb-2">Saiba mais</span>
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
