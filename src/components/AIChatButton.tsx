import { Bot } from "lucide-react";
import { Button } from "./ui/button";

interface AIChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const AIChatButton = ({ onClick, isOpen }: AIChatButtonProps) => {
  if (isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <Button
        onClick={onClick}
        size="lg"
        variant="outline"
        className="h-14 w-14 rounded-full border-2 border-border bg-card hover:bg-accent shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        title="Ask AI Assistant"
      >
        <Bot className="h-6 w-6 text-foreground" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-popover text-popover-foreground text-xs font-medium rounded-md shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-border">
        Ask AI
        <div className="absolute top-full right-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-border" />
      </div>
    </div>
  );
};

export default AIChatButton;

