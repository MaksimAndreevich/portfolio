import { ContactGrid } from "@/components/ContactGrid";
import { Container } from "@/components/Container";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pill } from "@/components/Pill";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { achievements, experience, profile, projects, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Container>
          <Section id="about" label="About me" title="Инженерный фокус, продуктовая аккуратность и спокойный delivery.">
            <div className="grid gap-4 lg:grid-cols-3">
              {profile.about.map((paragraph) => (
                <div key={paragraph} className="surface rounded-3xl p-6">
                  <p className="text-base leading-8 text-steel-200">{paragraph}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="stack" label="Skills / tech stack" title="Технологии, с которыми я проектирую, собираю и довожу продукты до production.">
            <div className="grid gap-4 md:grid-cols-2">
              {skillGroups.map((group) => (
                <article key={group.title} className="surface rounded-3xl p-6">
                  <h3 className="text-xl font-semibold text-steel-50">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item, index) => (
                      <Pill key={item} tone={index === 0 ? "accent" : "default"}>
                        {item}
                      </Pill>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="experience" label="Experience" title="Опыт в продуктовой разработке, сложных интерфейсах и production delivery.">
            <div className="surface rounded-3xl px-5 sm:px-8">
              {experience.map((item) => (
                <ExperienceItem key={`${item.company}-${item.period}`} item={item} />
              ))}
            </div>
          </Section>

          <Section id="projects" label="Projects" title="Проекты, которые показывают не только UI, но и способность доводить продукт до запуска.">
            <div className="grid gap-4 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Section>

          <Section id="achievements" label="Achievements / extra" title="Сильные маркеры опыта.">
            <div className="grid gap-3 md:grid-cols-2">
              {achievements.map((achievement) => (
                <div key={achievement} className="surface rounded-2xl p-5">
                  <p className="text-base leading-7 text-steel-100">{achievement}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="contacts"
            label="Contacts"
            title="Открыт к удаленной и проектной работе на React&nbsp;/&nbsp;Next.js."
            // description="Быстрее всего отвечаю в Telegram или по email."
          >
            <ContactGrid />
          </Section>
        </Container>
      </main>

      <footer className="border-t border-white/10 py-8">
        <Container className="flex flex-col gap-3 text-sm text-steel-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. Software Developer.</p>
        </Container>
      </footer>
    </>
  );
}
