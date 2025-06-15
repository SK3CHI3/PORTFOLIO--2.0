
import React, { useState } from "react";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [current, setCurrent] = useState<"about" | "projects">("about");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="mb-4 flex gap-2">
        <Button
          variant={current === "about" ? "default" : "outline"}
          onClick={() => setCurrent("about")}
        >
          About
        </Button>
        <Button
          variant={current === "projects" ? "default" : "outline"}
          onClick={() => setCurrent("projects")}
        >
          Projects
        </Button>
      </div>
      <div className="relative w-full max-w-xl min-h-[26rem] flex items-center justify-center">
        <div
          className={`absolute w-full transition-opacity duration-400 ${current === "about" ? "opacity-100 animate-fade-in" : "opacity-0 pointer-events-none animate-fade-out"}`}
          style={{ zIndex: current === "about" ? 10 : 0 }}
        >
          <AboutSection />
        </div>
        <div
          className={`absolute w-full transition-opacity duration-400 ${current === "projects" ? "opacity-100 animate-fade-in" : "opacity-0 pointer-events-none animate-fade-out"}`}
          style={{ zIndex: current === "projects" ? 10 : 0 }}
        >
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
};

export default Index;

