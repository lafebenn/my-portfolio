import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    name: "SAM & ITAM Tooling",
    skills: ["ServiceNow SAM Pro", "Flexera One", "IBM ILMT"],
  },
  {
    name: "Languages",
    skills: ["Python", "C#", "JavaScript / TypeScript", "SQL", "HTML / CSS", "Bash", "VBA"],
  },
  {
    name: "Frontend & Backend",
    skills: ["React", "Node.js", ".NET / ASP.NET MVC", "REST APIs", "Tailwind CSS"],
  },
  {
    name: "Cloud & Infrastructure",
    skills: ["AWS (EC2, S3, Elastic Beanstalk, RDS)", "Docker", "Linux"],
  },
  {
    name: "Data & Analytics",
    skills: ["Pandas", "Scikit-learn", "Tableau", "Power BI", "Excel"],
  },
  {
    name: "Other",
    skills: ["Unity (C#)", "XREAL SDK (AR/MR)", "PostgreSQL", "Git / GitHub", "Jira", "Scrum / Agile"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-4xl mx-auto relative">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Content */}
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                I'm an Information Systems student at BYU who somehow ended up as a CTO before finishing
                undergrad, a research associate co-authoring academic papers, and a Service Delivery
                Consultant at Anglepoint — all while maintaining a 3.9 GPA and an unreasonable number of
                browser tabs.
              </p>
              <p>
                At Anglepoint I work on software asset management (SAM) and IT asset management (ITAM)
                engagements for Fortune 500 clients, using ServiceNow SAM Pro and Flexera One to analyze
                Microsoft, Oracle, and IBM licensing positions.
              </p>
              <p>
                My work spans full-stack development (React, C#/.NET, Node.js), cloud infrastructure 
                (AWS, Docker, Linux), machine learning pipelines (Python, Scikit-learn), NLP research for the 
                Romney Institute, and AR tooling in Unity. I've shipped production apps to 10K+ users, 
                placed 4th in a KPMG-sponsored case competition, and built fraud detection models — 
                sometimes all in the same semester.
              </p>
              <p>
                I lived in Manaus, Brazil for two years, where I became fluent in Portuguese, appeared 
                on local TV for being comically pale, and came home with a parasite as a souvenir. I'm 
                also an Eagle Scout (yes, I can start a campfire <em>and</em> deploy to AWS) and a 
                California flag football state champion, which I bring up at every opportunity.
              </p>
              <p>
                When I'm not writing code, you'll find me on a trail, on a court, or in the kitchen 
                trying to out-cook yesterday. I'm deep into the Cosmere right now — if you have 
                Stormlight opinions, we should talk. I'm the kind of person who knows everyone at the 
                party but will still end up in the corner petting the dog.
              </p>
            </div>

            {/* Skills by category */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">
                Technologies I work with
              </h3>
              {skillCategories.map((category) => (
                <div key={category.name}>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                    {category.name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="tech" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="md:col-span-2">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-card border border-border/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="absolute inset-4 rounded-xl border border-border/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gradient mb-2">10,000+</div>
                    <div className="text-muted-foreground text-sm">Users — Production Apps Deployed</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
