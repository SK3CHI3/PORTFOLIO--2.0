import { User, Sparkle, Heart, Coffee } from "lucide-react";
import AnimatedCardCarousel from "./AnimatedCardCarousel";
import ProjectsCard from "./ProjectsCard";
import EducationCard from "./EducationCard";
import Skills from "@/pages/Skills";
import WhereIveWorked from "@/pages/WhereIveWorked";
import Contact from "@/pages/Contact";
import React from "react";
import ProfileCard from "./ProfileCard";

const AboutCard = () => (
  <div className="relative w-full">
    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
    <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-2xl p-6 border border-border/50 backdrop-blur-sm shadow-2xl h-[520px] flex flex-col">
      <div className="mb-4 flex items-center gap-3 justify-center">
        <span className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
          <User className="w-7 h-7 text-primary" />
        </span>
        <h2 className="text-xl font-bold text-foreground">About Me</h2>
      </div>
      <div className="w-full flex-1 pr-2 overflow-y-auto scrollbar-hide flex items-center">
        <div className="space-y-6 text-center w-full">
          <p className="text-base leading-relaxed text-foreground">
            I'm Omollo Victor — <span className="text-primary font-bold">Full Stack Engineer</span> & <span className="text-primary font-bold">AWS Cloud Practitioner</span>. I build secure, scalable systems that solve real-world problems and drive real impact.
          </p>
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl p-4 border border-primary/20">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Heart className="w-4 h-4 text-primary" />
              <h3 className="text-base font-semibold text-foreground">What Drives Me</h3>
              <Coffee className="w-4 h-4 text-primary" />
            </div>
            <p className="text-sm text-foreground leading-relaxed">
              Solving real problems, pushing boundaries, and building tech that actually matters. I don't just code — I Engineer Solutions Through Tech.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="block w-full text-center text-base font-semibold text-primary mt-2">
              Not Satisfied..?<br />Scroll down — the future's already loading.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Fade-in animation for cards
const fadeInStyle = `
  @keyframes fadeInCard {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-in-card {
    animation: fadeInCard 0.6s cubic-bezier(0.4,0,0.2,1);
  }
`;

const MainContent: React.FC = () => {
  // All cards for the carousel
  const allCards = [
    <ProfileCard key="profile" />,
    <AboutCard key="about" />, 
    <EducationCard key="education" />, 
    <WhereIveWorked key="whereiveworked" />, 
    <ProjectsCard key="projects" />, 
    <Skills key="skills" />,
    <Contact key="contact" />
  ];

  return (
    <>
      <style>{fadeInStyle}</style>
      <style>{`
        .scrollbar-hide {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}</style>
      
      {/* Mobile: Animated Carousel */}
      <div className="w-full h-full flex sm:hidden">
        <div className="w-full h-screen px-4 py-8">
          <AnimatedCardCarousel cards={allCards} autoPlayInterval={6000} />
        </div>
      </div>
      
      {/* Desktop: Animated Carousel */}
      <div className="w-full h-full hidden sm:flex items-center justify-center p-4">
        <div className="w-full max-w-2xl h-full">
          <AnimatedCardCarousel cards={allCards} autoPlayInterval={7000} />
        </div>
      </div>
    </>
  );
};

export default MainContent;
