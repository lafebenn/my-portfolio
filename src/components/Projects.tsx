import { useState } from "react";
import ProjectCard, { ProjectType } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Globe, Code2, Zap, Layers } from "lucide-react";
import FadeContent from "@/components/bits/FadeContent/FadeContent";
import SpotlightCard from "@/components/bits/SpotlightCard/SpotlightCard";

// Rule: every project listed here must have a working link — a public repo, a
// live site, or a demo hosted on this domain — or an honest one-line note
// saying why it doesn't. Verify signed out before adding a URL.
const projects = [
  {
    title: "American Mahjong — Solo vs. 3 AI Bots",
    description:
      "Playable American Mah Jongg against three AI bots, with a from-scratch engine for the 2026 NMJL card. All client-side — they beat me more often than I'd like.",
    type: "code" as ProjectType,
    technologies: ["React", "TypeScript", "Game AI", "Tailwind CSS"],
    playUrl: "/games/mahjong/",
    // githubUrl intentionally omitted: lafebenn/emerald-ace-mahjong is private,
    // so the link 404s signed out. The Play Game link above is the working
    // link for this card. Add the repo back only once it returns 200 to a
    // logged-out visitor.
  },
  {
    title: "LTO Pipeline — SAM ROI Automation",
    description:
      "Python pipeline that pulls ROI figures out of SAM engagement docs. Turns a 10-hour analysis into under five minutes.",
    type: "automation" as ProjectType,
    technologies: ["Python", "Streamlit", "Pandas", "SAM"],
    linkNote: "Internal Anglepoint tooling. Repository not public.",
  },
  {
    title: "Constitutional Leadership Audit",
    description:
      "NLP pipeline scoring 295+ presidential addresses on constitutional leadership. Feeds a co-authored Academy of Management paper in progress.",
    type: "code" as ProjectType,
    technologies: ["Python", "NLP", "OpenAI API", "Pandas"],
    githubUrl: "https://github.com/lafebenn/Leadership-Values-and-Integrity-Analysis",
  },
  {
    title: "Bonfire INTEX — Full-Stack + ML",
    description:
      "Case-management platform for a trafficking-survivor nonprofit, now live. Full-stack C# / React / Postgres, shipped as a competition build.",
    type: "code" as ProjectType,
    technologies: ["C#", "React", "PostgreSQL", "AWS"],
    githubUrl: "https://github.com/lafebenn/DEPLOYBonfire-Intex2026COPY",
    liveUrl: "https://www.bonfiresanctuary.org/",
  },
  {
    title: "GlobalHub Platform",
    description:
      "BYU Marriott international-business platform I led as CTO. 10,000+ users on AWS; adoption up 40% month over month after launch.",
    type: "website" as ProjectType,
    technologies: ["React", "AWS", "Docker", "TypeScript"],
    liveUrl: "https://globalhub.byu.edu/",
  },
  {
    title: "FocusFuel — Food & Mood Tracker",
    description:
      "PERN app that charts what you eat against how well you focus. Coursework build, no production users.",
    type: "code" as ProjectType,
    technologies: ["React", "Node.js", "PostgreSQL", "Express"],
    githubUrl: "https://github.com/lafebenn/focus-fuel-backend/tree/branch2",
  },
  {
    title: "ML Fraud Detection Pipeline",
    description:
      "CRISP-DM fraud classifier comparing five model families. Winning model served live through FastAPI.",
    type: "code" as ProjectType,
    technologies: ["Python", "Scikit-learn", "FastAPI", "Pandas"],
    githubUrl: "https://github.com/lafebenn/ML-Model-IS455-PredictFraud",
  },
  {
    title: "IS 413 Full-Stack Web App",
    description:
      "Bookstore app built end-to-end in six phases. ASP.NET, React, cart, admin CRUD, REST API.",
    type: "website" as ProjectType,
    technologies: ["ASP.NET MVC", "C#", "React", "SQLite"],
    githubUrl: "https://github.com/lafebenn/Mission11_Bennett",
  },
  {
    title: "KPMG-Sponsored INTEX — 4th Place",
    description:
      "Site and data work for Ella Rises, a STEAM nonprofit. 4th of 40+ in a KPMG-sponsored competition.",
    type: "website" as ProjectType,
    technologies: ["PostgreSQL", "Tableau", "AWS", "Python"],
    githubUrl: "https://github.com/micdai000/INTEX",
    linkNote: "Team repo. Deployed URL offline post-competition.",
  },
  {
    title: "Boogle",
    description:
      "A parody search engine in plain HTML, CSS, and JavaScript. No framework, no build step.",
    type: "code" as ProjectType,
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/lafebenn/boogle",
  },
];

const filters: { label: string; value: ProjectType | "all"; icon: React.ElementType }[] = [
  { label: "All", value: "all", icon: Layers },
  { label: "Websites", value: "website", icon: Globe },
  { label: "Code", value: "code", icon: Code2 },
  { label: "Automations", value: "automation", icon: Zap },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 scroll-mt-24">
      <FadeContent duration={800} className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ten projects, every one with a working link. What it does, what it is
            built on, and what came of it.
          </p>
        </div>

        {/* Filters. aria-pressed matters here: without it the active filter is
            conveyed by colour alone. */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map(({ label, value, icon: Icon }) => (
            <Button
              key={value}
              variant={activeFilter === value ? "default" : "glass"}
              size="sm"
              onClick={() => setActiveFilter(value)}
              className="gap-2"
              aria-pressed={activeFilter === value}
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
              {label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          aria-live="polite"
        >
          {filteredProjects.map((project, index) => (
            <SpotlightCard
              key={project.title}
              className="animate-scale-in"
              spotlightColor="rgba(136, 189, 242, 0.18)"
            >
              <ProjectCard {...project} />
            </SpotlightCard>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </FadeContent>
    </section>
  );
};

export default Projects;
