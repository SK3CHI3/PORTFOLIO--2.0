
import ProfileCard from "@/components/ProfileCard";
import MainContent from "@/components/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex items-center justify-center">
      <div className="container mx-auto p-6 lg:p-8 max-w-6xl">
        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="flex-shrink-0">
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
