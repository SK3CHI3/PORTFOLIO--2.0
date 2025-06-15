
import { User, MapPin, Briefcase, Code, Award, Zap, Globe } from "lucide-react";

const MainContent = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <div className="relative mb-8">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-30"></div>
          <div className="relative bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-8 flex items-center text-foreground">
              <User className="w-10 h-10 mr-6 text-primary" /> 
              About Me
            </h2>
            <div className="space-y-8 text-muted-foreground">
              <p className="text-xl leading-relaxed">
                Passionate Full-Stack Engineer with expertise in building <span className="text-primary font-semibold">scalable web applications</span> and 
                <span className="text-primary font-semibold"> cloud solutions</span>. Currently serving as an AWS Cloud Practitioner 
                and founder of <span className="text-primary font-bold text-2xl">Brandy</span>, driving innovation in the tech space.
              </p>
              <p className="text-xl leading-relaxed">
                I specialize in cutting-edge technologies including <span className="font-semibold text-foreground bg-primary/10 px-3 py-2 rounded-lg">React</span>, 
                <span className="font-semibold text-foreground bg-primary/10 px-3 py-2 rounded-lg mx-2">Next.js</span>, and 
                <span className="font-semibold text-foreground bg-primary/10 px-3 py-2 rounded-lg">TypeScript</span>, 
                with deep expertise in cloud infrastructure and advanced database design.
              </p>
              <div className="flex items-center space-x-3 text-lg bg-secondary/30 p-4 rounded-xl">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="font-medium">Based in Nairobi, Kenya 🇰🇪</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <Briefcase className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Current Role</h3>
              <p className="text-sm text-muted-foreground">AWS Cloud Practitioner</p>
              <p className="text-xs text-primary font-medium mt-1">Enterprise Solutions</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 p-6 border border-secondary/30 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <Code className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Specialization</h3>
              <p className="text-sm text-muted-foreground">Full-Stack Development</p>
              <p className="text-xs text-primary font-medium mt-1">Modern Web Technologies</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 p-6 border border-accent/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Impact</h3>
              <p className="text-sm text-muted-foreground">Global Reach</p>
              <p className="text-xs text-primary font-medium mt-1">Scalable Solutions</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl blur opacity-30"></div>
          <div className="relative bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Zap className="w-8 h-8 mr-4 text-primary" />
              Core Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  className="text-center p-4 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-all duration-200 border border-border/30 hover:border-primary/30 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
