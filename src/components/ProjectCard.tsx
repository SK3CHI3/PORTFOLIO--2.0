
import { Github } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks?: number;
  url?: string;
  isPublic?: boolean;
}

const langColors: Record<string, string> = {
  "CSS": "bg-indigo-500",
  "JavaScript": "bg-yellow-400",
  "TypeScript": "bg-blue-500",
};

export default function ProjectCard({
  name,
  description,
  language,
  stars,
  forks,
  url,
  isPublic = true,
}: ProjectCardProps) {
  return (
    <div className="relative bg-card border border-border rounded-xl shadow hover:shadow-lg transition-shadow group">
      <a
        href={url}
        target={url ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="block p-5 focus:outline-none"
        tabIndex={0}
      >
        <div className="flex items-center gap-2 mb-1">
          <Github className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold text-foreground text-lg">{name}</span>
          <Badge variant="secondary" className="ml-2">{isPublic ? "Public" : "Private"}</Badge>
        </div>
        <p className="text-muted-foreground text-sm mt-1 mb-3 line-clamp-3">{description}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
          <span className={`inline-flex items-center gap-1 ${langColors[language] || "bg-muted"} text-white px-2 py-0.5 rounded-full font-medium`}>
            {language}
          </span>
          <span className="inline-flex items-center gap-1">
            <svg aria-label="stars" className="w-4 h-4 inline-block text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.947 5.955 6.564.955-4.755 4.635 1.123 6.545z" /></svg>
            {stars}
          </span>
          {typeof forks === "number" && (
            <span className="inline-flex items-center gap-1">
              <svg aria-label="forks" className="w-4 h-4 inline-block text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path d="M5 14s1.5 0 5-4 5-4 5-4M4 7v6a3 3 0 003 3h6a3 3 0 003-3V7" /></svg>
              {forks}
            </span>
          )}
        </div>
      </a>
    </div>
  );
}
