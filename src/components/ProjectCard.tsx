import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2, Globe, Zap } from "lucide-react";

export type ProjectType = "website" | "code" | "automation";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  type: ProjectType;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
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
  image,
  type,
  technologies,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) => {
  const TypeIcon = typeIcons[type];

  return (
    <article 
      className={`group relative bg-gradient-card rounded-xl border border-border/50 overflow-hidden transition-all duration-500 hover:border-border hover:glow-primary ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Image */}
      {image && (
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Type badge */}
        <div className="flex items-center gap-2 mb-4">
          <Badge variant={typeBadgeVariants[type]} className="flex items-center gap-1.5">
            <TypeIcon className="w-3 h-3" />
            {typeLabels[type]}
          </Badge>
          {featured && (
            <Badge variant="outline" className="border-primary/30 text-primary">
              Featured
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
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

        {/* Links */}
        <div className="flex items-center gap-3">
          {liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant="ghost" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
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
