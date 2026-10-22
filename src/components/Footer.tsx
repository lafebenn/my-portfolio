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
            Built with React and Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
