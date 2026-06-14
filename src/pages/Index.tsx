import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { Marquee } from '@/components/Marquee';
import bottleHero from '@/assets/fudo-bottle-hero.png';

const stats = [
  { value: 500, suffix: '+', label: 'Clients Served' },
  { value: 1, suffix: 'M+', label: 'Litres Delivered' },
  { value: 100, suffix: '%', label: 'BIS Compliant' },
  { value: 5, suffix: '+', label: 'Years of Trust' },
];

const productTabs = [
  {
    id: '1l',
    label: '1 Litre Still',
    title: 'The Original 1 Litre',
    subtitle: 'Our flagship diamond-cut PET bottle — designed for home, office, events, and restaurants. Every sip is a statement of purity.',
    features: ['Home & Office', 'Events & Celebrations', 'Restaurants & Cafés', 'Corporate Gifting'],
  },
  {
    id: '500ml',
    label: '500ml Still',
    title: 'The 500ml Companion',
    subtitle: 'Compact hydration for life on the move. Perfect for travel, school, gym, and meetings — without compromising on quality.',
    features: ['Travel & Commute', 'School & College', 'Gym & Sports', 'Business Meetings'],
  },
  {
    id: 'bulk',
    label: 'Bulk Supply',
    title: 'Bulk for Business',
    subtitle: 'Customizable volume for hotels, weddings, offices, and factories. Reliable supply, premium quality, every time.',
    features: ['Hotels & Resorts', 'Weddings & Events', 'Offices & Co-working', 'Factories & Industrial'],
  },
];

const features = [
  { icon: '💧', title: '100% Pure Water', desc: 'Multi-stage purified for absolute safety and taste.' },
  { icon: '✓', title: 'BIS Certified', desc: 'Meets Bureau of Indian Standards IS:10500.' },
  { icon: '✓', title: 'FSSAI Approved', desc: 'Licensed under Food Safety Standards Authority.' },
  { icon: '♻', title: 'Eco-Conscious Packaging', desc: 'Recyclable PET with reduced plastic weight.' },
  { icon: '🚚', title: 'Fast Local Delivery', desc: 'Reliable distribution across Surat & Gujarat.' },
  { icon: '◆', title: 'Premium Bottle Design', desc: 'Geometric diamond-cut PET for a luxury feel.' },
  { icon: '🤝', title: 'B2B Partnerships', desc: 'Custom supply solutions for businesses of all sizes.' },
  { icon: '🔬', title: 'Lab Tested Every Batch', desc: 'Rigorous quality checks before every dispatch.' },
];

const qualityData = [
  { param: 'TDS', fudo: '150', limit: '500', unit: 'mg/L' },
  { param: 'pH', fudo: '7.2', limit: '6.5–8.5', unit: '' },
  { param: 'Calcium', fudo: '14', limit: '75', unit: 'mg/L' },
  { param: 'Magnesium', fudo: '5', limit: '30', unit: 'mg/L' },
  { param: 'Sodium', fudo: '10', limit: '200', unit: 'mg/L' },
  { param: 'Chloride', fudo: '18', limit: '250', unit: 'mg/L' },
  { param: 'Fluoride', fudo: '0.3', limit: '1.5', unit: 'mg/L' },
  { param: 'Hardness', fudo: '60', limit: '300', unit: 'mg/L' },
  { param: 'Conductivity', fudo: '280', limit: '750', unit: 'μS/cm' },
];

const testimonials = [
  { quote: "Fudo has completely transformed our office hydration. The quality is unmatched.", name: "Rajesh Patel", role: "CEO, Diamond Corp Surat" },
  { quote: "We serve Fudo at every event. Our guests always notice the premium quality.", name: "Priya Sharma", role: "Event Manager, Royal Events" },
  { quote: "The consistency and purity of Fudo water is exactly what our hotel needed.", name: "Amit Desai", role: "GM, Grand Hotel Surat" },
  { quote: "Switching to Fudo was the best decision for our restaurant. Clients love it.", name: "Neha Kapoor", role: "Owner, Spice Kitchen" },
  { quote: "Fudo's bulk supply has been reliable for our factory operations for years.", name: "Vikram Singh", role: "Operations Head, TextileCo" },
  { quote: "The diamond-cut bottle design is gorgeous. It elevates our brand image.", name: "Meera Joshi", role: "Marketing Director, LuxeGroup" },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-display-md text-primary font-primary">{count}{suffix}</div>
      <div className="font-secondary text-sm text-muted-foreground mt-2 tracking-wider uppercase">{label}</div>
    </div>
  );
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('1l');
  const revealRef = useScrollReveal();
  const activeProduct = productTabs.find(t => t.id === activeTab)!;

  return (
    <div ref={revealRef}>
      {/* HERO */}
      <section className="relative min-h-screen bg-fudo-black flex items-center overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        {/* Orange glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
        {/* Shimmer */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-primary-foreground/[0.02] to-transparent" style={{ width: '200%' }} />
        </div>

        <div className="container mx-auto px-5 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-32">
            {/* Left */}
            <div className="order-2 lg:order-1">
              <p className="text-label text-primary flex items-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="w-8 h-px bg-primary inline-block" />
                PURE DRINKING WATER • SURAT, GUJARAT
              </p>
              <h1 className="text-display-xl text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
                Hydration,{' '}
                <span className="text-primary italic">Refined.</span>
              </h1>
              <p className="font-secondary text-lg text-primary-foreground/65 max-w-lg mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Crafted with precision in Surat, Gujarat — Fudo delivers water that meets 
                the highest standards of purity, taste, and trust.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-primary/10 border border-primary/30 mb-8 animate-fade-in-up" style={{ animationDelay: '0.55s' }}>
                <span className="font-secondary text-sm text-primary font-medium">Have you had your FUDO yet?</span>
              </div>
              <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                <Link
                  to="#products"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-secondary text-sm font-medium tracking-widest uppercase rounded-pill transition-all duration-300 hover:bg-brand-orange-hover hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Explore Products
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary-foreground/60 text-primary-foreground font-secondary text-sm font-medium tracking-widest uppercase rounded-pill transition-all duration-300 hover:bg-primary-foreground hover:text-fudo-black"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex items-center gap-4 text-primary-foreground/45 font-secondary text-xs tracking-wider animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                <span>BIS IS:10500</span>
                <span className="w-px h-3 bg-primary-foreground/20" />
                <span>FSSAI Licensed</span>
                <span className="w-px h-3 bg-primary-foreground/20" />
                <span>Est. Surat</span>
              </div>
            </div>

            {/* Right - Bottle */}
            <div className="order-1 lg:order-2 flex items-center justify-center relative">
              {/* Rotating rings */}
              <div className="absolute w-[380px] h-[380px] rounded-full border border-primary/20 animate-rotate-slow hidden lg:block" />
              <div className="absolute w-[480px] h-[480px] rounded-full border border-dashed border-primary/10 animate-rotate-slow-reverse hidden lg:block" />
              {/* Glow */}
              <div className="absolute w-64 h-64 rounded-full bg-primary/20 blur-[80px] animate-pulse-glow" />
              <img
                src={bottleHero}
                alt="Fudo 1 Litre Premium Diamond-Cut Water Bottle"
                className="relative z-10 h-[50vh] lg:h-[70vh] object-contain animate-float-bottle drop-shadow-2xl"
                width={800}
                height={1200}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-down">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground/40">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
          <span className="font-secondary text-xs text-primary-foreground/30 tracking-widest uppercase">Scroll to explore</span>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee />

      {/* BRAND STATEMENT */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-5 lg:px-10 text-center">
          <p className="reveal-element text-label text-primary mb-6 tracking-widest">OUR PROMISE</p>
          <h2 className="reveal-element text-display-md text-foreground max-w-3xl mx-auto mb-8">
            Purity. Precision. Perfection.
          </h2>
          <p className="reveal-element text-pull-quote text-primary max-w-2xl mx-auto mb-16">
            "Every drop of Fudo is a commitment to excellence — water that's not just safe, but refined."
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="reveal-element">
                <StatCounter {...stat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT COLLECTIONS */}
      <section id="products" className="py-24 lg:py-32 bg-fudo-off-white">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <p className="reveal-element text-label text-primary mb-4 tracking-widest">OUR COLLECTION</p>
            <h2 className="reveal-element text-display-md text-foreground">Choose Your Fudo</h2>
          </div>
          
          {/* Tabs */}
          <div className="reveal-element flex justify-center gap-2 mb-12">
            {productTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-secondary text-sm font-medium tracking-wider uppercase rounded-pill transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-transparent text-foreground border border-border hover:border-primary hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <h3 className="font-primary text-4xl font-semibold text-foreground mb-4">{activeProduct.title}</h3>
              <p className="font-secondary text-lg text-muted-foreground leading-relaxed mb-8">{activeProduct.subtitle}</p>
              <div className="grid grid-cols-2 gap-3">
                {activeProduct.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 font-secondary text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right flex justify-center">
              <img
                src={bottleHero}
                alt={activeProduct.title}
                className="h-[400px] object-contain drop-shadow-xl"
                loading="lazy"
                width={400}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY FUDO */}
      <section className="py-24 lg:py-32 bg-fudo-charcoal">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <p className="reveal-element text-label text-primary mb-4 tracking-widest">WHY CHOOSE US</p>
            <h2 className="reveal-element text-display-md text-primary-foreground">The Fudo Difference</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="reveal-element bg-fudo-dark-gray p-8 transition-all duration-300 hover:bg-[#2A2A2A] hover:border-l-[3px] hover:border-l-primary group"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h4 className="font-secondary text-lg font-semibold text-primary-foreground mb-2">{f.title}</h4>
                <p className="font-secondary text-sm text-primary-foreground/55 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WATER QUALITY */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-left">
              <p className="text-label text-primary mb-4 tracking-widest">WATER PURITY ANALYSIS</p>
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-6">Purity Defined</h2>
              <p className="font-secondary text-lg text-muted-foreground leading-relaxed mb-4">
                Every batch of Fudo water undergoes rigorous laboratory testing to ensure it meets — and exceeds — the BIS IS:10500 standard for drinking water quality.
              </p>
              <p className="font-secondary text-base text-muted-foreground leading-relaxed mb-6">
                Our multi-stage purification process includes pre-filtration, activated carbon treatment, reverse osmosis, UV sterilization, and ozonation — delivering water that's pure in every sense.
              </p>
              <Link to="/about" className="font-secondary text-sm font-medium text-primary tracking-wider uppercase hover:underline">
                Learn more about our process →
              </Link>
            </div>
            <div className="reveal-right">
              <div className="bg-background rounded-lg shadow-[var(--shadow-card)] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-secondary text-xs font-semibold tracking-widest uppercase text-muted-foreground">Parameter</th>
                      <th className="text-right p-4 font-secondary text-xs font-semibold tracking-widest uppercase text-primary">Fudo</th>
                      <th className="text-right p-4 font-secondary text-xs font-semibold tracking-widest uppercase text-muted-foreground">Safe Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualityData.map((row) => (
                      <tr key={row.param} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                        <td className="p-4 font-secondary text-sm text-foreground">{row.param}</td>
                        <td className="p-4 text-right font-secondary text-sm font-semibold text-primary">{row.fudo} {row.unit}</td>
                        <td className="p-4 text-right font-secondary text-sm text-muted-foreground">{row.limit} {row.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="p-4 bg-muted/30 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                  <span className="font-secondary text-xs font-medium text-green-700">Compliant with BIS IS:10500 Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <p className="reveal-element text-label text-primary mb-4 tracking-widest">TESTIMONIALS</p>
            <h2 className="reveal-element text-display-md text-foreground">Trusted by Leaders</h2>
          </div>
          <div className="reveal-element flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-[420px] shrink-0 snap-start bg-background border border-border rounded-lg p-8 hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
              >
                <div className="h-[3px] w-12 bg-primary rounded-full mb-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="hsl(var(--primary))" className="text-primary">
                      <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
                    </svg>
                  ))}
                </div>
                <p className="font-accent text-xl italic text-foreground leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-secondary text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-secondary text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY TEASER */}
      <section className="py-32 lg:py-40 bg-fudo-charcoal relative">
        <div className="container mx-auto px-5 lg:px-10 text-center relative z-10">
          <p className="reveal-element text-label text-primary mb-6 tracking-widest">OUR COMMITMENT</p>
          <h2 className="reveal-element text-display-md text-primary-foreground mb-6">For a Refreshing Future</h2>
          <p className="reveal-element font-secondary text-lg text-primary-foreground/65 max-w-2xl mx-auto mb-10 leading-relaxed">
            At Fudo, sustainability isn't an afterthought — it's woven into every bottle, every delivery, every decision.
          </p>
          <Link
            to="/sustainability"
            className="reveal-element inline-flex items-center gap-2 px-8 py-3.5 border border-primary-foreground/60 text-primary-foreground font-secondary text-sm font-medium tracking-widest uppercase rounded-pill transition-all duration-300 hover:bg-primary-foreground hover:text-fudo-black"
          >
            Learn More
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: '♻', label: 'Recyclable PET' },
              { icon: '🌿', label: 'Lightweight Design' },
              { icon: '📦', label: 'Local Supply Chain' },
            ].map((item) => (
              <div key={item.label} className="reveal-element flex flex-col items-center gap-3">
                <span className="text-3xl">{item.icon}</span>
                <span className="font-secondary text-sm text-primary-foreground/60 tracking-wider uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
        <div className="container mx-auto px-5 lg:px-10 text-center relative z-10">
          <h2 className="font-primary text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Ready to make the switch to Fudo?
          </h2>
          <p className="font-secondary text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join hundreds of businesses and families across Surat who trust Fudo for their daily hydration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-foreground text-primary-foreground font-secondary text-sm font-medium tracking-widest uppercase rounded-pill transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
            >
              Get In Touch
            </Link>
            <a
              href="https://wa.me/917016547502"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-foreground text-primary font-secondary text-sm font-medium tracking-widest uppercase rounded-pill transition-all duration-300 hover:bg-primary-foreground/90"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
