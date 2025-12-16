import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
          <Link 
            to="/" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false); // Optional: closes menu if open
            }}
            className="flex items-center gap-2 text-lg font-bold tracking-tight group"
          >
            <img 
              src="/profile-pic.jpg"
              alt="William Bennett" 
              className="h-8 w-8 rounded-full object-cover shadow-sm group-hover:ring-2 ring-accent transition-all"
            />
            <span>
              <span className="text-gradient">William Bennett.</span>
            </span>
          </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {isHomePage && navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {label}
            </a>
          ))}
          <Button size="sm" variant="outline" asChild>
            <Link to="/resume">Resume</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="px-6 py-6 space-y-4">
            {isHomePage && navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <Link
              to="/resume"
              className="block text-lg text-accent hover:text-accent/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;