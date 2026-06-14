import { HeroSection } from '@/components/HeroSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import sustainabilityHero from '@/assets/sustainability-hero.jpg';

const timeline = [
  { year: '2020', event: 'Founded in Surat', desc: 'Fudo Beverages established on Canal Road with a vision for premium water.' },
  { year: '2021', event: 'BIS Certified', desc: 'Achieved Bureau of Indian Standards certification for drinking water quality.' },
  { year: '2022', event: 'FSSAI Approved', desc: 'Secured FSSAI licensing, meeting national food safety standards.' },
  { year: '2023', event: '500+ Clients', desc: 'Crossed 500 active clients across Surat and Gujarat.' },
  { year: '2024', event: '15% Less Plastic', desc: 'Reduced plastic usage per bottle by 15% through design optimization.' },
  { year: '2025', event: 'Bulk Programme', desc: 'Launched dedicated bulk supply programme for B2B clients.' },
  { year: '2026', event: 'Eco Packaging Audit', desc: 'Comprehensive sustainability audit for all packaging materials.' },
];

const commitments = [
  { icon: '♻', title: 'Recyclable PET', desc: 'All Fudo bottles are made from 100% recyclable PET plastic.' },
  { icon: '🌱', title: 'Reduced Plastic', desc: 'Lightweight bottle design uses 15% less plastic than industry standard.' },
  { icon: '🚚', title: 'Local Delivery', desc: 'Minimized transport emissions through Surat-centric distribution.' },
  { icon: '💧', title: 'Water Efficiency', desc: 'Advanced RO recovery systems minimize water waste in production.' },
];

const Sustainability = () => {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <HeroSection
        overline="SUSTAINABILITY"
        title="For a Refreshing Future"
        subtitle="At Fudo, we believe premium quality and environmental responsibility go hand in hand."
        backgroundImage={sustainabilityHero}
      />

      {/* Stewardship */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-5 lg:px-10 max-w-3xl text-center">
          <p className="reveal-element text-label text-primary mb-4 tracking-widest">SOURCE STEWARDSHIP</p>
          <h2 className="reveal-element font-primary text-4xl font-semibold text-foreground mb-6">Shaping a Sustainable World.</h2>
          <p className="reveal-element font-secondary text-lg text-muted-foreground leading-relaxed">
            We take our responsibility to Gujarat's natural resources seriously. Every step of our process — from sourcing to delivery — is designed to minimize environmental impact while maximizing water quality and safety.
          </p>
        </div>
      </section>

      {/* Carbon Footprint */}
      <section className="py-20 bg-fudo-off-white">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <p className="reveal-element text-label text-primary mb-4 tracking-widest">CARBON FOOTPRINT</p>
            <h2 className="reveal-element text-display-md text-foreground">Our Impact Areas</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Production', desc: 'Energy-efficient purification systems and solar-ready facility design reduce our production footprint.', metric: '30%', metricLabel: 'Energy Reduction Target' },
              { title: 'Distribution', desc: 'Local-first delivery network keeps transport emissions low. 90% of deliveries within Surat city limits.', metric: '90%', metricLabel: 'Local Deliveries' },
              { title: 'Packaging', desc: 'Lightweight PET design and recyclable materials minimize packaging waste per litre delivered.', metric: '15%', metricLabel: 'Less Plastic Used' },
            ].map((item) => (
              <div key={item.title} className="reveal-element bg-background p-10 rounded-lg shadow-[var(--shadow-card)] text-center">
                <div className="font-primary text-4xl font-bold text-primary mb-2">{item.metric}</div>
                <p className="font-secondary text-xs text-muted-foreground tracking-wider uppercase mb-6">{item.metricLabel}</p>
                <h3 className="font-primary text-2xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-secondary text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <p className="reveal-element text-label text-primary mb-4 tracking-widest">OUR JOURNEY</p>
            <h2 className="reveal-element text-display-md text-foreground">Milestones</h2>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
            {timeline.map((item) => (
              <div key={item.year} className="min-w-[280px] shrink-0 snap-start bg-background border border-border rounded-lg p-8 hover:shadow-[var(--shadow-card)] transition-shadow">
                <div className="font-primary text-5xl font-bold text-primary/30 mb-4">{item.year}</div>
                <h4 className="font-secondary text-lg font-semibold text-foreground mb-2">{item.event}</h4>
                <p className="font-secondary text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-fudo-off-white">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <p className="reveal-element text-label text-primary mb-4 tracking-widest">OUR COMMITMENTS</p>
            <h2 className="reveal-element text-display-md text-foreground">Built for Tomorrow</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((c) => (
              <div key={c.title} className="reveal-element bg-background p-8 rounded-lg shadow-[var(--shadow-card)] text-center hover:shadow-[var(--shadow-card-hover)] transition-shadow">
                <span className="text-4xl mb-4 block">{c.icon}</span>
                <h4 className="font-secondary text-lg font-semibold text-foreground mb-2">{c.title}</h4>
                <p className="font-secondary text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-fudo-charcoal text-center">
        <div className="container mx-auto px-5 lg:px-10">
          <h2 className="reveal-element font-primary text-3xl font-semibold text-primary-foreground mb-4">
            Join Fudo's journey toward a greener Gujarat.
          </h2>
          <Link
            to="/contact"
            className="reveal-element inline-flex items-center gap-2 mt-4 px-8 py-3.5 border border-primary-foreground/60 text-primary-foreground font-secondary text-sm font-medium tracking-widest uppercase rounded-pill transition-all duration-300 hover:bg-primary-foreground hover:text-fudo-black"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
