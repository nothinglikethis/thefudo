import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FudoLogo } from './FudoLogo';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Fudo', path: '/about' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Our Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isLightPage = ['/faq'].includes(location.pathname);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const textColor = scrolled || isLightPage ? 'text-foreground' : 'text-primary-foreground';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-xl shadow-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-5 lg:px-10 h-20">
          <Link to="/" className="relative z-50">
            <FudoLogo className="h-8 w-auto" light={!scrolled && !isLightPage} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-secondary text-sm font-medium tracking-wide uppercase transition-colors duration-200 hover:text-primary ${
                  textColor
                } ${location.pathname === link.path ? 'text-primary' : ''} 
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left
                ${location.pathname === link.path ? 'after:scale-x-100 after:origin-bottom-left' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground font-secondary text-sm font-medium tracking-widest uppercase rounded-pill transition-all duration-300 hover:bg-brand-orange-hover hover:-translate-y-0.5 hover:shadow-lg"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2 bg-primary-foreground' : scrolled || isLightPage ? 'bg-foreground' : 'bg-primary-foreground'}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : scrolled || isLightPage ? 'bg-foreground' : 'bg-primary-foreground'}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2 bg-primary-foreground' : scrolled || isLightPage ? 'bg-foreground' : 'bg-primary-foreground'}`} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-fudo-black transition-opacity duration-300 lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-primary text-3xl font-semibold text-primary-foreground hover:text-primary transition-all duration-300 ${
                menuOpen ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 px-10 py-4 bg-primary text-primary-foreground font-secondary text-sm font-medium tracking-widest uppercase rounded-pill"
          >
            Order Now
          </Link>
        </div>
      </div>
    </>
  );
};
