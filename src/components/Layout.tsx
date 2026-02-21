import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Početna', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Usluge', path: '/#usluge' },
    { name: 'O nama', path: '/o-nama' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || !isHome ? 'bg-charcoal/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
        <nav className="container-editorial">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="font-serif text-xl md:text-2xl font-medium tracking-wide transition-colors duration-300 cursor-pointer text-cream z-50 relative">
              <span className="italic mr-1">Foto</span>
              Đumišić
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm tracking-widest uppercase font-light link-underline transition-colors duration-300 cursor-pointer text-cream ${location.pathname === item.path ? 'text-gold' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <a href="/kontakt" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 bg-cream/20 text-cream border border-cream/40 backdrop-blur-sm hover:bg-cream hover:text-charcoal tracking-widest uppercase text-xs font-sans h-12 px-8 py-3">
                Rezerviši termin
              </a>
            </div>

            <button
              className="lg:hidden p-2 transition-colors text-cream z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center h-full gap-8"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl tracking-wide transition-all duration-300 cursor-pointer text-cream hover:text-gold"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="/kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 bg-cream text-charcoal hover:bg-cream/90 tracking-widest uppercase text-xs font-sans h-14 px-10 py-4 mt-8"
              >
                Rezerviši termin
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer id="kontakt" className="bg-charcoal text-cream/90">
      <div className="container-editorial section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl font-medium tracking-wide">
              <span className="italic mr-1">Foto</span>
              Đumišić
            </Link>
            <p className="mt-4 text-cream/60 font-light leading-relaxed">
              Bilježimo emocije, stvaramo uspomene koje traju.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 text-cream/40">Navigacija</h4>
            <ul className="space-y-3">
              {['Portfolio', 'Usluge', 'O nama', 'Kontakt'].map((item) => (
                <li key={item}>
                  <Link to={['Portfolio', 'O nama', 'Kontakt'].includes(item) ? `/${item.toLowerCase().replace(' ', '-')}` : `/#${item.toLowerCase().replace(' ', '-')}`} className="text-cream/70 hover:text-cream transition-colors duration-300 font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 text-cream/40">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream/70 font-light">
                <Phone className="text-gold mt-1 shrink-0" size={16} />
                <span>
                  +387 61 123 456<br />
                  +387 33 123 456
                </span>
              </li>
              <li className="flex items-center gap-3 text-cream/70 font-light">
                <Mail className="text-gold shrink-0" size={16} />
                <span>info@fotodumisic.ba</span>
              </li>
              <li className="flex items-start gap-3 text-cream/70 font-light">
                <MapPin className="text-gold mt-1 shrink-0" size={16} />
                <span>
                  Zmaja od Bosne bb<br />
                  Sarajevo, 71000
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 text-cream/40">Pratite nas</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm font-light">
            © {new Date().getFullYear()} Foto Đumišić. Sva prava zadržana.
          </p>
          <div className="flex gap-6 text-sm text-cream/40">
            <a href="#" className="hover:text-cream/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cream/70 transition-colors">Terms</a>
            <a href="#" className="hover:text-cream/70 transition-colors">BS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
