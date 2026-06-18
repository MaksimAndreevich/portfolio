import { metrics, profile } from "@/data/portfolio";
import Image from "next/image";
import { Container } from "./Container";
import { Pill } from "./Pill";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="reveal">
            <div className="mb-7 flex flex-wrap gap-3">
              <Pill tone="accent">Available for remote work</Pill>
              <Pill>{profile.specialization}</Pill>
            </div>
            <p className="section-label">Portfolio / 2026</p>
            <h1 className="mt-4 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-normal text-steel-50 sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-medium leading-8 text-steel-100 sm:text-2xl">
              {profile.role}.<br /> Создаю чистые, быстрые и надежные интерфейсы для продуктов, которым нужен production-level результат.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-steel-300 sm:text-lg">{profile.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="focus-ring rounded-full bg-steel-50 px-5 py-3 text-center text-sm font-bold text-ink-950 transition hover:bg-accent-400"
              >
                View projects
              </a>
              <a
                href="#contacts"
                className="focus-ring rounded-full border border-white/14 px-5 py-3 text-center text-sm font-bold text-steel-50 transition hover:border-accent-400/50 hover:bg-white/[0.04]"
              >
                Start a conversation
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-1 w-full max-w-[32rem] justify-self-center lg:justify-self-end">
            <div className="surface relative overflow-hidden rounded-[2rem] p-3 shadow-premium">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-ink-800">
                <Image
                  src="/maxim-efimov.jpg"
                  alt="Максим Ефимов"
                  width={1568}
                  height={2748}
                  priority
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="h-full w-full object-cover object-[48%_38%] saturate-[0.82]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,8,0.02),rgba(5,6,8,0.42))]" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/12 bg-ink-950/72 p-4 backdrop-blur-xl">
                <p className="text-sm font-semibold text-steel-50">{profile.location}</p>
                <p className="mt-1 text-sm text-steel-300">{profile.workMode}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-2 mt-12 grid gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="surface rounded-2xl p-5">
              <p className="text-3xl font-semibold text-steel-50">{metric.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-steel-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
