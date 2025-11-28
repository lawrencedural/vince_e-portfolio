import { portfolioConfig } from "../data/config";

export function ThankYouPage() {
  return (
    <section className="section section-alt" style={{ marginTop: "70px" }}>
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
  );
}
