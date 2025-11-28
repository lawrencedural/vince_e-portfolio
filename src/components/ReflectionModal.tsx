import type { Reflection } from "../data/reflections";

type ReflectionModalProps = {
  reflection: Reflection | null;
  onClose: () => void;
};

export function ReflectionModal({ reflection, onClose }: ReflectionModalProps) {
  if (!reflection) return null;

  // Split content into paragraphs for better readability
  const paragraphs = reflection.content
    .split("\n\n")
    .filter((para) => para.trim().length > 0);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal reflection-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <p className="modal-eyebrow">{reflection.week}</p>
        <h3 className="modal-title">{reflection.title}</h3>
        <div className="modal-body reflection-content">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="reflection-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

