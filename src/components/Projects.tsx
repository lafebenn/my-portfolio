import { useState } from "react";
import ProjectCard, { ProjectType } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Globe, Code2, Zap, Layers } from "lucide-react";

  const projects = [
    {
      title: "LTO Pipeline — SAM ROI Automation",
      description:
        "Python + Streamlit pipeline automating ROI extraction from ROAR and ELP documents for enterprise SAM engagements. Reduces a 10-hour manual analysis process to under 5 minutes per engagement — a 120x efficiency gain — with potential to save 8,000+ analyst hours annually across Anglepoint's 200+ client portfolio. Built for Anglepoint's intern LTO (License to Operate) competition.",
      image:
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop",
      type: "automation" as ProjectType,
      technologies: ["Python", "Streamlit", "Pandas", "SAM", "ITAM", "ROAR Methodology"],
      // githubUrl: "",  ← add after competition concludes
      featured: true,
    },
    {
      title: "Constitutional Leadership Audit",
      description:
        "Multi-method NLP research pipeline for the Romney Institute of Public Service and Ethics. Analyzed every U.S. presidential Inaugural Address and State of the Union paragraph-by-paragraph against Rosenbloom's Three Pillars of constitutional leadership — using LLM classification (OpenAI + Anthropic), vectorized sentence embeddings, and custom scoring rubrics. Outputs feeding a co-authored Academy of Management Perspectives paper in progress.",
      image: "https://images.unsplash.com/photo-1681487414316-ff3306bbbb2e?w=800&auto=format&fit=crop",
      type: "code" as ProjectType,
      technologies: ["Python", "NLP", "LLM Classification", "Embeddings", "Pandas", "OpenAI API", "Research"],
      liveUrl: "https://github.com/lafebenn/Leadership-Values-and-Integrity-Analysis",
      featured: true,
    },
    {
      title: "Bonfire INTEX — Full-Stack + ML",
      description: "Full-stack INTEX deployment: C# / .NET API (Bonfire.API), React and TypeScript frontend, PostgreSQL, Tableau, AWS workflows, and an ml-pipelines package with Jupyter notebooks for ML and data work — all in one monorepo. Live at bonfiresanctuary.org.",
      image: "https://images.unsplash.com/photo-1758272959860-a4d34d4910dd?w=800&auto=format&fit=crop",
      type: "code" as ProjectType,
      technologies: ["C#", ".NET", "TypeScript", "React", "PostgreSQL", "Jupyter", "ML Pipelines", "Tableau", "AWS"],
      githubUrl: "https://github.com/lafebenn/DEPLOYBonfire-Intex2026COPY",
      liveUrl: "https://www.bonfiresanctuary.org/",
      featured: true,
    },
    {
      title: "GlobalHub Platform",
      description: "Built and deployed a production-scale React frontend serving 10,000+ users as CTO. Managed the full lifecycle using Docker containers and AWS infrastructure (EC2, S3, Elastic Beanstalk), improving product adoption by 40%. Delivered AOM Copenhagen conference release under a Scrum sprint cycle.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      type: "website" as ProjectType,
      technologies: ["React", "AWS", "Docker", "Node.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://globalhub.byu.edu/",
      featured: true,
    },
    {
      title: "FocusFuel — Food & Mood Tracker",
      description:
        "Full-stack PERN app correlating nutrition and cognitive performance. 7-table PostgreSQL schema with Express + Node.js REST API, React + TypeScript frontend with Recharts visualizations and Framer Motion animations, and a Supabase-backed deployment. Tracks meals, mood, focus sessions, and surfaces trends over time.",
      image: "https://images.unsplash.com/photo-1564697364552-7f25dd160f2f?w=800&auto=format&fit=crop",
      type: "code" as ProjectType,
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "Recharts", "Framer Motion"],
      githubUrl: "https://github.com/lafebenn/focus-fuel-backend/tree/branch2",
      featured: true,
    },
    {
      title: "ML Fraud Detection Pipeline",
      description: "End-to-end CRISP-DM machine learning pipeline for fraud classification. Automated data wrangling, MLR, decision trees, ensemble methods (Random Forest, Boosting, Stacking), cross-validation, hyperparameter tuning, and feature selection — with a serialized joblib model served via FastAPI and a Supabase backend for live predictions.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop",
      type: "code" as ProjectType,
      technologies: ["Python", "Scikit-learn", "FastAPI", "Supabase", "Pandas", "Ensemble Methods", "joblib"],
      liveUrl: "https://github.com/lafebenn/ML-Model-IS455-PredictFraud",
    },
    {
      title: "IS 413 Full-Stack Web App",
      description: "Six-phase full-stack build with ASP.NET MVC (C#) and React: SQLite backend, paginated data tables, server-side filtering, a React Context-powered cart, CRUD admin panel, and REST API — wired end-to-end for IS 413.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
      type: "website" as ProjectType,
      technologies: ["ASP.NET MVC", "C#", ".NET", "React", "SQLite", "REST API", "Bootstrap"],
      liveUrl: "https://github.com/lafebenn/Mission11_Bennett",
    },
    {
      title: "AR Research Tools",
      description: "Engineering augmented reality tools using Unity and the XREAL SDK. Merges 3D-printed physical models with scalable digital environments for HCI research under Prof. James Gaskin at BYU Marriott — supporting AI and technology adoption studies.",
      image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800&auto=format&fit=crop",
      type: "code" as ProjectType,
      technologies: ["Unity", "XREAL SDK", "C#", "HCI", "AR/MR"],
    },
    {
      title: "KPMG-Sponsored INTEX — 4th Place",
      description: "My team built a full-stack AWS site for Ella Rises — a non-profit helping Latina young women in STEAM — with PostgreSQL, CRUD flows, Tableau dashboards, Python EDA, and UX-focused prototyping. Placed 4th overall in the KPMG-sponsored campus competition. (Deployed on AWS; public URL offline post-competition.)",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
      type: "website" as ProjectType,
      technologies: ["PostgreSQL", "CRUD flows", "Tableau", "Python EDA", "AWS", "GitHub"],
    },
    {
      title: "Outreach KPI Automation",
      description: "Directed data automation strategies for 100+ volunteers across 4 regions in Manaus, Brazil. Created Excel workflows to track performance metrics, resulting in a 20% boost in outreach KPIs.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop",
      type: "automation" as ProjectType,
      technologies: ["Excel", "VBA", "Data Analysis", "Process Automation"],
    },
    {
      title: "Boogle",
      description: "A personal side project — because sometimes you just need to build something weird. Boogle is exactly what it sounds like and nothing like what you'd expect.",
      image: "https://images.unsplash.com/photo-1537884944318-390069bb8665?w=800&auto=format&fit=crop",
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
