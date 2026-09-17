// ⛔ NO COUNTDOWN. Nothing on this page expires, so the template's live
// countdown badge was removed rather than pointed at an invented deadline.
export function AnnouncementBar() {
  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-2.5">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] sm:text-sm">Multi-Packs Save Up To 28%</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary-foreground/70 sm:text-xs">
            60 Nights To Decide · 1-Year Warranty
          </p>
        </div>
      </div>
    </div>
  )
}
