import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Palette, Sparkles, Wand2, Zap, Star } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";
import tailwind_icon from "../assets/skills_icon/Tailwind CSS.png"
import next_icon from "../assets/skills_icon/Nextjs.png"
import python_icon from "../assets/skills_icon/Python.png"
import react_icon from "../assets/skills_icon/React.png"
import typescript_icon from "../assets/skills_icon/TypeScript.png"
import n8n_icon from "../assets/skills_icon/N8N.png"
import figma_icon from "../assets/skills_icon/FIGMA.png"
import numpy_icon from "../assets/skills_icon/Numpy.png"

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Profile animation
      gsap.from(profileRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out",
      });

      // Bio animation
      gsap.from(bioRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out",
      });

      // Skills stagger animation
      gsap.from(".skill-rune", {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top center+=100",
        },
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { name: "Figma", icon: figma_icon, color: "text-mushroom-red" },
    { name: "Tailwind", icon: tailwind_icon, color: "text-mushroom-red" },
    { name: "Next.js", icon: next_icon, color: "text-cozy-purple" },
    { name: "Python", icon: python_icon, color: "text-magic-yellow" },
    { name: "Numpy", icon: numpy_icon, color: "text-mushroom-red" },
    { name: "React", icon: react_icon, color: "text-cozy-lavender" },
    { name: "TypeScript", icon: typescript_icon, color: "text-forest-light" },
    { name: "N8N", icon: n8n_icon, color: "text-magic-glow" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-background to-muted overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-cozy-pink/30 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-6xl text-primary pixel-text-shadow mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-magic-glow mx-auto magic-glow" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Profile Image */}
          <div ref={profileRef} className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-magic-glow/30 blur-xl animate-pulse-glow" />
              <div className="relative pixel-border bg-card p-4">
                <img
                  src={profileAvatar}
                  alt="Milad"
                  className="w-full max-w-sm mx-auto"
                />
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-magic-glow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div ref={bioRef} className="space-y-6">
            <div className="pixel-border bg-card/80 backdrop-blur-sm p-8">
              <h3 className="font-pixel text-2xl md:text-3xl text-primary mb-4">
                Hey there, I’m Cathlyn Shanice
              </h3>
              <p className="font-pixel text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
                I’m a developer who loves exploring different areas of technology — from AI engineering and UI/UX design to full-stack development. I enjoy learning how things work and finding creative ways to make them better.

I’m currently studying Computer Science at BINUS University, where I’ve worked on projects involving AI, IoT, and web development. I’m passionate about building things that are useful, meaningful, and thoughtfully designed.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="mt-20">
          <h3 className="font-pixel text-3xl md:text-4xl text-center text-primary mb-12 pixel-text-shadow">
            Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-rune relative group cursor-pointer"
              >
                <div className="pixel-border bg-card p-6 text-center hover:scale-110 transition-transform duration-300">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-16 h-16 object-contain mx-auto mb-4" 
                  />
                  <p className="font-pixel text-sm text-foreground">
                    {skill.name}
                  </p>
                </div>
                {/* Hover glow */}
                <div className="absolute inset-0 bg-magic-glow/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
