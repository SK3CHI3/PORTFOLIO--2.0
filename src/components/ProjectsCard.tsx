
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

// Add liveUrl to relevant projects if live demo exists.
// (Example liveUrl — replace with your real URLs if available)
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

const PROJECTS_PER_PAGE = 4;
const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

const ProjectsCard = () => {
  const [page, setPage] = useState(1);

  const pagedProjects = projects.slice(
    (page - 1) * PROJECTS_PER_PAGE,
    page * PROJECTS_PER_PAGE
  );

  const goToPage = (n: number) => {
    if (n < 1 || n > totalPages) return;
    setPage(n);
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
      <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-2xl p-6 border border-border/50 backdrop-blur-sm shadow-2xl h-full">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12a9.966 9.966 0 003.313 7.352c.366.33.59.79.59 1.273v.026A3.36 3.36 0 006.67 22H17.33a3.36 3.36 0 00.767-1.349v-.027a1.5 1.5 0 01.591-1.273A9.978 9.978 0 0022 12c0-5.523-4.477-10-10-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Projects</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>
        {/* 2x2 grid when desktop, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 min-h-[220px]">
          {pagedProjects.map((proj) => (
            <ProjectCard key={proj.name} {...proj} />
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="mt-6 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  asChild
                  onClick={() => goToPage(page - 1)}
                  tabIndex={page === 1 ? -1 : 0}
                  aria-disabled={page === 1}
                  style={{ opacity: page === 1 ? 0.5 : 1 }}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, idx) => (
                <PaginationItem key={idx}>
                  <PaginationLink
                    isActive={page === idx + 1}
                    onClick={() => goToPage(idx + 1)}
                  >
                    {idx + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  asChild
                  onClick={() => goToPage(page + 1)}
                  tabIndex={page === totalPages ? -1 : 0}
                  aria-disabled={page === totalPages}
                  style={{ opacity: page === totalPages ? 0.5 : 1 }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
