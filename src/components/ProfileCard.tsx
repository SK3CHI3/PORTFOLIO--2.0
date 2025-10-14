import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Mail, Download, UserPlus, Sparkles } from "lucide-react";

interface ProfileCardProps {
  onAIClick?: () => void;
}

const ProfileCard = ({ onAIClick }: ProfileCardProps) => {
  const handleHireMe = () => {
    // Open email client with pre-filled subject and body
    const email = "omollovictorotieno58@gmail.com";
    const subject = "Hiring Inquiry - Full Stack Developer Position";
    const body = "Hi Omollo,\n\nI came across your portfolio and would like to discuss potential opportunities. Please let me know when you're available for a conversation.\n\nBest regards,";
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  const handleViewResume = () => {
    // Open resume from Google Drive in new tab
    window.open('https://drive.google.com/file/d/15raMTKEsMQvQ7m3st-wHz2vXj6tLtaUZ/view?usp=sharing', '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 h-full px-2 sm:px-0">
      <div className="text-center">
        <div className="relative inline-block">
          <div className="transition-transform duration-200 hover:scale-105 hover:shadow-2xl rounded-full border-4 border-primary/30 shadow-xl overflow-hidden w-32 h-32 sm:w-40 sm:h-40">
            <picture>
              {/* Future-proof: add WebP/AVIF sources if available */}
              {/* <source srcSet="/profile.avif" type="image/avif" /> */}
              {/* <source srcSet="/profile.webp" type="image/webp" /> */}
              <img
                src="/profile.jpg"
                srcSet="/profile.jpg 1x, /profile.jpg 2x, /profile.jpg 3x"
                alt="Omollo Victor"
                className="object-cover w-full h-full rounded-full"
                loading="eager"
                decoding="async"
                style={{ imageRendering: 'auto' }}
              />
            </picture>
          </div>
          
          {/* AI Button on profile picture */}
          {onAIClick && (
            <button
              onClick={onAIClick}
              className="absolute bottom-0 right-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 flex items-center justify-center group"
              title="Ask AI Assistant"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
            </button>
          )}
        </div>
        <div className="mt-2 sm:mt-4">
          <h1 className="text-2xl sm:text-2xl font-bold text-foreground">Omollo Victor</h1>
          <p className="text-sm sm:text-base text-primary font-medium mt-1">
            Full-Stack Software Engineer | AWS Certified Cloud Practitioner 
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">he/him</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-md">
        <div className="flex items-center space-x-2 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-200 text-xs sm:text-sm">
          <Briefcase className="w-4 h-4 text-primary" />
          <div>
            <span className="font-medium">Founder at </span>
            <a href="https://brandyshop.netlify.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-primary">Brandy</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-200 text-xs sm:text-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Nairobi, Kenya</span>
        </div>
        
        <a href="https://github.com/SK3CHI3" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-200 text-xs sm:text-sm">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.565 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.135 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z"/></svg>
          <span className="font-semibold">Visit My Github</span>
        </a>
      </div>

      <div className="flex flex-col sm:flex-row w-full sm:w-auto space-y-3 sm:space-y-0 sm:space-x-4 mt-2">
        <Button 
          onClick={handleHireMe}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-base transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
        >
          <UserPlus className="w-5 h-5 mr-2" />
          Hire Me
        </Button>
        <Button 
          onClick={handleViewResume}
          variant="outline" 
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 text-base transition-all duration-200 w-full sm:w-auto"
        >
          <Download className="w-5 h-5 mr-2" />
          View Resume
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
