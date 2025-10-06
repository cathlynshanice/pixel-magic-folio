import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Bird } from "lucide-react";
import { gsap } from "gsap";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-forest-deep/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 font-pixel text-xl text-magic-glow hover:scale-110 transition-transform"
          >
            <Bird className="w-6 h-6 animate-pulse-glow" />
            <span className="magic-text-glow">Cathlyn Shanice</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-pixel text-lg text-primary-foreground hover:text-magic-glow transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-magic-glow transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground hover:text-magic-glow transition-colors p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-forest-deep/98 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative h-full flex flex-col items-center justify-center gap-8">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-primary-foreground p-2"
            >
              <X className="w-8 h-8" />
            </button>

            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-pixel text-3xl text-primary-foreground hover:text-magic-glow transition-all hover:scale-110"
                style={{
                  animation: `fadeIn 0.3s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};
