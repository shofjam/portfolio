import Link from "next/link";
import { projects, skills } from "../../data/portfolio";

const Home = () => (
  <>
    <section className="overflow-hidden bg-ink py-16">
      <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] items-center gap-20 max-[820px]:grid-cols-1 max-[820px]:gap-12">
        <div>
          <p className="text-base font-extrabold uppercase tracking-[0.16em] text-accent">Full-stack developer · Indonesia</p>
          <h1 className="mt-5 max-w-[800px] font-display text-[clamp(3.7rem,8vw,7.2rem)] font-semibold leading-[0.9] tracking-[-0.09em] text-paper max-[560px]:text-[3.5rem]">
            I build digital products that feel <em className="not-italic text-accent">clear</em>, capable, and human.
          </h1>
          <p className="my-8 max-w-[520px] text-[1.06rem] leading-7 text-muted">
            I&apos;m Ahmad Shofhal Jamil — a full-stack developer with 9 years of experience turning complex systems into dependable experiences for real people.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-[18px] text-sm font-extrabold text-ink transition-colors hover:bg-paper focus-visible:bg-paper" href="/work">
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
            <Link className="inline-flex items-center gap-2 text-xs font-extrabold text-paper transition-colors hover:text-accent focus-visible:text-accent" href="/about-me">
              More about me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="relative pt-5 max-[820px]:max-w-[440px] max-[820px]:pt-0">
          <div className="relative grid min-h-[360px] place-items-center overflow-hidden rounded-[180px_180px_24px_24px] border border-line-strong bg-[linear-gradient(140deg,rgba(214,243,106,0.3),transparent_45%),linear-gradient(20deg,#1c2940,#182031)]]">
            <div className="z-[1] font-display text-[7rem] font-semibold tracking-[-0.14em] text-paper">SJ</div>
            <span className="absolute bottom-[22px] z-[1] text-base tracking-[0.04em] text-paper">Available for thoughtful work</span>
          </div>
          <div className="mt-6 flex gap-3 pl-7 text-xs leading-6 text-muted">
            <span className="mt-2 h-px w-7 shrink-0 bg-accent" />
            <p className="max-w-[210px]">From backend architecture to the last interaction, I care about the details that make software last.</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-[72px] flex w-[min(1120px,calc(100%-40px))] items-end gap-14 border-t border-line pt-[72px] max-[560px]:flex-wrap max-[560px]:gap-x-9 max-[560px]:gap-y-6 max-[560px]:pt-11">
        {[
          ["9+", "years building"],
          ["13+", "products shipped"],
          ["03", "core disciplines"],
        ].map(([value, label]) => (
          <div key={label}>
            <strong className="block font-display text-3xl tracking-[-0.08em] text-paper">{value}</strong>
            <span className="block text-sm uppercase text-muted">{label}</span>
          </div>
        ))}
        <span className="ml-auto text-sm uppercase text-accent max-[560px]:ml-0 max-[560px]:w-full">Scroll to explore ↓</span>
      </div>
    </section>

    <section className="mx-auto w-[min(1120px,calc(100%-40px))] py-16">
      <div className="mb-9 flex items-end justify-between gap-6 max-[720px]:flex-col max-[720px]:items-start">
        <div>
          <p className="text-base font-extrabold uppercase tracking-[0.16em] text-accent">Selected work</p>
          <h2 className="mt-3 max-w-[720px] font-display text-[clamp(2.3rem,6vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-paper">Good work has a point of view.</h2>
        </div>
        <p className="max-w-[360px] leading-7 text-muted">A selection of systems, products, and interfaces I&apos;ve helped shape across logistics, operations, and learning.</p>
      </div>
      <div className="grid grid-cols-3 gap-4 max-[820px]:grid-cols-1">
        {projects.slice(0, 3).map((project, index) => (
          <Link className="group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[18px] border border-line bg-[linear-gradient(155deg,#2d1e2b,#171d2c)] p-6 transition-transform hover:-translate-y-1.5 focus-visible:-translate-y-1.5" href="/work" key={project.title}>
            <div className="absolute right-6 top-[22px] text-xs text-paper/45">0{index + 1}</div>
            <div className="absolute inset-x-6 top-[62px] h-[170px] rounded-xl border border-paper/20 bg-ink/40 p-3">
              <span className="mr-1 inline-block size-1.5 rounded-full bg-accent" />
              <span className="mr-1 inline-block size-1.5 rounded-full bg-orange" />
              <span className="inline-block size-1.5 rounded-full bg-muted" />
              <div className="mx-auto mt-[34px] h-[68px] w-3/4 skew-y-[-13deg] border-b-2 border-l-2 border-accent" />
            </div>
            <p className="text-sm font-extrabold uppercase tracking-[0.13em] text-accent">{project.category}</p>
            <h3 className="mt-2 max-w-[240px] font-display text-[1.45rem] tracking-[-0.05em] text-paper">{project.title}</h3>
            <span className="absolute bottom-6 right-6 text-2xl text-paper" aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </section>

    <section className="bg-accent py-24 text-ink max-[720px]:py-16">
      <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] grid-cols-[0.35fr_1fr] gap-[60px] max-[820px]:grid-cols-1 max-[820px]:gap-6">
        <p className="text-base font-extrabold uppercase tracking-[0.16em] text-ink/65">How I work</p>
        <div>
          <h2 className="font-display text-[clamp(2.7rem,6vw,5.8rem)] leading-[0.95] tracking-[-0.08em]">Make the hard things feel <span className="text-orange">simple.</span></h2>
          <p className="my-7 max-w-[560px] text-base leading-7 text-ink/70">The best interfaces are the visible result of invisible care: strong foundations, useful constraints, and a clear understanding of the people on the other side of the screen.</p>
          <Link className="inline-flex items-center gap-2 text-xs font-extrabold text-ink" href="/contact">Start a conversation <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>

    <section className="mx-auto w-[min(1120px,calc(100%-40px))] py-16">
      <div className="mb-9">
        <p className="text-base font-extrabold uppercase tracking-[0.16em] text-accent">Toolkit</p>
        <h2 className="mt-3 max-w-[720px] font-display text-[clamp(2.3rem,6vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-paper">Comfortable across the stack.</h2>
      </div>
      <div className="grid grid-cols-3 border-l border-t border-line max-[560px]:grid-cols-1">
        {skills.slice(0, 6).map((skill) => (
          <div className="border-b border-r border-line p-[22px]" key={skill.name}>
            <span className="block font-bold">{skill.name}</span>
            <small className="mt-2 block text-sm uppercase text-muted">{skill.group}</small>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Home;
