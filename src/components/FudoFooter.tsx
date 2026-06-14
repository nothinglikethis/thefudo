import { Link } from 'react-router-dom';
import { FudoLogo } from './FudoLogo';

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
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        <div className="max-w-xl">
          <h2 className="text-display-md text-primary-foreground mb-6">
            Purity and elegance — crafted in Surat.
          </h2>
          <p className="font-secondary text-lg text-primary-foreground/65 mb-8 leading-relaxed">
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
      <div className="container mx-auto px-5 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <FudoLogo className="h-8 w-auto mb-4" light />
            <p className="font-secondary text-sm text-primary-foreground/50 mb-4">
              Have you had your FUDO yet?
            </p>
            <div className="flex gap-3 text-xs font-secondary text-primary-foreground/40">
              <span className="flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
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
              <a href="tel:+917016547502" className="block hover:text-primary transition-colors">+91 70165 47502</a>
              <a href="mailto:foodobevarages@gmail.com" className="block hover:text-primary transition-colors">foodobevarages@gmail.com</a>
              <p>Mon–Sat: 9:00 AM – 6:00 PM</p>
              <a
                href="https://wa.me/917016547502"
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
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-secondary text-xs text-primary-foreground/30">
            © 2025 Fudo Beverages Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'Facebook', 'WhatsApp', 'YouTube'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/40 hover:border-primary hover:text-primary transition-all duration-300 text-xs font-secondary"
                aria-label={social}
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);
