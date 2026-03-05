import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
            {/* Logo Placeholder */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              {/* Placeholder for logo-bordo-horizontal.png */}
              <div className="h-10 w-auto flex items-center gap-2">
                 <div className="w-8 h-8 bg-bordo rounded-tl-lg rounded-br-lg flex items-center justify-center text-white font-serif italic">CM</div>
                 <div className="flex flex-col">
                    <span className="font-serif text-xl font-bold text-bordo leading-none tracking-tight">Dra. Carolina Montenegro</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-grafite/80 font-medium mt-1">Cardiologista</span>
                 </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
                    location.pathname === link.path
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
                className="text-grafite hover:text-bordo focus:outline-none transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
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
                  className={`block px-4 py-3 rounded-lg text-base font-medium uppercase tracking-wider transition-colors ${
                    location.pathname === link.path
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
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-grafite text-pearl py-16 border-t border-champagne/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Brand / Logo */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                 {/* Placeholder for carimbo-branco.png or logo-branca.png */}
                 <div className="w-10 h-10 border border-champagne/50 rounded-full flex items-center justify-center text-champagne font-serif italic">CM</div>
                 <div>
                    <h3 className="font-serif text-xl text-white tracking-wide">Dra. Carolina Montenegro</h3>
                    <p className="text-xs uppercase tracking-[0.15em] text-champagne">Cardiologia Especializada</p>
                 </div>
              </div>
              <p className="text-sm text-pearl/80 leading-relaxed max-w-xs font-light">
                Atendimento médico especializado em Insuficiência Cardíaca e Transplante Cardíaco com excelência técnica e cuidado humanizado.
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
                    Rua Emiliano Perneta, 860, 17º andar<br/>
                    Centro, Curitiba - PR
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-champagne mt-0.5 shrink-0" />
                  <span>
                    <strong className="block text-white font-medium mb-1">Hospitais</strong>
                    <span className="opacity-80">HMC • HUC • HUEM</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-champagne shrink-0" />
                  <span>(41) 3082-0069</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-champagne shrink-0" />
                  <span>(41) 98421-6135 (WhatsApp)</span>
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
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-pearl/20 flex items-center justify-center text-pearl hover:bg-white hover:text-bordo hover:border-white transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="http://lattes.cnpq.br/0656857519859758" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-pearl/20 flex items-center justify-center text-pearl hover:bg-white hover:text-bordo hover:border-white transition-all duration-300 text-xs font-serif">
                  L
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
