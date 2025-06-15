
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Mail, Download, UserPlus, Layers, Cloud, BadgeInfo } from "lucide-react";

const profileDetails = [
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: "Full-Stack Software Engineer",
    lines: [
      "React, TypeScript, Supabase, Node.js, Next.js",
      "End-to-end product development and architecture",
    ],
  },
  {
    icon: <Cloud className="w-6 h-6 text-primary" />,
    title: "AWS Certified Cloud Practitioner",
    lines: [
      "Proven ability: Deploying & scaling applications securely in the AWS cloud",
    ],
  },
  {
    icon: <BadgeInfo className="w-6 h-6 text-primary" />,
    title: "Pronouns",
    lines: ["he/him"],
  },
];

const quickLinks = [
  {
    icon: <Briefcase className="w-4 h-4 text-primary" />,
    label: (
      <>
        <span className="text-xs font-medium">Founder at </span>
        <span className="font-bold text-primary">Brandy</span>
      </>
    ),
  },
  {
    icon: <MapPin className="w-4 h-4 text-primary" />,
    label: <span className="text-xs">Nairobi, Kenya</span>,
  },
  {
    icon: <Mail className="w-4 h-4 text-primary" />,
    label: (
      <a href="mailto:vomollo101@gmail.com" className="text-xs hover:text-primary transition-colors">
        vomollo101@gmail.com
      </a>
    ),
  },
];

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 h-full">
      <div className="text-center">
        <Avatar className="w-40 h-40 mx-auto border-4 border-primary/20 shadow-2xl">
          <AvatarImage
            src="https://i.pinimg.com/736x/55/0d/32/550d32b0264846114176b735f621f52e.jpg"
            alt="Omollo Victor"
          />
          <AvatarFallback className="text-2xl font-bold bg-primary/10">OV</AvatarFallback>
        </Avatar>
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-foreground">Omollo Victor</h1>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4">
        {profileDetails.map((detail, idx) => (
          <div key={idx} className="flex items-start gap-3 rounded-lg p-3 bg-secondary/30 hover:bg-secondary/50 transition-all duration-200">
            <div className="pt-1">{detail.icon}</div>
            <div className="">
              <div className="font-semibold text-base text-primary">{detail.title}</div>
              <ul className="list-disc ml-4 mt-1 text-sm text-foreground space-y-1">
                {detail.lines.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-md">
        {quickLinks.map((link, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-2 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-200"
          >
            {link.icon}
            {link.label}
          </div>
        ))}
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
