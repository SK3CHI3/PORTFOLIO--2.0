
import { User } from "lucide-react";

const MainContent = () => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold mb-3 flex items-center">
          <User className="w-5 h-5 mr-2 text-muted-foreground" /> About
        </h2>
        <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
          <p>
            Full-Stack Engineer passionate about building scalable web applications and cloud solutions. 
            Currently working as an AWS Cloud Practitioner and founder of Brandy.
          </p>
          <p>
            I specialize in modern web technologies including React, Next.js, and TypeScript, 
            with expertise in cloud infrastructure and database design. Always excited to tackle 
            new challenges and create innovative solutions.
          </p>
          <p>
            Based in Nairobi, Kenya, I'm dedicated to contributing to the tech community through 
            open-source projects and knowledge sharing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
