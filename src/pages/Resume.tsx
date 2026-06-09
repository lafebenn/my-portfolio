import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Resume = () => {
  const handleDownloadPdf = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Resume - Will Bennett | SAM/ITAM Consultant & Developer</title>
        <meta name="description" content="Resume of Will Bennett — SAM/ITAM Consultant at Anglepoint supporting Fortune 500 clients across Microsoft, Oracle, IBM, Salesforce, and VMware licensing. Full-stack developer and BYU IS student." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border print:hidden">
          <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
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
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-card border border-border rounded-lg p-6 sm:p-10 md:p-14 shadow-soft">
            {/* Name & Contact */}
            <div className="text-center mb-10 pb-8 border-b border-border">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                William L. Bennett
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
                <a href="tel:+19496832483" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  (949) 683-2483
                </a>
                <a href="mailto:lafebenn@byu.edu" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  lafebenn@byu.edu
                </a>
                <a href="https://linkedin.com/in/will-bennettt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                  <Linkedin className="w-4 h-4" />
                  linkedin.com/in/will-bennettt
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-10">
              <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                SAM/ITAM consultant and full-stack developer supporting Fortune 500 clients at Anglepoint across Microsoft, Oracle, IBM, Salesforce, VMware, Quest, and OpenText licensing environments. Hands-on experience with ServiceNow SAM Pro, Flexera One, and ROAR methodology — contributing to ~$2M in identified cost savings and compliance risk across 6+ active engagements. Combines consulting depth with technical breadth: former CTO of a 10K+ user platform, co-authoring an AOM Perspectives paper, and builder of a 120x-faster SAM automation pipeline.
              </p>
            </div>

            {/* Education */}
            <section className="resume-section">
              <h2 className="resume-section-title">Education</h2>
              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">Brigham Young University – Marriott School of Business</h3>
                    <p className="resume-item-subtitle">Bachelor of Science in Information Systems, Minor in Healthcare Leadership</p>
                  </div>
                  <span className="resume-item-date">Apr 2027</span>
                </div>
                <div className="space-y-1 mt-3">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">GPA:</span> 3.9 / 4.00 | Dean's List Honors
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Awards:</span> 4th Place Overall, INTEX Case Competition (KPMG Sponsored)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Leadership:</span> VP, AI for IS Club | Marriott Research Fellow | Member, Association of Information Systems
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="resume-section">
              <h2 className="resume-section-title">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm">
                    <span className="text-foreground font-medium">SAM & ITAM:</span>{" "}
                    <span className="text-muted-foreground">ServiceNow SAM Pro, Flexera One, IBM ILMT, ROAR Methodology, ELP Analysis, Entitlement Reconciliation</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="text-foreground font-medium">Publisher Licensing:</span>{" "}
                    <span className="text-muted-foreground">Microsoft M365/EA, Oracle ULA/PVU, IBM PVU/RVU, Salesforce, VMware, Quest, OpenText</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="text-foreground font-medium">Development:</span>{" "}
                    <span className="text-muted-foreground">Python, C#, ASP.NET MVC, React, TypeScript, Node.js, SQL, HTML/CSS, Bash</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="text-foreground font-medium">Cloud & Infrastructure:</span>{" "}
                    <span className="text-muted-foreground">AWS (EC2, S3, Elastic Beanstalk), Docker, Linux (Ubuntu), Git</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="text-foreground font-medium">Analytics & Data:</span>{" "}
                    <span className="text-muted-foreground">Pandas, Scikit-learn, Tableau, Power BI, Excel (Advanced), PostgreSQL, SQLite</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="text-foreground font-medium">Methodologies:</span>{" "}
                    <span className="text-muted-foreground">Scrum / Agile, Jira, SDLC, CRISP-DM, Lean Process Improvement</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="text-foreground font-medium">Other:</span>{" "}
                    <span className="text-muted-foreground">Unity (C#), XREAL SDK, AR/MR Development, NLP / LLM Pipelines, VBA, PowerShell</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="text-foreground font-medium">Languages:</span>{" "}
                    <span className="text-muted-foreground">English (native), Portuguese (fluent), Spanish (conversational)</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="resume-section">
              <h2 className="resume-section-title">Experience</h2>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">Service Delivery Consultant</h3>
                    <p className="resume-item-subtitle">Anglepoint, Lindon, UT</p>
                  </div>
                  <span className="resume-item-date">Jun 2026 – Aug 2026</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Supporting 6+ Fortune 500 client engagements across software asset management (SAM) and ITAM — conducting ELP analysis and entitlement reconciliation for Microsoft M365/EA, Oracle ULA, IBM PVU/RVU, Salesforce, VMware, Quest, and OpenText licensing environments using ServiceNow SAM Pro and Flexera One</li>
                  <li className="resume-bullet">Applying ROAR methodology to build ROI-focused client deliverables quantifying compliance risk and optimization opportunity; contributed to identification of ~$2M in annualized cost savings and compliance exposure across active engagements</li>
                  <li className="resume-bullet">Engineered a Python + Streamlit automation pipeline (LTO intern competition) reducing ROAR/ELP document analysis from 10 hours to under 5 minutes per engagement — a 120x efficiency gain — with potential to save 8,000+ analyst hours annually across Anglepoint's 200+ client portfolio</li>
                  <li className="resume-bullet">Analyzed publisher-specific licensing structures (Microsoft EA true-up cycles, Oracle ULA certification triggers, IBM sub-capacity rules) to support client compliance strategy and cost optimization recommendations</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">Research Associate</h3>
                    <p className="resume-item-subtitle">Romney Institute of Public Service and Ethics, BYU, Provo, UT</p>
                  </div>
                  <span className="resume-item-date">Jan 2026 – Present</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Built Python/NLP pipeline to vectorize and score 295+ U.S. presidential addresses (Inaugural + State of the Union) against constitutional leadership values; outputs feeding a co-authored Academy of Management Perspectives paper in progress</li>
                  <li className="resume-bullet">Performed statistical modeling and data analysis to support MPA faculty research on organizational behavior and public policy effectiveness; presented findings directly to faculty</li>
                  <li className="resume-bullet">Applied Scrum sprint frameworks to manage research timelines and ensure on-time delivery of analytical outputs</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">Research Assistant (HCI / Mixed Reality)</h3>
                    <p className="resume-item-subtitle">BYU Marriott School of Business, Provo, UT</p>
                  </div>
                  <span className="resume-item-date">Oct 2025 – Present</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Engineering AR tools (Unity, XREAL SDK) merging 3D-printed physical models with scalable digital environments for HCI research under Prof. James Gaskin</li>
                  <li className="resume-bullet">Conducting user testing and behavioral data analysis for AI and technology adoption studies; synthesizing findings into publication-aligned reports</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">CTO / Interim CEO</h3>
                    <p className="resume-item-subtitle">GlobalHub, Provo, UT</p>
                  </div>
                  <span className="resume-item-date">Apr 2025 – Aug 2025</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Built and deployed production-scale React frontend serving 10,000+ users on AWS (EC2, S3, Elastic Beanstalk) with Docker containerization</li>
                  <li className="resume-bullet">Led cross-functional Scrum team to deliver AOM Copenhagen conference release; drove 40% increase in product adoption</li>
                  <li className="resume-bullet">Transitioned from CTO to Interim CEO following leadership restructuring; managed stakeholder communication and product roadmap under ambiguity</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">Writer / Coordinator Intern</h3>
                    <p className="resume-item-subtitle">BYU Whitmore Global Business Center, Provo, UT</p>
                  </div>
                  <span className="resume-item-date">Jan 2025 – Apr 2025</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Boosted event engagement 120% by redesigning platform UX (HTML/CSS) and managing logistics for 90+ participants</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">Volunteer Representative</h3>
                    <p className="resume-item-subtitle">The Church of Jesus Christ of Latter-Day Saints, Manaus, Brazil</p>
                  </div>
                  <span className="resume-item-date">Feb 2022 – Feb 2024</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Directed and trained 100+ volunteers across 4 regions in fluent Portuguese; boosted regional outreach KPIs 20% through Excel workflow automation</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="resume-section">
              <h2 className="resume-section-title">Projects</h2>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">LTO Pipeline — SAM ROI Automation</h3>
                    <p className="resume-item-subtitle">Anglepoint Intern Competition</p>
                  </div>
                  <span className="resume-item-date">Jun 2026 – Present</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Python + Streamlit pipeline automating ROI extraction from ROAR and ELP documents; reduces 10-hour manual process to &lt;5 minutes per engagement (120x faster)</li>
                  <li className="resume-bullet">Projected to save 8,000+ analyst hours annually across Anglepoint's 200+ client base; presented findings to firm leadership</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">Leadership Values &amp; Integrity Analysis</h3>
                    <p className="resume-item-subtitle">Romney Institute Research</p>
                  </div>
                  <span className="resume-item-date">Jan 2026 – Present</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Python/NLP pipeline scoring 295+ presidential addresses against constitutional leadership values using vectorized embedding models; outputs feeding co-authored AOM Perspectives paper</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">KPMG-Sponsored INTEX — 4th Place Overall</h3>
                    <p className="resume-item-subtitle">IS Coursework, Provo, UT</p>
                  </div>
                  <span className="resume-item-date">Apr 2026</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Built full-stack AWS app (React, PostgreSQL, Tableau) for a Latina STEAM non-profit; placed 4th in KPMG-sponsored campus competition against all IS teams</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">Bonfire INTEX — Full-Stack + ML</h3>
                    <p className="resume-item-subtitle">BYU Case Competition</p>
                  </div>
                  <span className="resume-item-date">Dec 2025</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Full-stack monorepo: C# / .NET API backend, React + TypeScript frontend, PostgreSQL, Tableau dashboards, and Jupyter ML pipeline — built under competition deadline</li>
                </ul>
              </div>
            </section>

            {/* Awards & Interests */}
            <section className="resume-section mb-0">
              <h2 className="resume-section-title">Additional</h2>
              <p className="text-sm text-muted-foreground">
                Eagle Scout, Scouts of America | CA Flag Football State Champion | Fluent in Portuguese, Conversational Spanish | Marriott Research Fellow | IS Research Candidate
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Resume;
