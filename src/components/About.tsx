import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
  "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs",
  "n8n", "Make", "Zapier", "Git", "Docker", "AWS"
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
                I'm a passionate developer and automation specialist with a love for building 
                elegant solutions to complex problems. With experience across the full stack, 
                I create applications that are both beautiful and performant.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open source, 
                or finding ways to automate repetitive tasks. I believe in writing clean, 
                maintainable code and creating experiences that users love.
              </p>
              <p>
                Currently focused on building AI-powered tools and automation workflows 
                that help businesses scale efficiently.
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
                    <div className="text-6xl font-bold text-gradient mb-2">5+</div>
                    <div className="text-muted-foreground text-sm">Years of Experience</div>
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
