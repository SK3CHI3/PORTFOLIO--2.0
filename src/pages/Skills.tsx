import TechBadge from "@/components/TechBadge";
import { Code, Layers, Cloud, Sparkles, Terminal, Wrench } from "lucide-react";

const essentials = {
  "Frontend": ["React", "Next.js", "Tailwind CSS"],
  "Backend": ["Supabase", "Firebase"],
  "Database": ["PostgreSQL", "Firestore"],
  "Cloud": ["AWS (Certified)", "Netlify"],
  "Design": ["Figma", "Wireframing"],
  "AI/ML": ["HEX AI", "AI Agent Deployment"],
};

const languages = [
  { name: "TypeScript", icon: <Code className="w-4 h-4 mr-1 text-blue-500" /> },
  { name: "JavaScript", icon: <Code className="w-4 h-4 mr-1 text-yellow-400" /> },
  { name: "Python", icon: <Code className="w-4 h-4 mr-1 text-green-500" /> },
  { name: "SQL", icon: <Code className="w-4 h-4 mr-1 text-indigo-400" /> },
  { name: "HTML/CSS", icon: <Code className="w-4 h-4 mr-1 text-pink-400" /> },
];

const tools = [
  { name: "VS Code", icon: <Terminal className="w-4 h-4 mr-1 text-blue-400" /> },
  { name: "Git & GitHub", icon: <Wrench className="w-4 h-4 mr-1 text-gray-400" /> },
  { name: "Figma", icon: <Sparkles className="w-4 h-4 mr-1 text-pink-400" /> },
  { name: "Netlify", icon: <Cloud className="w-4 h-4 mr-1 text-green-400" /> },
];

const Skills = () => (
  <div className="relative w-full">
    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
    <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-2xl p-6 border border-border/50 shadow-2xl h-[520px] flex flex-col">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3 justify-center">
        <span className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
          <Layers className="w-7 h-7 text-primary" />
        </span>
        <h1 className="text-xl font-bold text-foreground tracking-tight">Skills</h1>
      </div>
      <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-2" />
      {/* Scrollable area */}
      <div className="w-full flex-1 max-h-[420px] pr-2 scrollbar-hide overflow-y-auto flex items-center">
        <div className="flex flex-col gap-7 w-full">
          {/* Core Stack */}
          <section>
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" /> Core Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 relative">
              {Object.entries(essentials).map(([area, skills], idx, arr) => (
                <div key={area} className="flex flex-col items-start px-4 py-3">
                  <span className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide letter-spacing-wider">{area}</span>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <span key={area + skill} className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-medium border border-primary/20 text-xs shadow-sm hover:scale-105 transition-transform duration-150">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              {/* Vertical dividers */}
              <div className="hidden md:block absolute top-0 left-1/3 w-px h-full bg-border/60" />
              <div className="hidden md:block absolute top-0 left-2/3 w-px h-full bg-border/60" />
            </div>
          </section>
          {/* Split section: Languages & Tools | Soft Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {/* Languages */}
            <div className="flex flex-col items-start px-4 py-3">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" /> Languages
              </h2>
              <div className="flex flex-wrap gap-3">
                {languages.map(lang => (
                  <span key={lang.name} className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-medium border border-primary/20 text-xs shadow-sm hover:scale-105 transition-transform duration-150">
                    {lang.icon}{lang.name}
                  </span>
                ))}
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block absolute top-0 left-1/3 w-px h-full bg-border/60" />
            {/* Tools */}
            <div className="flex flex-col items-start px-4 py-3">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" /> Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                {tools.map(tool => (
                  <span key={tool.name} className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-secondary/20 to-primary/10 text-secondary-foreground font-medium border border-border/30 text-xs shadow-sm hover:scale-105 transition-transform duration-150">
                    {tool.icon}{tool.name}
                  </span>
                ))}
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block absolute top-0 left-2/3 w-px h-full bg-border/60" />
            {/* Soft Skills */}
            <div className="flex flex-col items-start px-4 py-3">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" /> Soft Skills
              </h2>
              <ul className="flex flex-col gap-2 pl-1 text-sm font-medium text-foreground">
                <li>Problem Solver</li>
                <li>Fast Learner</li>
                <li>Team Player</li>
                <li>Clear Communicator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Hide vertical scrollbar cross-browser */}
      <style>
        {`
          .scrollbar-hide {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE 10+ */
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }
        `}
      </style>
    </div>
  </div>
);

export default Skills; 