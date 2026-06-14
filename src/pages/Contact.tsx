import { useState, FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ZAPIER_WEBHOOK = 'https://hooks.zapier.com/hooks/catch/27188458/u7lz780/';

const departments = ['General Enquiry', 'Bulk Supply', 'Distribution', 'Event Partnership', 'Media & PR', 'Feedback'];

const Contact = () => {
  const revealRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newErrors: Record<string, boolean> = {};

    ['name', 'phone', 'email', 'department', 'message'].forEach((field) => {
      if (!formData.get(field)?.toString().trim()) newErrors[field] = true;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    console.log('Sending to Zapier...');
    try {
      // Send as FormData - NO Content-Type header needed (CORS friendly)
      const response = await fetch(ZAPIER_WEBHOOK, {
        method: 'POST',
        body: formData, // FormData automatically sets correct headers
      });

      console.log('Zapier Response Status:', response.status);

      if (response.ok) {
        form.reset();
        setErrors({});
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
      } else {
        console.error('Zapier Error:', response.statusText);
        alert('Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-background border ${errors[field] ? 'border-destructive animate-[shakeX_0.5s_ease-in-out]' : 'border-border'} rounded-lg font-secondary text-sm text-foreground transition-all duration-200 focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10`;

  return (
    <div ref={revealRef}>
      {/* Hero */}
      <section className="bg-fudo-black pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-5 lg:px-10 text-center">
          <p className="text-label text-primary mb-4 tracking-widest animate-fade-in-up">CONTACT</p>
          <h1 className="text-display-lg text-primary-foreground animate-fade-in-up" style={{ animationDelay: '0.15s' }}>Get In Touch</h1>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
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
                      <input id="phone" name="phone" type="tel" className={inputClass('phone')} placeholder="+91 8866545492" onChange={() => setErrors(e => ({ ...e, phone: false }))} />
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
                    disabled={loading}
                    className="w-full sm:w-auto px-10 py-3.5 bg-primary text-primary-foreground font-secondary text-sm font-medium tracking-widest uppercase rounded-pill transition-all duration-300 hover:bg-brand-orange-hover hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Enquiry →'}
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
                    <a href="tel:+918866545492" className="hover:text-primary transition-colors">+91 8866545492</a>
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

              {/* Google Maps */}
              <div className="rounded-lg h-64 overflow-hidden">
                <iframe
                  title="Fudo Beverages Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8!2d72.8347!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjciTiA3MsKwNTAnMDUuMCJF!5e1!3m2!1sen!2sin!4v1&q=Canal+Road+Near+Bullet+Train+Track+Surat+Gujarat+395010"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href="https://wa.me/918866545492"
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
      <section className="py-10 sm:py-12 bg-primary text-center">
        <div className="container mx-auto px-4 sm:px-5">
          <p className="font-primary text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">+91 8866545492</p>
          <a
            href="https://wa.me/918866545492"
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