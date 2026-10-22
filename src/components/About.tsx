import { Badge } from "@/components/ui/badge";
import FadeContent from "@/components/bits/FadeContent/FadeContent";

const skillCategories = [
  {
    name: "SAM & product",
    skills: ["ServiceNow SAM Pro", "Flexera One", "IBM ILMT", "Jira", "Scrum / Agile"],
  },
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "C#", "SQL"],
  },
  {
    name: "Engineering",
    skills: ["React", ".NET", "AWS", "Docker", "PostgreSQL"],
  },
  {
    name: "Data",
    skills: ["Pandas", "Scikit-learn", "Tableau", "Power BI"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <FadeContent duration={800} className="max-w-5xl mx-auto relative space-y-16">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">About</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Now
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Information Systems at BYU, expected April 2027. I&apos;m targeting{" "}
              <span className="text-foreground font-medium">consulting and product management</span>
              , keeping a 3.9 GPA, and shipping things while I&apos;m still in school.
            </p>
          </div>

          <div className="relative md:sticky md:top-28">
            <div className="relative rounded-2xl border border-border/50 overflow-hidden max-w-[280px]">
              <img
                src="/profile-pic.jpg"
                alt="William Bennett outdoors in the Utah mountains"
                width={400}
                height={400}
                className="w-full aspect-square object-cover object-[center_20%]"
              />
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gradient">10,000+</span>
              <span className="text-sm text-muted-foreground">users on production apps</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Work</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border/50 bg-gradient-card p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Anglepoint</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Service Delivery Consultant, summer 2026. SAM and ITAM for Fortune 500 clients — about $2M in identified licensing exposure.
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-gradient-card p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">GlobalHub</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                CTO of a BYU Marriott platform before finishing undergrad. Production React on AWS, 10,000+ users, 40% month-over-month adoption after launch.
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-gradient-card p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Research</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Research associate co-authoring an Academy of Management Perspectives paper on constitutional leadership, using NLP on presidential rhetoric.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Off the clock</h3>
          <div className="space-y-3 text-muted-foreground max-w-3xl">
            <p>
              Two years in Manaus, Brazil — fluent in Portuguese, once on local TV for being comically pale, came home with a parasite as a souvenir.
            </p>
            <p>
              Eagle Scout (campfire <em>and</em> AWS deploys) and a California flag football state champion, which I bring up at every opportunity.
            </p>
            <p>
              Trails, a court, or the kitchen trying to out-cook yesterday. Deep in the Cosmere — Stormlight opinions welcome. I know everyone at the party and will still end up in the corner petting the dog.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Tools</h3>
          <div className="space-y-4">
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
      </FadeContent>
    </section>
  );
};

export default About;
