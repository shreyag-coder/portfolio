import { profile } from '../content'
import { Reveal } from './Reveal'

const photoUrl = `${import.meta.env.BASE_URL}${profile.photoSrc}`

export function Hero() {
  return (
    <section id="about" aria-labelledby="hero-name" className="relative scroll-mt-24 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(95,111,88,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(140,115,85,0.07),transparent_45%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)] lg:gap-16 lg:py-24">
        <Reveal className="order-1 mx-auto w-full max-w-sm lg:order-none lg:max-w-none">
          <figure className="relative mx-auto w-[min(100%,20rem)] lg:w-full lg:max-w-[22rem]">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] border border-sage/35"
            />
            <div className="relative overflow-hidden rounded-[1.6rem] bg-sand shadow-[0_24px_50px_-28px_rgba(43,36,30,0.45)] ring-1 ring-sage/25">
              <div
                aria-hidden="true"
                className="flex aspect-square w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#fffdf8,transparent_45%),linear-gradient(160deg,#eadfcb,#f3eee4_55%,#dfe6d8)]"
              >
                <span className="text-6xl font-semibold tracking-tight text-sage">SG</span>
              </div>
              <img
                src={photoUrl}
                alt={profile.photoAlt}
                width={640}
                height={640}
                className="absolute inset-0 aspect-square h-full w-full object-cover object-[center_18%]"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <figcaption className="sr-only">{profile.name}</figcaption>
          </figure>
        </Reveal>

        <Reveal delayMs={80} className="order-2 lg:order-none">
          <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-sage uppercase">
            {profile.location}
          </p>
          <h1
            id="hero-name"
            className="mt-3 text-4xl leading-[1.1] font-semibold tracking-tight text-ink text-balance sm:text-5xl lg:text-[3.4rem]"
          >
            {profile.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted text-pretty">
            {profile.headline}
          </p>
          <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink-soft text-pretty">
            {profile.intro}
          </p>
          <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-ink-muted text-pretty">
            {profile.about}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#experience" className="btn-primary">
              View experience
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
