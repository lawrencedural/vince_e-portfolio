import { useEffect, useState } from "react";
import type { Project } from "../data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const hasImages = !!project.images && project.images.length > 0;
  const totalImages = hasImages ? project.images.length : 0;

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () => {
    if (!hasImages) return;
    setLightboxIndex((idx) => {
      const i = idx ?? 0;
      return (i - 1 + totalImages) % totalImages;
    });
  };
  const showNext = () => {
    if (!hasImages) return;
    setLightboxIndex((idx) => {
      const i = idx ?? 0;
      return (i + 1) % totalImages;
    });
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal project-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <p className="modal-eyebrow">{project.course}</p>
        <h3 className="modal-title">
          {project.lesson}: {project.title}
        </h3>
        <p className="modal-body">{project.summary}</p>

        {project.images && project.images.length > 0 && (
          <>
            <h4 className="modal-subtitle">Project Images</h4>
            <div className="project-modal-gallery">
              {project.images.map((imagePath, index) => (
                <div key={index} className="project-modal-image-wrapper">
                  <img
                    src={imagePath}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="project-modal-image"
                    style={{ cursor: 'zoom-in' }}
                    onClick={() => setLightboxIndex(index)}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {project.evidence && project.evidence.length > 0 && (
          <>
            <h4 className="modal-subtitle">Evidence</h4>
            <ul className="modal-links">
              {project.evidence.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (item.url.startsWith("#")) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {item.label}
                    {item.url.startsWith("#") && " [PLACEHOLDER LINK]"}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        <h4 className="modal-subtitle">Reflection</h4>
        <p className="modal-body">{project.reflection}</p>

        {lightboxIndex !== null && hasImages && (
          <div
            className="lightbox-backdrop"
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(26,26,26,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000,
              padding: '1rem'
            }}
          >
            <button
              className="lightbox-close"
              aria-label="Close"
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '28px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>

            <button
              className="lightbox-prev"
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '10px',
                cursor: 'pointer',
                color: '#fff'
              }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>

            <img
              src={project.images[lightboxIndex]}
              alt={`${project.title} - Image ${lightboxIndex + 1}`}
              className="lightbox-image"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                background: '#111'
              }}
            />

            <button
              className="lightbox-next"
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '10px',
                cursor: 'pointer',
                color: '#fff'
              }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
            </button>

            <div
              className="lightbox-counter"
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#fff',
                fontSize: '0.875rem',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '999px',
                padding: '6px 10px'
              }}
            >
              {lightboxIndex + 1} / {totalImages}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


