
import { User, MapPin, Briefcase, Code, Award, Zap, Globe, Coffee, Heart, Rocket } from "lucide-react";

const MainContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-full flex items-center">
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

            <div className="space-y-4 text-center">
              <p className="text-base leading-relaxed text-muted-foreground">
                Hi there! I'm <span className="text-primary font-bold">Omollo Victor</span>, a passionate 
                <span className="text-primary font-semibold"> Full-Stack Engineer</span> who loves crafting 
                <span className="text-primary font-semibold"> innovative digital solutions</span>. 
                Currently serving as an <span className="font-semibold text-foreground">AWS Cloud Practitioner</span> 
                and proud founder of <span className="text-primary font-bold">Brandy</span>.
              </p>

              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="flex items-center space-x-2 p-3 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Code className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground text-sm">Full-Stack</h4>
                    <p className="text-xs text-muted-foreground">React, Next.js</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 p-3 rounded-lg bg-secondary/5 border border-secondary/20 hover:bg-secondary/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground text-sm">Cloud Solutions</h4>
                    <p className="text-xs text-muted-foreground">AWS</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl p-4 border border-primary/20">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Heart className="w-4 h-4 text-primary" />
                  <h3 className="text-base font-semibold text-foreground">What Drives Me</h3>
                  <Coffee className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I'm passionate about building solutions that make a real difference. Whether it's 
                  developing scalable web applications, architecting cloud infrastructure, or leading 
                  innovative projects at Brandy, I thrive on turning complex challenges into elegant solutions.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "React & Next.js",
                  "TypeScript",
                  "AWS Cloud",
                  "Node.js",
                  "API Development",
                  "Team Leadership"
                ].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
