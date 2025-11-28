import { portfolioConfig } from "../data/config";

export function AboutPage() {
  return (
    <section className="section" style={{ marginTop: "70px" }}>
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="info-item-content">
                <div className="info-item-label">LinkedIn</div>
                <div className="info-item-value">
                  <a href={portfolioConfig.social.linkedin} target="_blank" rel="noreferrer">
                    Vince Umali
                  </a>
                </div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v9h4v-9h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div className="info-item-content">
                <div className="info-item-label">Facebook</div>
                <div className="info-item-value">
                  <a href={portfolioConfig.social.facebook} target="_blank" rel="noreferrer">
                    Vince Umali
                  </a>
                </div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72 12.66 12.66 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L10 11a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45 12.66 12.66 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="info-item-content">
                <div className="info-item-label">Contact No.</div>
                <div className="info-item-value">
                  <a href={`tel:${portfolioConfig.personal.phone}`}>{portfolioConfig.personal.phone}</a>
                </div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <div className="info-item-content">
                <div className="info-item-label">Age</div>
                <div className="info-item-value">{portfolioConfig.personal.age} years old</div>
              </div>
            </div>
          </div>
          <div className="about-actions">
            <a href={portfolioConfig.documents.resume} download className="btn btn-primary">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
