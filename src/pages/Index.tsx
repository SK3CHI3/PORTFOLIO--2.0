
import ProfileCard from "@/components/ProfileCard";
import MainContent from "@/components/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-7xl h-screen flex flex-col">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 min-h-0">
          <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-xl">
            <ProfileCard />
          </div>
          <div className="lg:col-span-3 bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-xl overflow-y-auto">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
