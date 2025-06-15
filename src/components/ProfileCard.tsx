
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, MapPin, Mail, Link as LinkIcon, Users } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="space-y-4">
      <Avatar className="w-32 h-32 mx-auto lg:mx-0 border-2 border-border">
        <AvatarImage src="/lovable-uploads/17ac5018-da63-4ea1-9431-d55b517dbb9e.png" alt="SKECHIE" />
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-xl font-bold">SKECHIE</h1>
        <p className="text-lg text-muted-foreground">SK3CH13 · he/him</p>
      </div>

      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
        <div className="flex items-center space-x-1 hover:text-primary cursor-pointer">
          <Users className="w-4 h-4" />
          <span><span className="font-bold text-foreground">14</span> followers</span>
        </div>
        <span>·</span>
        <div className="flex items-center space-x-1 hover:text-primary cursor-pointer">
          <span><span className="font-bold text-foreground">5</span> following</span>
        </div>
      </div>

      <div className="space-y-2 text-sm text-foreground">
        <div className="flex items-center space-x-2">
          <Briefcase className="w-4 h-4 text-muted-foreground" />
          <span>Founder at <a href="#" className="font-bold text-primary hover:underline">Brandy</a></span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span>Nairobi, Kenya</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4 text-muted-foreground" />
          <a href="mailto:vomollo101@gmail.com" className="hover:text-primary hover:underline">vomollo101@gmail.com</a>
        </div>
        <div className="flex items-center space-x-2">
          <LinkIcon className="w-4 h-4 text-muted-foreground" />
          <a href="https://omollo-victor-potfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
            omollo-victor-potfolio.netlify.app
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-base font-semibold mb-2">Achievements</h2>
        <div className="flex space-x-2">
           <img src="https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png" alt="Achievement" className="w-12 h-12"/>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
