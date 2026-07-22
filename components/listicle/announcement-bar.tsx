import { CountdownBadge } from '@/components/listicle/countdown-timer'

export function AnnouncementBar() {
  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-6 px-4 py-2.5">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] sm:text-sm">Limited Restock</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary-foreground/70 sm:text-xs">
            Save Up To 43% + 2 Free Yardwork Guides
          </p>
        </div>
        <CountdownBadge />
      </div>
    </div>
  )
}
