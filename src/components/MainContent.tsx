
import { User, MapPin, Briefcase, Code } from "lucide-react";

const MainContent = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center text-foreground">
          <User className="w-6 h-6 mr-3 text-primary" /> About Me
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p className="text-base leading-relaxed">
            Full-Stack Engineer passionate about building <span className="text-primary font-medium">scalable web applications</span> and 
            <span className="text-primary font-medium"> cloud solutions</span>. Currently working as an AWS Cloud Practitioner 
            and founder of <span className="text-primary font-semibold">Brandy</span>.
          </p>
          <p className="text-base leading-relaxed">
            I specialize in modern web technologies including <span className="font-medium text-foreground">React</span>, 
            <span className="font-medium text-foreground"> Next.js</span>, and <span className="font-medium text-foreground">TypeScript</span>, 
            with expertise in cloud infrastructure and database design.
          </p>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Based in Nairobi, Kenya</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <Briefcase className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium text-sm">Current Role</p>
              <p className="text-xs text-muted-foreground">AWS Cloud Practitioner</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
            <Code className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium text-sm">Focus</p>
              <p className="text-xs text-muted-foreground">Full-Stack Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
