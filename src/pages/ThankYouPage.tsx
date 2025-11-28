import { useState } from "react";
import { portfolioConfig } from "../data/config";

export function ThankYouPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const hasImages = portfolioConfig.images.gallery.length > 0;

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + portfolioConfig.images.gallery.length) % portfolioConfig.images.gallery.length);
  };
  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % portfolioConfig.images.gallery.length);
  };

  // Ensure we only show 5 images
  const galleryImages = portfolioConfig.images.gallery.slice(0, 5);
  const displayImages = galleryImages.length > 0 ? galleryImages : Array(5).fill('');

  return (
    <>
      <section className="section section-alt" style={{ marginTop: "70px" }}>
        <div className="section-header">
          <p className="section-eyebrow">Gratitude</p>
          <h2 className="thankyou-title">Thank You</h2>
          <p className="section-description">
            A heartfelt appreciation to everyone who has been part of my journey—
            mentors, classmates, and supporters who have shaped my growth and success.
          </p>
        </div>
        
        {/* Asymmetric Gallery Layout for 5 Images */}
        <div className="thankyou-container">
          <div 
            className="thankyou-gallery"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '2rem 1rem'
            }}
          >
            {displayImages.map((imagePath, index) => {
              // Define specific grid layouts for each image
              const getGridStyle = (idx: number) => {
                switch(idx) {
                  case 0: // Large feature image
                    return { gridColumn: 'span 2', gridRow: 'span 2', minHeight: '400px' };
                  case 1: // Wide horizontal
                    return { gridColumn: 'span 2', minHeight: '196px' };
                  case 2: // Small square
                    return { gridColumn: 'span 1', minHeight: '196px' };
                  case 3: // Small square
                    return { gridColumn: 'span 1', minHeight: '196px' };
                  case 4: // Wide horizontal bottom
                    return { gridColumn: 'span 2', minHeight: '250px' };
                  default:
                    return { gridColumn: 'span 1', minHeight: '250px' };
                }
              };

              const isPlaceholder = portfolioConfig.usePlaceholders || !imagePath;

              return (
                <div 
                  key={index} 
                  className="gallery-item"
                  onClick={() => !isPlaceholder && setLightboxIndex(index)}
                  style={{ 
                    cursor: isPlaceholder ? 'default' : 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    ...getGridStyle(index)
                  }}
                >
                  {isPlaceholder ? (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#f0f0f0',
                      height: '100%',
                      width: '100%',
                      border: '2px dashed #d0d0d0'
                    }}>
                      <span style={{ color: '#999', fontSize: '0.875rem', fontWeight: '500' }}>
                        Photo {index + 1}
                      </span>
                    </div>
                  ) : (
                    <>
                      <img
                        src={imagePath}
                        alt={`Gallery photo ${index + 1}`}
                        className="gallery-image"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.1)';
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
                                background: #f0f0f0;
                                height: 100%;
                                width: 100%;
                                border: 2px dashed #d0d0d0;
                              ">
                                <span style="color: #999; font-size: 0.875rem; font-weight: 500;">
                                  Photo ${index + 1}
                                </span>
                              </div>
                            `;
                          }
                        }}
                      />
                      <div 
                        className="gallery-overlay" 
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'rgba(0,0,0,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          pointerEvents: 'none'
                        }}
                      >
                        <span style={{ 
                          color: '#fff', 
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
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

        {/* Words of Appreciation Section */}
        <div style={{
          maxWidth: '900px',
          margin: '4rem auto 2rem',
          padding: '0 1rem'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            A Message of Gratitude
          </h3>
          
          <div style={{ 
            color: '#666',
            lineHeight: '1.8',
            fontSize: '1.05rem',
            textAlign: 'left'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              I want to extend my sincere gratitude to everyone who has supported me throughout this journey.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              To my <strong style={{ color: '#1a1a1a' }}>parents</strong>, thank you for your unwavering love, guidance, and for always believing in what I can achieve.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              To my <strong style={{ color: '#1a1a1a' }}>friends</strong>, I'm grateful for your encouragement, shared moments, and for pushing me to keep striving.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              To my <strong style={{ color: '#1a1a1a' }}>professors</strong>, your teachings and wisdom have played a huge role in shaping my growth and understanding.
            </p>
            
            <p style={{ marginBottom: '1.5rem' }}>
              And to my <strong style={{ color: '#1a1a1a' }}>Entrepreneurship classmates</strong>, thank you for the collaboration, ideas, and experiences that made this journey both meaningful and memorable.
            </p>
            
            <p style={{ 
              marginTop: '2rem',
              fontStyle: 'italic',
              color: '#2563eb',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}>
              I truly appreciate every person who has helped me reach this point and inspired me to keep moving forward.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && hasImages && !portfolioConfig.usePlaceholders && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1rem'
          }}
        >
          {/* Close Button */}
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '32px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              cursor: 'pointer',
              color: '#fff',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Main Image */}
          <img
            src={galleryImages[lightboxIndex]}
            alt={`Gallery photo ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
            }}
          />

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              cursor: 'pointer',
              color: '#fff',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6"/>
            </svg>
          </button>

          {/* Image Counter */}
          <div style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#fff',
            fontSize: '0.875rem',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '20px',
            padding: '8px 16px',
            fontWeight: '500'
          }}>
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}