import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-me" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const Navigations = () => (
  <header className="sticky top-0 z-10 border-b border-line bg-ink/90 backdrop-blur-lg">
    <div className="mx-auto flex min-h-[78px] w-[min(1120px,calc(100%-40px))] items-center justify-between gap-6 max-[720px]:flex-wrap max-[720px]:py-3">
      <Link className="inline-flex items-center gap-3 text-paper" href="/" aria-label="Shofhal Jamil home">
        <span className="grid size-[38px] place-items-center rounded-xl bg-accent text-xs font-extrabold tracking-[-0.04em] text-ink">SJ</span>
        <span>
          <strong className="block text-sm">Shofhal Jamil</strong>
          <small className="mt-0.5 block text-sm uppercase tracking-[0.04em] text-muted">Full-stack developer</small>
        </span>
      </Link>
      <nav className="flex items-center gap-7 max-[720px]:order-3 max-[720px]:w-full max-[720px]:justify-between max-[720px]:gap-3" aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <Link className="text-base font-bold tracking-[0.02em] text-muted transition-colors hover:text-paper focus-visible:text-paper max-[720px]:text-[0.74rem]" key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="rounded-full border border-line-strong px-4 py-2.5 text-xs font-bold text-paper transition-colors hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent max-[720px]:hidden" href="/contact">
        Let&apos;s talk <span aria-hidden="true">↗</span>
      </Link>
    </div>
  </header>
);

export default Navigations;