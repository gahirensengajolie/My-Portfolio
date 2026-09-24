import { projects, projectMeta } from "../data";
import SectionMark from "./SectionMark";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-container">
        <div className="projects-heading">
          <div>
            <SectionMark index="04" total="06" name="Work" />
            <h2>A few things I've shipped.</h2>
          </div>

          <a
            href="https://github.com/gahirensengajolie"
            target="_blank"
            rel="noreferrer"
            className="outline-button"
          >
            All projects <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const meta = projectMeta(project.subtitle);
            return (
              <article
                className="project-card"
                key={project.title}
                data-accent={meta.accent}
              >
                <div className="project-tagbar">
                  <span className="project-tag">{meta.tag}</span>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>

                  <p className="project-description">{project.description}</p>

                  {project.note && (
                    <p className="project-note">{project.note}</p>
                  )}

                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        {link.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
