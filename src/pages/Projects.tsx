
import { ExternalLink, Star, GitFork, Code, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "MY-PORTFOLIO-1.0",
      description: "My Portfolio- A sleek, responsive portfolio built with Vanilla JS, CSS & HTML. Showcases my skills, projects, and journey in tech. ⚡ Fast, mobile-friendly, and easy to update — built to impress and ...",
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
      description: "Universal Resource Hub (URH) is a platform providing easy access to free educational resources, including courses, tutorials, and tools. Rebuilt using HTML, CSS, and JavaScript, it uses automation ...",
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
      description: "Brandy is a Kenyan-based e-commerce platform that empowers artists to monetize their creativity through print-on-demand product listings and custom design requests. Customers can shop, customize, o...",
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
      description: "Rebuilding MMU's e-learning platform to be faster, mobile-friendly, and user-focused — improving UI/UX, accessibility, performance, and overall learning experience for both students and lecturers.",
      isPublic: true,
      language: "TypeScript",
      stars: 3,
      forks: 0,
      techStack: ["TypeScript", "React", "Next.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      name: "AWS-Services-List-200-",
      description: "A well-organized list of **200+ AWS services** with concise descriptions, use cases, and key features. Whether you're a cloud newbie or a certified pro, this repo is your ultimate cheat sheet for m...",
      isPublic: true,
      language: "Markdown",
      stars: 1,
      forks: 0,
      techStack: ["Documentation", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      name: "COVID-19-Global-Data-Tracker",
      description: "COVID-19 Global Data Tracker: Analyzes pandemic data across countries, visualizing cases, deaths, and vaccination trends using Python. Includes time-series analysis and interactive maps to reveal g...",
      isPublic: true,
      language: "Jupyter Notebook",
      stars: 1,
      forks: 0,
      techStack: ["Python", "Jupyter", "Data Analysis"],
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

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="container mx-auto p-6 lg:p-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Projects</h1>
          <p className="text-muted-foreground">A collection of my work and contributions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-card border border-border hover:border-primary/50 transition-all duration-300 h-fit">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4 text-muted-foreground" />
                    <CardTitle className="text-lg font-semibold text-primary hover:underline cursor-pointer">
                      {project.name}
                    </CardTitle>
                  </div>
                  <Badge variant={project.isPublic ? "secondary" : "outline"} className="text-xs">
                    {project.isPublic ? "Public" : "Private"}
                  </Badge>
                </div>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="py-3">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-0 flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
                    <span>{project.language}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="h-8 text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Live
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 text-xs">
                    <Code className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
