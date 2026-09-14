// No countdown. The template ships one and nothing on this page expires.
// The slot carries the real offer and the real guarantee instead.
export function AnnouncementBar() {
  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-2.5">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] sm:text-sm">Save Up To 22% + $77 Of Free Gear</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary-foreground/70 sm:text-xs">
            60 Day Money Back Guarantee
          </p>
        </div>
      </div>
    </div>
  )
}
