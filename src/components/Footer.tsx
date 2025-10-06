import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(footerRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-forest-deep text-primary-foreground py-12 overflow-hidden"
    >
      {/* Firefly particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-magic-glow rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: Math.random() * 0.6 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {["hero", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="font-pixel text-sm text-primary-foreground/80 hover:text-magic-glow transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 font-pixel text-sm text-primary-foreground/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-mushroom-red animate-pulse-glow" />
            <span>and</span>
            <Sparkles className="w-4 h-4 text-magic-glow animate-shimmer" />
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-8">
          <p className="font-pixel text-xs text-primary-foreground/60">
            © 2025 Milad - Digital Artisan. All spells reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
