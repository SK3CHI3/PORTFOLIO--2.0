import { User, Mail, Github, Linkedin, Twitter, GraduationCap, BookOpen, Sparkle, Heart, Coffee, Send } from "lucide-react";

const MainContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-full flex items-center">
        <div className="relative w-full">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
          <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-2xl p-6 border border-border/50 backdrop-blur-sm shadow-2xl h-full overflow-y-auto">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">About Me</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            </div>

            <div className="space-y-6 text-center">
              <p className="text-base leading-relaxed text-muted-foreground">
                Hi there! I'm <span className="text-primary font-bold">Omollo Victor</span>, a passionate 
                <span className="text-primary font-semibold"> Full-Stack Engineer</span> who loves crafting 
                <span className="text-primary font-semibold"> innovative digital solutions</span>. 
                Currently serving as an <span className="font-semibold text-foreground">AWS Cloud Practitioner</span> 
                and proud founder of <span className="text-primary font-bold">Brandy</span>.
              </p>

              {/* Education & Training */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-left space-y-3">
                <div className="flex items-center mb-2 space-x-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Education & Training</span>
                </div>
                <ul className="ml-2 list-disc text-sm space-y-1 text-muted-foreground">
                  <li><strong>Software Engineering</strong> – PLP Africa</li>
                  <li><strong>AWS Certified Cloud Practitioner</strong> – Completed</li>
                  <li><strong>Currently learning:</strong> Cybersecurity (Hack The Box), APIs, Web Requests</li>
                </ul>
              </div>

              {/* What Drives Me / Profile */}
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

              {/* Skills badges */}
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

              {/* Socials & Contacts */}
              <div className="mt-6 text-left bg-secondary/10 border border-secondary/30 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Socials & Contacts</span>
                </div>
                <div className="flex flex-wrap gap-2 items-center text-sm">
                  <div className="flex items-center gap-2 mr-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground break-all">omollovictorotieno58@gmail.com</span>
                  </div>
                  <a 
                    href="https://github.com/SK3CHI3" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" /><span>GitHub</span> – SK3CHI3
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/omollo-victor" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /><span>LinkedIn</span> – Omollo Victor
                  </a>
                  <a 
                    href="https://twitter.com/sk3chie" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <Twitter className="w-4 h-4" /><span>Twitter</span> – @sk3chie
                  </a>
                  <a 
                    href="https://t.me/TechTinker" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <Send className="w-4 h-4" /><span>Telegram</span> – @TechTinker (6.9k+ subs)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
