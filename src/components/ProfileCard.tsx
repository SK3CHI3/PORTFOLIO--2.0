
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Mail, Download, UserPlus } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="space-y-3">
      <div className="text-center">
        <Avatar className="w-20 h-20 mx-auto border-4 border-primary/20 shadow-2xl">
          <AvatarImage src="/lovable-uploads/17ac5018-da63-4ea1-9431-d55b517dbb9e.png" alt="Omollo Victor" />
          <AvatarFallback className="text-lg font-bold bg-primary/10">OV</AvatarFallback>
        </Avatar>
        <div className="mt-3">
          <h1 className="text-lg font-bold text-foreground">Omollo Victor</h1>
          <p className="text-sm text-primary font-medium mt-1">Full-Stack Engineer</p>
          <p className="text-xs text-muted-foreground mt-1">he/him</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-3 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-200">
          <Briefcase className="w-4 h-4 text-primary" />
          <div>
            <span className="text-xs font-medium">Founder at </span>
            <span className="font-bold text-primary">Brandy</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-200">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-xs">Nairobi, Kenya</span>
        </div>
        
        <div className="flex items-center space-x-3 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-200">
          <Mail className="w-4 h-4 text-primary" />
          <a href="mailto:vomollo101@gmail.com" className="text-xs hover:text-primary transition-colors">
            vomollo101@gmail.com
          </a>
        </div>
      </div>

      <div className="space-y-2 pt-2">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 transition-all duration-200 shadow-lg hover:shadow-xl">
          <UserPlus className="w-3 h-3 mr-2" />
          Hire Me
        </Button>
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold py-2 transition-all duration-200">
          <Download className="w-3 h-3 mr-2" />
          View Resume
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
