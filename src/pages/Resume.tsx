import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Mail, Linkedin, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const skills: { label: string; items: string }[] = [
  { label: "SAM & ITAM", items: "ServiceNow SAM Pro, Flexera One, IBM ILMT, ROAR Methodology, ELP Analysis, Entitlement Reconciliation" },
  { label: "Publisher Licensing", items: "Microsoft M365/EA, Oracle ULA/PVU, IBM PVU/RVU, Salesforce, VMware, Quest, OpenText" },
  { label: "Development & Cloud", items: "Python, C#, ASP.NET MVC, React, TypeScript, SQL, AWS (EC2/S3), Docker, Linux, Git" },
  { label: "Analytics & Methods", items: "Pandas, Scikit-learn, Tableau, Power BI, Excel, NLP/LLM Pipelines, Scrum/Agile, Jira" },
  { label: "Languages", items: "English (native), Portuguese (fluent), Spanish (conversational)" },
];

const experience: { title: string; org: string; date: string; bullets: string[] }[] = [
  {
    title: "Service Delivery Consultant",
    org: "Anglepoint, Lindon, UT",
    date: "May 2026 – Present",
    bullets: [
      "$2M in cost savings and compliance exposure identified across active client engagements.",
      "6+ Fortune 500 clients supported with ELP analysis and entitlement reconciliation.",
      "7 publisher environments managed in ServiceNow SAM Pro and Flexera One, including Microsoft, Oracle, and IBM.",
      "120x faster ROAR and ELP analysis from a Python and Streamlit pipeline, cutting 10 hours to under 5 minutes.",
    ],
  },
  {
    title: "Research Associate",
    org: "Romney Institute, Brigham Young University, Provo, UT",
    date: "Jan 2026 – Present",
    bullets: [
      "295+ presidential addresses scored by a Python NLP pipeline for a co-authored AOM Perspectives paper.",
      "3+ faculty research projects supported with statistical modeling and data analysis.",
    ],
  },
  {
    title: "CTO / Interim CEO",
    org: "GlobalHub, Provo, UT",
    date: "Apr 2025 – Aug 2025",
    bullets: [
      "10,000+ users served by a production React frontend deployed on AWS (EC2, S3) with Docker.",
      "40% increase in product adoption from leading a cross-functional Scrum team to a conference release.",
    ],
  },
  {
    title: "Research Assistant, HCI and Mixed Reality",
    org: "BYU Marriott School of Business, Provo, UT",
    date: "Oct 2025 – Present",
    bullets: [
      "2+ AI adoption studies supported with AR tools built in Unity and the XREAL SDK.",
    ],
  },
  {
    title: "Volunteer Representative",
    org: "Church of Jesus Christ of Latter-day Saints, Manaus, Brazil",
    date: "Feb 2022 – Feb 2024",
    bullets: [
      "100+ volunteers led and trained across 4 regions in fluent Portuguese.",
      "20% increase in regional outreach KPIs from Excel workflow automation.",
    ],
  },
];

const projects: { title: string; org: string; date: string; bullets: string[] }[] = [
  {
    title: "KPMG-Sponsored INTEX, 4th Place Overall",
    org: "IS Coursework, Provo, UT",
    date: "Apr 2026",
    bullets: [
      "Full-stack AWS app (React, PostgreSQL, Tableau) for a STEAM non-profit, placing 4th of 40+ teams.",
    ],
  },
  {
    title: "Bonfire INTEX, Full-Stack and ML",
    org: "BYU Case Competition",
    date: "Dec 2025",
    bullets: [
      "C#/.NET API, React and TypeScript frontend, PostgreSQL, and a Jupyter ML pipeline across 5+ integrated components.",
    ],
  },
];

const Resume = () => {
  const handleDownloadPdf = () => {
    window.print();
  };

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
        <title>Resume - Will Bennett | SAM/ITAM Consultant & Developer</title>
        <meta name="description" content="Resume of Will Bennett — SAM/ITAM Consultant at Anglepoint supporting Fortune 500 clients across Microsoft, Oracle, and IBM licensing. Full-stack developer and BYU MIS student." />
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
            <Button size="sm" onClick={handleDownloadPdf}>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </header>

        {/* Resume Content */}
        <main className="max-w-3xl mx-auto px-6 py-12">
          <div className="resume-sheet bg-card border border-border rounded-lg p-8 sm:p-10 md:p-12 shadow-soft">
            {/* Name & Contact */}
            <div className="text-center mb-8 pb-6 border-b border-border">
              <h1 className="text-3xl md:text-4xl font-bold mb-1">William L. Bennett</h1>
              <p className="text-sm text-primary font-medium mb-4">SAM / ITAM Consultant &amp; Full-Stack Developer</p>
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
                SAM and ITAM consultant and full-stack developer at Anglepoint, serving Fortune 500 clients across 7+ publisher licensing environments. Combines hands-on work in ServiceNow SAM Pro, Flexera One, and ROAR methodology with a software background as former CTO of a 10,000-user platform.
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
                    <p className="resume-item-subtitle">B.S. Management Information Systems, Minor in Healthcare Leadership</p>
                  </div>
                  <span className="resume-item-date">Expected Apr 2027</span>
                </div>
                <div className="space-y-1 mt-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">GPA:</span> 3.9 / 4.0, Dean&apos;s List Honors
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Awards:</span> 4th Place, INTEX Case Competition (KPMG Sponsored)
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
                Eagle Scout, Scouts of America &nbsp;&bull;&nbsp; California Flag Football State Champion &nbsp;&bull;&nbsp; Fluent Portuguese, Conversational Spanish
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Resume;
