import { useState, FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const departments = ['General Enquiry', 'Bulk Supply', 'Distribution', 'Event Partnership', 'Media & PR', 'Feedback'];

const Contact = () => {
  const revealRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, boolean> = {};

    ['name', 'phone', 'email', 'department', 'message'].forEach((field) => {
      if (!data.get(field)?.toString().trim()) newErrors[field] = true;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-background border ${errors[field] ? 'border-destructive animate-[shakeX_0.5s_ease-in-out]' : 'border-border'} rounded-lg font-secondary text-sm text-foreground transition-all duration-200 focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10`;

  return (
    <div ref={revealRef}>
      {/* Hero */}
      <section className="bg-fudo-black pt-32 pb-20">
        <div className="container mx-auto px-5 lg:px-10 text-center">
          <p className="text-label text-primary mb-4 tracking-widest animate-fade-in-up">CONTACT</p>
          <h1 className="text-display-lg text-primary-foreground animate-fade-in-up" style={{ animationDelay: '0.15s' }}>Get In Touch</h1>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="reveal-left">
              {submitted ? (
                <div className="text-center py-16">
                  <svg className="mx-auto mb-6" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="30" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
                    <path d="M20 32 L28 40 L44 24" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 100, animation: 'drawCheck 0.6s ease forwards' }} />
                  </svg>
                  <h3 className="font-primary text-2xl font-semibold text-foreground mb-3">Thank You!</h3>
                  <p className="font-secondary text-muted-foreground">Your enquiry has been submitted. Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="block font-secondary text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input id="name" name="name" type="text" className={inputClass('name')} placeholder="Your full name" onChange={() => setErrors(e => ({ ...e, name: false }))} />
                  </div>
                  <div>
                    <label htmlFor="company" className="block font-secondary text-sm font-medium text-foreground mb-1.5">Company</label>
                    <input id="company" name="company" type="text" className={inputClass('company')} placeholder="Company name (optional)" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block font-secondary text-sm font-medium text-foreground mb-1.5">Phone *</label>
                      <input id="phone" name="phone" type="tel" className={inputClass('phone')} placeholder="+91 70165 47502" onChange={() => setErrors(e => ({ ...e, phone: false }))} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-secondary text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input id="email" name="email" type="email" className={inputClass('email')} placeholder="you@company.com" onChange={() => setErrors(e => ({ ...e, email: false }))} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="department" className="block font-secondary text-sm font-medium text-foreground mb-1.5">Department *</label>
                    <select id="department" name="department" className={inputClass('department')} onChange={() => setErrors(e => ({ ...e, department: false }))}>
                      <option value="">Select a department</option>
                      {departments.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-secondary text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <textarea id="message" name="message" rows={5} className={inputClass('message')} placeholder="Tell us about your requirement..." onChange={() => setErrors(e => ({ ...e, message: false }))} />
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="privacy" className="mt-1 accent-[hsl(var(--primary))]" required />
                    <label htmlFor="privacy" className="font-secondary text-xs text-muted-foreground">
                      I agree to the privacy policy and consent to Fudo Beverages processing my data.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-3.5 bg-primary text-primary-foreground font-secondary text-sm font-medium tracking-widest uppercase rounded-pill transition-all duration-300 hover:bg-brand-orange-hover hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Send Enquiry →
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="reveal-right space-y-8">
              <div className="bg-fudo-off-white p-8 rounded-lg">
                <h3 className="font-primary text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4 font-secondary text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p>Canal Road, Near Bullet Train Track<br />Surat – 395010, Gujarat, India</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a href="tel:+917016547502" className="hover:text-primary transition-colors">+91 70165 47502</a>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:foodobevarages@gmail.com" className="hover:text-primary transition-colors">foodobevarages@gmail.com</a>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Hours</p>
                    <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-fudo-off-white rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50" />
                <div className="relative z-10 text-center">
                  <div className="w-8 h-8 mx-auto mb-2 bg-primary rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                  <p className="font-secondary text-sm text-muted-foreground">Canal Road, Surat</p>
                </div>
              </div>

              <a
                href="https://wa.me/917016547502"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-8 py-3.5 bg-primary text-primary-foreground font-secondary text-sm font-medium tracking-widest uppercase rounded-pill transition-all duration-300 hover:bg-brand-orange-hover"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Phone strip */}
      <section className="py-12 bg-primary text-center">
        <div className="container mx-auto px-5">
          <p className="font-primary text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">+91 70165 47502</p>
          <a
            href="https://wa.me/917016547502"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-secondary text-sm font-medium tracking-widest uppercase rounded-pill hover:bg-primary-foreground hover:text-primary transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
