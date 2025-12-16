import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Resume - William Bennett | IS Student & Developer</title>
        <meta name="description" content="Resume of William Bennett - Information Systems student skilled in full-stack development, cloud infrastructure, and data-driven systems." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Portfolio</span>
            </Link>
            <Button size="sm" asChild>
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </header>

        {/* Resume Content */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-soft">
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
                Information Systems student and research assistant skilled in full-stack development, cloud infrastructure, and data-driven systems. Experienced with Python, React, SQL, AWS, Docker, and Linux. Known for troubleshooting complex issues, deploying secure web applications, and building scalable solutions with curiosity and precision.
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
                    <span className="text-foreground font-medium">GPA:</span> 3.95 / 4.00 | Dean's List Honors
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Leadership:</span> VP, AI for IS Club | Marriott Research Fellow | Member, Association of Information Systems
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Coursework:</span> OOP, Data Analytics (Excel, Pandas), Web Development, Databases, Cloud Infrastructure
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
                    <span className="text-foreground font-medium">Operating Systems:</span>{" "}
                    <span className="text-muted-foreground">macOS, Linux (Ubuntu, VM), Windows</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="text-foreground font-medium">Networking:</span>{" "}
                    <span className="text-muted-foreground">TCP/IP, DNS, DHCP, VPNs, routers, firewalls</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="text-foreground font-medium">Scripting & Automation:</span>{" "}
                    <span className="text-muted-foreground">PowerShell, Bash, Python</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="text-foreground font-medium">Cloud & Infrastructure:</span>{" "}
                    <span className="text-muted-foreground">AWS (S3, EC2, Elastic Beanstalk), Docker, Git, Node.js</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="text-foreground font-medium">Development:</span>{" "}
                    <span className="text-muted-foreground">React, JavaScript, HTML/CSS, SQL, PostgreSQL, MySQL</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <span className="text-foreground font-medium">Data Visualization:</span>{" "}
                    <span className="text-muted-foreground">Tableau, Power BI, Python, Excel</span>
                  </p>
                </div>
              </div>
              <p className="text-sm mt-4">
                <span className="text-foreground font-medium">Core Strengths:</span>{" "}
                <span className="text-muted-foreground">Troubleshooting, problem-solving, client communication, process improvement</span>
              </p>
            </section>

            {/* Experience */}
            <section className="resume-section">
              <h2 className="resume-section-title">Experience</h2>
              
              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">Research Assistant</h3>
                    <p className="resume-item-subtitle">Brigham Young University Marriott School of Business, Provo, UT</p>
                  </div>
                  <span className="resume-item-date">Oct 2025 - Present</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Engineering AR tools (Unity, XREAL SDK) merging 3D-printed models with a scalable environment for HCI research</li>
                  <li className="resume-bullet">Assisted Professor James Gaskin in AI and technology adoption research through data cleaning and analysis</li>
                  <li className="resume-bullet">Tested and documented web-based tools and data models used for academic research projects</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">CTO / Interim CEO</h3>
                    <p className="resume-item-subtitle">GlobalHub, Provo, UT</p>
                  </div>
                  <span className="resume-item-date">Apr 2025 - Aug 2025</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Built and deployed a production-scale React frontend for 10K+ users on AWS and Docker</li>
                  <li className="resume-bullet">Coordinated cross-functional team to deliver conference-aligned release, improving product adoption by 40%</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">Writer/Coordinator Intern</h3>
                    <p className="resume-item-subtitle">BYU Whitmore Global Business Center, Provo, UT</p>
                  </div>
                  <span className="resume-item-date">Jan 2025 - Apr 2025</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Improved event engagement 120% by optimizing UX (HTML/CSS) and managing logistics for 90+ participants</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">Volunteer Representative</h3>
                    <p className="resume-item-subtitle">The Church of Jesus Christ of Latter-Day Saints, Manaus, Brazil</p>
                  </div>
                  <span className="resume-item-date">Feb 2022 - Feb 2024</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Directed 100+ volunteers across 4 regions, boosting outreach KPIs 20% with Excel automation</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="resume-section">
              <h2 className="resume-section-title">Projects</h2>
              
              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">AWS Web Deployment</h3>
                    <p className="resume-item-subtitle">IS Coursework, Provo, Utah</p>
                  </div>
                  <span className="resume-item-date">Oct 2025 - Present</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Deployed an interactive website from the command line via SSH to a Linux-based AWS EC2 instance</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">Secure Authentication System</h3>
                    <p className="resume-item-subtitle">IS Coursework, Provo, Utah</p>
                  </div>
                  <span className="resume-item-date">Oct 2025 - Present</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Built a login system with real authentication using PostgreSQL and encrypted password validation</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <h3 className="resume-item-title">Portfolio Website</h3>
                    <p className="resume-item-subtitle">Work Project, Provo, Utah</p>
                  </div>
                  <span className="resume-item-date">Apr 2025 - Aug 2025</span>
                </div>
                <ul className="space-y-1 mt-2">
                  <li className="resume-bullet">Designed and deployed React platform using AWS and Git, showcasing UI/UX and cloud deployment skills</li>
                </ul>
              </div>
            </section>

            {/* Awards & Interests */}
            <section className="resume-section mb-0">
              <h2 className="resume-section-title">Awards, Skills & Interests</h2>
              <p className="text-sm text-muted-foreground">
                IS Research Candidate | Eagle Scout, Scouts of America | Fluent in Portuguese | CA Flag Football State Champion
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Resume;
