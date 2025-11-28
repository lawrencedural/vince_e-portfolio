import type { Project } from "../data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

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
            <div className="project-modal-gallery">
              {project.images.map((imagePath, index) => (
                <div key={index} className="project-modal-image-wrapper">
                  <img
                    src={imagePath}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="project-modal-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {project.evidence && project.evidence.length > 0 && (
          <>
            <h4 className="modal-subtitle">Evidence</h4>
            <ul className="modal-links">
              {project.evidence.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (item.url.startsWith("#")) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {item.label}
                    {item.url.startsWith("#") && " [PLACEHOLDER LINK]"}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        <h4 className="modal-subtitle">Reflection</h4>
        <p className="modal-body">{project.reflection}</p>
      </div>
    </div>
  );
}


