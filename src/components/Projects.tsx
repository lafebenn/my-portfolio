import { useState } from "react";
import ProjectCard, { ProjectType } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Globe, Code2, Zap, Layers } from "lucide-react";

  const projects = [
    {
      title: "INTEX (4th Place)",
      description: "My team and I built this full-stack AWS site for Ella Rises with PostgreSQL, CRUD flows, dashboards, and UX-focused prototyping. Ella Rises is a non-profit organization that provides opportunities for latina young women to learn and grow in STEAM fields while simultaneously embracing their culture and building a community and supporting each other.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop", // Business/Analytics vibe
      type: "website" as ProjectType,
      technologies: ["PostgreSQL", "CRUD flows", "Tableau", "Python EDA", "AWS", "GitHub"],
      liveUrl: "https://3-303er.org/",
      featured: true,
    },
      {
        title: "GlobalHub Platform",
        description: "Built and deployed a production-scale React frontend serving 10K+ users. Managed the full lifecycle using Docker containers and AWS infrastructure, improving product adoption by 40%.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // World Map vibe
        type: "website" as ProjectType,
        technologies: ["React", "AWS", "Docker", "Node.js", "GitHub", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://globalhub.byu.edu/", 
        featured: true,
      },
      {
        title: "AR Research Tools",
        description: "Engineering augmented reality tools using Unity and the XREAL SDK. Merges 3D-printed physical models with scalable digital environments for HCI research at BYU.",
        image: "https://images.unsplash.com/photo-1664351363957-b88337cddf48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // AR/VR vibe
        type: "code" as ProjectType,
        technologies: ["Unity", "XREAL SDK", "C#", "HCI"],
        featured: true,
      },
      {
        title: "Secure Authentication System",
        description: "A robust login system implementing real-time authentication. Features encrypted password validation and secure user data management backed by PostgreSQL.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop", // Code/Security vibe
        type: "code" as ProjectType,
        technologies: ["PostgreSQL", "Node.js", "SQL", "Security"],
      },
      {
        title: "AWS Linux Deployment",
        description: "Infrastructure project involving the deployment of interactive applications via command-line SSH to Linux-based AWS EC2 instances.",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Linux/Ubuntu vibe
        type: "automation" as ProjectType,
        technologies: ["AWS EC2", "AWS Elastic Beanstalk", "Linux", "Bash", "SSH"],
      },
      {
        title: "Outreach KPI Automation",
        description: "Directed data automation strategies for 100+ volunteers. Created workflows to track performance metrics, resulting in a 20% boost in outreach KPIs.",
        image: "https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "automation" as ProjectType,
        technologies: ["Excel", "Data Analysis", "Process Automation"],
      },
      {
        title: "Whitmore UX Optimization",
        description: "Optimized user experience for event management platforms using HTML/CSS, directly contributing to a 120% increase in event engagement.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Web design vibe
        type: "website" as ProjectType,
        technologies: ["HTML", "CSS", "UI/UX", "Logistics"],
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
