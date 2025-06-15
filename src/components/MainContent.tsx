
import { User, MapPin, Briefcase, Code, Award, Zap, Globe } from "lucide-react";

const MainContent = () => {
  return (
    <div className="space-y-8">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-25"></div>
        <div className="relative bg-card rounded-xl p-6 border border-border/50">
          <h2 className="text-3xl font-bold mb-6 flex items-center text-foreground">
            <User className="w-8 h-8 mr-4 text-primary" /> 
            About Me
          </h2>
          <div className="space-y-5 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Passionate Full-Stack Engineer with expertise in building <span className="text-primary font-semibold">scalable web applications</span> and 
              <span className="text-primary font-semibold"> cloud solutions</span>. Currently serving as an AWS Cloud Practitioner 
              and founder of <span className="text-primary font-bold text-xl">Brandy</span>, driving innovation in the tech space.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in cutting-edge technologies including <span className="font-semibold text-foreground bg-primary/10 px-2 py-1 rounded">React</span>, 
              <span className="font-semibold text-foreground bg-primary/10 px-2 py-1 rounded mx-1">Next.js</span>, and 
              <span className="font-semibold text-foreground bg-primary/10 px-2 py-1 rounded">TypeScript</span>, 
              with deep expertise in cloud infrastructure and advanced database design.
            </p>
            <div className="flex items-center space-x-2 text-base bg-secondary/30 p-3 rounded-lg">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Based in Nairobi, Kenya 🇰🇪</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <Briefcase className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-2">Current Role</h3>
            <p className="text-sm text-muted-foreground">AWS Cloud Practitioner</p>
            <p className="text-xs text-primary font-medium mt-1">Enterprise Solutions</p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 p-6 border border-secondary/30 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <Code className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-2">Specialization</h3>
            <p className="text-sm text-muted-foreground">Full-Stack Development</p>
            <p className="text-xs text-primary font-medium mt-1">Modern Web Technologies</p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 p-6 border border-accent/30 hover:border-accent/50 transition-all duration-300 hover:shadow-lg md:col-span-2 lg:col-span-1">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <Globe className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-bold text-lg mb-2">Impact</h3>
            <p className="text-sm text-muted-foreground">Global Reach</p>
            <p className="text-xs text-primary font-medium mt-1">Scalable Solutions</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl blur opacity-30"></div>
        <div className="relative bg-card rounded-xl p-6 border border-border/50">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-primary" />
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
                className="text-center p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all duration-200 border border-border/30 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
