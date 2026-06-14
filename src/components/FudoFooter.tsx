import { Link } from 'react-router-dom';
import { FudoLogo } from './FudoLogo';
import bisLogo from '@/assets/BIS LOGO.png';

const footerLinks = {
  collections: [
    { label: '1 Litre Still', path: '/#products' },
    { label: '500ml Water', path: '/#products' },
    { label: 'Bulk Supply', path: '/#products' },
  ],
  company: [
    { label: 'About Fudo', path: '/about' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Our Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' },
  ],
};

export const Footer = () => (
  <footer className="bg-fudo-black text-primary-foreground">
    {/* Pre-footer */}
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-5 lg:px-10 relative z-10">
        <div className="max-w-xl">
          <h2 className="text-display-md text-primary-foreground mb-4 sm:mb-6">
            Purity and elegance — crafted in Surat.
          </h2>
          <p className="font-secondary text-base sm:text-lg text-primary-foreground/65 mb-6 sm:mb-8 leading-relaxed">
            Experience the difference of water that's been refined to perfection. 
            From our facility near the Bullet Train Track to your glass.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary-foreground/60 text-primary-foreground font-secondary text-sm font-medium tracking-widest uppercase rounded-pill transition-all duration-300 hover:bg-primary-foreground hover:text-fudo-black"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>

    {/* Main footer */}
    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 sm:px-5 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <FudoLogo className="h-8 w-auto mb-4" light />
            <p className="font-secondary text-sm text-primary-foreground/50 mb-4">
              Have you had your FUDO yet?
            </p>
            <div className="flex gap-3 text-xs font-secondary text-primary-foreground/40">
              <span className="flex items-center gap-1.5">
                <img src={bisLogo} alt="BIS Certified" className="h-6 w-auto object-contain brightness-0 invert opacity-70" />
                BIS Certified
              </span>
              <span className="flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                FSSAI Approved
              </span>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-secondary text-sm font-semibold tracking-widest uppercase text-primary-foreground/80 mb-5">Collections</h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="font-secondary text-sm text-primary-foreground/50 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-secondary text-sm font-semibold tracking-widest uppercase text-primary-foreground/80 mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="font-secondary text-sm text-primary-foreground/50 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-secondary text-sm font-semibold tracking-widest uppercase text-primary-foreground/80 mb-5">Contact</h4>
            <div className="space-y-3 font-secondary text-sm text-primary-foreground/50">
              <p>Canal Road, Near Bullet Train Track<br />Surat – 395010, Gujarat, India</p>
              <a href="tel:+918866545492" className="block hover:text-primary transition-colors">+91 8866545492</a>
              <a href="mailto:foodobevarages@gmail.com" className="block hover:text-primary transition-colors">foodobevarages@gmail.com</a>
              <p>Mon–Sat: 9:00 AM – 6:00 PM</p>
              <a
                href="https://wa.me/918866545492"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-5 py-2 border border-primary/40 text-primary font-medium text-xs tracking-wider uppercase rounded-pill hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Social + Bottom */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-secondary text-xs text-primary-foreground/30">
            © 2025 Fudo Beverages Pvt Ltd. All rights reserved.
          </p>
          <p className="font-secondary text-[10px] text-primary-foreground/20 text-right max-w-xs">
            The information provided on this website is for general informational purposes only. While we make reasonable efforts to ensure that the information is accurate, complete, and up to date, we make no representations or warranties, express or implied, regarding its accuracy, reliability, suitability, or availability. Any reliance you place on such information is strictly at your own risk. We reserve the right to modify, update, or remove content at any time without prior notice.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/drink.thefudo?igsh=Y3dseGlxeGZqeHR3" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/40 hover:border-primary hover:text-primary transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/40 hover:border-primary hover:text-primary transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://wa.me/918866545492" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/40 hover:border-primary hover:text-primary transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="#" aria-label="YouTube"
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/40 hover:border-primary hover:text-primary transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
