import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".form-element", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      });

      // Animate social icons
      gsap.from(".social-icon", {
        scrollTrigger: {
          trigger: ".social-icons",
          start: "top center+=100",
        },
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate sending
    gsap.to(formRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        toast.success("Message sent! 🎉", {
          description: "Your magical message has been delivered!",
        });
        setFormData({ name: "", email: "", message: "" });
      },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-background to-forest-deep/20 overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-magic-glow/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cozy-purple/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-6xl text-primary pixel-text-shadow mb-4">
            Send a Message
          </h2>
          <p className="font-pixel text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's create something magical together
          </p>
          <div className="w-24 h-1 bg-magic-glow mx-auto mt-6 magic-glow" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="pixel-border bg-card/80 backdrop-blur-sm p-8 mb-12"
          >
            <div className="form-element mb-6">
              <label className="block font-pixel text-lg text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-muted border-2 border-border font-pixel text-foreground focus:border-magic-glow focus:outline-none transition-colors"
                placeholder="Enter your name..."
              />
            </div>

            <div className="form-element mb-6">
              <label className="block font-pixel text-lg text-foreground mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-muted border-2 border-border font-pixel text-foreground focus:border-magic-glow focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="form-element mb-8">
              <label className="block font-pixel text-lg text-foreground mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-muted border-2 border-border font-pixel text-foreground focus:border-magic-glow focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
        
            >
              <Send className="inline-block w-5 h-5 mr-2" />
              Send Message
              <Sparkles className="inline-block w-5 h-5 ml-2 animate-shimmer" />
              <div className="absolute inset-0 bg-magic-glow/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </button>
          </form>

          {/* Social Links */}
          <div className="social-icons text-center">
            <p className="font-pixel text-lg text-muted-foreground mb-6">
              You can also find me here
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="cathlynnshanicee@gmail.com"
                className="social-icon group relative"
              >
                <div className="w-16 h-16 flex items-center justify-center pixel-border bg-card hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-primary group-hover:text-magic-glow transition-colors" />
                </div>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group relative"
              >
                <div className="w-16 h-16 flex items-center justify-center pixel-border bg-card hover:scale-110 transition-transform">
                  <Github className="w-8 h-8 text-primary group-hover:text-magic-glow transition-colors" />
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group relative"
              >
                <div className="w-16 h-16 flex items-center justify-center pixel-border bg-card hover:scale-110 transition-transform">
                  <Linkedin className="w-8 h-8 text-primary group-hover:text-magic-glow transition-colors" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
