import { useState } from "react";

export function ThankYouPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // Sample gallery images - replace with your actual paths
  const galleryImages = [
    "/images/gallery/gallery-image1.png",
    "/images/gallery/gallery-2.png",
    "/images/gallery/gallery-3.png",
    "/images/gallery/gallery-4.png",
    "/images/gallery/gallery-5.png",
  ];
  
  const hasImages = galleryImages.length > 0;

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
  };
  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  };

  return (
    <>
      <section style={{ marginTop: "70px", background: "linear-gradient(135deg, #f5f7fa 0%, #f0f4f8 100%)", padding: "80px 0" }}>
        {/* Header */}
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", textAlign: "center", marginBottom: "60px" }}>
          <div style={{
            display: "inline-block",
            padding: "8px 16px",
            background: "rgba(37, 99, 235, 0.1)",
            borderRadius: "20px",
            marginBottom: "16px"
          }}>
            <p style={{
              margin: 0,
              fontSize: "0.875rem",
              fontWeight: "600",
              color: "#2563eb",
              letterSpacing: "0.5px",
              textTransform: "uppercase"
            }}>
              Gratitude
            </p>
          </div>
          
          <h2 style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            color: "#0f172a",
            marginBottom: "16px",
            lineHeight: "1.2",
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Thank You
          </h2>
          
          <p style={{
            fontSize: "1.125rem",
            color: "#64748b",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontWeight: "500"
          }}>
            A heartfelt appreciation to everyone who has been part of my journey—mentors, classmates, and supporters who have shaped my growth and success.
          </p>
        </div>

        {/* Content: Letter on Left, Gallery on Right */}
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem 60px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "start"
        }}>
          {/* Gratitude Message */}
          <div style={{
            background: "#fff",
            padding: "48px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)"
          }}>
            <h3 style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "#0f172a",
              marginBottom: "32px",
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              A Message of Gratitude
            </h3>
            
            <div style={{ 
              color: "#475569",
              lineHeight: "1.9",
              fontSize: "1rem",
              textAlign: "left"
            }}>
              <p style={{ marginBottom: "1.5rem", fontWeight: "500" }}>
                I want to extend my sincere gratitude to everyone who has supported me throughout this journey.
              </p>
              
              <div style={{ marginBottom: "1.5rem", paddingLeft: "20px", borderLeft: "3px solid #2563eb" }}>
                <p style={{ margin: "0 0 0.4rem 0" }}>
                  <strong style={{ color: "#0f172a" }}>To my parents</strong>
                </p>
                <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem" }}>
                  Thank you for your unwavering love, guidance, and for always believing in what I can achieve.
                </p>
              </div>
              
              <div style={{ marginBottom: "1.5rem", paddingLeft: "20px", borderLeft: "3px solid #2563eb" }}>
                <p style={{ margin: "0 0 0.4rem 0" }}>
                  <strong style={{ color: "#0f172a" }}>To my friends</strong>
                </p>
                <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem" }}>
                  I'm grateful for your encouragement, shared moments, and for pushing me to keep striving.
                </p>
              </div>
              
              <div style={{ marginBottom: "1.5rem", paddingLeft: "20px", borderLeft: "3px solid #2563eb" }}>
                <p style={{ margin: "0 0 0.4rem 0" }}>
                  <strong style={{ color: "#0f172a" }}>To my professors</strong>
                </p>
                <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem" }}>
                  Your teachings and wisdom have played a huge role in shaping my growth and understanding.
                </p>
              </div>
              
              <div style={{ marginBottom: "1.5rem", paddingLeft: "20px", borderLeft: "3px solid #2563eb" }}>
                <p style={{ margin: "0 0 0.4rem 0" }}>
                  <strong style={{ color: "#0f172a" }}>To my Entrepreneurship classmates</strong>
                </p>
                <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem" }}>
                  Thank you for the collaboration, ideas, and experiences that made this journey both meaningful and memorable.
                </p>
              </div>
              
              <div style={{ 
                marginTop: "2rem",
                padding: "20px",
                background: "linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(59, 130, 246, 0.05) 100%)",
                borderRadius: "12px",
                borderLeft: "4px solid #2563eb"
              }}>
                <p style={{ 
                  margin: 0,
                  fontStyle: 'italic',
                  color: '#2563eb',
                  fontSize: '0.95rem',
                  fontWeight: '600'
                }}>
                  I truly appreciate every person who has helped me reach this point and inspired me to keep moving forward.
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem'
          }}>
            {galleryImages.map((imagePath, index) => {
              const isPlaceholder = !imagePath;

              return (
                <div 
                  key={index} 
                  onClick={() => !isPlaceholder && setLightboxIndex(index)}
                  style={{ 
                    cursor: isPlaceholder ? 'default' : 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '16px',
                    background: '#fff',
                    boxShadow: isPlaceholder ? 'inset 0 0 0 2px rgba(203, 213, 225, 0.5)' : '0 10px 30px rgba(0, 0, 0, 0.12)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    height: index === 0 ? '380px' : '180px',
                    gridColumn: index === 0 ? 'span 2' : 'span 1'
                  }}
                  onMouseEnter={(e) => {
                    if (!isPlaceholder) {
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isPlaceholder) {
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.12)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {isPlaceholder ? (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                      height: '100%',
                      width: '100%'
                    }}>
                      <span style={{ 
                        color: '#94a3b8', 
                        fontSize: '0.875rem', 
                        fontWeight: '500' 
                      }}>
                        Photo {index + 1}
                      </span>
                    </div>
                  ) : (
                    <>
                      <img
                        src={imagePath}
                        alt={`Gallery photo ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div style="
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
                                height: 100%;
                                width: 100%;
                              ">
                                <span style="color: #94a3b8; font-size: 0.875rem; font-weight: 500;">
                                  Photo ${index + 1}
                                </span>
                              </div>
                            `;
                          }
                        }}
                      />
                      <div 
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.2) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.3s ease'
                        }}
                      >
                        <span style={{ 
                          color: '#fff', 
                          fontSize: '0.875rem',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '1.2px'
                        }}>
                          View Photo
                        </span>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && hasImages && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1rem',
            backdropFilter: 'blur(4px)'
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '28px',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontWeight: '300'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ×
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: '50%',
              cursor: 'pointer',
              color: '#fff',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <img
            src={galleryImages[lightboxIndex]}
            alt={`Gallery photo ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
              animation: 'fadeIn 0.3s ease-out'
            }}
          />

          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: '50%',
              cursor: 'pointer',
              color: '#fff',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 6l6 6-6 6"/>
            </svg>
          </button>

          <div style={{
            position: 'absolute',
            bottom: '28px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#fff',
            fontSize: '0.875rem',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '24px',
            padding: '10px 20px',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}>
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}