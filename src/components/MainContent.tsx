import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import VerticalFadeCards from "./VerticalFadeCards";
import { User, Sparkle } from "lucide-react";
import React from "react";

const AboutCard = () => (
  <div className="w-full h-full flex flex-col animate-fade-in">
    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50 pointer-events-none"></div>
    <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-2xl p-6 border border-border/50 backdrop-blur-sm shadow-2xl h-full overflow-auto">
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
);

const ExperienceCard = () => (
  <div className="w-full h-full flex flex-col animate-fade-in">
    <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/10 rounded-2xl blur-xl opacity-40 pointer-events-none"></div>
    <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-2xl p-6 border border-border/50 backdrop-blur-sm shadow-2xl h-full overflow-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl mb-3">
          <Sparkle className="w-6 h-6 text-secondary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Where I’ve Worked</h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto"></div>
      </div>
      <div className="space-y-6 text-left">
        {/* Tann Man Gandhi Foundation */}
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">🛡️ Volunteer Frontend Developer</span>
            <span className="text-xs text-muted-foreground">Tann Man Gandhi Foundation</span>
            <span className="text-xs text-muted-foreground">Mar 2025 – Present</span>
          </div>
          <ul className="list-disc ml-6 mt-1 text-sm text-muted-foreground space-y-1">
            <li>Built responsive frontend components for peace education and youth empowerment campaigns</li>
            <li>Collaborated remotely with a global dev team</li>
            <li>Focused on accessibility, clean UI, and performance</li>
          </ul>
        </div>
        {/* MMU E-learning Rebuild */}
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">🧑🏽‍🏫 Lead Developer – MMU E-learning Rebuild</span>
            <span className="text-xs text-muted-foreground">Feb 2025 – Jun 2025</span>
          </div>
          <ul className="list-disc ml-6 mt-1 text-sm text-muted-foreground space-y-1">
            <li>Fully redesigned MMU’s broken e-learning portal using Supabase + React</li>
            <li>Integrated faculty-based login, lecturer/student roles, and secure auth</li>
            <li>Hosted on Netlify, optimized for performance & low maintenance</li>
          </ul>
        </div>
        {/* Brandy */}
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">🎨 Founder & Developer – Brandy</span>
            <span className="text-xs text-muted-foreground">Jan 2025 – Present</span>
          </div>
          <ul className="list-disc ml-6 mt-1 text-sm text-muted-foreground space-y-1">
            <li>Launched a working e-commerce MVP for artists to sell custom merch</li>
            <li>Enabled AI-powered quote requests + 3-day fulfillment model</li>
            <li>Handles user onboarding, orders, and refund policy logic via Supabase</li>
          </ul>
        </div>
        {/* Universal Resource Hub */}
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">🌐 Universal Resource Hub – Dev & Architect</span>
            <span className="text-xs text-muted-foreground">2024 – Present</span>
          </div>
          <ul className="list-disc ml-6 mt-1 text-sm text-muted-foreground space-y-1">
            <li>Built a central platform aggregating dev resources</li>
            <li>Uses APIs to auto-fetch & list latest free courses, docs, tools</li>
            <li>Backend + frontend fully handled, deployed on Netlify</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const MainContent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <VerticalFadeCards>
        <Tabs defaultValue="about" className="w-full h-full">
          <TabsList className="w-full flex mb-4 bg-background/50 rounded-lg shadow-sm justify-center gap-2">
            <TabsTrigger value="about" className="flex items-center gap-2 px-4 py-2 data-[state=active]:bg-primary/10 rounded-md select-none transition-all">
              <User className="w-4 h-4" /> About
            </TabsTrigger>
            <TabsTrigger value="exp" className="flex items-center gap-2 px-4 py-2 data-[state=active]:bg-primary/10 rounded-md select-none transition-all">
              <Sparkle className="w-4 h-4" /> Experience
            </TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="w-full h-[440px]">
            <AboutCard />
          </TabsContent>
          <TabsContent value="exp" className="w-full h-[440px]">
            <ExperienceCard />
          </TabsContent>
        </Tabs>
      </VerticalFadeCards>
    </div>
  );
};

export default MainContent;
