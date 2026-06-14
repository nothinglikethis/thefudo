import { HeroSection } from '@/components/HeroSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import servicesHero from '@/assets/services-hero.jpg';
import bottleHero from '@/assets/fudo-bottle-hero.png';

const services = [
  {
    title: 'Elevate Your Office Hydration',
    subtitle: 'Corporate Supply',
    desc: 'Keep your team refreshed with reliable, premium water delivery. From startups to corporate towers — Fudo ensures your workplace never runs dry.',
    features: ['Regular scheduled deliveries', 'Bulk pricing for offices', 'Custom branding available', 'Dedicated account manager'],
    reverse: false,
  },
  {
    title: 'Every Celebration Deserves Fudo',
    subtitle: 'Events & Weddings',
    desc: "Make a lasting impression at your next event. Fudo's premium diamond-cut bottles add elegance to weddings, galas, and celebrations across Gujarat.",
    features: ['Custom event quantities', 'Premium bottle presentation', 'On-site delivery & setup', 'Wedding packages available'],
    reverse: true,
  },
  {
    title: 'Upgrade Your Hospitality',
    subtitle: 'Hotels & Restaurants',
    desc: 'Your guests expect the best. Fudo delivers water that matches the quality of your establishment — pure, elegant, and consistently excellent.',
    features: ['Hotel room supply', 'Restaurant table service', 'Lobby & lounge placement', 'Volume discounts'],
    reverse: false,
  },
];

const showcases = [
  { title: 'Diamond Traders Gala', location: 'Surat 2024', desc: "500 premium bottles served at Gujarat's most prestigious diamond industry event." },
  { title: 'SMC Corporate Meeting', location: 'Surat 2024', desc: "Official water partner for Surat Municipal Corporation's annual strategy summit." },
  { title: 'Grand Wedding', location: '800 Guests', desc: "Exclusive hydration partner for one of Surat's largest wedding celebrations." },
];

const Services = () => {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <HeroSection
        overline="OUR SERVICES"
        title="Events and Collaboration"
        subtitle="From corporate boardrooms to grand celebrations — Fudo is the preferred hydration partner for Gujarat's finest."
        backgroundImage={servicesHero}
      />

      {/* Service Panels */}
      {services.map((service, i) => (
        <section key={i} className={`py-16 sm:py-24 lg:py-32 ${i % 2 === 0 ? 'bg-background' : 'bg-fudo-off-white'}`}>
          <div className="container mx-auto px-4 sm:px-5 lg:px-10">
            <div className={`grid lg:grid-cols-2 gap-10 sm:gap-16 items-center ${service.reverse ? 'direction' : ''}`}>
              <div className={service.reverse ? 'lg:order-2 reveal-left' : 'reveal-left'}>
                <p className="text-label text-primary mb-4 tracking-widest">{service.subtitle.toUpperCase()}</p>
                <h2 className="font-primary text-2xl sm:text-4xl font-semibold text-foreground mb-6">{service.title}</h2>
                <p className="font-secondary text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">{service.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 font-secondary text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-primary-foreground font-secondary text-sm font-medium tracking-widest uppercase rounded-pill transition-all duration-300 hover:bg-brand-orange-hover hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
              </div>
              <div className={service.reverse ? 'lg:order-1 reveal-right' : 'reveal-right'}>
                <div className="flex justify-center">
                  <img src={bottleHero} alt={service.title} className="h-[250px] sm:h-[350px] object-contain drop-shadow-xl" loading="lazy" width={400} height={600} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Event Showcases */}
      <section className="py-16 sm:py-24 lg:py-32 bg-fudo-charcoal">
        <div className="container mx-auto px-4 sm:px-5 lg:px-10">
          <div className="text-center mb-10 sm:mb-16">
            <p className="reveal-element text-label text-primary mb-4 tracking-widest">EVENT SHOWCASES</p>
            <h2 className="reveal-element text-display-md text-primary-foreground">Fudo in Action</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {showcases.map((s) => (
              <div key={s.title} className="reveal-element bg-fudo-dark-gray p-6 sm:p-8 rounded-lg hover:bg-[#2A2A2A] transition-colors">
                <p className="font-secondary text-xs text-primary tracking-widest uppercase mb-3">{s.location}</p>
                <h3 className="font-primary text-xl sm:text-2xl font-semibold text-primary-foreground mb-3">{s.title}</h3>
                <p className="font-secondary text-sm text-primary-foreground/55 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 sm:py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-5 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="font-primary text-2xl sm:text-3xl font-semibold text-primary-foreground text-center sm:text-left">How can we help?</h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/contact"
              className="text-center px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-primary-foreground text-primary-foreground font-secondary text-sm font-medium tracking-widest uppercase rounded-pill hover:bg-primary-foreground hover:text-primary transition-all"
            >
              Contact Fudo
            </Link>
            <a
              href="https://wa.me/918866545492"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-6 sm:px-8 py-3 sm:py-3.5 bg-primary-foreground text-primary font-secondary text-sm font-medium tracking-widest uppercase rounded-pill hover:bg-primary-foreground/90 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
