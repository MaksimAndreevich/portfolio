type SectionProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function Section({ id, label, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 py-16 sm:py-20">
      <div className="mb-9 grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div>
          <p className="section-label">{label}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-normal text-steel-50 sm:text-4xl">
            {title}
          </h2>
        </div>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-steel-300 md:justify-self-end">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
