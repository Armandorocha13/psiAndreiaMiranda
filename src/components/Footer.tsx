
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-psychologist-beige py-10 border-t border-psychologist-gold/20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-xl font-serif font-semibold text-psychologist-text-dark">
                Andrea Miranda
              </span>
              <span className="ml-2 text-sm text-psychologist-text-light">
                Psicanalista Clínica
              </span>
            </div>
            <p className="mt-2 text-sm text-psychologist-text-light">
            CRP: 29.894.91800001-03
            </p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <li>
                <a href="#hero" className="text-sm text-psychologist-text-light hover:text-psychologist-gold transition-colors duration-300">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-psychologist-text-light hover:text-psychologist-gold transition-colors duration-300">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-psychologist-text-light hover:text-psychologist-gold transition-colors duration-300">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-psychologist-text-light hover:text-psychologist-gold transition-colors duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-psychologist-gold/10 mt-8 pt-8 text-center">
          <p className="text-sm text-psychologist-text-light">
            © {currentYear} Andrea Miranda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
