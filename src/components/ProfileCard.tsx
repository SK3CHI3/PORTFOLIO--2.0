
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Mail, Download, UserPlus } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 h-full">
      <div className="text-center">
        <Avatar className="w-40 h-40 mx-auto border-4 border-primary/20 shadow-2xl">
          <AvatarImage 
            src="https://i.pinimg.com/564x/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8.jpg" 
            alt="Omollo Victor" 
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
        
        <div className="flex items-center space-x-2 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-200">
          <Mail className="w-4 h-4 text-primary" />
          <a href="mailto:vomollo101@gmail.com" className="text-xs hover:text-primary transition-colors">
            vomollo101@gmail.com
          </a>
        </div>
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
