import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import BlurText from "@/components/bits/BlurText/BlurText";
import ClientDarkVeil from "@/components/bits/DarkVeil/ClientDarkVeil";
import Magnet from "@/components/bits/Magnet/Magnet";
import StarBorder from "@/components/bits/StarBorder/StarBorder";

const contactLinkClass =
  "inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-secondary/50 border border-border/50 hover:bg-secondary hover:border-border transition-all duration-300 group text-sm";
const contactTextClass =
  "text-muted-foreground group-hover:text-foreground transition-colors";

const Hero = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-15">
        <ClientDarkVeil
          hueShift={210}
          noiseIntensity={0.02}
          speed={0.2}
          warpAmount={0.08}
          resolutionScale={1}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 min-h-screen grid lg:grid-cols-[7fr_3fr] gap-10 lg:gap-12 items-center pt-24 pb-20 lg:py-0">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-5 animate-fade-in backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Targeting consulting &amp; product management roles
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.35rem] font-bold mb-3 leading-tight animate-fade-in">
            Hi, I&apos;m{" "}
            {reduceMotion ? (
              <span className="text-gradient">William Bennett</span>
            ) : (
              <BlurText
                as="span"
                text="William Bennett"
                className="text-gradient"
                animateBy="words"
                delay={80}
                stepDuration={0.28}
                direction="top"
              />
            )}
          </h1>

          <p
            className="text-base sm:text-lg text-foreground font-medium mb-3 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            BYU Information Systems, expected April 2027
          </p>

          <p
            className="text-sm text-primary mb-5 animate-fade-in"
            style={{ animationDelay: "0.12s" }}
          >
            10,000+ users in production
          </p>

          <p
            className="text-base sm:text-xl text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            I&apos;ve taught myself how to{" "}
            <span className="text-foreground font-medium">learn anything efficiently</span>, and
            I&apos;ve taken multiple products from an idea to adoption at scale. Tech consulting
            is where that shows up: I learn the domain, then help the team get more out of what
            they already have.
          </p>

          <div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-7 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <a href="mailto:lafebenn@byu.edu" className={contactLinkClass}>
              <Mail
                className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors"
                aria-hidden="true"
              />
              <span className={contactTextClass}>lafebenn@byu.edu</span>
            </a>
            <a
              href="https://github.com/lafebenn"
              target="_blank"
              rel="noopener noreferrer"
              className={contactLinkClass}
            >
              <Github
                className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors"
                aria-hidden="true"
              />
              <span className={`${contactTextClass} hidden sm:inline`}>github.com/lafebenn</span>
              <span className={`${contactTextClass} sm:hidden`}>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/willbennettbyu/"
              target="_blank"
              rel="noopener noreferrer"
              className={contactLinkClass}
            >
              <Linkedin
                className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors"
                aria-hidden="true"
              />
              <span className={`${contactTextClass} hidden sm:inline`}>
                linkedin.com/in/willbennettbyu
              </span>
              <span className={`${contactTextClass} sm:hidden`}>LinkedIn</span>
            </a>
          </div>

          <div
            className="flex flex-row items-center justify-center lg:justify-start gap-3 animate-fade-in"
            style={{ animationDelay: "0.25s" }}
          >
            <Magnet padding={48} magnetStrength={2.4} maxOffset={18} disabled={reduceMotion}>
              <Button variant="default" size="lg" onClick={scrollToProjects}>
                View My Work
              </Button>
            </Magnet>
            <StarBorder
              as="a"
              href="#contact"
              color="#88BDF2"
              trailColor="#6A89A7"
              backgroundColor="transparent"
              textColor="hsl(var(--foreground))"
              borderColor="hsl(var(--border))"
              thickness={1.5}
              radius={999}
              duration={8}
              glow={0.35}
              sparkle={false}
              theme="dark"
              className="inline-flex items-center justify-center h-11 px-8 text-sm font-medium"
            >
              Get In Touch
            </StarBorder>
          </div>
        </div>

        <div className="hidden lg:flex justify-end animate-fade-in" style={{ animationDelay: "0.12s" }}>
          <div className="relative w-full max-w-[420px]">
            <div className="absolute -inset-6 rounded-3xl bg-primary/15 blur-3xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-border/50">
              <img
                src="/headshot-studio.png"
                alt="William Bennett"
                width={682}
                height={1024}
                className="w-full aspect-[3/4] object-cover object-[20%_top]"
              />
              <div className="absolute inset-0 hero-portrait-fade pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="lg:hidden mx-auto w-full max-w-sm animate-fade-in" style={{ animationDelay: "0.12s" }}>
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-[0_0_60px_-20px_hsl(var(--primary)/0.45)]">
            <img
              src="/headshot-studio.png"
              alt="William Bennett"
              width={682}
              height={1024}
              className="w-full aspect-[3/4] object-cover object-top"
            />
          </div>
        </div>
      </div>

      <button
        onClick={scrollToProjects}
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer z-10 hidden lg:block"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" aria-hidden="true" />
      </button>
    </section>
  );
};

export default Hero;
