import { useState } from "react";
import ProjectCard, { ProjectType } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Globe, Code2, Zap, Layers } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payments via Stripe, and an intuitive admin dashboard for managing products and orders.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    type: "website" as ProjectType,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Lead Generation Automation",
    description: "An intelligent automation pipeline that scrapes LinkedIn, enriches data with external APIs, and syncs qualified leads directly to your CRM.",
    type: "automation" as ProjectType,
    technologies: ["n8n", "Python", "OpenAI", "Airtable"],
    githubUrl: "https://github.com",
  },
  {
    title: "Portfolio Dashboard",
    description: "Real-time stock portfolio tracker with interactive charts, performance analytics, and customizable alerts for price movements.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop",
    type: "website" as ProjectType,
    technologies: ["Next.js", "TailwindCSS", "Chart.js", "API"],
    liveUrl: "https://example.com",
  },
  {
    title: "CLI Task Manager",
    description: "A powerful command-line tool for managing tasks and projects, featuring Kanban boards, time tracking, and Git integration.",
    type: "code" as ProjectType,
    technologies: ["Rust", "SQLite", "Git"],
    githubUrl: "https://github.com",
  },
  {
    title: "Social Media Scheduler",
    description: "Automated content scheduling system that posts to multiple platforms, analyzes engagement, and suggests optimal posting times using ML.",
    type: "automation" as ProjectType,
    technologies: ["Make", "Python", "OpenAI", "Buffer API"],
    githubUrl: "https://github.com",
  },
  {
    title: "Restaurant Booking App",
    description: "Mobile-first booking platform for restaurants with real-time availability, waitlist management, and integrated payment processing.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
    type: "website" as ProjectType,
    technologies: ["React Native", "Firebase", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
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

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my work spanning web development, automation systems, and open-source contributions.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map(({ label, value, icon: Icon }) => (
            <Button
              key={value}
              variant={activeFilter === value ? "default" : "glass"}
              size="sm"
              onClick={() => setActiveFilter(value)}
              className="gap-2"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
