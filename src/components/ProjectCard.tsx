import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2, Globe, Zap, Gamepad2 } from "lucide-react";

export type ProjectType = "website" | "code" | "automation";

interface ProjectCardProps {
  title: string;
  description: string;
  type: ProjectType;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  /** Internal link to a playable app hosted on this site (e.g. /games/mahjong). */
  playUrl?: string;
  /**
   * Shown in the links row. Use this to explain, in one line, why a card has no
   * repo link. A card that says why there is no link is credible; a card with a
   * link that 404s is not.
   */
  linkNote?: string;
}

const typeIcons = {
  website: Globe,
  code: Code2,
  automation: Zap,
};

const typeBadgeVariants = {
  website: "website" as const,
  code: "code" as const,
  automation: "automation" as const,
};

const typeLabels = {
  website: "Website",
  code: "Code Project",
  automation: "Automation",
};

const ProjectCard = ({
  title,
  description,
  type,
  technologies,
  liveUrl,
  githubUrl,
  playUrl,
  linkNote,
}: ProjectCardProps) => {
  const TypeIcon = typeIcons[type];
  const repoUrl =
    githubUrl ?? (liveUrl?.includes("github.com") ? liveUrl : undefined);
  const siteUrl =
    liveUrl && !liveUrl.includes("github.com") ? liveUrl : undefined;

  return (
    <article className="group relative h-full flex flex-col bg-gradient-card rounded-xl border border-border/50 overflow-hidden transition-all duration-500 hover:border-border hover:glow-primary">
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Type badge */}
        <div className="flex items-center gap-2 mb-4">
          <Badge variant={typeBadgeVariants[type]} className="flex items-center gap-1.5">
            <TypeIcon className="w-3 h-3" aria-hidden="true" />
            {typeLabels[type]}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links. Every link carries the project name in its accessible name —
            a screen-reader user listing links should not hear "GitHub" ten
            times with no way to tell the projects apart. */}
        <div className="flex items-center gap-3 flex-wrap mt-auto">
          {playUrl && (
            <Button variant="default" size="sm" asChild>
              <a href={playUrl} aria-label={`Play ${title}`}>
                <Gamepad2 className="w-4 h-4" aria-hidden="true" />
                Play Game
              </a>
            </Button>
          )}
          {repoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} source code on GitHub (opens in a new tab)`}
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                GitHub
              </a>
            </Button>
          )}
          {siteUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit the live ${title} site (opens in a new tab)`}
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Visit site
              </a>
            </Button>
          )}
          {linkNote && (
            <p className="text-xs text-muted-foreground italic">{linkNote}</p>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-px bg-gradient-to-r from-primary/10 via-transparent to-accent/10 rounded-xl" />
      </div>
    </article>
  );
};

export default ProjectCard;
