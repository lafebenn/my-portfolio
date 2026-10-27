import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import FadeContent from "@/components/bits/FadeContent/FadeContent";
import GradientText from "@/components/bits/GradientText/GradientText";
import Magnet from "@/components/bits/Magnet/Magnet";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <FadeContent duration={800} className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let&apos;s{" "}
            <GradientText
              colors={["#88BDF2", "#BDDFDC", "#6A89A7", "#88BDF2"]}
              animationSpeed={6}
              direction="diagonal"
              className="inline-block"
            >
              Connect
            </GradientText>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a project in mind or just want to chat? I&apos;m always open to discussing
            new opportunities and interesting ideas.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <Magnet padding={56} magnetStrength={2.2} maxOffset={16}>
            <Button variant="hero" size="lg" asChild className="group">
              <a href="mailto:lafebenn@byu.edu">
                <Mail className="w-5 h-5" />
                lafebenn@byu.edu
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </Magnet>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://github.com/lafebenn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </a>
          <div className="w-px h-4 bg-border" />
          <a 
            href="https://www.linkedin.com/in/willbennettbyu/"
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </FadeContent>
    </section>
  );
};

export default Contact;
