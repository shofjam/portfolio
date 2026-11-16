"use client";

import { useMemo, useState } from "react";
import { projects } from "../../data/portfolio";

const filters = ["All", "Product engineering", "Microservices", "Web application", "Operations", "Frontend", "Legacy modernization"];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(() => activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter), [activeFilter]);

  return (
    <>
      <section className="py-16">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
          <p className="text-base font-extrabold uppercase tracking-[0.16em] text-accent">Selected work</p>
          <h1 className="mt-5 max-w-[720px] font-display text-[clamp(2.3rem,6vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-paper">A few things I&apos;ve<br /><span className="text-accent">helped bring to life.</span></h1>
          <p className="mt-8 max-w-[580px] text-base leading-7 text-muted">Real-world products across logistics, operations, data, and learning. Some details are intentionally kept private.</p>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-40px))] pb-20">
        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter projects">
          {filters.map((filter) => <button className={`rounded-full border px-3 py-2 text-base transition-colors ${activeFilter === filter ? "border-accent text-accent" : "border-line text-muted hover:border-accent hover:text-accent"}`} type="button" onClick={() => setActiveFilter(filter)} key={filter}>{filter}</button>)}
        </div>
        <div className="grid grid-cols-2 gap-5 max-[820px]:grid-cols-1">
          {visibleProjects.map((project, index) => (
            <article className="overflow-hidden rounded-[18px] border border-line bg-ink-soft" key={project.title}>
              <div className="min-h-[260px] bg-[linear-gradient(140deg,#263b59,#161e2e)] p-4">
                <div className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-paper" /><span className="size-1.5 rounded-full bg-paper/65" /><span className="size-1.5 rounded-full bg-paper/35" /><small className="ml-auto text-xs tracking-[0.12em] text-paper/60">PROJECT 0{index + 1}</small></div>
                <div className="flex h-[190px] flex-col justify-center px-[10%]"><span className="text-sm font-extrabold uppercase tracking-[0.13em] text-accent">{project.category}</span><strong className="mt-2 max-w-[240px] font-display text-3xl leading-[0.95] tracking-[-0.07em] text-paper">{project.title.split(" ").slice(0, 2).join(" ")}</strong><div className="mt-6 flex h-[42px] items-end gap-1"><span className="h-[45%] w-3 rounded-t bg-accent" /><span className="h-4/5 w-3 rounded-t bg-orange" /><span className="h-[62%] w-3 rounded-t bg-accent" /></div></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between gap-5 text-sm uppercase text-muted"><span>{project.company}</span><span>{project.year}</span></div>
                <h2 className="mt-3 font-display text-[1.7rem] tracking-[-0.06em] text-paper">{project.title}</h2>
                <p className="mt-2 min-h-[76px] text-sm leading-7 text-muted max-[560px]:min-h-0">{project.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">{project.stack.map((technology) => <li className="rounded-full border border-line px-2.5 py-1.5 text-xs text-muted" key={technology}>{technology}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Work;
