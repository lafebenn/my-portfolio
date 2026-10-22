import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Mail, Linkedin, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const skills: { label: string; items: string }[] = [
  { label: "Customer & Delivery", items: "Enterprise customer support, stakeholder communication, root-cause analysis, product adoption, Agile/Scrum" },
  { label: "Enterprise SaaS Platforms", items: "ServiceNow SAM Pro, Flexera One, entitlement reconciliation, ELP analysis, data mapping, IBM ILMT" },
  { label: "AI & Data Tooling", items: "LLM classification pipelines, prompt-based automation, sentence embeddings, Python (Pandas, Scikit-learn)" },
  { label: "Development & Cloud", items: "Python, C#, ASP.NET MVC, React, TypeScript, SQL, AWS (EC2/S3), Docker, Git" },
  { label: "Analysis & Reporting", items: "Excel (Advanced), PowerPoint, SharePoint, Tableau, Power BI, SQL, technical documentation" },
  { label: "Languages", items: "English (native), Portuguese (fluent), Spanish (conversational)" },
];

const experience: { title: string; org: string; date: string; bullets: string[] }[] = [
  {
    title: "Technical Portfolio Advisor",
    org: "BYU Marriott School of Business, Provo, UT",
    date: "Sep 2026 – Present",
    bullets: [
      "Advise students on technical portfolio development within BYU's 600+ student Information Systems program.",
      "Manage the program's technical project portfolio while building internal tooling and advising faculty.",
    ],
  },
  {
    title: "Service Delivery Consultant",
    org: "Anglepoint, Lindon, UT",
    date: "May 2026 – Aug 2026",
    bullets: [
      "99% faster data processing from a Python and Streamlit pipeline, cutting 10 hours to under 5 minutes.",
      "$2M a year in savings identified by automating licensing analysis across 10+ Fortune 500 engagements.",
      "7 publisher environments supported in ServiceNow SAM Pro and Flexera One, removing data-quality blockers.",
    ],
  },
  {
    title: "Research Associate",
    org: "Romney Institute, Brigham Young University, Provo, UT",
    date: "Jan 2026 – May 2026",
    bullets: [
      "295+ documents scored in 10 hours via AI classification, replacing 6 weeks of manual work for a co-authored paper.",
    ],
  },
  {
    title: "CTO / Interim CEO",
    org: "GlobalHub, Provo, UT",
    date: "Apr 2025 – Aug 2025",
    bullets: [
      "40% increase in product adoption from leading a cross-functional team through a customer-facing release.",
      "10,000+ users served by a production app deployed on AWS and Docker.",
      "Shipped 8 features as 1 of 2 engineers, managing a 15-person team and liaising with 5 cofounders and partners.",
    ],
  },
  {
    title: "Volunteer Representative",
    org: "Church of Jesus Christ of Latter-day Saints, Manaus, Brazil",
    date: "Feb 2022 – Feb 2024",
    bullets: [
      "100+ volunteers led and trained across 4 regions, all in fluent Portuguese.",
      "20% increase in outreach KPIs from replacing manual tracking with an Excel system.",
    ],
  },
];

const projects: { title: string; org: string; date: string; bullets: string[] }[] = [
  {
    title: "KPMG-Sponsored INTEX, 4th of 70 Teams",
    org: "IS Coursework, Provo, UT",
    date: "Apr 2026",
    bullets: [
      "Built a full-stack AWS app (React, PostgreSQL, Tableau) in one week on a 2,000-record dataset for a nonprofit client.",
    ],
  },
];

const Resume = () => {
  const renderItems = (items: typeof experience) =>
    items.map((item) => (
      <div className="resume-item" key={item.title}>
        <div className="resume-item-header">
          <div>
            <h3 className="resume-item-title">{item.title}</h3>
            <p className="resume-item-subtitle">{item.org}</p>
          </div>
          <span className="resume-item-date">{item.date}</span>
        </div>
        <ul className="space-y-1 mt-2">
          {item.bullets.map((b, i) => (
            <li className="resume-bullet" key={i}>{b}</li>
          ))}
        </ul>
      </div>
    ));

  return (
    <>
      <Helmet>
        <title>Resume — William Bennett | BYU Information Systems, expected April 2027</title>
        <meta name="description" content="Resume of William Bennett — BYU Information Systems student (expected April 2027) with an emphasis in tech consulting. Learns new domains quickly and has taken products from an idea to adoption at scale." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border print:hidden">
          <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Portfolio</span>
            </Link>
            {/* Real file at public/resume.pdf, regenerated by
                scripts/build_resume.py. This used to call window.print(), which
                is not the same thing as downloading a PDF. */}
            <Button size="sm" asChild>
              <a href="/resume.pdf" download="WilliamBennett_Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </header>

        {/* Resume Content */}
        <main className="max-w-3xl mx-auto px-6 py-12">
          <div className="resume-sheet bg-card border border-border rounded-lg p-8 sm:p-10 md:p-12 shadow-soft">
            {/* Name & Contact */}
            <div className="text-center mb-8 pb-6 border-b border-border">
              <h1 className="text-3xl md:text-4xl font-bold mb-1">William L. Bennett</h1>
              <p className="text-sm text-primary font-medium mb-4">BYU Information Systems, emphasis in tech consulting &nbsp;&bull;&nbsp; Expected April 2027</p>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <a href="tel:+19496832483" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  (949) 683-2483
                </a>
                <a href="mailto:lafebenn@byu.edu" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  lafebenn@byu.edu
                </a>
                <a href="https://linkedin.com/in/willbennettbyu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                  <Linkedin className="w-4 h-4" />
                  linkedin.com/in/willbennettbyu
                </a>
                <a href="https://willbennett.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                  <Globe className="w-4 h-4" />
                  willbennett.org
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
                Customer-facing technical problem solver who helps enterprise teams get more out of the platforms they already own. Supported Fortune 500 clients across 7 publisher environments in ServiceNow SAM Pro and Flexera One, tracing root causes when platform data went wrong, and built a Python tool that cut a 10-hour analysis to under 5 minutes. Comfortable translating between technical teams and non-technical stakeholders.
              </p>
            </div>

            {/* Core Skills */}
            <section className="resume-section">
              <h2 className="resume-section-title">Core Skills</h2>
              <div className="space-y-2">
                {skills.map((s) => (
                  <p className="text-sm leading-relaxed" key={s.label}>
                    <span className="text-foreground font-medium">{s.label}:</span>{" "}
                    <span className="text-muted-foreground">{s.items}</span>
                  </p>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="resume-section">
              <h2 className="resume-section-title">Professional Experience</h2>
              {renderItems(experience)}
            </section>

            {/* Projects */}
            <section className="resume-section">
              <h2 className="resume-section-title">Projects</h2>
              {renderItems(projects)}
            </section>

            {/* Education */}
            <section className="resume-section">
              <h2 className="resume-section-title">Education</h2>
              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">Brigham Young University, Marriott School of Business</h3>
                    <p className="resume-item-subtitle">B.S. Information Systems, Emphasis in Tech Consulting</p>
                  </div>
                  <span className="resume-item-date">Expected Apr 2027</span>
                </div>
                <div className="space-y-1 mt-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">GPA:</span> 3.65 cumulative / 3.9 major, Dean&apos;s List
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Leadership:</span> VP, AI for IS Club; Marriott Research Fellow; Member, Association of Information Systems
                  </p>
                </div>
              </div>
            </section>

            {/* Additional */}
            <section className="resume-section mb-0">
              <h2 className="resume-section-title">Additional</h2>
              <p className="text-sm text-muted-foreground">
                Eagle Scout, Scouts of America &nbsp;&bull;&nbsp; California Flag Football State Champion
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Resume;
