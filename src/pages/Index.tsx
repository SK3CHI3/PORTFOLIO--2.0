
import ProfileCard from "@/components/ProfileCard";
import MainContent from "@/components/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 xl:col-span-3 bg-card border border-border rounded-lg p-6">
            <ProfileCard />
          </div>
          <div className="lg:col-span-8 xl:col-span-9 bg-card border border-border rounded-lg p-6">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
