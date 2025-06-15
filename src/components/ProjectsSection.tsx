
import React from "react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GitFork, Code, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "MY-PORTFOLIO-1.0",
    description: "Sleek, mobile-friendly portfolio featuring my journey and work in tech.",
    isPublic: true,
    language: "CSS",
    stars: 1,
    forks: 4,
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    name: "URH-2.0",
    description: "Platform listing the best free educational resources. Built for automation and easy updates.",
    isPublic: true,
    language: "JavaScript",
    stars: 1,
    forks: 0,
    techStack: ["JavaScript", "HTML", "CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    name: "BRANDY-SHOP",
    description: "Kenyan e-commerce for creative artists: upload, sell, customize and shop.",
    isPublic: true,
    language: "TypeScript",
    stars: 1,
    forks: 0,
    techStack: ["TypeScript", "React", "Node.js"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    name: "MMU-E-LRNG-",
    description: "MMU e-learning rebuild for a better student & lecturer experience.",
    isPublic: true,
    language: "TypeScript",
    stars: 3,
    forks: 0,
    techStack: ["TypeScript", "React", "Next.js"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const getLanguageColor = (language: string) => {
  const colors: { [key: string]: string } = {
    "CSS": "bg-blue-500",
    "JavaScript": "bg-yellow-500",
    "TypeScript": "bg-blue-600",
    "Python": "bg-green-500",
    "Jupyter Notebook": "bg-orange-500",
    "Markdown": "bg-gray-500"
  };
  return colors[language] || "bg-gray-500";
};

const ProjectsSection = () => (
  <Card className="w-full max-w-lg mx-auto p-0 shadow-lg bg-card/95 overflow-hidden">
    <CardHeader className="pb-2">
      <CardTitle className="text-lg font-bold">Projects</CardTitle>
      <CardDescription className="text-xs">
        Some of my favorite recent work — compact view
      </CardDescription>
    </CardHeader>
    <CardContent className="px-2 py-1">
      <div className="grid grid-cols-1 gap-3">
        {projects.map((project) => (
          <div key={project.id} className="rounded border border-border bg-muted/30 p-3 flex items-start gap-2">
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-primary">{project.name}</span>
                <Badge variant={project.isPublic ? "secondary" : "outline"} className="text-[10px] px-2 py-0 h-5">
                  {project.isPublic ? "Public" : "Private"}
                </Badge>
              </div>
              <div className="text-xs text-muted-foreground mt-1 mb-1">{project.description}</div>
              <div className="flex flex-wrap gap-1 mb-1">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-[10px] px-2 py-0 h-5">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${getLanguageColor(project.language)}`}></div>
                  <span>{project.language}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  <span>{project.forks}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 ml-1">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline w-7 h-7 flex items-center justify-center rounded hover-scale opacity-90">
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline w-7 h-7 flex items-center justify-center rounded hover-scale opacity-90">
                <Code className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
    <CardFooter />
  </Card>
);

export default ProjectsSection;
