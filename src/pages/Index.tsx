
import ProfileCard from "@/components/ProfileCard";
import MainContent from "@/components/MainContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex items-center justify-center">
      <div className="container mx-auto p-6 sm:p-8 md:p-12 lg:p-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-4 xl:col-span-3 bg-card border border-border rounded-xl p-6 sm:p-8 shadow-lg">
            <ProfileCard />
          </div>
          <div className="lg:col-span-8 xl:col-span-9 bg-card border border-border rounded-xl p-6 sm:p-8 shadow-lg">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
