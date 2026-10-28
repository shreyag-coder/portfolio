import { projects } from '../content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work beyond the day job"
          intro="Classroom AR, creative-tool prototypes, and a hardware hackathon build — each grounded in a real constraint."
        />

        <ul className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.title}>
              <Reveal delayMs={index * 50} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6 shadow-[0_10px_30px_-24px_rgba(43,36,30,0.4)] sm:p-7">
                  <h3 className="text-lg font-semibold tracking-tight text-ink text-balance">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.97rem] leading-relaxed text-ink-muted text-pretty">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-sand px-3 py-1 text-xs tracking-wide text-ink-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
