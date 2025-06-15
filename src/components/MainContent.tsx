
import { User, MapPin, Briefcase, Code, Award, Zap, Globe } from "lucide-react";

const MainContent = () => {
  return (
    <div className="w-full max-w-4xl">
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-30"></div>
        <div className="relative bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 border border-border/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center text-foreground">
            <User className="w-6 h-6 mr-3 text-primary" /> 
            About Me
          </h2>
          <div className="space-y-4 text-muted-foreground text-center">
            <p className="text-base leading-relaxed">
              Passionate Full-Stack Engineer with expertise in building <span className="text-primary font-semibold">scalable web applications</span> and 
              <span className="text-primary font-semibold"> cloud solutions</span>. Currently serving as an AWS Cloud Practitioner 
              and founder of <span className="text-primary font-bold text-lg">Brandy</span>, driving innovation in the tech space.
            </p>
            <p className="text-base leading-relaxed">
              I specialize in cutting-edge technologies including <span className="font-semibold text-foreground bg-primary/10 px-2 py-1 rounded-lg">React</span>, 
              <span className="font-semibold text-foreground bg-primary/10 px-2 py-1 rounded-lg mx-2">Next.js</span>, and 
              <span className="font-semibold text-foreground bg-primary/10 px-2 py-1 rounded-lg">TypeScript</span>, 
              with deep expertise in cloud infrastructure and advanced database design.
            </p>
            <div className="flex items-center justify-center space-x-3 text-sm bg-secondary/30 p-3 rounded-xl">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium">Based in Nairobi, Kenya 🇰🇪</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative text-center">
            <Briefcase className="w-6 h-6 text-primary mb-2 mx-auto" />
            <h3 className="font-bold text-sm mb-1">Current Role</h3>
            <p className="text-xs text-muted-foreground">AWS Cloud Practitioner</p>
            <p className="text-xs text-primary font-medium mt-1">Enterprise Solutions</p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 p-4 border border-secondary/30 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative text-center">
            <Code className="w-6 h-6 text-primary mb-2 mx-auto" />
            <h3 className="font-bold text-sm mb-1">Specialization</h3>
            <p className="text-xs text-muted-foreground">Full-Stack Development</p>
            <p className="text-xs text-primary font-medium mt-1">Modern Web Technologies</p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 p-4 border border-accent/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative text-center">
            <Globe className="w-6 h-6 text-primary mb-2 mx-auto" />
            <h3 className="font-bold text-sm mb-1">Impact</h3>
            <p className="text-xs text-muted-foreground">Global Reach</p>
            <p className="text-xs text-primary font-medium mt-1">Scalable Solutions</p>
          </div>
        </div>
      </div>

      <div className="relative mt-6">
        <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl blur opacity-30"></div>
        <div className="relative bg-gradient-to-br from-card to-card/50 rounded-2xl p-6 border border-border/50 backdrop-blur-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center justify-center">
            <Zap className="w-5 h-5 mr-3 text-primary" />
            Core Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "React & Next.js",
              "TypeScript",
              "AWS Cloud",
              "Database Design",
              "API Development",
              "DevOps",
              "UI/UX Design", 
              "Team Leadership"
            ].map((skill, index) => (
              <div 
                key={skill}
                className="text-center p-3 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-all duration-200 border border-border/30 hover:border-primary/30 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-xs font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
