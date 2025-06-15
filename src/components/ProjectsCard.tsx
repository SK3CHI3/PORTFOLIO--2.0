import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "MY-PORTFOLIO-1.0",
    description:
      "My Portfolio—A sleek, responsive portfolio built with Vanilla JS, CSS & HTML. Showcases my skills, projects, and journey in tech. ⚡ Fast, mobile-friendly, and easy to update.",
    language: "CSS",
    url: "https://github.com/SK3CHI3/MY-PORTFOLIO-1.0",
    liveUrl: "https://omollovictor.com",
  },
  {
    name: "URH-2.0",
    description:
      "Universal Resource Hub (URH) is a platform providing easy access to free educational resources, including courses, tutorials, and tools. Rebuilt using automation.",
    language: "JavaScript",
    url: "https://github.com/SK3CHI3/URH-2.0",
    liveUrl: "https://urh.lovable.app",
  },
  {
    name: "BRANDY-SHOP",
    description:
      "Brandy is a Kenyan-based e-commerce platform that empowers artists to monetize their creativity through print-on-demand listings and custom design requests.",
    language: "TypeScript",
    url: "https://github.com/SK3CHI3/BRANDY-SHOP",
    liveUrl: "https://brandy-shop.lovable.app",
  },
  {
    name: "MMU-E-LRNG-",
    description:
      "Rebuilding MMU's e-learning platform to be faster, mobile-friendly, and user-focused — improving UI/UX, accessibility, and performance.",
    language: "TypeScript",
    url: "https://github.com/SK3CHI3/MMU-E-LRNG-",
  },
  {
    name: "KAGUA-1.0",
    description:
      "Open-source civic tech platform mapping Kenyan government projects—powered by public data and citizen feedback to drive transparency.",
    language: "TypeScript",
    url: "https://github.com/SK3CHI3/KAGUA-1.0",
  },
  {
    name: "Hex-",
    description:
      "Hex is a cybersecurity AI assistant for ethical hackers and red teamers. It simulates attacks, crafts payloads, and analyzes recon data.",
    language: "TypeScript",
    url: "https://github.com/SK3CHI3/Hex-",
  },
];

const CARD_HEIGHT = 120; // unchanged

const ProjectsCard = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
      <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-2xl p-6 border border-border/50 backdrop-blur-sm shadow-2xl h-full">
        <div className="text-center mb-3">
          <div className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg mb-1.5">
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12a9.966 9.966 0 003.313 7.352c.366.33.59.79.59 1.273v.026A3.36 3.36 0 006.67 22H17.33a3.36 3.36 0 00.767-1.349v-.027a1.5 1.5 0 01.591-1.273A9.978 9.978 0 0022 12c0-5.523-4.477-10-10-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-foreground mb-1">Projects</h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </div>
        {/* Scrollable grid for all projects, shows 4 (2x2) at a time, scroll for more, scrollbar hidden */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 overflow-y-auto scrollbar-hide"
          style={{
            maxHeight: `calc(${CARD_HEIGHT * 2 + 20}px)`,
            minHeight: `${CARD_HEIGHT * 2 + 20}px`,
            paddingRight: "0.5rem",
          }}
        >
          {projects.map((proj) => (
            <ProjectCard key={proj.name} {...proj} />
          ))}
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
  );
};

export default ProjectsCard;
