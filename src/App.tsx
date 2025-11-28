import { useState } from "react";
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
            A powerful professional tool—beyond being an academic requirement.
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
