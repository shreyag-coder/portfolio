import { profile } from '../content'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>{profile.location}</span>
          <span aria-hidden="true">·</span>
          <a href={profile.phoneHref} className="transition-colors hover:text-ink">
            {profile.phone}
          </a>
        </p>
      </div>
    </footer>
  )
}
