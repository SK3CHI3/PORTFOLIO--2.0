
import { ExternalLink, Source } from "lucide-react";

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
    <div className="relative bg-card border border-border rounded-xl shadow hover:shadow-lg transition-shadow group p-4 flex flex-col h-full min-h-44">
      <div className="flex items-center mb-2">
        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${langColors[language] || "bg-muted"}`}></span>
        <span className="font-semibold text-foreground text-base">{name}</span>
      </div>
      <p className="text-muted-foreground text-xs flex-1 mb-4 line-clamp-3">{description}</p>
      <div className="flex items-center gap-3 mt-auto">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline text-xs"
          >
            <ExternalLink className="w-4 h-4" />
            Live
          </a>
        )}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-secondary hover:underline text-xs"
          >
            <Source className="w-4 h-4" />
            Source
          </a>
        )}
      </div>
    </div>
  );
}
