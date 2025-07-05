import { User, Sparkle, Heart, Coffee } from "lucide-react";
import VerticalFadeCards from "./VerticalFadeCards";
import ProjectsCard from "./ProjectsCard";
import EducationCard from "./EducationCard";
import { ScrollArea } from "./ui/scroll-area";
import Skills from "@/pages/Skills";
import WhereIveWorked from "@/pages/WhereIveWorked";
import Contact from "@/pages/Contact";
import React from "react";
import ProfileCard from "./ProfileCard";

const AboutCard = () => (
  <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-2xl p-6 border border-border/50 backdrop-blur-sm shadow-2xl h-full flex flex-col">
    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
    <div className="relative z-10 flex flex-col h-full">
      <div className="mb-4 flex items-center gap-3 justify-center">
        <span className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
          <User className="w-7 h-7 text-primary" />
        </span>
        <h2 className="text-xl font-bold text-foreground">About Me</h2>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col justify-center">
        <div className="space-y-6 text-center mx-auto">
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

const MainContent = () => {
  return (
    <>
      {/* Mobile: About Me static, rest scrollable snap/fade */}
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
      <div className="w-full h-full flex sm:hidden flex-col items-center justify-center p-2">
        <div className="w-full max-w-full h-[520px] overflow-y-auto snap-y snap-mandatory flex flex-col scrollbar-hide">
          <div className="snap-start h-[520px] flex-shrink-0 fade-in-card"><ProfileCard /></div>
          <div className="snap-start h-[520px] flex-shrink-0 fade-in-card"><AboutCard /></div>
          <div className="snap-start h-[520px] flex-shrink-0 fade-in-card"><EducationCard /></div>
          <div className="snap-start h-[520px] flex-shrink-0 fade-in-card"><WhereIveWorked /></div>
          <div className="snap-start h-[520px] flex-shrink-0 fade-in-card"><ProjectsCard /></div>
          <div className="snap-start h-[520px] flex-shrink-0 fade-in-card"><Skills /></div>
          <div className="snap-start h-[520px] flex-shrink-0 fade-in-card"><Contact /></div>
        </div>
      </div>
      {/* Desktop: original ScrollArea/fade cards */}
      <div className="w-full h-full hidden sm:flex items-center justify-center p-4">
        <div className="w-full max-w-2xl h-full flex flex-col gap-8 items-center">
          <ScrollArea className="w-full max-h-[80vh]">
            <div className="flex flex-col gap-8">
              <VerticalFadeCards>
                {[
                  <AboutCard key="about" />, 
                  <EducationCard key="education" />, 
                  <WhereIveWorked key="whereiveworked" />, 
                  <ProjectsCard key="projects" />, 
                  <Skills key="skills" />,
                  <Contact key="contact" />
                ]}
              </VerticalFadeCards>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default MainContent;
