
import ProfileCard from "@/components/ProfileCard";
import MainContent from "@/components/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="container mx-auto p-6 lg:p-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 min-h-[85vh]">
          <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 shadow-xl">
            <ProfileCard />
          </div>
          <div className="lg:col-span-3 bg-card border border-border rounded-2xl p-6 shadow-xl">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
