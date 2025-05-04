
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">Contato</h2>
          <p className="text-psychologist-text-light max-w-2xl mx-auto">
            Entre em contato para agendar uma consulta ou tirar dúvidas sobre os atendimentos.
          </p>
          <div className="h-1 w-20 bg-psychologist-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-psychologist-beige p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-psychologist-gold flex items-center justify-center mr-4">
                    <MapPin className="text-white" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Endereço</h4>
                    <p className="text-psychologist-text-light">
                      <a href="https://maps.app.goo.gl/1kd4rsWaJH9GujLx7">
                      Av dos Alpes, 101 - Japeri, RJ
                      </a>
                     
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-psychologist-gold flex items-center justify-center mr-4">
                    <Clock className="text-white" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Horários</h4>
                    <p className="text-psychologist-text-light">
                      Segunda à Sexta: 8:00 às 20:00<br />
                      Sábado: 8:00 às 12:00
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-psychologist-gold flex items-center justify-center mr-4">
                    <Phone className="text-white" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Telefone</h4>
                    <p className="text-psychologist-text-light">
                      <a href="https://wa.me/5521975942576?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!">
                      (21)97594-2576
                      </a>
                       </p>
                  </div>
                </div>
                
                

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-psychologist-gold flex items-center justify-center mr-4">
                    <Instagram className="text-white" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Instagram</h4>
                    <p className="text-psychologist-text-light">
                      <a href="https://www.instagram.com/psi_andreamiranda?igsh=MTRyMGM3bW5maXFrZg==">@psi_Andreamiranda</a>
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif mb-6">Envie uma Mensagem</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-psychologist-text-dark mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-psychologist-gold"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-psychologist-text-dark mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-psychologist-gold"
                      placeholder="Seu email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-psychologist-text-dark mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-psychologist-gold"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-psychologist-text-dark mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-psychologist-gold"
                    placeholder="Como posso ajudar?"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-psychologist-gold hover:bg-psychologist-blue text-white border-none">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
