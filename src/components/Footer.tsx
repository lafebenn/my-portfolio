const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {currentYear} Your Name. All rights reserved.
        </div>
        <div className="text-sm text-muted-foreground">
          Built with <span className="text-primary">♥</span> using React & TailwindCSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
