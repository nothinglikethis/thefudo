import { Link } from 'react-router-dom';
import { HeroSection } from '@/components/HeroSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import heroAbout from '@/assets/hero-about.jpg';
import bottleHero from '@/assets/fudo-bottle-hero.png';

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

const filtrationSteps = [
  { step: '01', title: 'Water Intake', desc: 'Sourced from carefully selected groundwater.' },
  { step: '02', title: 'Pre-Filtration', desc: 'Removal of sediment and large particles.' },
  { step: '03', title: 'Activated Carbon', desc: 'Eliminates chlorine, odour, and organic compounds.' },
  { step: '04', title: 'Reverse Osmosis', desc: 'Membrane filtration for molecular-level purity.' },
  { step: '05', title: 'UV Sterilization', desc: 'Destroys bacteria and viruses without chemicals.' },
  { step: '06', title: 'Ozonation', desc: 'Final disinfection ensuring absolute safety.' },
];

const About = () => {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <HeroSection
        overline="OUR STORY"
        title="Clarity and Elegance"
        subtitle="Born in Surat, refined for India — discover the story behind every bottle of Fudo."
        backgroundImage={heroAbout}
      />

      {/* Our Story */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="text-label text-primary mb-4 tracking-widest">THE BEGINNING</p>
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-6">
                Bottled in Surat. Refined for India.
              </h2>
              <p className="font-secondary text-lg text-muted-foreground leading-relaxed mb-4">
                Fudo Beverages was born from a simple belief: every Indian deserves access to water that isn't just safe — it's exceptional. Founded on Canal Road, near the iconic Bullet Train Track in Surat, our location is a symbol of forward momentum.
              </p>
              <p className="font-secondary text-base text-muted-foreground leading-relaxed">
                From day one, we set out to create a water brand that combines international quality standards with local reliability. Every bottle that leaves our facility represents our unwavering commitment to purity, precision, and perfection.
              </p>
            </div>
            <div className="reveal-right flex justify-center">
              <img src={bottleHero} alt="Fudo Premium Water Bottle" className="h-[400px] object-contain drop-shadow-xl" loading="lazy" width={400} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-fudo-off-white">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Mission', desc: 'To deliver the purest, safest drinking water to every home and business in Gujarat — with consistency, integrity, and care.' },
              { icon: '👁', title: 'Vision', desc: 'To become India\'s most trusted premium water brand, setting new benchmarks for quality, sustainability, and customer delight.' },
              { icon: '◆', title: 'Values', desc: 'Purity in every drop. Transparency in every process. Excellence in every interaction. Sustainability in every decision.' },
            ].map((item) => (
              <div key={item.title} className="reveal-element text-center p-10 bg-background rounded-lg shadow-[var(--shadow-card)]">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-primary text-2xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-secondary text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtration Process */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="text-center mb-16">
            <p className="reveal-element text-label text-primary mb-4 tracking-widest">PURIFICATION PROCESS</p>
            <h2 className="reveal-element text-display-md text-foreground">6-Stage Refinement</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtrationSteps.map((step) => (
              <div key={step.step} className="reveal-element p-8 border border-border rounded-lg hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all duration-300">
                <span className="font-primary text-3xl font-bold text-primary/30 mb-3 block">{step.step}</span>
                <h4 className="font-secondary text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="font-secondary text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Strip */}
      <section className="py-24 lg:py-32 bg-fudo-charcoal flex items-center justify-center">
        <div className="container mx-auto px-5 lg:px-10 text-center">
          <p className="reveal-element text-pull-quote text-primary max-w-3xl mx-auto">
            "Every sip of Fudo is a testament to our pursuit of perfection."
          </p>
        </div>
      </section>

      {/* Roots */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="text-label text-primary mb-4 tracking-widest">OUR ROOTS</p>
              <h2 className="font-primary text-4xl font-semibold text-foreground mb-6">
                The Diamond City's Finest Water
              </h2>
              <p className="font-secondary text-lg text-muted-foreground leading-relaxed mb-4">
                Surat is known as the Diamond City of the world — a place where raw stones are cut, polished, and transformed into objects of brilliance. Our geometric diamond-cut bottle is an homage to this legacy.
              </p>
              <p className="text-pull-quote text-primary">
                "Just as Surat shapes diamonds, Fudo shapes the finest drinking water."
              </p>
            </div>
            <div className="reveal-right">
              <div className="bg-fudo-off-white rounded-lg shadow-[var(--shadow-card)] overflow-hidden">
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
                      <tr key={row.param} className="border-b border-border/50">
                        <td className="p-4 font-secondary text-sm text-foreground">{row.param}</td>
                        <td className="p-4 text-right font-secondary text-sm font-semibold text-primary">{row.fudo} {row.unit}</td>
                        <td className="p-4 text-right font-secondary text-sm text-muted-foreground">{row.limit} {row.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
