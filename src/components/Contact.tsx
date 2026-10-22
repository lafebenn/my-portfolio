import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import FadeContent from "@/components/bits/FadeContent/FadeContent";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <FadeContent duration={800} className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to discussing 
            new opportunities and interesting ideas.
          </p>
        </div>

        {/* Email CTA */}
        <div className="mb-12">
          <Button variant="hero" size="lg" asChild className="group">
            <a href="mailto:lafebenn@byu.edu">
              <Mail className="w-5 h-5" />
              lafebenn@byu.edu
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
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
