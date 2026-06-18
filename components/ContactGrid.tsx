import { profile } from "@/data/portfolio";

export function ContactGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {profile.contacts.map((contact) => (
        <a
          key={contact.label}
          href={contact.href}
          target={contact.href.startsWith("http") ? "_blank" : undefined}
          rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
          className="focus-ring surface rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-accent-400/35"
        >
          <p className="text-sm font-semibold text-accent-400">{contact.label}</p>
          <p className="mt-3 break-words text-lg font-semibold text-steel-50">{contact.value}</p>
        </a>
      ))}
    </div>
  );
}
