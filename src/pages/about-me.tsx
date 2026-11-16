import { experiences, skills } from "../data/portfolio";

const AboutMe = () => (
  <>
    <section className="page-section page-intro">
      <div className="shell">
        <p className="eyebrow">A little context</p>
        <h1 className="page-title">
          Developer by trade.
          <br />
          <span>Problem solver by nature.</span>
        </h1>
        <p className="page-lede">
          I enjoy the space between a messy problem and a useful solution —
          where product thinking, engineering discipline, and a little
          curiosity meet.
        </p>
      </div>
    </section>

    <section className="page-section shell about-profile">
      <div className="about-monogram" aria-hidden="true">
        <span>SJ</span>
        <small>Based in<br />Indonesia</small>
      </div>
      <div className="about-copy">
        <p className="eyebrow">The short version</p>
        <h2>I make complex systems easier to trust.</h2>
        <p>
          For the last nine years, I&apos;ve worked across .NET, React,
          Angular, Blazor, and microservices. That range taught me to zoom out
          for the architecture and zoom in for the interaction that makes a
          product feel right.
        </p>
        <p>
          I&apos;m at my best in teams that value calm communication, useful
          feedback, and shipping improvements one thoughtful decision at a
          time.
        </p>
        <div className="button-row">
          <a
            className="button"
            href="mailto:shoval.jamil@gmail.com?subject=Hello%20Shofhal"
          >
            Email me <span aria-hidden="true">↗</span>
          </a>
          <span className="availability">
            <span className="status-dot" /> Open to select opportunities
          </span>
        </div>
      </div>
    </section>

    <section className="page-section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Experience</p>
          <h2>The path so far.</h2>
        </div>
        <p>Nine years of making software more useful, resilient, and human.</p>
      </div>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article className="experience-item" key={`${experience.company}-${experience.role}`}>
            <div className="experience-index">0{index + 1}</div>
            <div className="experience-main">
              <div className="experience-heading">
                <div>
                  <p className="eyebrow">{experience.period}</p>
                  <h3>{experience.role}</h3>
                  <p className="muted">
                    {experience.company} · {experience.location}
                  </p>
                </div>
                <span className="experience-mark" aria-hidden="true">↗</span>
              </div>
              <p>{experience.summary}</p>
              {experience.highlights.length > 0 && (
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="page-section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Capabilities</p>
          <h2>What I bring to the table.</h2>
        </div>
      </div>
      <div className="capability-grid">
        {skills.map((skill) => (
          <div className="capability" key={skill.name}>
            <div className="capability-meta">
              <span>{skill.name}</span>
              <small>{skill.group}</small>
            </div>
            <div className="skill-meter" aria-label={`${skill.name}: ${skill.level}%`}>
              <span style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default AboutMe;
