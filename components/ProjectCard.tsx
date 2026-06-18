import { Pill } from "./Pill";

type ProjectCardProps = {
  project: {
    title: string;
    type: string;
    href: string;
    stack: string[];
    description: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface group flex min-h-[25rem] flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-400/30 sm:p-7">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-sm font-semibold text-accent-400">{project.type}</p>
          <h3 className="mt-3 text-2xl font-semibold text-steel-50">{project.title}</h3>
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Открыть проект ${project.title}`}
          className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/12 text-steel-50 transition group-hover:border-accent-400/50 group-hover:bg-accent-400/10"
        >
          ↗
        </a>
      </div>
      <p className="mt-5 text-base leading-7 text-steel-300">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </div>
    </article>
  );
}
