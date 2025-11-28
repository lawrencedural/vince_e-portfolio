import { useState } from "react";
import { portfolioConfig } from "../data/config";
import { CertificationsModal } from "../components/CertificationsModal";

export function DocumentsPage() {
  const [certsOpen, setCertsOpen] = useState(false);

  return (
    <>
      <section className="section" style={{ marginTop: "70px" }}>
        <div className="section-header">
          <p className="section-eyebrow">Resources</p>
          <h2 className="section-title">Professional Documents</h2>
          <p className="section-description">
            Downloadable professional documents including resume and cover letter,
            and other relevant materials for your review.
          </p>
        </div>
        <div className="documents-container">
          <div className="documents-grid">
            <div className="document-card">
              <div className="document-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <a href={portfolioConfig.documents.resume} download className="btn btn-primary">
                Download PDF
              </a>
            </div>
            <div className="document-card">
              <div className="document-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href={portfolioConfig.documents.coverLetter} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  View Cover Letter
                </a>
                <a href={portfolioConfig.documents.coverLetter} download className="btn btn-primary">
                  Download
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <button className="btn btn-secondary" onClick={() => setCertsOpen(true)}>
              View Certifications & Badges
            </button>
          </div>
        </div>
      </section>
      <CertificationsModal open={certsOpen} onClose={() => setCertsOpen(false)} />
    </>
  );
}
