import { experience } from '../content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="section-band scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Shipping discovery, sharing, and craft"
          intro="Product work across recommendations, mobile platforms, and experiment-minded feature delivery."
        />

        <ol className="relative mx-auto max-w-3xl space-y-6 before:absolute before:top-3 before:bottom-3 before:left-[0.7rem] before:w-px before:bg-line sm:before:left-[0.8rem]">
          {experience.map((job, index) => (
            <li key={`${job.company}-${job.dates}`}>
              <Reveal delayMs={index * 60}>
                <article className="relative rounded-2xl border border-line bg-paper p-6 pl-12 shadow-[0_10px_30px_-24px_rgba(43,36,30,0.4)] sm:p-8 sm:pl-14">
                  <span
                    aria-hidden="true"
                    className="absolute top-8 left-[0.42rem] h-3 w-3 rounded-full border-2 border-sage bg-cream sm:left-[0.52rem]"
                  />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold tracking-tight text-ink">
                      {job.role}
                    </h3>
                    <p className="text-sm whitespace-nowrap text-ink-soft">{job.dates}</p>
                  </div>
                  <p className="mt-1 text-sm text-sage">
                    {job.company}
                    <span className="text-ink-soft"> · {job.location}</span>
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-[0.97rem] leading-relaxed text-ink-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage/70"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
