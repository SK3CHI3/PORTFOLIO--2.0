import { Link } from "react-router-dom";
import { Briefcase, Shield, Globe, Sparkles, Laptop, GraduationCap, Users } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const workData = [
  {
    icon: <Laptop className="w-7 h-7 text-primary" />,
    title: "Freelance Full-Stack Developer",
    company: "Self-employed",
    duration: "Jan 2023 – Present",
    details: [
      "Delivered 5+ real-world web apps like Brandy, KAGUA, and HEX AI, handling both frontend and backend.",
      "Optimized performance and reduced load times by up to 60% across all projects.",
      "Platforms have reached 7,000+ users collectively with strong community engagement."
    ]
  },
  {
    icon: <Shield className="w-7 h-7 text-primary" />,
    title: "Cybersecurity & AI Engineer – HEX AI",
    company: "HEX AI",
    duration: "Feb 2025 – Present",
    details: [
      "Built a cybersecurity AI assistant used by ethical hackers for recon, payload generation, and red teaming.",
      "Integrated 10+ tools and GPT logic into one seamless, safe testing environment.",
      "Over 100 users have leveraged HEX to test tools without breaching legal boundaries."
    ]
  },
  {
    icon: <Globe className="w-7 h-7 text-primary" />,
    title: "CivicTech Lead – KAGUA (Gov Project Tracker)",
    company: "KAGUA",
    duration: "Jan 2025 – Present",
    details: [
      "Tracked and published over 100 government projects on an open, citizen-powered map.",
      "Enabled real-time updates on budgets and progress for public accountability.",
      "Adopted by youth groups and civic orgs in 5+ counties to demand transparency."
    ]
  },
  {
    icon: <Sparkles className="w-7 h-7 text-primary" />,
    title: "Founder & Lead Developer – Brandy",
    company: "Brandy",
    duration: "Dec 2024 – Present",
    details: [
      "Developed a custom merch e-commerce platform with artist uploads and AI-assisted design flow.",
      "Reduced order delivery time from 5 to 3 days through backend optimization.",
      "Fulfilled 200+ orders with a 98% satisfaction rate and automated refund guarantees."
    ]
  },
  {
    icon: <GraduationCap className="w-7 h-7 text-primary" />,
    title: "Platform Engineer – MMU E-learning Rebuild",
    company: "Multimedia University",
    duration: "Mar 2025 – Jun 2025",
    details: [
      "Fully redesigned and rebuilt MMU's broken LMS using React, Supabase, and PWA tech.",
      "Cut operational costs by over KSh 300,000 yearly through free hosting and tools.",
      "Quadrupled user activity and reliability through UX fixes and performance tuning."
    ]
  },
  {
    icon: <Users className="w-7 h-7 text-primary" />,
    title: "Volunteer Frontend Developer – Tann Mann Gandhi Foundation",
    company: "Tann Mann Gandhi Foundation",
    duration: "Apr 2025 – Present",
    details: [
      "Contributed to the official foundation site by implementing responsive UI and accessibility updates.",
      "Helped improve navigation and layout, making the platform 40% faster on mobile.",
      "Supported a mission-driven team working on health, peace, and civic awareness."
    ]
  }
];

const WhereIveWorked = () => (
  <div className="relative w-full">
    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
    <div className="relative bg-gradient-to-br from-card via-card/95 to-card/90 rounded-2xl p-6 border border-border/50 backdrop-blur-sm shadow-2xl h-full flex flex-col">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-2">
          <Briefcase className="w-7 h-7 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Where I've Worked</h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
      </div>
      <div className="w-full flex-1 max-h-[340px] pr-2 overflow-y-auto scrollbar-hide">
        <div className="space-y-7">
          {workData.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="pt-1">{item.icon}</div>
              <div>
                <div className="font-semibold text-lg text-primary">{item.title}</div>
                <div className="text-sm text-muted-foreground font-medium mb-1">
                  {item.company}
                  {item.company && " · "}{item.duration}
                  {!item.company && item.duration}
                </div>
                <ul className="list-disc ml-5 mt-1 text-sm text-foreground space-y-1">
                  {item.details.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .scrollbar-hide {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE 10+ */
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }
        `}
      </style>
    </div>
  </div>
);

export default WhereIveWorked; 