export function FeedbackPage() {
  return (
    <section className="section" style={{ marginTop: "70px" }}>
      <div className="section-header">
        <p className="section-eyebrow">Insights</p>
        <h2 className="section-title">Feedback & Growth</h2>
        <p className="section-description">
          A reflective summary of improvements in communication, applied feedback, and how each task contributed to understanding business and entrepreneurship.
        </p>
      </div>
      <div className="feedback-container">
        <div className="feedback-grid">
          <article className="feedback-card">
            <div className="feedback-card-bg" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23e8f0ff%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23999%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EBackground Image%3C/text%3E%3C/svg%3E')" }}></div>
            <h3>How my written and oral communication skills have improved</h3>
            <div className="feedback-body">
              <p>Throughout the term, I initially struggled to engage in small interactions with my classmates because I was too shy to approach them. As the weeks went by, each activity challenged me to communicate more whether through oral speeches or group discussions.</p>
              <p>However, when we began practicing public speaking, I slowly started to overcome my fear. The following week, I was chosen to deliver an impromptu speech, which pushed me to improve even more.</p>
              <p>Towards the end of the term, I realized how much progress I had made in communicating with my group. I even found myself talking to them as comfortably as I would with a close friend. After the presentation by our guest speaker about introverted individuals, I felt inspired and gained the confidence to interact more openly with my classmates.</p>
              <p><strong>In the end, this term became a turning point for my confidence, communication skills, and personal growth.</strong></p>
            </div>
          </article>

          <article className="feedback-card">
            <div className="feedback-card-bg" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23fff0e8%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23999%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EBackground Image%3C/text%3E%3C/svg%3E')" }}></div>
            <h3>What feedback I received and how I applied it</h3>
            <div className="feedback-body">
              <p><strong>Feedbacks:</strong> At first lack of confidence, having a hard time expressing my thoughts and feelings.</p>
              <p><strong>Solution:</strong> To be myself and express my thoughts in the way that feels natural to me. I was no longer afraid of making mistakes. During the final activities of the term, I felt more confident and comfortable, which led to much better outcomes.</p>
            </div>
          </article>

          <article className="feedback-card">
            <div className="feedback-card-bg" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23e8ffe8%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%23999%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EBackground Image%3C/text%3E%3C/svg%3E')" }}></div>
            <h3>How each task contributed to my understanding of business and entrepreneurship</h3>
            <div className="feedback-body">
              <p>Every task in this communication course plays an important role, as each one helps strengthen our abilities and improve our weaknesses through experience. In the business field, communication with different parties is both common and formal.</p>
              <p>As a young entrepreneur, mastering proper communication is one of the first steps toward becoming successful in our journey as business professionals.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
