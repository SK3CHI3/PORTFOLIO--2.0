import { User, Heart, Coffee } from "lucide-react";
import ScrollFadePages from "./ScrollFadePages";
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
  const pages = [
    <div className="px-4 flex items-center justify-center h-full"><div className="w-full max-w-xl"><ProfileCard /></div></div>,
    <div className="px-4 flex items-center justify-center h-full"><div className="w-full max-w-xl"><AboutCard /></div></div>,
    <div className="px-4 flex items-center justify-center h-full"><div className="w-full max-w-xl"><EducationCard /></div></div>,
    <div className="px-4 flex items-center justify-center h-full"><div className="w-full max-w-xl"><WhereIveWorked /></div></div>,
    <div className="px-4 flex items-center justify-center h-full"><div className="w-full max-w-xl"><ProjectsCard /></div></div>,
    <div className="px-4 flex items-center justify-center h-full"><div className="w-full max-w-xl"><Skills /></div></div>,
    <div className="px-4 flex items-center justify-center h-full"><div className="w-full max-w-xl"><Contact /></div></div>
  ];

  return (
    <>
      <style>{fadeInStyle}</style>
      {/* Mobile and Desktop: Unified fade transition system */}
      <div className="w-full h-full">
        <ScrollFadePages className="w-full h-full">
          {pages}
        </ScrollFadePages>
      </div>
    </>
  );
};

export default MainContent;
