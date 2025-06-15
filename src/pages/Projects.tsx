
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    name: "MY-PORTFOLIO-1.0",
    description: "My Portfolio—A sleek, responsive portfolio built with Vanilla JS, CSS & HTML. Showcases my skills, projects, and journey in tech. ⚡ Fast, mobile-friendly, and easy to update — built to impress and …",
    language: "CSS",
    stars: 1,
    forks: 4,
    url: "https://github.com/SK3CHI3/MY-PORTFOLIO-1.0"
  },
  {
    name: "URH-2.0",
    description: "Universal Resource Hub (URH)—a platform providing easy access to free educational resources like courses, tutorials, and tools. Rebuilt using HTML, CSS, and JavaScript, it uses automation …",
    language: "JavaScript",
    stars: 1,
    url: "https://github.com/SK3CHI3/URH-2.0"
  },
  {
    name: "BRANDY-SHOP",
    description: "Brandy is a Kenyan-based e-commerce platform that empowers artists to monetize their creativity through print-on-demand product listings and custom design requests. Customers can shop, customize, o…",
    language: "TypeScript",
    stars: 1,
    url: "https://github.com/SK3CHI3/BRANDY-SHOP"
  },
  {
    name: "MMU-E-LRNG-",
    description: "Rebuilding MMU's e-learning platform to be faster, mobile-friendly, and user-focused—improving UI/UX, accessibility, performance, and overall learning experience for both students and lecturers.",
    language: "TypeScript",
    stars: 3,
    url: "https://github.com/SK3CHI3/MMU-E-LRNG-"
  },
  {
    name: "KAGUA-1.0",
    description: "\"Open-source civic tech platform mapping Kenyan government projects—powered by public data and citizen feedback to drive transparency and accountability.\"",
    language: "TypeScript",
    stars: 1,
    url: "https://github.com/SK3CHI3/KAGUA-1.0"
  },
  {
    name: "Hex-",
    description: "Hex is a cybersecurity AI assistant for ethical hackers and red teamers. Powered by DeepSeek LLM, it simulates real-world attacks, crafts payloads, and analyzes recon data — all in a controlled, le…",
    language: "TypeScript",
    stars: 1,
    url: "https://github.com/SK3CHI3/Hex-"
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex items-center justify-center">
      <div className="w-full max-w-4xl px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <ProjectCard key={proj.name} {...proj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
