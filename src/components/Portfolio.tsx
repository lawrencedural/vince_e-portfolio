import { useState, useEffect, useRef } from "react";
import { projects, type Project } from "../data/projects";
import { lessons } from "../data/lessons";
import { reflections, type Reflection } from "../data/reflections";
import { ProjectModal } from "./ProjectModal";
import { CertificationsModal } from "./CertificationsModal";
import { ReflectionModal } from "./ReflectionModal";
import { portfolioConfig } from "../data/config";

export function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeReflection, setActiveReflection] = useState<Reflection | null>(null);
  const [certsOpen, setCertsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);

      // Nav scroll effect
      setNavScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  // Since both projects are under "Project", we can simplify filters
  // Or remove filters entirely if you prefer
  const uniqueFilters = ["All", ...Array.from(new Set(projects.map((p) => p.lesson)))];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.lesson === activeFilter);

  return (
    <div className="page">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <header className={`nav ${navScrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <button
            className="logo"
            onClick={() => handleScroll("hero")}
            aria-label="Go to top"
          >
            {portfolioConfig.personal.firstName}
          </button>
          <nav className="nav-links">
            <button
              className="nav-link"
              onClick={() => handleScroll("hero")}
            >
              Home
            </button>
            <button
              className="nav-link"
              onClick={() => handleScroll("about")}
            >
              About
            </button>
            <button
              className="nav-link"
              onClick={() => handleScroll("projects")}
            >
              Projects
            </button>
            <button
              className="nav-link"
              onClick={() => handleScroll("achievements")}
            >
              Achievements
            </button>
            <button
              className="nav-link"
              onClick={() => handleScroll("reflections")}
            >
              Reflections
            </button>
            <button
              className="nav-link"
              onClick={() => handleScroll("documents")}
            >
              Documents
            </button>
            <button
              className="nav-link"
              onClick={() => handleScroll("thankyou")}
            >
              Thank You
            </button>
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
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <button
          className="nav-link"
          onClick={() => handleScroll("hero")}
        >
          Home
        </button>
        <button
          className="nav-link"
          onClick={() => handleScroll("about")}
        >
          About
        </button>
        <button
          className="nav-link"
          onClick={() => handleScroll("projects")}
        >
          Projects
        </button>
        <button
          className="nav-link"
          onClick={() => handleScroll("achievements")}
        >
          Achievements
        </button>
        <button
          className="nav-link"
          onClick={() => handleScroll("reflections")}
        >
          Reflections
        </button>
        <button
          className="nav-link"
          onClick={() => handleScroll("documents")}
        >
          Documents
        </button>
        <button
          className="nav-link"
          onClick={() => handleScroll("thankyou")}
        >
          Thank You
        </button>
      </div>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <p className="hero-eyebrow">E-Portfolio</p>
              <h1 className="hero-title">
                {portfolioConfig.personal.firstName}{" "}
                <span className="accent">{portfolioConfig.personal.lastName}</span>
              </h1>
              <div className="hero-divider"></div>
              <p className="hero-tagline">
                A digital portfolio showcasing my work, growth, and progress in
                written and oral communication within the context of business and
                entrepreneurship.
              </p>
            </div>
            <div className="hero-image-wrapper">
              {portfolioConfig.usePlaceholders ? (
                <div className="hero-image">
                  <span>Professional Headshot</span>
                </div>
              ) : (
                <img
                  src={portfolioConfig.images.hero}
                  alt={`${portfolioConfig.personal.fullName} - Professional Headshot`}
                  className="hero-image"
                />
              )}
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Scroll</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="about-container">
            <div className="about-image-wrapper">
              {portfolioConfig.usePlaceholders ? (
                <div className="about-image">
                  <span>Professional Portrait</span>
                </div>
              ) : (
                <img
                  src={portfolioConfig.images.about}
                  alt={`${portfolioConfig.personal.fullName} - Professional Portrait`}
                  className="about-image"
                />
              )}
            </div>
            <div className="about-content">
              <h2>About Me</h2>
              <p className="about-role">
                {portfolioConfig.personal.role} · {portfolioConfig.personal.title}
              </p>
              <div className="about-bio">
                <p>
                  I am a dedicated student passionate about business and
                  entrepreneurship, with a focus on developing strong written and
                  oral communication skills. Through this e-portfolio, I aim to
                  demonstrate my growth, learning journey, and professional
                  development.
                </p>
                <p style={{ marginTop: "1.5rem" }}>
                  My work reflects a commitment to clarity, professionalism, and
                  continuous improvement in both academic and real-world business
                  contexts.
                </p>
              </div>
              <div className="about-info">
                <div className="info-item">
                  <div className="info-item-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                  </div>
                  <div className="info-item-content">
                    <div className="info-item-label">Education</div>
                    <div className="info-item-value">
                      {portfolioConfig.personal.title} · {portfolioConfig.personal.institution}
                    </div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div className="info-item-content">
                    <div className="info-item-label">Current Role</div>
                    <div className="info-item-value">{portfolioConfig.personal.role}</div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="info-item-content">
                    <div className="info-item-label">Location</div>
                    <div className="info-item-value">{portfolioConfig.personal.location}</div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="info-item-content">
                    <div className="info-item-label">Email</div>
                    <div className="info-item-value">
                      <a href={portfolioConfig.social.email}>
                        {portfolioConfig.personal.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div className="info-item-content">
                    <div className="info-item-label">LinkedIn</div>
                    <div className="info-item-value">
                      <a
                        href={portfolioConfig.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {portfolioConfig.social.linkedin.replace("https://", "").replace("http://", "")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-actions">
                <a
                  href={portfolioConfig.documents.resume}
                  download
                  className="btn btn-primary"
                >
                  Download Resume
                </a>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleScroll("projects")}
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects & Weekly Tasks Section */}
        <section id="projects" className="section section-alt">
          <div className="section-header">
            <p className="section-eyebrow">Portfolio</p>
            <h2 className="section-title">Projects & Weekly Tasks</h2>
            <p className="section-description">
              A compilation of key written and video outputs, showcasing my
              individual contributions and collaborative work in business and
              entrepreneurship.
            </p>
          </div>
          <div className="projects-container">
            {/* Filters hidden since both projects are in the same category */}
            {/* <div className="project-filters">
              {uniqueFilters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div> */}
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-card"
                  onClick={() => setActiveProject(project)}
                >
                  {portfolioConfig.usePlaceholders || !project.images || project.images.length === 0 ? (
                    <div className="project-card-image">
                      <span>Project Image</span>
                    </div>
                  ) : (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="project-card-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "";
                        target.style.display = "none";
                        target.nextElementSibling?.classList.add("show-placeholder");
                      }}
                    />
                  )}
                  <div className="project-card-content">
                    <p className="project-card-label">{project.lesson}</p>
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-description">
                      {project.summary}
                    </p>
                    <div className="project-card-tags">
                      <span className="project-tag">Business</span>
                      <span className="project-tag">Communication</span>
                    </div>
                    <span className="project-card-link">View Details</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="section">
          <div className="section-header">
            <p className="section-eyebrow">Recognition</p>
            <h2 className="section-title">Achievements</h2>
            <p className="section-description">
            Throughout my journey, I overcame my worries by turning challenges into achievements. 
            I was a consistent silver medalist from pre-school to grade 6 and later earned 
            first runner-up for Lakan ng Bayan in San Pablo City. In high school, 
            I served as the host for our batch farewell event, and in college at 
            De La Salle University, my team received the best practicum bronze medal. 
            Graduating from De La Salle remains my most meaningful accomplishment as I step into real-world challenges.
            </p>
          </div>
          <div className="achievements-container">
            <div className="achievements-timeline">
              <div className="achievement-item">
                <div className="achievement-date">2024</div>
                <h3 className="achievement-title">Practicum Awardee - Bronze Medalist</h3>
                <p className="achievement-description">
                  Earned a Bronze Medal for commendable performance and dedication during practicum training
                </p>
              </div>
              <div className="achievement-item">
                <div className="achievement-date">2024</div>
                <h3 className="achievement-title">Event Host - Grade 10 Farewell Ceremony</h3>
                <p className="achievement-description">
                  Selected as the official host for the School's Farewell Program, 
                  showcasing confidence and communication skills.
                </p>
              </div>
              <div className="achievement-item">
                <div className="achievement-date">2024</div>
                <h3 className="achievement-title">Academic Silver Medalist (Grades 1-5)</h3>
                <p className="achievement-description">
                  Demonstrated consistent academic excellence throughout elementary education
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflections Section */}
        <section id="reflections" className="section section-alt">
          <div className="section-header">
            <p className="section-eyebrow">Growth Journey</p>
            <h2 className="section-title">Reflections</h2>
            <p className="section-description">
              Personal reflections on my development, feedback received, and how
              each experience contributed to my understanding of business and
              entrepreneurship.
            </p>
          </div>
          <div className="reflections-container">
            <div className="reflections-grid">
              {reflections.map((reflection) => (
                <div
                  key={reflection.id}
                  className="reflection-card"
                  onClick={() => setActiveReflection(reflection)}
                >
                  <div className="reflection-card-header">
                    <p className="reflection-card-week">{reflection.week}</p>
                    <h3 className="reflection-card-title">{reflection.title}</h3>
                  </div>
                  <p className="reflection-card-preview">
                    {reflection.content.substring(0, 150)}...
                  </p>
                  <span className="reflection-card-link">Read Full Reflection →</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Documents Section */}
        <section id="documents" className="section">
          <div className="section-header">
            <p className="section-eyebrow">Resources</p>
            <h2 className="section-title">Professional Documents</h2>
            <p className="section-description">
              Downloadable professional documents including resume, CV, cover letter,
              and other relevant materials for your review.
            </p>
          </div>
          <div className="documents-container">
            <div className="documents-grid">
              <div className="document-card">
                <div className="document-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="document-title">Resume</h3>
                <p className="document-description">
                  A comprehensive overview of my education, experience, skills,
                  and professional achievements.
                </p>
                <a
                  href={portfolioConfig.documents.resume}
                  download
                  className="btn btn-primary"
                >
                  Download PDF
                </a>
              </div>
              <div className="document-card">
                <div className="document-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="document-title">CV</h3>
                <p className="document-description">
                  A comprehensive curriculum vitae detailing my academic background,
                  professional experience, and achievements.
                </p>
                <a
                  href={portfolioConfig.documents.cv}
                  download
                  className="btn btn-primary"
                >
                  Download PDF
                </a>
              </div>
              <div className="document-card">
                <div className="document-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="document-title">Cover Letter</h3>
                <p className="document-description">
                  A personalized letter highlighting my qualifications and
                  enthusiasm for potential opportunities.
                </p>
                <a
                  href={portfolioConfig.documents.coverLetter}
                  download
                  className="btn btn-primary"
                >
                  Download PDF
                </a>
              </div>
            </div>
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <button
                className="btn btn-secondary"
                onClick={() => setCertsOpen(true)}
              >
                View Certifications & Badges
              </button>
            </div>
          </div>
        </section>

        {/* Thank You / Appreciation Section */}
        <section id="thankyou" className="section section-alt">
          <div className="section-header">
            <p className="section-eyebrow">Gratitude</p>
            <h2 className="thankyou-title">Thank You</h2>
            <p className="section-description">
              A special thank you to all those who have supported my journey and
              contributed to my growth and development.
            </p>
          </div>
          <div className="thankyou-container">
            <div className="thankyou-gallery">
              {portfolioConfig.images.gallery.map((imagePath, index) => (
                <div key={index} className="gallery-item">
                  {portfolioConfig.usePlaceholders ? (
                    <>
                      <div className="gallery-image">
                        <span>Photo {index + 1}</span>
                      </div>
                      <div className="gallery-overlay">
                        <span>View Photo</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={imagePath}
                        alt={`Gallery photo ${index + 1}`}
                        className="gallery-image"
                      />
                      <div className="gallery-overlay">
                        <span>View Photo</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
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
            <a href={portfolioConfig.social.email} className="social-link">
              Email
            </a>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
      <CertificationsModal open={certsOpen} onClose={() => setCertsOpen(false)} />
      <ReflectionModal
        reflection={activeReflection}
        onClose={() => setActiveReflection(null)}
      />
    </div>
  );
}
