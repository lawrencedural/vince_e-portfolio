import { useEffect, useState } from "react";
import { portfolioConfig } from "../data/config";
import type { PageType } from "../App";

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  // Lock body scroll when mobile menu is open and toggle scrolled style
  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems: { label: string; page: PageType }[] = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Projects", page: "projects" },
    { label: "Achievements", page: "achievements" },
    { label: "Reflections", page: "reflections" },
    { label: "Hobbies", page: "hobbies" },
    { label: "Documents", page: "documents" },
    { label: "Feedback", page: "feedback" },
    { label: "Thank You", page: "thankyou" },
  ];

  return (
    <header className={`nav ${navScrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <button
          className="logo"
          onClick={() => handleNavClick("home")}
          aria-label="Go to home"
        >
          {portfolioConfig.personal.firstName}
        </button>
        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.page}
              className={`nav-link ${currentPage === item.page ? "active" : ""}`}
              onClick={() => handleNavClick(item.page)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {navItems.map((item) => (
          <button
            key={item.page}
            className={`nav-link ${currentPage === item.page ? "active" : ""}`}
            onClick={() => handleNavClick(item.page)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
