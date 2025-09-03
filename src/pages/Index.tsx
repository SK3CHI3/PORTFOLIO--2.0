import ProfileCard from "@/components/ProfileCard";
import MainContent from "@/components/MainContent";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex items-center justify-center">
      {/* Mobile: Direct content without extra card wrapper */}
      <div className="sm:hidden w-full h-full">
        <MainContent />
      </div>
      
      {/* Desktop: Keep the original card wrapper */}
      <div className="hidden sm:flex container mx-auto p-4 md:p-6 lg:p-8 max-w-7xl">
        <div className="bg-card border border-border rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl min-h-[400px] md:min-h-[600px] w-full">
          <div className="flex flex-col lg:flex-row items-stretch gap-8 h-full">
            <div className="hidden lg:flex flex-shrink-0 lg:w-80 items-center">
              <ProfileCard />
            </div>
            <div className="flex-1 w-full">
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
