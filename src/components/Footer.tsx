const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} William Bennett. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            Built with <span className="text-primary">hacker-like skills</span> using React & TailwindCSS
          </div>
        </div>
        <a
          href="https://plausible.io/willbennett.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors"
        >
          Site Analytics ↗
        </a>
      </div>
    </footer>
  );
};

export default Footer;
