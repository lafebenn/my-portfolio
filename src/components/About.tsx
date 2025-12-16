import { Badge } from "@/components/ui/badge";

const skills = [
  "React",
  "Node.js",
  "Python", 
  "AWS (EC2, S3, Elastic Beanstalk)", 
  "Docker",
  "PostgreSQL",
  "Linux / Bash",
  "Unity (C#)",
  "AR / MR",
  "XREAL SDK",
  "TypeScript",
  "SQL",
  "Git",
  "GitHub",
  "Tableau",
  "Power BI",
  "REST APIs",
  "HTML/CSS",
  "Javascript",
  "Excel",
  "VBA"
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
                I am an Information Systems student and Full-Stack Developer driven by a curiosity for how 
                complex systems scale. My background bridges the gap between technical execution and strategic 
                leadership. From engineering AR tools for HCI research at BYU to serving as CTO for 
                a platform serving 10,000+ users, I thrive in environments that require both deep technical 
                knowledge and big-picture thinking.
              </p>
              <p>
                I specialize in building secure, production-grade applications using React, Node.js, and AWS. 
                Beyond just writing code, I have experience deploying containerized environments with Docker [cite: 16, 28] 
                and managing cloud infrastructure on Linux-based systems.
              </p>
              <p>
                When I'm not developing, I am likely analyzing data trends with Python and Tableau, 
                exploring new automation workflows, or refining my Portuguese. I believe in building 
                solutions that are not just functional, but scalable, secure, and intuitive.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">
                Technologies I work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="tech" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="md:col-span-2">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-card border border-border/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="absolute inset-4 rounded-xl border border-border/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gradient mb-2">15,000+</div>
                    <div className="text-muted-foreground text-sm">Clients Served with Digital Solutions</div>
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
