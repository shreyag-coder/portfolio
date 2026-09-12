import { skills } from '../content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section-band">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Languages, tools, and how I build"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.title} delayMs={index * 60} className="h-full">
              <article className="h-full rounded-2xl border border-line bg-paper p-6 sm:p-7">
                <h3 className="text-base font-semibold tracking-tight text-ink">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-cream px-3 py-1.5 text-[0.8rem] text-ink-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
