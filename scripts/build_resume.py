#!/usr/bin/env python3
"""
Build William Bennett's one-page resume PDF.

Source of truth: the June 2026 .docx, corrected for facts confirmed 2026-09-03:
  - Anglepoint was a summer internship, Jun-Aug 2026. Not a current role.
  - LinkedIn handle is willbennettbyu, not will-bennettt.
  - The "8,000+ analyst hours" projection is removed. 200 clients at ~10 hours
    each is ~2,000, not 8,000; the 120x measured result stands on its own.
  - "40% product adoption" is anchored to month-over-month post-launch.
  - "$2M in cost savings and compliance exposure" fused two units. It is now
    stated as identified licensing exposure only.
These match the live site exactly. A recruiter reads both.
"""
import os
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.fonts import addMapping
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether,
)

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "resume.pdf")

# An embedded TrueType font carries a real ToUnicode map. With ReportLab's
# built-in Helvetica the "•" bullet extracts as "(cid:127)", which means an
# applicant tracking system parsing this PDF reads garbage where every bullet
# should be. That is not a cosmetic problem.
# Candidate font families, in preference order. Liberation Sans and Arial are
# metrically identical to Helvetica, so the page looks the same either way.
FONT_CANDIDATES = [
    ("/usr/share/fonts/truetype/liberation", {
        "": "LiberationSans-Regular.ttf", "-Bold": "LiberationSans-Bold.ttf",
        "-Italic": "LiberationSans-Italic.ttf", "-BoldItalic": "LiberationSans-BoldItalic.ttf"}),
    ("/Library/Fonts", {
        "": "Arial.ttf", "-Bold": "Arial Bold.ttf",
        "-Italic": "Arial Italic.ttf", "-BoldItalic": "Arial Bold Italic.ttf"}),
    ("/System/Library/Fonts/Supplemental", {
        "": "Arial.ttf", "-Bold": "Arial Bold.ttf",
        "-Italic": "Arial Italic.ttf", "-BoldItalic": "Arial Bold Italic.ttf"}),
    ("/usr/share/fonts/truetype/dejavu", {
        "": "DejaVuSans.ttf", "-Bold": "DejaVuSans-Bold.ttf",
        "-Italic": "DejaVuSans-Oblique.ttf", "-BoldItalic": "DejaVuSans-BoldOblique.ttf"}),
]

FAMILY = "ResumeSans"
_chosen = None
for directory, faces in FONT_CANDIDATES:
    if all(os.path.exists(os.path.join(directory, f)) for f in faces.values()):
        _chosen = (directory, faces)
        break
if _chosen is None:
    raise SystemExit(
        "No embeddable TrueType family found. Install Liberation Sans, or add a\n"
        "path to FONT_CANDIDATES. ReportLab's built-in Helvetica is NOT an option:\n"
        "its bullets extract as '(cid:127)', which breaks ATS parsing."
    )
_dir, _faces = _chosen
for suffix, filename in _faces.items():
    pdfmetrics.registerFont(TTFont(FAMILY + suffix, os.path.join(_dir, filename)))
pdfmetrics.registerFontFamily(
    FAMILY, normal=FAMILY, bold=FAMILY + "-Bold",
    italic=FAMILY + "-Italic", boldItalic=FAMILY + "-BoldItalic",
)
addMapping(FAMILY, 0, 0, FAMILY)
addMapping(FAMILY, 1, 0, FAMILY + "-Bold")
addMapping(FAMILY, 0, 1, FAMILY + "-Italic")
addMapping(FAMILY, 1, 1, FAMILY + "-BoldItalic")

REG, BOLD, ITAL = FAMILY, FAMILY + "-Bold", FAMILY + "-Italic"

INK = colors.HexColor("#111111")
MUTED = colors.HexColor("#3d3d3d")
RULE = colors.HexColor("#999999")

name_s = ParagraphStyle(
    "name", fontName=BOLD, fontSize=19, leading=21,
    textColor=INK, alignment=1, spaceAfter=3,
)
contact_s = ParagraphStyle(
    "contact", fontName=REG, fontSize=8.4, leading=10.5,
    textColor=MUTED, alignment=1, spaceAfter=5,
)
summary_s = ParagraphStyle(
    "summary", fontName=REG, fontSize=8.4, leading=10.4,
    textColor=MUTED, alignment=4, spaceAfter=2,
)
section_s = ParagraphStyle(
    "section", fontName=BOLD, fontSize=9, leading=10.5,
    textColor=INK, spaceBefore=7, spaceAfter=1.5,
)
role_s = ParagraphStyle(
    "role", fontName=BOLD, fontSize=8.9, leading=10.5, textColor=INK,
)
date_s = ParagraphStyle(
    "date", fontName=REG, fontSize=8.2, leading=10.5,
    textColor=MUTED, alignment=2,
)
org_s = ParagraphStyle(
    "org", fontName=ITAL, fontSize=8.2, leading=9.6,
    textColor=MUTED, spaceAfter=1,
)
bullet_s = ParagraphStyle(
    "bullet", fontName=REG, fontSize=8.4, leading=10.2, textColor=MUTED,
    leftIndent=9, bulletIndent=1, spaceAfter=0.8,
    # bulletFontName defaults to Helvetica regardless of fontName. Left unset,
    # every bullet extracts as "(cid:127)".
    bulletFontName=REG, bulletFontSize=8.4,
)
skill_s = ParagraphStyle(
    "skill", fontName=REG, fontSize=8.2, leading=10.0, textColor=MUTED,
    spaceAfter=1.2,
)

story = []


def section(title):
    story.append(Paragraph(title.upper(), section_s))
    story.append(HRFlowable(width="100%", thickness=0.6, color=RULE,
                            spaceBefore=0, spaceAfter=3.5))


def header_row(left, right):
    """Role/company on the left, dates flush right."""
    t = Table([[Paragraph(left, role_s), Paragraph(right, date_s)]],
              colWidths=[4.95 * inch, 2.15 * inch])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return t


def entry(title, dates, org, bullets):
    block = [header_row(title, dates)]
    if org:
        block.append(Paragraph(org, org_s))
    for b in bullets:
        block.append(Paragraph(b, bullet_s, bulletText="•"))
    block.append(Spacer(1, 3.5))
    story.append(KeepTogether(block))


# ---------------------------------------------------------------- header
story.append(Paragraph("William L. Bennett", name_s))
story.append(Paragraph(
    '(949) 683-2483 &nbsp;|&nbsp; '
    '<link href="mailto:lafebenn@byu.edu" color="#1a4f8a">lafebenn@byu.edu</link> &nbsp;|&nbsp; '
    '<link href="https://www.linkedin.com/in/willbennettbyu" color="#1a4f8a">linkedin.com/in/willbennettbyu</link> &nbsp;|&nbsp; '
    '<link href="https://github.com/lafebenn" color="#1a4f8a">github.com/lafebenn</link> &nbsp;|&nbsp; '
    '<link href="https://willbennett.org" color="#1a4f8a">willbennett.org</link>',
    contact_s))
story.append(HRFlowable(width="100%", thickness=0.8, color=RULE,
                        spaceBefore=1, spaceAfter=5))

story.append(Paragraph(
    "BYU Information Systems student (expected April 2027) targeting consulting and product "
    "management roles. Spent summer 2026 as a SAM and ITAM consultant at Anglepoint, supporting "
    "Fortune 500 clients across seven publisher licensing environments in ServiceNow SAM Pro, "
    "Flexera One, and ROAR methodology. Former CTO of a 10,000-user platform and co-author of an "
    "Academy of Management Perspectives paper in progress.",
    summary_s))

# ---------------------------------------------------------------- education
section("Education")
story.append(header_row(
    "Brigham Young University — Marriott School of Business",
    "Expected Apr 2027"))
story.append(Paragraph(
    "B.S. Information Systems, Minor in Healthcare Leadership &nbsp;|&nbsp; GPA 3.9 / 4.0, Dean's List",
    org_s))
story.append(Paragraph(
    "<b>Awards:</b> 4th Place Overall, INTEX Case Competition (KPMG sponsored)", bullet_s,
    bulletText="•"))
story.append(Paragraph(
    "<b>Leadership:</b> VP, AI for IS Club &nbsp;|&nbsp; Marriott Research Fellow "
    "&nbsp;|&nbsp; Member, Association of Information Systems", bullet_s,
    bulletText="•"))
story.append(Spacer(1, 3.5))

# ---------------------------------------------------------------- experience
section("Professional Experience")

entry(
    "Service Delivery Consultant", "Jun 2026 – Aug 2026",
    "Anglepoint — Lindon, UT",
    [
        "Supported 6+ Fortune 500 SAM and ITAM engagements, running ELP analysis and entitlement "
        "reconciliation across Microsoft M365/EA, Oracle ULA, IBM PVU/RVU, Salesforce, VMware, "
        "Quest and OpenText in ServiceNow SAM Pro and Flexera One.",
        "Applied ROAR methodology to ROI-focused client deliverables, contributing to ~$2M in "
        "identified licensing exposure across active engagements.",
        "Built a Python and Streamlit pipeline that cut ROAR and ELP document analysis from 10 hours "
        "to under 5 minutes per engagement — a 120x speedup — and presented it to firm leadership.",
    ])

entry(
    "Research Associate", "Jan 2026 – Present",
    "Romney Institute of Public Service and Ethics, BYU — Provo, UT",
    [
        "Built a Python NLP pipeline scoring 295+ U.S. presidential addresses against constitutional "
        "leadership values using vectorized embeddings; outputs feed a co-authored Academy of "
        "Management Perspectives paper in progress.",
        "Ran statistical modeling and data analysis across 3+ MPA faculty research projects and "
        "presented findings directly to faculty.",
    ])

entry(
    "Research Assistant, HCI and Mixed Reality", "Oct 2025 – Present",
    "BYU Marriott School of Business — Provo, UT",
    [
        "Engineered AR tools in Unity and the XREAL SDK merging 3D-printed models with scalable "
        "digital environments for HCI research under Prof. James Gaskin, supporting 2+ AI-adoption studies.",
    ])

entry(
    "CTO / Interim CEO", "Apr 2025 – Aug 2025",
    "GlobalHub, a BYU Marriott platform — Provo, UT",
    [
        "Built and deployed the production React frontend serving 10,000+ users on AWS "
        "(EC2, S3, Elastic Beanstalk) with Docker.",
        "Led a cross-functional Scrum team to the AOM Copenhagen conference release; adoption grew "
        "40% month over month in the period after launch.",
        "Stepped from CTO to Interim CEO after a leadership restructuring, owning stakeholder "
        "communication and the product roadmap.",
    ])

entry(
    "Volunteer Representative", "Feb 2022 – Feb 2024",
    "The Church of Jesus Christ of Latter-day Saints — Manaus, Brazil",
    [
        "Directed and trained 100+ volunteers across 4 regions in fluent Portuguese; raised regional "
        "outreach KPIs 20% through Excel workflow automation.",
    ])

# ---------------------------------------------------------------- projects
section("Projects")

entry(
    "KPMG-Sponsored INTEX — 4th Place Overall", "Apr 2026",
    "IS Coursework — Provo, UT",
    [
        "Built the PostgreSQL schema and the Tableau dashboards for a full-stack AWS application "
        "serving Ella Rises, a non-profit supporting Latina young women in STEAM; team placed 4th of 40+.",
    ])

entry(
    "Bonfire INTEX — Full-Stack and ML", "Dec 2025",
    "BYU Case Competition — live at bonfiresanctuary.org",
    [
        "Shipped 5+ integrated components in one monorepo under competition deadline: a C#/.NET API, "
        "a React and TypeScript frontend, PostgreSQL, Tableau dashboards, and a Jupyter ML pipeline.",
    ])

# ---------------------------------------------------------------- skills
section("Technical Skills")
for label, items in [
    ("SAM &amp; ITAM",
     "ServiceNow SAM Pro, Flexera One, IBM ILMT, ROAR methodology, ELP analysis, entitlement reconciliation"),
    ("Publisher Licensing",
     "Microsoft M365/EA, Oracle ULA/PVU, IBM PVU/RVU, Salesforce, VMware, Quest, OpenText"),
    ("Development &amp; Cloud",
     "Python, C#, ASP.NET MVC, React, TypeScript, Node.js, SQL, AWS (EC2, S3, Elastic Beanstalk), Docker, Linux, Git"),
    ("Analytics &amp; Methods",
     "Pandas, Scikit-learn, Tableau, Power BI, Excel, NLP/LLM pipelines, PostgreSQL, Scrum/Agile, Jira, CRISP-DM"),
    ("Languages",
     "English (native), Portuguese (fluent), Spanish (conversational)"),
]:
    story.append(Paragraph(f"<b>{label}:</b> {items}", skill_s))

# ---------------------------------------------------------------- additional
section("Additional")
story.append(Paragraph(
    "Eagle Scout, Scouts of America &nbsp;&bull;&nbsp; California Flag Football State Champion "
    "&nbsp;&bull;&nbsp; Marriott Research Fellow",
    skill_s))


def build():
    doc = BaseDocTemplate(
        OUT, pagesize=LETTER,
        leftMargin=0.55 * inch, rightMargin=0.55 * inch,
        topMargin=0.45 * inch, bottomMargin=0.4 * inch,
        title="William L. Bennett — Resume",
        author="William L. Bennett",
        subject="Resume",
        creator="willbennett.org",
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height,
                  leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    doc.addPageTemplates([PageTemplate(id="resume", frames=[frame])])
    doc.build(story)


if __name__ == "__main__":
    import os
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    build()
    print("wrote", OUT)
