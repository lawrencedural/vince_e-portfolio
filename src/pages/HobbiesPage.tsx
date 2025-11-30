import { useState, useEffect } from "react";
import { hobbies } from "../data/hobbies";
import { portfolioConfig } from "../data/config";

export function HobbiesPage() {
  const [activeHobbyId, setActiveHobbyId] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeHobby = hobbies.find((h) => h.id === activeHobbyId);

  const showPrev = () => {
    if (!activeHobby || activeHobby.images.length === 0) return;
    setActiveImageIndex(
      (idx) => (idx - 1 + activeHobby.images.length) % activeHobby.images.length
    );
  };

  const showNext = () => {
    if (!activeHobby || activeHobby.images.length === 0) return;
    setActiveImageIndex(
      (idx) => (idx + 1) % activeHobby.images.length
    );
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    if (activeHobby) {
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  }, [activeImageIndex, activeHobby?.images.length]);

  return (
    <>
      <section className="section section-alt" style={{ marginTop: "70px" }}>
        <div className="section-header">
          <p className="section-eyebrow">Personal Interests</p>
          <h2 className="section-title">Hobbies & Passions</h2>
          <p className="section-description">
            Beyond academics and professional pursuits, these hobbies reflect my
            personality, values, and what drives me. Each represents a different
            aspect of who I am and what I enjoy.
          </p>
        </div>
        <div className="hobbies-container">
          <div className="hobbies-grid">
            {hobbies.map((hobby) => (
              <div
                key={hobby.id}
                className="hobby-card"
                onClick={() => {
                  setActiveHobbyId(hobby.id);
                  setActiveImageIndex(0);
                }}
              >
                <div className="hobby-card-image-wrapper">
                  {portfolioConfig.usePlaceholders || !hobby.images || hobby.images.length === 0 ? (
                    <div className="hobby-card-image-placeholder">
                      <span>{hobby.name}</span>
                    </div>
                  ) : (
                    <img
                      src={hobby.images[0]}
                      alt={hobby.name}
                      className="hobby-card-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  )}
                  <div className="hobby-card-overlay">
                    <span className="hobby-card-cta">
                      {hobby.images.length > 1 ? "View Gallery" : "View Photo"}
                    </span>
                  </div>
                </div>
                <div className="hobby-card-content">
                  <h3 className="hobby-card-title">{hobby.name}</h3>
                  <p className="hobby-card-description">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobby Gallery Modal */}
      {activeHobby && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveHobbyId(null)}
        >
          <div
            className="modal hobby-modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              className="modal-close"
              onClick={() => setActiveHobbyId(null)}
              aria-label="Close"
            >
              ×
            </button>
            <p className="modal-eyebrow">{activeHobby.name}</p>
            <h3 className="modal-title">{activeHobby.name}</h3>
            <p className="modal-body">{activeHobby.description}</p>

            {activeHobby.images && activeHobby.images.length > 0 && (
              <div style={{ position: "relative", width: "100%", marginTop: "2rem" }}>
                {/* Main Image Display */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    minHeight: "400px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f5f5f5",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={activeHobby.images[activeImageIndex]}
                    alt={`${activeHobby.name} - Image ${activeImageIndex + 1}`}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "500px",
                      height: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />

                  {/* Previous Button */}
                  {activeHobby.images.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        showPrev();
                      }}
                      style={{
                        position: "absolute",
                        left: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "44px",
                        height: "44px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.95)",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        transition: "all 0.2s",
                        color: "#1F2937",
                      }}
                      aria-label="Previous image"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                  )}

                  {/* Next Button */}
                  {activeHobby.images.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        showNext();
                      }}
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "44px",
                        height: "44px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.95)",
                        border: "none",
                        borderRadius: "50%",
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        transition: "all 0.2s",
                        color: "#1F2937",
                      }}
                      aria-label="Next image"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </button>
                  )}

                  {/* Image Counter */}
                  {activeHobby.images.length > 1 && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "rgba(0,0,0,0.7)",
                        color: "#fff",
                        padding: "8px 16px",
                        borderRadius: "24px",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                      }}
                    >
                      {activeImageIndex + 1} / {activeHobby.images.length}
                    </div>
                  )}
                </div>

                {/* Thumbnail Navigation */}
                {activeHobby.images.length > 1 && (
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginTop: "20px",
                      overflowX: "auto",
                      padding: "8px 0",
                      justifyContent: "center",
                    }}
                  >
                    {activeHobby.images.map((imagePath, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        style={{
                          minWidth: "80px",
                          height: "64px",
                          borderRadius: "8px",
                          overflow: "hidden",
                          cursor: "pointer",
                          border:
                            activeImageIndex === index
                              ? "3px solid #2563EB"
                              : "2px solid #E5E7EB",
                          opacity: activeImageIndex === index ? 1 : 0.6,
                          transition: "all 0.2s",
                          padding: 0,
                          background: "none",
                        }}
                        aria-label={`View image ${index + 1}`}
                      >
                        <img
                          src={imagePath}
                          alt={`Thumbnail ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
