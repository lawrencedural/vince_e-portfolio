import { useState } from "react";
import { reflections, type Reflection } from "../data/reflections";
import { ReflectionModal } from "../components/ReflectionModal";

export function ReflectionsPage() {
  const [activeReflection, setActiveReflection] = useState<Reflection | null>(null);

  return (
    <>
      <section className="section section-alt" style={{ marginTop: "70px" }}>
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
      <ReflectionModal
        reflection={activeReflection}
        onClose={() => setActiveReflection(null)}
      />
    </>
  );
}
