import ProfileCard from "@/components/ProfileCard";
import MainContent from "@/components/MainContent";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex items-center justify-center">
      <div className="container mx-auto p-6 lg:p-8 max-w-6xl">
        {/* Removed Projects navigation since everything is now in scrollable cards */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl min-h-[600px]">
          {/* Removed the Education & Certifications button here */}
          <div className="flex flex-col lg:flex-row items-stretch gap-8 h-full">
            <div className="flex-shrink-0 lg:w-80 flex items-center">
              <ProfileCard />
            </div>
            <div className="flex-1">
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
