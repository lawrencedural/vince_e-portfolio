export function AchievementsPage() {
  return (
    <section className="section" style={{ marginTop: "70px" }}>
      <div className="section-header">
        <p className="section-eyebrow">Recognition</p>
        <h2 className="section-title">Achievements</h2>
        <p className="section-description">
          Throughout my journey, I overcame my worries by turning challenges into achievements. 
          I was a consistent silver medalist from pre-school to grade 6 and later earned 
          first runner-up for Lakan ng Bayan in San Pablo City. In high school, 
          I served as the host for our batch farewell event, and in college at 
          De La Salle University, my team received the best practicum bronze medal. 
          Graduating from De La Salle remains my most meaningful accomplishment as I step into real-world challenges.
        </p>
      </div>
      <div className="achievements-container">
        <div className="achievements-timeline">
          <div className="achievement-item">
            <div className="achievement-date">2024</div>
            <h3 className="achievement-title">Practicum Awardee - Bronze Medalist</h3>
            <p className="achievement-description">
              Earned a Bronze Medal for commendable performance and dedication during practicum training
            </p>
          </div>
          <div className="achievement-item">
            <div className="achievement-date">2024</div>
            <h3 className="achievement-title">Event Host - Grade 10 Farewell Ceremony</h3>
            <p className="achievement-description">
              Selected as the official host for the School's Farewell Program, 
              showcasing confidence and communication skills.
            </p>
          </div>
          <div className="achievement-item">
            <div className="achievement-date">2024</div>
            <h3 className="achievement-title">Academic Silver Medalist (Grades 1-5)</h3>
            <p className="achievement-description">
              Demonstrated consistent academic excellence throughout elementary education
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
