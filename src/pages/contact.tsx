const Contact = () => (
  <>
    <section className="page-section page-intro contact-intro">
      <div className="shell contact-grid">
        <div>
          <p className="eyebrow">Have a good problem?</p>
          <h1 className="page-title">
            Let&apos;s make
            <br />
            something <span>useful.</span>
          </h1>
        </div>
        <div className="contact-intro-copy">
          <p>
            Whether you&apos;re shaping a new product, untangling an old one,
            or looking for a thoughtful engineering partner, I&apos;d like to
            hear what you&apos;re working on.
          </p>
          <a className="contact-email" href="mailto:shoval.jamil@gmail.com">
            shoval.jamil@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>

    <section className="shell contact-section">
      <div className="contact-card">
        <div>
          <p className="eyebrow">Say hello</p>
          <h2>Start with a message.</h2>
          <p className="muted">
            I usually reply within a couple of days. No pitch deck required.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button" href="mailto:shoval.jamil@gmail.com">
            Send an email <span aria-hidden="true">↗</span>
          </a>
          <a className="button secondary" href="https://www.linkedin.com/in/shofjam" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="contact-details">
        <div>
          <span className="detail-label">Currently based</span>
          <strong>Sumedang, West Java<br />Indonesia</strong>
        </div>
        <div>
          <span className="detail-label">Focus areas</span>
          <strong>Product engineering<br />Systems &amp; interfaces</strong>
        </div>
        <div>
          <span className="detail-label">Elsewhere</span>
          <strong><a href="https://www.linkedin.com/in/shofjam" target="_blank" rel="noreferrer">LinkedIn ↗</a></strong>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
