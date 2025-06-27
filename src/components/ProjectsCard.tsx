import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "StaffPulse",
    description:
      "An AI-powered HR tool built on WhatsApp that tracks employee mood, detects burnout, and boosts workplace culture through weekly check-ins and real-time sentiment dashboards.",
    language: "TypeScript",
    url: "https://github.com/SK3CHI3/STAFF_PULSE",
    liveUrl: "",
  },
  {
    name: "PORTFOLIO--2.0",
    description:
      "A sleek, minimal developer portfolio built with Vite, React, TypeScript, and Shadcn/UI — fast, responsive, and inspired by GitHub's profile layout.",
    language: "TypeScript",
    url: "https://github.com/SK3CHI3/PORTFOLIO--2.0",
    liveUrl: "https://omollo-victor-potfolio.netlify.app/",
  },
  {
    name: "MY-PORTFOLIO-1.0",
    description:
      "My Portfolio—A sleek, responsive portfolio built with Vanilla JS, CSS & HTML. Showcases my skills, projects, and journey in tech. ⚡ Fast, mobile-friendly, and easy to update.",
    language: "CSS",
    url: "https://github.com/SK3CHI3/MY-PORTFOLIO-1.0",
    liveUrl: "",
  },
  {
    name: "URH-2.0",
    description:
      "Universal Resource Hub (URH) is a platform providing easy access to free educational resources, including courses, tutorials, and tools. Rebuilt using automation.",
    language: "JavaScript",
    url: "https://github.com/SK3CHI3/URH-2.0",
    liveUrl: "https://universal-resource-hub.netlify.app/",
  },
  {
    name: "BRANDY-SHOP",
    description:
      "Brandy is a Kenyan-based e-commerce platform that empowers artists to monetize their creativity through print-on-demand listings and custom design requests.",
    language: "TypeScript",
    url: "https://github.com/SK3CHI3/BRANDY-SHOP",
    liveUrl: "https://brandyshop.netlify.app/",
  },
  {
    name: "MMU-E-LRNG-",
    description:
      "Rebuilding MMU's e-learning platform to be faster, mobile-friendly, and user-focused — improving UI/UX, accessibility, and performance.",
    language: "TypeScript",
    url: "https://github.com/SK3CHI3/MMU-E-LRNG-",
    liveUrl: "https://mmu-e-learning.netlify.app/",
  },
  {
    name: "KAGUA-1.0",
    description:
      "Open-source civic tech platform mapping Kenyan government projects—powered by public data and citizen feedback to drive transparency.",
    language: "TypeScript",
    url: "https://github.com/SK3CHI3/KAGUA-1.0",
    liveUrl: "https://kagua-gava.netlify.app/",
  },
  {
    name: "Hex-",
    description:
      "Hex is a cybersecurity AI assistant for ethical hackers and red teamers. It simulates attacks, crafts payloads, and analyzes recon data.",
    language: "TypeScript",
    url: "https://github.com/SK3CHI3/Hex-",
    liveUrl: "https://hexai-c.netlify.app/",
  },
  // --- New project 1 ---
  {
    name: "MOTHERY-CARE-CHILDRENS-HOME",
    description:
      "Website for Motherly Care Children's Home & School in Ruai, Kenya. Built for transparency, donor engagement, and outreach.",
    language: "JavaScript",
    url: "https://github.com/SK3CHI3/MOTHERY-CARE-CHILDRENS-HOME",
    liveUrl: "",
  },
  // --- New project 2 ---
  {
    name: "Nox Public",
    description:
      "NOX – A secure, anonymous real-time chat app where messages vanish into the night. No traces. No history. Just pure, encrypted conversations.",
    language: "TypeScript",
    url: "https://github.com/SK3CHI3/Nox",
    liveUrl: "",
  },
];

// Height for two cards, closely spaced.
const CARD_HEIGHT = 120;

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 overflow-y-auto scrollbar-hide max-h-[60vh] pr-2">
          {projects.map((proj) => (
            <ProjectCard key={proj.name} {...proj} />
          ))}
          <div className="col-span-full flex justify-center items-center">
            <div className="relative bg-card border border-border rounded-xl shadow hover:shadow-lg transition-shadow group p-6 flex flex-col items-center text-center w-full max-w-xs mx-auto">
              <span className="font-semibold text-foreground text-base mb-2">Other Projects</span>
              <p className="text-muted-foreground text-sm mb-4">Not yet satisfied?<br />Visit my cooking place:</p>
              <a
                href="https://github.com/SK3CHI3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg shadow hover:bg-primary/90 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.565 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.135 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z"/></svg>
                GitHub
              </a>
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
  );
};

export default ProjectsCard;
