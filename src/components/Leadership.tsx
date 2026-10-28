import { achievements, leadership } from '../content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Leadership() {
  return (
    <section id="leadership" className="section-band scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Leadership & achievements"
          title="Teaching, community, and a few honors"
        />

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {leadership.map((item) => (
                <article
                  key={item.role}
                  className="rounded-2xl border border-line bg-paper p-6 sm:p-7"
                >
                  <p className="text-sm text-sage">{item.dates}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">
                    {item.role}
                  </h3>
                  {item.org ? <p className="mt-1 text-sm text-ink-soft">{item.org}</p> : null}
                  <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-muted">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <article className="h-full rounded-2xl border border-line bg-paper p-6 sm:p-7">
              <h3 className="text-lg font-semibold tracking-tight text-ink">Achievements</h3>
              <ul className="mt-4 space-y-4">
                {achievements.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.97rem] leading-relaxed text-ink-muted">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
