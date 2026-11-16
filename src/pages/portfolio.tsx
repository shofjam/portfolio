import { useMemo, useState } from "react";
import { projects } from "../data/portfolio";

const filters = ["All", "Product engineering", "Microservices", "Web application", "Operations", "Frontend", "Legacy modernization"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <>
      <section className="page-section page-intro">
        <div className="shell">
          <p className="eyebrow">Selected work</p>
          <h1 className="page-title">
            A few things I&apos;ve
            <br />
            <span>helped bring to life.</span>
          </h1>
          <p className="page-lede">
            Real-world products across logistics, operations, data, and
            learning. Some details are intentionally kept private.
          </p>
        </div>
      </section>

      <section className="shell work-section">
        <div className="filter-row" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? "filter-button active" : "filter-button"}
              type="button"
              onClick={() => setActiveFilter(filter)}
              key={filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <article className={`project-card project-card-${project.accent}`} key={project.title}>
              <div className="project-visual">
                <div className="visual-toolbar">
                  <span />
                  <span />
                  <span />
                  <small>PROJECT 0{index + 1}</small>
                </div>
                <div className="visual-content">
                  <span className="visual-label">{project.category}</span>
                  <strong>{project.title.split(" ").slice(0, 2).join(" ")}</strong>
                  <div className="visual-bars">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className="project-body">
                <div className="project-meta">
                  <span>{project.company}</span>
                  <span>{project.year}</span>
                </div>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <ul className="tag-list">
                  {project.stack.map((technology) => (
                    <li className="tag" key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
