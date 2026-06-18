type PillProps = {
  children: React.ReactNode;
  tone?: "default" | "accent";
};

export function Pill({ children, tone = "default" }: PillProps) {
  const toneClass =
    tone === "accent"
      ? "border-accent-400/28 bg-accent-400/10 text-accent-400"
      : "border-white/10 bg-white/[0.035] text-steel-100";

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${toneClass}`}>
      {children}
    </span>
  );
}
