import { education } from '../content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Education" title="From Raipur to Pittsburgh" />

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.school} delayMs={index * 70} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6 sm:p-7">
                <p className="text-sm text-sage">{item.dates}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink text-balance">
                  {item.school}
                </h3>
                <p className="mt-2 text-[0.97rem] leading-relaxed text-ink-muted">
                  {item.degree}
                </p>
                <p className="mt-4 text-sm text-ink-soft">{item.location}</p>
                {item.detail ? (
                  <p className="mt-1 text-sm font-medium text-ink">{item.detail}</p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
