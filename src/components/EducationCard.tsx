
import { GraduationCap, Cloud, Camera, Shield } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

const educationList = [
  {
    icon: <GraduationCap className="w-7 h-7 text-primary" />,
    title: "Software Engineering Program",
    institution: "Power Learn Project (PLP Africa)",
    duration: "2025 – Present",
    details: [
      "Full-stack development: React, Supabase, APIs, Git",
      "Built real-world apps solving social impact problems (MMU LMS, Brandy, URH)",
    ],
  },
  {
    icon: <Cloud className="w-7 h-7 text-primary" />,
    title: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services (AWS)",
    duration: "Certified – 2025",
    details: [
      "Solid grasp of AWS core services, cloud security, and best practices",
      "Strong foundation for building and deploying apps in the cloud",
    ],
  },
  {
    icon: <Camera className="w-7 h-7 text-primary" />,
    title: "B.A. Journalism & Digital Media",
    institution: "Multimedia University of Kenya (MMU)",
    duration: "Ongoing",
    details: [
      "Focus on digital storytelling, media production & content strategy",
      "Blending tech with media for impactful communication",
    ],
  },
  {
    icon: <Shield className="w-7 h-7 text-primary" />,
    title: "Hack The Box Academy (Web Security Track)",
    institution: "",
    duration: "2025 – Ongoing",
    details: [
      "Learning hands-on web pentesting: HTTP requests, auth bypasses, and more",
      "Strengthening backend & API security for real-world apps",
    ],
  },
];

const EducationCard = () => (
  <div className="relative w-full">
    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
    <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-2xl p-6 border border-border/50 backdrop-blur-sm shadow-2xl h-full flex flex-col">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-2">
          <GraduationCap className="w-7 h-7 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Education &amp; Certifications</h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
      </div>
      <ScrollArea className="w-full flex-1 max-h-[340px] pr-2">
        <div className="space-y-7">
          {educationList.map((edu, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="pt-1">{edu.icon}</div>
              <div>
                <div className="font-semibold text-lg text-primary">{edu.title}</div>
                <div className="text-sm text-muted-foreground font-medium mb-1">
                  {edu.institution}
                  {edu.institution && " · "} {edu.duration}
                  {!edu.institution && edu.duration}
                </div>
                <ul className="list-disc ml-5 mt-1 text-sm text-foreground space-y-1">
                  {edu.details.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  </div>
);

export default EducationCard;

