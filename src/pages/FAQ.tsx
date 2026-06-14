import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  { q: 'Where does Fudo source its water?', a: 'Fudo sources water from carefully selected groundwater reserves in Surat, Gujarat. Our facility on Canal Road, near the Bullet Train Track, processes water through a rigorous 6-stage purification system to ensure the highest quality.' },
  { q: 'Is Fudo water BIS and FSSAI certified?', a: 'Yes. Fudo is certified under BIS IS:10500 (Bureau of Indian Standards) and holds a valid FSSAI license. These certifications guarantee that our water meets national standards for safety, purity, and quality.' },
  { q: 'What sizes are available?', a: 'Currently, Fudo is available in 1 Litre and 500ml premium diamond-cut PET bottles. We also offer bulk supply options with customizable volumes for businesses, events, and institutions.' },
  { q: 'Do you offer bulk supply?', a: 'Absolutely. Fudo offers dedicated bulk supply programmes for hotels, restaurants, offices, weddings, factories, and institutions. Contact us for custom pricing and delivery schedules.' },
  { q: 'How can I order Fudo water?', a: 'You can order through our website contact form, call us at +91 8866545492, or reach us directly on WhatsApp. For bulk orders, our team will work with you to create a customized supply plan.' },
  { q: 'Is there a minimum order quantity?', a: 'For retail orders, there is no minimum. For bulk supply and B2B partnerships, minimums vary by arrangement — contact our sales team for details tailored to your needs.' },
  { q: 'Do you deliver outside Surat?', a: 'Currently, our primary delivery network covers Surat and surrounding areas in Gujarat. For larger orders outside this region, please contact us to discuss logistics and availability.' },
  { q: 'What purification process does Fudo use?', a: 'Fudo employs a comprehensive 6-stage purification process: Water Intake → Pre-Filtration → Activated Carbon Treatment → Reverse Osmosis → UV Sterilization → Ozonation. This ensures every bottle is pure, safe, and great-tasting.' },
  { q: 'Is Fudo water safe for children?', a: 'Absolutely. Fudo water meets all BIS and FSSAI safety standards, making it completely safe for children, elderly, and everyone in between. Our TDS level of 150 mg/L is well within the optimal range for drinking water.' },
  { q: 'Are Fudo bottles recyclable?', a: 'Yes. All Fudo bottles are made from 100% recyclable PET plastic. We encourage our customers to recycle responsibly and are continuously working to reduce our environmental footprint.' },
  { q: 'Can I become a Fudo distributor?', a: 'We\'re always looking for distribution partners across Gujarat. If you\'re interested in becoming a Fudo distributor, please contact us through our website or WhatsApp with your business details.' },
  { q: 'How can I contact Fudo?', a: 'You can reach us at +91 8866545492 (phone & WhatsApp), email us at foodobevarages@gmail.com, or visit our facility on Canal Road, Near Bullet Train Track, Surat – 395010. Our hours are Monday to Saturday, 9 AM to 6 PM.' },
];

const FAQ = () => {
  const revealRef = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div ref={revealRef}>
      <section className="bg-fudo-black pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-5 lg:px-10 text-center">
          <p className="text-label text-primary mb-4 tracking-widest animate-fade-in-up">SUPPORT</p>
          <h1 className="text-display-lg text-primary-foreground animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-5 lg:px-10 max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="reveal-element border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-secondary text-base font-medium text-foreground hover:text-primary transition-colors"
                  aria-expanded={openIndex === i}
                >
                  <span>{faq.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`shrink-0 ml-4 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === i ? '500px' : '0' }}
                >
                  <p className="px-6 pb-6 font-secondary text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
