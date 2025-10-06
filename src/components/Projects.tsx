import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Code, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Enchanted Portfolio",
      description:
        "A magical pixel art portfolio showcasing the art of digital craftsmanship with GSAP animations",
      tech: ["React", "GSAP", "Tailwind"],
      gradient: "from-mushroom-red to-mushroom-cap",
    },
    {
      title: "Mystic E-Commerce",
      description:
        "An immersive shopping experience with parallax scrolling and magical product reveals",
      tech: ["Next.js", "Stripe", "Framer Motion"],
      gradient: "from-cozy-purple to-cozy-lavender",
    },
    {
      title: "Forest Dashboard",
      description:
        "A nature-inspired admin panel with real-time data visualization and smooth transitions",
      tech: ["Vue", "D3.js", "Node.js"],
      gradient: "from-forest-medium to-forest-deep",
    },
    {
      title: "Pixel Art Gallery",
      description:
        "An interactive gallery celebrating retro aesthetics with custom pixel art filters",
      tech: ["React", "Canvas API", "WebGL"],
      gradient: "from-magic-yellow to-magic-glow",
    },
    {
      title: "Cozy Blog Platform",
      description:
        "A warm and inviting blogging platform with markdown support and themed layouts",
      tech: ["Gatsby", "MDX", "Sanity"],
      gradient: "from-cozy-pink to-secondary",
    },
    {
      title: "Spell Tracker App",
      description:
        "A whimsical task management app with magical animations and gamification elements",
      tech: ["React Native", "Firebase", "Redux"],
      gradient: "from-forest-light to-cozy-lavender",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-muted to-background overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 10px,
              hsl(var(--forest-deep)) 10px,
              hsl(var(--forest-deep)) 11px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 10px,
              hsl(var(--forest-deep)) 10px,
              hsl(var(--forest-deep)) 11px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-6xl text-primary pixel-text-shadow mb-4">
            Magical Projects
          </h2>
          <p className="font-pixel text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of enchanted digital experiences crafted with care
          </p>
          <div className="w-24 h-1 bg-magic-glow mx-auto mt-6 magic-glow" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group cursor-pointer"
            >
              <div className="relative h-full pixel-border bg-card hover:scale-105 transition-all duration-300">
                {/* Gradient Header */}
                <div
                  className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full animate-sparkle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 1.5}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-pixel text-xl md:text-2xl text-primary mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-pixel text-sm text-foreground/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground font-pixel text-xs border-2 border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-pixel text-sm hover:bg-primary/90 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Behold
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary font-pixel text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Code className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>

                {/* Corner decoration */}
                <Sparkles className="absolute top-3 right-3 w-5 h-5 text-magic-glow opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
