
import React from 'react';
import { Users, Activity, Brain, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain />,
      title: 'Psicoterapia Individual',
      description: 'Atendimento personalizado para adultos e adolescentes, com foco nas necessidades específicas de cada pessoa.',
    },
    {
      icon: <HeartHandshake />,
      title: 'Terapia de Casal',
      description: 'Mediação e desenvolvimento de estratégias para melhorar a comunicação e o relacionamento.',
    },
    {
      icon: <Activity />,
      title: 'Manejo de Ansiedade',
      description: 'Técnicas e abordagens para ajudar no controle da ansiedade e desenvolvimento de estratégias de enfrentamento.',
    },
    {
      icon: <Users />,
      title: 'Orientação Familiar',
      description: 'Suporte para famílias que enfrentam desafios na dinâmica de relacionamento e comunicação.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-psychologist-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Serviços</h2>
          <p className="text-psychologist-text-light max-w-2xl mx-auto">
            Ofereço diferentes modalidades de atendimento psicológico para ajudar no seu processo de autoconhecimento e desenvolvimento.
          </p>
          <div className="h-1 w-20 bg-psychologist-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-psychologist-blue/20 flex items-center justify-center mb-4">
                  <div className="text-psychologist-blue-dark">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-psychologist-text-light">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-psychologist-blue/10 p-8 rounded-lg">
          <h3 className="text-2xl font-serif mb-4 text-center">Como funciona?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-psychologist-gold flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-medium mb-2">Contato Inicial</h4>
              <p className="text-sm text-psychologist-text-light">
                Entre em contato por WhatsApp ou email para agendar sua primeira consulta.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-psychologist-gold flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-medium mb-2">Primeira Sessão</h4>
              <p className="text-sm text-psychologist-text-light">
                Conversaremos sobre suas expectativas e como posso ajudar no seu processo.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-psychologist-gold flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-medium mb-2">Acompanhamento</h4>
              <p className="text-sm text-psychologist-text-light">
                Desenvolvemos juntos um plano terapêutico adequado às suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
