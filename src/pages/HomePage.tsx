import { portfolioConfig } from "../data/config";

export function HomePage() {
  return (
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
        <span>Explore</span>
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
  );
}
