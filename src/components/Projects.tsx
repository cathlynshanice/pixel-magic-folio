import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Code, Sparkles } from "lucide-react";
import project1 from "@/assets/Agrimarket - 4.png";
import project2 from "@/assets/Baik Bareng - 3 - new.png";
import project3 from "@/assets/Roomagine 2.png";
import project4 from "@/assets/Tanam Pintar - 5.png";
import project5 from "@/assets/VOID.png";

import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

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
      image: project1,
      title: "Agrimarket App",
      role: "Front-end Developer",
      description:
        "Agrimarket is a digital platform that connects farmers, distributors, and consumers directly to make the agricultural supply chain more efficient, transparent, and fair.",
      tech: ["React", "Firebase", "TailwindCSS", "Figma"],
      gradient: "from-mushroom-red to-mushroom-cap",
      github: "https://github.com/felissia/Agrimarket2.git",
    },
    {
      image: project2,
      title: "Baik Bareng App",
      description:
        "BaikBareng was built to restore trust in public assistance by using AI to detect irregularities and blockchain to ensure transparency",
      tech: ["N8N", "Typescript", "Supabase", "React", "Solidity", "Vite"],
      gradient: "from-cozy-purple to-cozy-lavender",
      github: "https://github.com/BaikBareng-id/BaikBareng-App.git",
    },
    {
      image: project3,
      title: "Roomagine",
      description:
        "Our team developed Roomagine to make room design more intuitive by merging AI-powered furniture placement with real shopping options",
      tech: ["Gemini", "React", "TailwindCSS", "N8N"],
      gradient: "from-forest-medium to-forest-deep",
      github: "https://github.com/clarissa-ad/roomagine.git",
    },
    {
      image: project4,
      title: "Tanam Pintar",
      description:
        "Tanam Pintar is an IoT-powered smart farming system we built to make indoor agriculture more efficient and sustainable.",
      tech: ["Roblox Studio", "Wokwi"],
      gradient: "from-magic-yellow to-magic-glow",
      github: "https://github.com/JustKalvin/smart-plan-project-iot",
    },
    {
      image: project5,
      title: "VOID",                                                   
      description:
        "VOID started from my curiosity about how technology can truly support people in growing their careers.",
      tech: ["Figma"],
      gradient: "from-cozy-pink to-secondary",
      figma:
        "https://drive.google.com/drive/u/2/folders/1P9TLb97qSbSfVYhB-aeXIiNRA0px-APA",
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
            My Projects
          </h2>
          <p className="font-pixel text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A little collection of projects I’ve built along the way.
          </p>
          <div className="w-24 h-1 bg-magic-glow mx-auto mt-6 magic-glow" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="project-card group cursor-pointer">
              <div className="relative h-full pixel-border bg-card hover:scale-105 transition-all duration-300">
                <div>
                  {/* Image */}
                  <img src={project?.image} alt="" />
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
        
                    <Button
                      onClick={() => window.open(project.github?project.github:project.figma, "_blank")}
            
                    >
                      <Code className="w-4 h-4" />
                      Code
                    </Button>
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
