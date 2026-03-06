import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoBordoHorizontal from '../assets/logos/logo-bordo-horizontal.png';
import carimboBranco from '../assets/logos/carimbo-branco.png';
import { CONSULTORIO, HOSPITALS } from '../data/locations';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu and restore scroll on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Atuação', path: '/atuacao' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-offwhite text-grafite font-sans selection:bg-bordo selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-pearl shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <img src={logoBordoHorizontal} alt="Dra. Carolina Montenegro" className="h-10 md:h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${location.pathname === link.path
                    ? 'text-bordo'
                    : 'text-grafite/70 hover:text-bordo'
                    }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-[1px] bg-bordo"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                className="text-grafite hover:text-bordo focus:outline-none transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-pearl overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium uppercase tracking-wider transition-colors ${location.pathname === link.path
                      ? 'bg-offwhite text-bordo'
                      : 'text-grafite hover:text-bordo hover:bg-offwhite'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-grafite text-pearl py-16 border-t border-champagne/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">

            {/* Brand / Logo */}
            <div className="space-y-6 flex flex-col items-start">
              <img src={carimboBranco} alt="Dra. Carolina Montenegro" className="h-24 md:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
              <p className="text-sm text-pearl/80 leading-relaxed max-w-xs font-light">
                Cardiologia especializada. Excelência técnica e sensibilidade.
              </p>
              <p className="text-sm text-pearl/40 leading-relaxed font-light mt-2">
                CRM-PR 45316<br />
                Clínica Médica – RQE Nº: 32336<br />
                Cardiologia – RQE Nº: 36066
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-lg text-white mb-6">Contato</h4>
              <ul className="space-y-4 text-sm font-light">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-champagne mt-0.5 shrink-0" />
                  <span>
                    <strong className="block text-white font-medium mb-1">Consultório Particular</strong>
                    {CONSULTORIO.street}<br />
                    {CONSULTORIO.city}
                    <div className="mt-3 flex flex-col gap-2">
                      <a href={CONSULTORIO.phoneTel} className="flex items-center gap-2 hover:text-champagne transition-colors">
                        <Phone size={14} className="text-champagne shrink-0" />
                        <span>{CONSULTORIO.phone}</span>
                      </a>
                      <a href={CONSULTORIO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-champagne transition-colors">
                        <Phone size={14} className="text-champagne shrink-0" />
                        <span>{CONSULTORIO.whatsappPhone} (WhatsApp)</span>
                      </a>
                    </div>
                  </span>
                </li>
                <li className="flex items-start gap-3 mt-6">
                  <MapPin size={18} className="text-champagne mt-0.5 shrink-0" />
                  <span>
                    <strong className="block text-white font-medium mb-1">Hospitais</strong>
                    <span className="opacity-80">{HOSPITALS.map(h => h.abbr).join(' • ')}</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Hours & Social */}
            <div>
              <h4 className="font-serif text-lg text-white mb-6">Atendimento</h4>
              <p className="text-sm text-pearl/80 font-light mb-8">
                Segunda a Sexta-feira<br />
                Das 09h às 18h
              </p>

              <h4 className="font-serif text-lg text-white mb-4">Redes Sociais</h4>
              <div className="flex flex-col gap-4">
                <a href="https://www.instagram.com/dra.carolinamontenegro/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-pearl hover:text-white transition-colors group">
                  <span className="w-10 h-10 rounded-full border border-pearl/20 flex items-center justify-center group-hover:bg-white group-hover:text-bordo group-hover:border-white transition-all duration-300">
                    <Instagram size={20} />
                  </span>
                  <span>Instagram</span>
                </a>
                <a href="http://lattes.cnpq.br/0656857519859758" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-pearl hover:text-white transition-colors group">
                  <span className="w-10 h-10 rounded-full border border-pearl/20 flex items-center justify-center group-hover:bg-white group-hover:text-bordo group-hover:border-white transition-all duration-300 text-xs font-serif font-bold">
                    L
                  </span>
                  <span>Currículo Lattes</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-pearl/40 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Dra. Carolina Montenegro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
