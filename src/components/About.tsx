import { Badge } from "@/components/ui/badge";
import FadeContent from "@/components/bits/FadeContent/FadeContent";
import CountUp from "@/components/bits/CountUp/CountUp";
import ScrollReveal from "@/components/bits/ScrollReveal/ScrollReveal";
import TrueFocus from "@/components/bits/TrueFocus/TrueFocus";
import AnimatedContent from "@/components/bits/AnimatedContent/AnimatedContent";
import ShinyText from "@/components/bits/ShinyText/ShinyText";

const skillCategories = [
  {
    name: "Customer & delivery",
    skills: ["Enterprise customer support", "Stakeholder communication", "Root-cause analysis", "Product adoption", "Agile / Scrum"],
  },
  {
    name: "Enterprise platforms",
    skills: ["ServiceNow SAM Pro", "Flexera One", "Entitlement reconciliation", "ELP analysis", "IBM ILMT"],
  },
  {
    name: "AI & data",
    skills: ["LLM classification", "Prompt-based automation", "Sentence embeddings", "Pandas", "Scikit-learn"],
  },
  {
    name: "Development & cloud",
    skills: ["Python", "C#", "ASP.NET MVC", "React", "TypeScript", "SQL", "AWS", "Docker", "Git"],
  },
  {
    name: "Analysis & reporting",
    skills: ["Excel", "PowerPoint", "Tableau", "Power BI", "Technical documentation"],
  },
  {
    name: "Languages",
    skills: ["English", "Portuguese", "Spanish"],
  },
];

const workCards = [
  {
    name: "Anglepoint",
    role: "Service Delivery Consultant · Summer 2026",
    bullets: [
      "99% faster data processing from a Python and Streamlit pipeline, cutting 10 hours to under 5 minutes.",
      "$2M a year in savings identified by automating licensing analysis across 10+ Fortune 500 engagements.",
      "7 publisher environments supported in ServiceNow SAM Pro and Flexera One, removing data-quality blockers.",
    ],
  },
  {
    name: "GlobalHub",
    role: "CTO / Interim CEO · Apr–Aug 2025",
    bullets: [
      "40% increase in product adoption from leading a cross-functional team through a customer-facing release.",
      "10,000+ users served by a production app deployed on AWS and Docker.",
      "Shipped 8 features as 1 of 2 engineers, managing a 15-person team and liaising with 5 cofounders and partners.",
    ],
  },
  {
    name: "Research",
    role: "Research Associate · Romney Institute",
    bullets: [
      "295+ documents scored in 10 hours via AI classification, replacing 6 weeks of manual work for a co-authored paper.",
    ],
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
              Information Systems at BYU, expected April 2027, with an emphasis in{" "}
              <span className="text-foreground font-medium">tech consulting</span>. Same pattern
              as the work: I learn it, then I use it. 3.9 major GPA, and I&apos;m still shipping
              while I&apos;m in school.
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
              <CountUp
                to={10000}
                separator=","
                suffix="+"
                duration={1.6}
                className="text-3xl font-bold text-gradient"
              />
              <span className="text-sm text-muted-foreground">users on production apps</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Work</h3>
          <div className="mb-4 max-w-3xl work-focus">
            <TrueFocus
              sentence="Learn it — Use it — Ship it"
              separator=" — "
              manualMode={false}
              blurAmount={4}
              borderColor="#88BDF2"
              glowColor="rgba(136, 189, 242, 0.35)"
              animationDuration={0.55}
              pauseBetweenAnimations={1.1}
              focusStyle="brackets"
              className="!justify-start"
            />
          </div>
          <ScrollReveal
            as="p"
            splitBy="words"
            effect="rise"
            mode="enter"
            baseOpacity={0.15}
            enableBlur={false}
            stagger={0.04}
            duration={0.65}
            textClassName="text-muted-foreground max-w-2xl"
            containerClassName="mb-6 max-w-2xl"
          >
            I taught myself how to learn anything efficiently, and that is the thread through
            every role below — pick up the domain fast, then put it to work for real people.
          </ScrollReveal>
          <AnimatedContent
            distance={28}
            duration={0.7}
            ease="power2.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.15}
            stagger={0.12}
            className="grid sm:grid-cols-3 gap-6"
          >
            {workCards.map((card) => (
              <div
                key={card.name}
                className="rounded-xl border border-border/50 bg-gradient-card p-5 h-full"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                  {card.name}
                </p>
                <p className="text-xs text-muted-foreground mb-3">{card.role}</p>
                <ul className="space-y-2.5">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm text-muted-foreground leading-relaxed pl-3 relative before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-primary"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </AnimatedContent>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Off the clock</h3>
          <div className="space-y-3 text-muted-foreground max-w-3xl">
            <p>
              Two years in Manaus, Brazil — fluent in Portuguese, once on local TV for being comically pale, came home with a parasite as a souvenir.
            </p>
            <p>
              Eagle Scout at 14, and a California flag football state champion. I like nights around a fire and days at mountain lakes or the beach.
            </p>
            <p>
              The kitchen, trying to out-cook yesterday. Deep in the Cosmere — Stormlight opinions welcome. I know everyone at the party and will still end up in the corner petting the dog.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            <ShinyText
              text="Tools"
              color="hsl(174 28% 94%)"
              shineColor="#88BDF2"
              speed={2.4}
              shineWidth={28}
              className="text-2xl sm:text-3xl font-bold"
            />
          </h3>
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
