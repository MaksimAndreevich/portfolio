type ExperienceItemProps = {
  item: {
    company: string;
    role: string;
    period: string;
    location: string;
    summary: string;
    highlights: string[];
  };
};

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="group grid gap-5 border-t border-white/10 py-8 transition-colors hover:border-accent-400/40 md:grid-cols-[0.34fr_0.66fr]">
      <div>
        <p className="text-sm font-semibold text-accent-400">{item.period}</p>
        <p className="mt-3 text-xl font-semibold text-steel-50">{item.company}</p>
        <p className="mt-1 text-sm text-steel-300">{item.location}</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-steel-50">{item.role}</h3>
        <p className="mt-4 max-w-3xl text-base leading-7 text-steel-300">{item.summary}</p>
        <ul className="mt-5 grid gap-3">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-6 text-steel-100">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
