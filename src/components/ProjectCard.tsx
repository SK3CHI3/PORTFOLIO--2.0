import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  url?: string;
  liveUrl?: string;
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
  url,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="relative bg-card border border-border rounded-xl shadow hover:shadow-lg transition-shadow group p-3 flex flex-col h-full min-h-40">
      <div className="flex items-center mb-2">
        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${langColors[language] || "bg-muted"}`}></span>
        <span className="font-semibold text-foreground text-base">{name}
          {(name === "PORTFOLIO--2.0" || name === "PORTFOLIO--2.0 (Current)") && (
            <span className="ml-2 px-2 py-0.5 rounded bg-muted text-xs text-muted-foreground border border-border">Current</span>
          )}
        </span>
      </div>
      <p className="text-muted-foreground text-xs flex-1 mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center gap-3 mt-auto">
        <a
          href={liveUrl || undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 text-primary hover:underline text-xs ${!liveUrl ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''}`}
        >
          <ExternalLink className="w-4 h-4" />
          Live
        </a>
        <a
          href={url || undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 text-secondary hover:underline text-xs ${!url ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''}`}
        >
          <Github className="w-4 h-4" />
          Source
        </a>
      </div>
    </div>
  );
}
