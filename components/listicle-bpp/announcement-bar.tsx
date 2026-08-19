// No countdown. The template ships one and nothing on this page expires; a timer
// aimed at a 62-year-old is the exact dark-pattern fact pattern regulators look
// at. The slot carries the real guarantee instead.
export function AnnouncementBar() {
  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-2.5">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] sm:text-sm">Save 40% Off</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary-foreground/70 sm:text-xs">
            90 Day Money Back Guarantee
          </p>
        </div>
      </div>
    </div>
  )
}
