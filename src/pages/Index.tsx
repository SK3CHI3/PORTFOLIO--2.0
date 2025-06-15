
import ProfileCard from "@/components/ProfileCard";
import MainContent from "@/components/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex items-center justify-center">
      <div className="container mx-auto p-6 lg:p-8 max-w-6xl">
        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col items-center space-y-8">
            <ProfileCard />
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
