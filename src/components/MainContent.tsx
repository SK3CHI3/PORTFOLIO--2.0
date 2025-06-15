
import { User, MapPin, Briefcase, Code, Award, Zap, Globe, Coffee, Heart, Rocket } from "lucide-react";

const MainContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-xl opacity-50"></div>
          <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-3xl p-8 border border-border/50 backdrop-blur-sm shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            </div>

            <div className="space-y-6 text-center">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hi there! I'm <span className="text-primary font-bold text-xl">Omollo Victor</span>, a passionate 
                <span className="text-primary font-semibold"> Full-Stack Engineer</span> who loves crafting 
                <span className="text-primary font-semibold"> innovative digital solutions</span>. 
                Currently serving as an <span className="font-semibold text-foreground">AWS Cloud Practitioner</span> 
                and proud founder of <span className="text-primary font-bold text-xl">Brandy</span>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground">Full-Stack Development</h4>
                    <p className="text-sm text-muted-foreground">React, Next.js, TypeScript</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-xl bg-secondary/5 border border-secondary/20 hover:bg-secondary/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground">Cloud Solutions</h4>
                    <p className="text-sm text-muted-foreground">AWS, Scalable Architecture</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground">Entrepreneurship</h4>
                    <p className="text-sm text-muted-foreground">Founder of Brandy</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground">Based in Kenya</h4>
                    <p className="text-sm text-muted-foreground">Nairobi, Kenya 🇰🇪</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-6 border border-primary/20">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Heart className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">What Drives Me</h3>
                  <Coffee className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about building solutions that make a real difference. Whether it's 
                  developing scalable web applications, architecting cloud infrastructure, or leading 
                  innovative projects at Brandy, I thrive on turning complex challenges into elegant, 
                  user-friendly solutions. My goal is to bridge the gap between cutting-edge technology 
                  and practical business needs.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-4">
                {[
                  "React & Next.js",
                  "TypeScript",
                  "AWS Cloud",
                  "Node.js",
                  "Database Design",
                  "API Development",
                  "DevOps",
                  "Team Leadership"
                ].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
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
