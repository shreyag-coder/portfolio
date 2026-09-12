type SectionHeadingProps = {
  eyebrow: string
  title: string
  intro?: string
}

export function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-sage uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-semibold tracking-tight text-ink text-balance">{title}</h2>
      {intro ? (
        <p className="mx-auto mt-4 max-w-xl text-[0.98rem] leading-relaxed text-ink-muted text-pretty">
          {intro}
        </p>
      ) : null}
    </div>
  )
}
