import { experiences, skills } from "../../data/portfolio";

const AboutMe = () => (
  <>
    <section className="py-16">
      <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
        <p className="text-base font-extrabold uppercase tracking-[0.16em] text-accent">A little context</p>
        <h1 className="mt-5 max-w-[720px] font-display text-[clamp(2.3rem,6vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-paper">Developer by trade.<br /><span className="text-accent">Problem solver by nature.</span></h1>
        <p className="mt-8 max-w-[580px] text-base leading-7 text-muted">I enjoy the space between a messy problem and a useful solution — where product thinking, engineering discipline, and a little curiosity meet.</p>
      </div>
    </section>

    <section className="mx-auto grid w-[min(1120px,calc(100%-40px))] grid-cols-[minmax(260px,0.65fr)_1fr] items-center gap-[100px] border-t border-line py-24 max-[820px]:grid-cols-1 max-[820px]:gap-12 max-[720px]:py-16">
      <div className="flex min-h-[360px] flex-col justify-between rounded-[220px_220px_18px_18px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,143,112,0.35),transparent_24%),linear-gradient(135deg,#263b59,#172031)] p-7">
        <span className="mt-[54px] self-center font-display text-[6.5rem] tracking-[-0.14em] text-paper">SJ</span>
        <small className="text-sm uppercase leading-6 text-accent">Based in<br />Indonesia</small>
      </div>
      <div>
        <p className="text-base font-extrabold uppercase tracking-[0.16em] text-accent">The short version</p>
        <h2 className="mt-3 max-w-[540px] font-display text-[clamp(2rem,4vw,3.6rem)] leading-none tracking-[-0.07em] text-paper">I make complex systems easier to trust.</h2>
        <p className="mt-4 max-w-[560px] leading-7 text-muted">For the last nine years, I&apos;ve worked across .NET, React, Angular, Blazor, and microservices. That range taught me to zoom out for the architecture and zoom in for the interaction that makes a product feel right.</p>
        <p className="mt-4 max-w-[560px] leading-7 text-muted">I&apos;m at my best in teams that value calm communication, useful feedback, and shipping improvements one thoughtful decision at a time.</p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-[18px] text-sm font-extrabold text-ink transition-colors hover:bg-paper" href="mailto:shoval.jamil@gmail.com?subject=Hello%20Shofhal">Email me <span aria-hidden="true">↗</span></a>
          <span className="text-sm text-muted"><span className="mr-1.5 inline-block size-1.5 rounded-full bg-accent" />Open to select opportunities</span>
        </div>
      </div>
    </section>

    <section className="mx-auto w-[min(1120px,calc(100%-40px))] py-16">
      <div className="mb-9 flex items-end justify-between gap-6 max-[720px]:flex-col max-[720px]:items-start">
        <div>
          <p className="text-base font-extrabold uppercase tracking-[0.16em] text-accent">Experience</p>
          <h2 className="mt-3 max-w-[720px] font-display text-[clamp(2.3rem,6vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-paper">The path so far.</h2>
        </div>
        <p className="max-w-[360px] leading-7 text-muted">Nine years of making software more useful, resilient, and human.</p>
      </div>
      <div className="border-t border-line">
        {experiences.map((experience, index) => (
          <article className="grid grid-cols-[80px_1fr] gap-6 border-b border-line py-9 max-[560px]:grid-cols-1 max-[560px]:gap-3" key={`${experience.company}-${experience.role}`}>
            <div className="text-base font-extrabold text-accent max-[560px]:order-2">0{index + 1}</div>
            <div>
              <div className="flex justify-between gap-5 max-[560px]:flex-col">
                <div>
                  <p className="text-base font-extrabold uppercase tracking-[0.16em] text-accent">{experience.period}</p>
                  <h3 className="mt-2 font-display text-2xl tracking-[-0.05em] text-paper">{experience.role}</h3>
                  <p className="text-muted">{experience.company} · {experience.location}</p>
                </div>
                <span className="text-xl text-accent" aria-hidden="true">↗</span>
              </div>
              <p className="mt-5 max-w-[620px] leading-7 text-muted">{experience.summary}</p>
              {experience.highlights.length > 0 && <ul className="mt-5 flex max-w-[780px] flex-wrap gap-x-6 gap-y-2 pl-4 text-sm leading-6 text-muted">{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="mx-auto w-[min(1120px,calc(100%-40px))] py-16">
      <div className="mb-9">
        <p className="text-base font-extrabold uppercase tracking-[0.16em] text-accent">Capabilities</p>
        <h2 className="mt-3 max-w-[720px] font-display text-[clamp(2.3rem,6vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-paper">What I bring to the table.</h2>
      </div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-7 max-[560px]:grid-cols-1">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex justify-between gap-5"><span>{skill.name}</span><small className="text-sm uppercase text-muted">{skill.group}</small></div>
            <div className="h-[5px] overflow-hidden rounded-full bg-line"><span className="block h-full rounded-full bg-accent" style={{ width: `${skill.level}%` }} /></div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default AboutMe;
