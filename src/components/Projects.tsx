import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Code, Sparkles } from "lucide-react";
import agrimarket from "@/assets/Agrimarket - 4.png";
import baikbareng from "@/assets/Baik Bareng - 3 - new.png";
import roomagine from "@/assets/Roomagine 2.png";
import tanampintar from "@/assets/Tanam Pintar - 5.png";
import void_ from "@/assets/VOID.png";
import drowsiness from "@/assets/Drowsiness Thumbnail.jpeg";
import unknown_pic from "@/assets/Unknown.png"
import research_thumbnail from "@/assets/Research Thumbnail.png"
import document_shredder from "@/assets/Document Shredder Thumbnail.png"
import potafull_thumbnail from "@/assets/Potaful Thumbnail.png"


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
      image: document_shredder,
      title: "Document Shredder Reconstruction",
      role: "AI Engineer",
      description:
        "Deep learning–driven shredded document reconstruction using CNN feature extraction and fragment similarity analysis.",
      tech: ["Python", "PyTorch", "OpenCV", "NumPy", "Matplotlib", "Google Colab"],
      gradient: "from-mushroom-red to-mushroom-cap",
      documentation: "-",
      deploy : "https://codename-kintsugi.streamlit.app/"
    },
    {
      image: research_thumbnail,
      title: "Research: Hybrid Bit-Precision Quantization for Summarization and Sentiment Analysis using Trans-former Models",
      role: "Researcher",
      description:
        "A hybrid quantization framework that dynamically applies 1-bit, 4-bit, or 8-bit precision to transformer models for efficient summarization and sentiment analysis while maintaining performance.",
      tech: ["Python", "PyTorch", "BitsAndBytes", "Open-Source Transformer Models (BERT/RoBERTa)", "Kaggle Datasets", "Google Colab"],
      gradient: "from-mushroom-red to-mushroom-cap",
      documentation: "https://colab.research.google.com/drive/1E3t6dv82PBe1ijFX7rSzTltEHaAO3DX-?usp=sharing",
      deploy : "https://docs.google.com/document/d/13xO0TKGM1W0dyjVdkgsHrQD6JURnYH3W/edit?usp=sharing&ouid=107307951303576389885&rtpof=true&sd=true"
    },
    {
      image: drowsiness,
      title: "Drowsiness Detection",
      role: "AI Engineer",
      description:
        "A deep learning–based system that detects driver drowsiness using facial features and real-time video analysis.",
      tech: ["Python", "TensorFlow", "OpenCV", "CNN", "Google Colab"],
      gradient: "from-mushroom-red to-mushroom-cap",
      documentation: "https://github.com/clarissa-ad/Drowsiness-Detection-Streamlit",
      deploy : "-"
    },
    {
      image: potafull_thumbnail,
      title: "Potafull",
      role: "UI/UX Designer",
      description:
        "A smart pot system with 8-in-1 sensors that monitors plant health through a connected mobile app.",
      tech: ["IoT Sensors", "ESP32", "Python", "Mobile App", "Cloud Database"],
      gradient: "from-mushroom-red to-mushroom-cap",
      documentation: "https://www.figma.com/design/mNK8rEp0EuZu7aZPM2R05e/potaful?node-id=0-1&t=VXTGRcayIWscUHob-1",
      deploy : "-"
    },
    {
      image: agrimarket,
      title: "Agrimarket App",
      role: "Front-end Developer",
      description:
        "Agrimarket is a digital platform that connects farmers, distributors, and consumers directly to make the agricultural supply chain more efficient, transparent, and fair.",
      tech: ["React", "Firebase", "TailwindCSS", "Figma"],
      gradient: "from-mushroom-red to-mushroom-cap",
      documentation: "https://github.com/felissia/Agrimarket2.git",
      deploy: "-"
    },
    {
      image: baikbareng,
      title: "Baik Bareng App",
      role : "AI Engineer",
      description:
        "BaikBareng was built to restore trust in public assistance by using AI to detect irregularities and blockchain to ensure transparency",
      tech: ["N8N", "Typescript", "Supabase", "React", "Solidity", "Vite"],
      gradient: "from-cozy-purple to-cozy-lavender",
      documentation: "https://github.com/BaikBareng-id/BaikBareng-App.git",
      deploy : "-"
    },
    {
      image: roomagine,
      title: "Roomagine",
      role : "Front-End Developer",
      description:
        "Our team developed Roomagine to make room design more intuitive by merging AI-powered furniture placement with real shopping options",
      tech: ["Gemini", "React", "TailwindCSS", "N8N"],
      gradient: "from-forest-medium to-forest-deep",
      documentation: "https://github.com/clarissa-ad/roomagine.git",
      deploy : "-"
    },
    {
      image: tanampintar,
      title: "Tanam Pintar",
      role: "UI/UX Designer, AI Engineer",
      description:
        "Tanam Pintar is an IoT-powered smart farming system we built to make indoor agriculture more efficient and sustainable.",
      tech: ["Roblox Studio", "Wokwi"],
      gradient: "from-magic-yellow to-magic-glow",
      documentation: "https://github.com/JustKalvin/smart-plan-project-iot",
      deploy : "-"
    },
    {
      image: void_,
      title: "VOID",     
      role: "UI/UX Designer",                                              
      description:
        "VOID started from my curiosity about how technology can truly support people in growing their careers.",
      tech: ["Figma"],
      gradient: "from-cozy-pink to-secondary",
      documentation: "https://www.figma.com/design/6P9EZJzS4VQuL4vl9FPsZo/High-Fidelity-Prototype-ITCC?node-id=0-1&t=R85mtuoeAjs9h6IF-1",
      deploy: "-"
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
                  <p className="font-pixel text-sm text-primary mb-3 group-hover:text-accent transition-colors">
                    Role: {project.role}
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
                    {project.deploy !== '-' ? (
                      <button onClick={() => window.open(project.deploy, "_blank")} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-pixel text-sm hover:bg-primary/90 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        App
                      </button>
                    ) : (
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-pixel text-sm hover:bg-primary/90 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        App
                      </button>
                    )}

                    {project.documentation !== '-' ? (
                      <button onClick={() => window.open(project.documentation, "_blank")} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-pixel text-sm hover:bg-primary/90 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Documentation
                      </button>
                    ) : (
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-pixel text-sm hover:bg-primary/90 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Documentation
                      </button>
                    )}
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
