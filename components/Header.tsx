import { navItems, profile } from "@/data/portfolio";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-ink-950/82 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="focus-ring rounded-sm text-sm font-semibold text-steel-50">
          {profile.name}
        </a>
        <nav aria-label="Основная навигация" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm text-sm text-steel-300 transition-colors hover:text-steel-50"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacts"
          className="focus-ring rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-steel-50 transition hover:border-accent-400/40 hover:bg-accent-400/10"
        >
          Contact
        </a>
      </Container>
    </header>
  );
}
