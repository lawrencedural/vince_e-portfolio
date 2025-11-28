import { useEffect, useState } from "react";
import type { Project } from "../data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasImages = !!project.images && project.images.length > 0;
  const totalImages = hasImages ? project.images.length : 0;

  const showPrev = () => {
    if (!hasImages) return;
    setCurrentImageIndex((idx) => (idx - 1 + totalImages) % totalImages);
  };

  const showNext = () => {
    if (!hasImages) return;
    setCurrentImageIndex((idx) => (idx + 1) % totalImages);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentImageIndex, totalImages]);

  // Reset to first image when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

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
            <div style={{ position: 'relative', width: '100%' }}>
              {/* Main Image Display */}
              <div style={{ 
                position: 'relative',
                width: '100%',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f5f5f5',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '500px',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />

                {/* Previous Button */}
                {totalImages > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      showPrev();
                    }}
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255,255,255,0.9)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      transition: 'all 0.2s'
                    }}
                    aria-label="Previous image"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                  </button>
                )}

                {/* Next Button */}
                {totalImages > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      showNext();
                    }}
                    style={{
                      position: 'absolute',
                      right: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255,255,255,0.9)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      transition: 'all 0.2s'
                    }}
                    aria-label="Next image"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 6l6 6-6 6"/>
                    </svg>
                  </button>
                )}

                {/* Image Counter */}
                {totalImages > 1 && (
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(0,0,0,0.7)',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    {currentImageIndex + 1} / {totalImages}
                  </div>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {totalImages > 1 && (
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  marginTop: '16px',
                  overflowX: 'auto',
                  padding: '4px 0'
                }}>
                  {project.images.map((imagePath, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      style={{
                        minWidth: '80px',
                        height: '60px',
                        borderRadius: '6px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: currentImageIndex === index ? '2px solid #2563eb' : '2px solid transparent',
                        opacity: currentImageIndex === index ? 1 : 0.6,
                        transition: 'all 0.2s'
                      }}
                    >
                      <img
                        src={imagePath}
                        alt={`Thumbnail ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}