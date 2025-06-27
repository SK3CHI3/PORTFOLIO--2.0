import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Mail, Download, UserPlus } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 h-full">
      <div className="text-center">
        <Avatar className="w-40 h-40 mx-auto border-4 border-primary/20 shadow-2xl overflow-hidden">
          <AvatarImage 
            src="/profile.jpg" 
            alt="Omollo Victor" 
            className="object-cover" 
          />
          <AvatarFallback className="text-2xl font-bold bg-primary/10">OV</AvatarFallback>
        </Avatar>
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-foreground">Omollo Victor</h1>
          <p className="text-base text-primary font-medium mt-1">
            Full-Stack Software Engineer | AWS Certified Cloud Practitioner
          </p>
          <p className="text-sm text-muted-foreground mt-1">he/him</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-md">
        <div className="flex items-center space-x-2 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-200">
          <Briefcase className="w-4 h-4 text-primary" />
          <div>
            <span className="text-xs font-medium">Founder at </span>
            <span className="font-bold text-primary">Brandy</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-200">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-xs">Nairobi, Kenya</span>
        </div>
        
        <a href="https://github.com/SK3CHI3" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-200">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.565 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.135 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z"/></svg>
          <span className="text-xs font-semibold">Visit My Github</span>
        </a>
      </div>

      <div className="flex space-x-3">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 transition-all duration-200 shadow-lg hover:shadow-xl">
          <UserPlus className="w-4 h-4 mr-2" />
          Hire Me
        </Button>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-6 py-2 transition-all duration-200">
          <Download className="w-4 h-4 mr-2" />
          View Resume
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
