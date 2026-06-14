import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  overline?: string;
  title: ReactNode;
  subtitle?: string;
  dark?: boolean;
  backgroundImage?: string;
  minHeight?: string;
  children?: ReactNode;
}

export const HeroSection = ({ overline, title, subtitle, dark = true, backgroundImage, minHeight = '65vh', children }: HeroSectionProps) => (
  <section
    className={`relative flex items-center justify-center overflow-hidden ${dark ? 'bg-fudo-black' : 'bg-background'}`}
    style={{ minHeight }}
  >
    {backgroundImage && (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-fudo-black/60" />
      </div>
    )}
    <div className="container mx-auto px-5 lg:px-10 relative z-10 text-center py-32">
      {overline && (
        <p className="text-label text-primary mb-6 tracking-widest animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {overline}
        </p>
      )}
      <h1 className="text-display-lg text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
        {title}
      </h1>
      {subtitle && (
        <p className="font-secondary text-lg text-primary-foreground/65 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  </section>
);
