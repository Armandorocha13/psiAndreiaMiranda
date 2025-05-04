
import React from 'react';
import { Award, BookOpen, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Sobre Mim</h2>
          <div className="h-1 w-20 bg-psychologist-gold mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-psychologist-gold z-0"></div>
              <img 
                src="/public/3.jpg" 
                alt="Andrea Miranda" 
                className="w-full relative z-10 shadow-lg"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <h3 className="text-2xl md:text-3xl font-serif mb-6">Andrea Miranda</h3>
            <p className="text-psychologist-text-light mb-6">
Sou psicanalista clínica, dedicada a oferecer um espaço seguro de escuta e acolhimento.
Ao longo dos anos desenvolvi um trabalho voltado ao cuidado emocional de pessoas que enfrentam momentos difíceis, dúvidas internas ou simplesmente desejam se conhecer melhor.
Acredito no poder da escuta acolhedora e no fortalecimento de vínculos baseados na empatia, no respeito e na confiança. Meu foco é oferecer um espaço seguro, onde você possa se expressar livremente, sem julgamentos. Juntos, vamos construindo caminhos para o autoconhecimento, o equilíbrio emocional e a superação de desafios do dia a dia.
Trabalho com adultos e adolescentes, buscando sempre promover bem-estar, autoestima e qualidade de vida emocional.
            </p>
           

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center p-4 bg-psychologist-beige rounded-lg">
                <div className="w-12 h-12 rounded-full bg-psychologist-gold flex items-center justify-center mb-3">
                  <Award className="text-white" size={20} />
                </div>
                <h4 className="font-medium mb-2">Formação</h4>
                <p className="text-sm text-psychologist-text-light">USP e especializações reconhecidas</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-psychologist-beige rounded-lg">
                <div className="w-12 h-12 rounded-full bg-psychologist-gold flex items-center justify-center mb-3">
                  <BookOpen className="text-white" size={20} />
                </div>
                <h4 className="font-medium mb-2">Experiência</h4>
                <p className="text-sm text-psychologist-text-light">+1 anos de prática clínica</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-psychologist-beige rounded-lg">
                <div className="w-12 h-12 rounded-full bg-psychologist-gold flex items-center justify-center mb-3">
                  <Heart className="text-white" size={20} />
                </div>
                <h4 className="font-medium mb-2">Abordagem</h4>
                <p className="text-sm text-psychologist-text-light">Integrativa e humanizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
