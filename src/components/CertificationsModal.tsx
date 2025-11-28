type CertificationsModalProps = {
  open: boolean;
  onClose: () => void;
};

export function CertificationsModal({ open, onClose }: CertificationsModalProps) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <p className="modal-eyebrow">Certifications</p>
        <h3 className="modal-title">Selected Certifications & Badges</h3>
        <p className="modal-body">
          This section can showcase formal and informal learning that support my
          growth in business and communication. Here are examples of what I
          would include:
        </p>
        <ul className="modal-list">
          <li>Online course certificates related to business, IT, or design.</li>
          <li>Short programs or webinars focused on entrepreneurship.</li>
          <li>Communication, leadership, or project management badges.</li>
        </ul>
        <p className="modal-body">
          Including certifications demonstrates my initiative to learn beyond
          the classroom and stay current with emerging trends and tools.
        </p>
      </div>
    </div>
  );
}


