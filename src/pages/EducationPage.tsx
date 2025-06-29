import EducationCard from "@/components/EducationCard";
import { ScrollArea } from "@/components/ui/scroll-area";

const EducationPage = () => (
  <div className="min-h-screen bg-background text-foreground font-sans flex flex-col items-center justify-center p-6">
    <ScrollArea className="w-full max-w-2xl h-[80vh] max-h-[80vh]">
      <EducationCard />
    </ScrollArea>
  </div>
);

export default EducationPage;
