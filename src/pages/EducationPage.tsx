
import { Link } from "react-router-dom";
import { GraduationCap, Cloud, Camera, Shield } from "lucide-react";

const educationData = [
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    title: "Software Engineering Program",
    institution: "Power Learn Project (PLP Africa)",
    duration: "2025 – Present",
    details: [
      "Full-stack development: React, Supabase, APIs, Git",
      "Built real-world apps solving social impact problems (MMU LMS, Brandy, URH)"
    ]
  },
  {
    icon: <Cloud className="w-6 h-6 text-primary" />,
    title: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services (AWS)",
    duration: "Certified – 2025",
    details: [
      "Solid grasp of AWS core services, cloud security, and best practices",
      "Strong foundation for building & deploying apps in the cloud"
    ]
  },
  {
    icon: <Camera className="w-6 h-6 text-primary" />,
    title: "B.A. Journalism & Digital Media",
    institution: "Multimedia University of Kenya (MMU)",
    duration: "Ongoing",
    details: [
      "Focus on digital storytelling, media production & content strategy",
      "Blending tech with media for impactful communication"
    ]
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Hack The Box Academy (Web Security Track)",
    institution: "",
    duration: "2025 – Ongoing",
    details: [
      "Learning hands-on web pentesting: HTTP requests, auth bypasses, and more",
      "Strengthening backend & API security for real-world apps"
    ]
  }
];

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-card border border-border rounded-2xl p-8 shadow-xl">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education & Certifications
          </h1>
          <Link
            to="/"
            className="text-xs text-primary hover:underline font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
        <div className="space-y-8">
          {educationData.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              {item.icon}
              <div>
                <div className="font-semibold text-lg text-primary">
                  {item.title}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {item.institution}
                  {item.institution && " · "} {item.duration}
                  {!item.institution && item.duration}
                </div>
                <ul className="list-disc ml-5 mt-2 text-sm text-foreground space-y-1">
                  {item.details.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
