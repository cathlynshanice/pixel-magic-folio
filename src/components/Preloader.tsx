import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import loadingRune from "@/assets/loading-rune.png";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const runeRef = useRef<HTMLImageElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const vineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate rune entrance
    tl.from(runeRef.current, {
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
    });

    // Pulse animation for rune
    gsap.to(runeRef.current, {
      scale: 1.1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Progress bar fill animation
    const progressTl = gsap.timeline({
      onUpdate: function() {
        const prog = Math.round(this.progress() * 100);
        setProgress(prog);
      },
      onComplete: () => {
        // Fade out with shimmer
        gsap.to(preloaderRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          onComplete: () => {
            onComplete();
          },
        });
      },
    });

    progressTl.to(vineRef.current, {
      scaleX: 1,
      duration: 2.5,
      ease: "power2.inOut",
    });

    return () => {
      tl.kill();
      progressTl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-forest-deep to-forest-medium"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-magic-glow rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Loading Rune */}
      <div className="relative mb-12">
        <img
          ref={runeRef}
          src={loadingRune}
          alt="Loading"
          className="w-32 h-32 magic-glow"
        />
      </div>

      {/* Progress Bar Container */}
      <div
        ref={progressBarRef}
        className="relative w-80 h-6 pixel-border-light bg-forest-deep/50 overflow-hidden"
      >
        {/* Magical vine fill */}
        <div
          ref={vineRef}
          className="absolute inset-0 bg-gradient-to-r from-magic-glow via-magic-yellow to-magic-glow origin-left scale-x-0"
          style={{ transformOrigin: "left center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>

      {/* Progress Text */}
      <p className="mt-4 text-magic-glow font-pixel text-lg magic-text-glow">
        Conjuring Magic... {progress}%
      </p>
    </div>
  );
};
