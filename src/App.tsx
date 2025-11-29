import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AchievementsPage } from "./pages/AchievementsPage";
import { ReflectionsPage } from "./pages/ReflectionsPage";
import { DocumentsPage } from "./pages/DocumentsPage";
import { FeedbackPage } from "./pages/FeedbackPage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { portfolioConfig } from "./data/config";

export type PageType = "home" | "about" | "projects" | "achievements" | "reflections" | "documents" | "feedback" | "thankyou";

export function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  // Swipe navigation between pages on touch devices (portrait-friendly)
  const pageOrder: PageType[] = [
    "home",
    "about",
    "projects",
    "achievements",
    "reflections",
    "documents",
    "feedback",
    "thankyou",
  ];

  const goToOffset = (offset: number) => {
    const idx = pageOrder.indexOf(currentPage);
    const next = pageOrder[(idx + offset + pageOrder.length) % pageOrder.length];
    setCurrentPage(next);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let isTouching = false;
    let startTime = 0;

    const thresholdX = 60; // required min distance traveled on X to be considered swipe
    const restraintY = 40; // maximum vertical movement allowed
    const allowedTime = 500; // max time allowed to travel that distance

    const shouldIgnore = () => {
      // Ignore when mobile menu or any modal is open
      const menuOpen = document.querySelector('.mobile-menu-overlay.open');
      const modalOpen = document.querySelector('.modal-backdrop');
      return !!menuOpen || !!modalOpen;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (shouldIgnore()) return;
      const touch = e.changedTouches[0];
      startX = touch.pageX;
      startY = touch.pageY;
      startTime = Date.now();
      isTouching = true;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (!isTouching || shouldIgnore()) {
        isTouching = false;
        return;
      }
      const touch = e.changedTouches[0];
      const distX = touch.pageX - startX;
      const distY = touch.pageY - startY;
      const elapsed = Date.now() - startTime;

      // Only trigger on mostly-horizontal quick swipes
      if (elapsed <= allowedTime && Math.abs(distY) <= restraintY && Math.abs(distX) >= thresholdX) {
        if (distX < 0) {
          // swipe left -> next page
          goToOffset(1);
        } else {
          // swipe right -> previous page
          goToOffset(-1);
        }
      }
      isTouching = false;
    };

    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage />;
      case "achievements":
        return <AchievementsPage />;
      case "reflections":
        return <ReflectionsPage />;
      case "documents":
        return <DocumentsPage />;
      case "feedback":
        return <FeedbackPage />;
      case "thankyou":
        return <ThankYouPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="page-container">
        {renderPage()}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} {portfolioConfig.personal.fullName} · E-Portfolio
          </p>
          <p className="footer-text" style={{ marginTop: "0.5rem" }}>
            A reflection of my growth in business communication and professional development.
          </p>
          <div className="footer-social">
            <a
              href={portfolioConfig.social.linkedin}
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={portfolioConfig.social.facebook}
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a href={portfolioConfig.social.email} className="social-link">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
