#!/usr/bin/env python3
"""
Build William Bennett's one-page resume PDF.

Source of truth: WilliamBennett_Resume_TAM.docx (Oct 2026). The on-site
/resume page and this PDF should say the same things.
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
    "Customer-facing technical problem solver who helps enterprise teams get more out of the "
    "platforms they already own. Supported Fortune 500 clients across 7 publisher environments in "
    "ServiceNow SAM Pro and Flexera One, tracing root causes when platform data went wrong, and "
    "built a Python tool that cut a 10-hour analysis to under 5 minutes. Comfortable translating "
    "between technical teams and non-technical stakeholders.",
    summary_s))

# ---------------------------------------------------------------- skills
section("Core Skills")
for label, items in [
    ("Customer &amp; Delivery",
     "Enterprise customer support, stakeholder communication, root-cause analysis, product adoption, Agile/Scrum"),
    ("Enterprise SaaS Platforms",
     "ServiceNow SAM Pro, Flexera One, entitlement reconciliation, ELP analysis, data mapping, IBM ILMT"),
    ("AI &amp; Data Tooling",
     "LLM classification pipelines, prompt-based automation, sentence embeddings, Python (Pandas, Scikit-learn)"),
    ("Development &amp; Cloud",
     "Python, C#, ASP.NET MVC, React, TypeScript, SQL, AWS (EC2/S3), Docker, Git"),
    ("Analysis &amp; Reporting",
     "Excel (Advanced), PowerPoint, SharePoint, Tableau, Power BI, SQL, technical documentation"),
    ("Languages",
     "English (native), Portuguese (fluent), Spanish (conversational)"),
]:
    story.append(Paragraph(f"<b>{label}:</b> {items}", skill_s))

# ---------------------------------------------------------------- experience
section("Professional Experience")

entry(
    "Technical Portfolio Advisor", "Sep 2026 – Present",
    "BYU Marriott School of Business — Provo, UT",
    [
        "Advise students on technical portfolio development within BYU's 600+ student Information Systems program.",
        "Manage the program's technical project portfolio while building internal tooling and advising faculty.",
    ])

entry(
    "Service Delivery Consultant", "May 2026 – Aug 2026",
    "Anglepoint — Lindon, UT",
    [
        "99% faster data processing from a Python and Streamlit pipeline, cutting 10 hours to under 5 minutes.",
        "$2M a year in savings identified by automating licensing analysis across 10+ Fortune 500 engagements.",
        "7 publisher environments supported in ServiceNow SAM Pro and Flexera One, removing data-quality blockers.",
    ])

entry(
    "Research Associate", "Jan 2026 – May 2026",
    "Romney Institute, Brigham Young University — Provo, UT",
    [
        "295+ documents scored in 10 hours via AI classification, replacing 6 weeks of manual work for a co-authored paper.",
    ])

entry(
    "CTO / Interim CEO", "Apr 2025 – Aug 2025",
    "GlobalHub — Provo, UT",
    [
        "40% increase in product adoption from leading a cross-functional team through a customer-facing release.",
        "10,000+ users served by a production app deployed on AWS and Docker.",
        "Shipped 8 features as 1 of 2 engineers, managing a 15-person team and liaising with 5 cofounders and partners.",
    ])

entry(
    "Volunteer Representative", "Feb 2022 – Feb 2024",
    "The Church of Jesus Christ of Latter-day Saints — Manaus, Brazil",
    [
        "100+ volunteers led and trained across 4 regions, all in fluent Portuguese.",
        "20% increase in outreach KPIs from replacing manual tracking with an Excel system.",
    ])

# ---------------------------------------------------------------- projects
section("Projects")

entry(
    "KPMG-Sponsored INTEX, 4th of 70 Teams", "Apr 2026",
    "",
    [
        "Built a full-stack AWS app (React, PostgreSQL, Tableau) in one week on a 2,000-record dataset for a nonprofit client.",
    ])

# ---------------------------------------------------------------- education
section("Education")
story.append(header_row(
    "Brigham Young University — Marriott School of Business",
    "Expected Apr 2027"))
story.append(Paragraph(
    "B.S. Information Systems, Emphasis in Tech Consulting &nbsp;|&nbsp; GPA 3.65 cumulative / 3.9 major, Dean's List",
    org_s))
story.append(Paragraph(
    "<b>Leadership:</b> VP, AI for IS Club &nbsp;|&nbsp; Marriott Research Fellow "
    "&nbsp;|&nbsp; Member, Association of Information Systems", bullet_s,
    bulletText="•"))
story.append(Spacer(1, 3.5))

# ---------------------------------------------------------------- additional
section("Additional")
story.append(Paragraph(
    "Eagle Scout, Scouts of America &nbsp;|&nbsp; California Flag Football State Champion",
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
