
import ProjectCard from "./ProjectCard";

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
    description: "Universal Resource Hub (URH) is a platform providing easy access to free educational resources, including courses, tutorials, and tools. Rebuilt using HTML, CSS, and JavaScript, it uses automation …",
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
    description: "Rebuilding MMU's e-learning platform to be faster, mobile-friendly, and user-focused — improving UI/UX, accessibility, performance, and overall learning experience for both students and lecturers.",
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

const ProjectsCard = () => (
  <div className="relative w-full h-full">
    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
    <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-2xl p-6 border border-border/50 backdrop-blur-sm shadow-2xl h-full">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12a9.966 9.966 0 003.313 7.352c.366.33.59.79.59 1.273v.026A3.36 3.36 0 006.67 22H17.33a3.36 3.36 0 00.767-1.349v-.027a1.5 1.5 0 01.591-1.273A9.978 9.978 0 0022 12c0-5.523-4.477-10-10-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Projects</h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.name} {...proj} />
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsCard;
