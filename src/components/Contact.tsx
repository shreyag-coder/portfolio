import { profile } from '../content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about product, discovery, or CMU"
          intro="The fastest way to reach me is email. LinkedIn is open too."
        />

        <Reveal>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            <a
              href={profile.emailHref}
              className="group rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-sage/40 sm:p-7"
            >
              <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-sage uppercase">
                Email
              </p>
              <p className="mt-3 text-lg font-medium tracking-tight text-ink group-hover:text-sage">
                {profile.email}
              </p>
              <p className="mt-2 text-sm text-ink-soft">Opens your mail client</p>
            </a>

            <a
              href={profile.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-sage/40 sm:p-7"
            >
              <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-sage uppercase">
                LinkedIn
              </p>
              <p className="mt-3 text-lg font-medium tracking-tight text-ink group-hover:text-sage">
                shreya-gupta-0367b11b8
              </p>
              <p className="mt-2 text-sm text-ink-soft">Opens in a new tab</p>
            </a>

            <a
              href={profile.phoneHref}
              className="rounded-2xl border border-line bg-paper p-6 sm:p-7"
            >
              <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-sage uppercase">
                Phone
              </p>
              <p className="mt-3 text-lg font-medium tracking-tight text-ink">{profile.phone}</p>
            </a>

            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-7">
              <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-sage uppercase">
                Location
              </p>
              <p className="mt-3 text-lg font-medium tracking-tight text-ink">
                Raipur, India
              </p>
              <p className="mt-1 text-sm text-ink-soft">Pittsburgh, PA for MCDS</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
