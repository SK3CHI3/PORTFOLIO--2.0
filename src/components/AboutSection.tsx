
import React from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

const AboutSection = () => (
  <Card className="mx-auto w-full max-w-lg p-0 shadow-lg bg-card/95">
    <CardHeader>
      <CardTitle className="text-xl font-bold">About Me</CardTitle>
      <CardDescription>
        Passionate Full-Stack Engineer specializing in beautiful, scalable web experiences.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="my-2 mb-3">
        <p className="text-sm text-muted-foreground">
          Hi! I’m Omollo Victor (he/him), founder of Brandy, based in Nairobi. I love shipping impactful projects with clean UI. I solve problems with:
        </p>
        <ul className="mt-3 text-sm list-disc list-inside space-y-1">
          <li>Modern JS/TS (React, Node.js, Next.js)</li>
          <li>Design (Figma, Tailwind CSS, accessibility-first)</li>
          <li>Cloud & automation (AWS, CI/CD)</li>
        </ul>
        <p className="mt-3 text-sm">
          I’m always eager to learn & collaborate. Let’s build something together!
        </p>
      </div>
      <div className="border-t border-border pt-2 mt-2 text-xs text-muted-foreground text-center">
        Omollo Victor — Full-Stack Engineer • Nairobi, Kenya
      </div>
    </CardContent>
  </Card>
);

export default AboutSection;
