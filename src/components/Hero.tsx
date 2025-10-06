import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bird, Sparkles, Wand2 } from "lucide-react";
import heroForest from "@/assets/hero-forest.png";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Animate headline with sparkle effect
    tl.from(headlineRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
    })
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        ctaRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

    // Floating particles
    const particles = document.querySelectorAll(".hero-particle");
    particles.forEach((particle) => {
      gsap.to(particle, {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        rotation: "random(-10, 10)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Parallax effect
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 100,
      opacity: 0.5,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroForest})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-forest-deep/60" />

      {/* Floating magical particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="hero-particle absolute w-2 h-2 bg-magic-glow rounded-full magic-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <Bird className="w-16 h-16 text-magic-glow animate-pulse-glow" />
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-pixel text-5xl md:text-7xl lg:text-8xl mb-6 text-primary-foreground pixel-text-shadow"
          >
            Hi, I'm <span className="text-magic-glow magic-text-glow">Cathlyn Shanice</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">
              AI Engineer
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-pixel text-xl md:text-2xl mb-12 text-cozy-pink max-w-2xl mx-auto"
          >
            Crafting enchanted web experiences with spells written in code
          </p>

          {/* CTA Button */}
          <button
            ref={ctaRef}
            onClick={scrollToContact}
            className="group relative px-12 py-4 font-pixel text-xl bg-accent text-accent-foreground pixel-border hover:scale-105 transition-all duration-300 soft-glow"
          >
            <Sparkles className="inline-block w-5 h-5 mr-2 animate-shimmer" />
            Summon Me
            <div className="absolute inset-0 bg-magic-glow/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-magic-glow rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-magic-glow rounded-full animate-shimmer" />
        </div>
      </div>
    </section>
  );
};
