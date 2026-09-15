// No countdown. The template ships one and this page states no deadline.
// ⚠ The bar NAMES the End Of Summer Sale so the page, the cart line and the
// checkout all read as one sale. The store's End Of Summer Sale is dated
// September 21 on /end-of-summer-sale, so if that date passes and the Sweep's
// gifts keep running, rename this and the two Shopify automatic discounts
// together or the page and the cart drift apart again.
export function AnnouncementBar() {
  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-2.5">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] sm:text-sm">
            End Of Summer Sale <span className="opacity-60">&middot;</span> Save Up To 22% + $77 Of Free Gear
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary-foreground/70 sm:text-xs">
            60 Day Money Back Guarantee
          </p>
        </div>
      </div>
    </div>
  )
}
