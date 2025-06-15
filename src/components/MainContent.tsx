
import TechBadge from "./TechBadge";
import SocialLink from "./SocialLink";
import { Globe, GraduationCap, Building, Code, Wand2, Briefcase } from "lucide-react";
import { Instagram, Linkedin, X, Send, Youtube, Github, Twitch } from "lucide-react";
import { TikTokIcon } from './TikTokIcon';

const projects = [
  {
    icon: <Globe className="w-4 h-4 text-muted-foreground" />,
    name: "Universal Resource Hub",
    description: "Free learning resources",
    link: "#",
  },
  {
    icon: <GraduationCap className="w-4 h-4 text-muted-foreground" />,
    name: "MMU LMS Rebuild",
    description: "Modern e-learning platform for my University.",
    link: "#",
  },
  {
    icon: <Building className="w-4 h-4 text-muted-foreground" />,
    name: "Government Projects Tracker",
    description: "Transparency for national projects",
    link: "#",
  },
  {
    icon: <Wand2 className="w-4 h-4 text-muted-foreground" />,
    name: "BrandyShop",
    description: "Artist-led e-commerce",
    link: "#",
  },
  {
    icon: <Briefcase className="w-4 h-4 text-muted-foreground" />,
    name: "TechTinker",
    description: "Tech tutorials hub",
    link: "#",
  },
];

const techStack = [
  "JavaScript", "TypeScript", "Python", "PostgreSQL",
  "Next.js", "React", "TailwindCSS", "Figma",
  "Supabase", "Firebase", "AWS", "Docker",
  "Vercel", "GitHub", "Linux", "VSCode"
];

const socials = [
    { name: 'Instagram', icon: <Instagram className="w-4 h-4"/>, url: '#', color: 'bg-pink-500' },
    { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4"/>, url: '#', color: 'bg-sky-600' },
    { name: 'X', icon: <X className="w-4 h-4" />, url: '#', color: 'bg-black', textColor: 'text-white' },
    { name: 'TikTok', icon: <TikTokIcon className="w-4 h-4" />, url: '#', color: 'bg-black', textColor: 'text-white' },
    { name: 'Telegram', icon: <Send className="w-4 h-4"/>, url: '#', color: 'bg-sky-500' },
];

const MainContent = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">👋 Hey, I'm SK3CHIE</h2>
        <p className="text-base text-muted-foreground">
          Full-Stack Engineer | AWS Cloud Practitioner | Founder - <a href="#" className="text-primary hover:underline">Brandy</a>
        </p>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-3 flex items-center">
            <Wand2 className="w-4 h-4 mr-2 text-muted-foreground" /> Currently Building
        </h2>
        <div className="space-y-3">
          {projects.map((project) => (
            <div key={project.name} className="flex items-start space-x-3 group">
              <div>{project.icon}</div>
              <div>
                <a href={project.link} className="font-semibold text-sm text-primary hover:underline">{project.name}</a>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-bold mb-3 flex items-center">
            <Code className="w-4 h-4 mr-2 text-muted-foreground" /> Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-3 flex items-center">
            <Globe className="w-4 h-4 mr-2 text-muted-foreground" /> Socials
        </h2>
        <div className="flex flex-wrap gap-3">
          {socials.map((social) => (
            <SocialLink key={social.name} {...social} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
