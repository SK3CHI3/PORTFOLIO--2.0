import { User, Sparkle, Heart, Coffee } from "lucide-react";
import VerticalFadeCards from "./VerticalFadeCards";
import ProjectsCard from "./ProjectsCard";
import EducationCard from "./EducationCard";
import { ScrollArea } from "./ui/scroll-area";
import Skills from "@/pages/Skills";
import WhereIveWorked from "@/pages/WhereIveWorked";
import Contact from "@/pages/Contact";

const AboutCard = () => (
  <div className="relative w-full">
    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
    <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-2xl p-6 border border-border/50 backdrop-blur-sm shadow-2xl h-full">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
          <User className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">About Me</h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
      </div>
      <div className="space-y-6 text-center">
        <p className="text-base leading-relaxed text-foreground">
          I'm Omollo Victor — <span className="text-primary font-bold">Full Stack Engineer</span> & <span className="text-primary font-bold">AWS Cloud Practitioner</span>. I'm all about building secure, scalable systems that solve real-world problems and drive real impact.
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
);

const MainContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-full flex flex-col gap-8 items-center">
        {/* Card scroll lock: scroll through cards first, then overflow page */}
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
  );
};

export default MainContent;
