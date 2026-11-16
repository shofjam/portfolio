const Contact = () => (
  <>
    <section className="py-16">
      <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] grid-cols-1 items-end gap-20 md:grid-cols-[1fr_0.7fr]">
        <div>
          <p className="text-base font-extrabold uppercase tracking-[0.16em] text-accent">Have a good problem?</p>
          <h1 className="mt-5 max-w-[720px] font-display text-[clamp(2.3rem,6vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-paper">Let&apos;s make<br />something <span className="text-accent">useful.</span></h1>
        </div>
        <div>
          <p className="max-w-[380px] leading-7 text-muted">Whether you&apos;re shaping a new product, untangling an old one, or looking for a thoughtful engineering partner, I&apos;d like to hear what you&apos;re working on.</p>
          <a className="mt-6 inline-flex items-center gap-3 border-b border-accent font-display text-lg text-accent" href="mailto:shoval.jamil@gmail.com">shoval.jamil@gmail.com <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <section className="mx-auto w-[min(1120px,calc(100%-40px))] pb-20">
      <div className="flex items-center justify-between gap-10 rounded-[20px] border border-line bg-[linear-gradient(120deg,#172335,#131a29)] p-11 max-[820px]:items-start max-[820px]:flex-col max-[820px]:p-7">
        <div>
          <p className="text-base font-extrabold uppercase tracking-[0.16em] text-accent">Say hello</p>
          <h2 className="mt-3 font-display text-[2.6rem] tracking-[-0.07em] text-paper">Start with a message.</h2>
          <p className="mt-2 text-muted">I usually reply within a couple of days. No pitch deck required.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-[18px] text-sm font-extrabold text-ink transition-colors hover:bg-paper" href="mailto:shoval.jamil@gmail.com">Send an email <span aria-hidden="true">↗</span></a>
          <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line-strong px-[18px] text-xs font-extrabold text-paper transition-colors hover:border-accent hover:text-accent" href="https://www.linkedin.com/in/shofjam" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 pt-14 max-[560px]:grid-cols-1">
        <div className="border-t border-line pt-3"><span className="mb-2 block text-sm uppercase tracking-[0.12em] text-muted">Currently based</span><strong className="text-sm leading-6">Sumedang, West Java<br />Indonesia</strong></div>
        <div className="border-t border-line pt-3"><span className="mb-2 block text-sm uppercase tracking-[0.12em] text-muted">Focus areas</span><strong className="text-sm leading-6">Product engineering<br />Systems &amp; interfaces</strong></div>
        <div className="border-t border-line pt-3"><span className="mb-2 block text-sm uppercase tracking-[0.12em] text-muted">Elsewhere</span><strong className="text-sm leading-6"><a className="text-accent" href="https://www.linkedin.com/in/shofjam" target="_blank" rel="noreferrer">LinkedIn ↗</a></strong></div>
      </div>
    </section>
  </>
);

export default Contact;
