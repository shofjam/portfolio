import { Link } from "react-router-dom";
import { projects, skills } from "../data/portfolio";

const Home = () => (
  <>
    <section className="hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Full-stack developer · Indonesia</p>
          <h1>
            I build digital products that feel <em>clear</em>, capable, and
            human.
          </h1>
          <p className="hero-description">
            I&apos;m Ahmad Shofhal Jamil — a full-stack developer with 9 years
            of experience turning complex systems into dependable experiences
            for real people.
          </p>
          <div className="button-row">
            <Link className="button" to="/portfolio/portfolio">
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" to="/portfolio/about-me">
              More about me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="hero-aside" aria-label="Profile highlights">
          <div className="portrait-card">
            <div className="portrait-monogram">SJ</div>
            <span className="portrait-caption">Available for thoughtful work</span>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <p>
              From backend architecture to the last interaction, I care about
              the details that make software last.
            </p>
          </div>
        </div>
      </div>
      <div className="shell hero-metrics">
        <div>
          <strong>9+</strong>
          <span>years building</span>
        </div>
        <div>
          <strong>20+</strong>
          <span>products shipped</span>
        </div>
        <div>
          <strong>03</strong>
          <span>core disciplines</span>
        </div>
        <span className="scroll-cue">Scroll to explore ↓</span>
      </div>
    </section>

    <section className="page-section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Good work has a point of view.</h2>
        </div>
        <p>
          A selection of systems, products, and interfaces I&apos;ve helped
          shape across logistics, operations, and learning.
        </p>
      </div>
      <div className="featured-grid">
        {projects.slice(0, 3).map((project, index) => (
          <Link
            className={`featured-card featured-card-${project.accent}`}
            to="/portfolio/portfolio"
            key={project.title}
          >
            <div className="project-number">0{index + 1}</div>
            <div className="mini-window" aria-hidden="true">
              <span />
              <span />
              <span />
              <div className="window-chart" />
            </div>
            <p className="card-kicker">{project.category}</p>
            <h3>{project.title}</h3>
            <span className="card-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>
    </section>

    <section className="page-section home-statement">
      <div className="shell statement-grid">
        <p className="eyebrow">How I work</p>
        <div>
          <h2>
            Make the hard things feel <span>simple.</span>
          </h2>
          <p>
            The best interfaces are the visible result of invisible care:
            strong foundations, useful constraints, and a clear understanding
            of the people on the other side of the screen.
          </p>
          <Link className="text-link" to="/portfolio/contact">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>

    <section className="page-section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Toolkit</p>
          <h2>Comfortable across the stack.</h2>
        </div>
      </div>
      <div className="skill-strip">
        {skills.slice(0, 6).map((skill) => (
          <div className="skill-chip" key={skill.name}>
            <span>{skill.name}</span>
            <small>{skill.group}</small>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Home;
