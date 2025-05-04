
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <span className="text-xl md:text-2xl font-serif font-semibold text-psychologist-text-dark">
            Andrea Miranda
          </span>
          <span className="hidden md:inline-block ml-2 text-sm text-psychologist-text-light">
            Psicanalise Clínica
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-psychologist-text-light hover:text-psychologist-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <Button 
            asChild
            variant="outline" 
            className="border-psychologist-gold text-psychologist-gold hover:bg-psychologist-gold hover:text-white"
          >
            <a href="#contact">Agendar</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-psychologist-text-light hover:text-psychologist-gold transition-colors duration-300 py-2"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <Button 
              asChild
              variant="outline" 
              className="border-psychologist-gold text-psychologist-gold hover:bg-psychologist-gold hover:text-white w-full"
            >
              <a href="#contact" onClick={closeMenu}>Agendar</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
