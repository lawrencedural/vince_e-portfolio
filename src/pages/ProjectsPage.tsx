import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { ProjectModal } from "../components/ProjectModal";
import { portfolioConfig } from "../data/config";

export function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section className="section section-alt" style={{ marginTop: "70px" }}>
        <div className="section-header">
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title">Projects & Weekly Tasks</h2>
          <p className="section-description">
            A compilation of key written and video outputs, showcasing my
            individual contributions and collaborative work in business and
            entrepreneurship.
          </p>
        </div>
        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setActiveProject(project)}
              >
                {portfolioConfig.usePlaceholders || !project.images || project.images.length === 0 ? (
                  <div className="project-card-image">
                    <span>Project Image</span>
                  </div>
                ) : (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="project-card-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "";
                      target.style.display = "none";
                      target.nextElementSibling?.classList.add("show-placeholder");
                    }}
                  />
                )}
                <div className="project-card-content">
                  <p className="project-card-label">{project.lesson}</p>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-description">
                    {project.summary}
                  </p>
                  <div className="project-card-tags">
                    <span className="project-tag">Business</span>
                    <span className="project-tag">Communication</span>
                  </div>
                  <span className="project-card-link">View Details</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
