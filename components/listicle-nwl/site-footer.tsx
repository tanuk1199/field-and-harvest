export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 py-10 text-center">
        <p className="font-serif text-lg font-semibold tracking-[0.35em] text-foreground">
          FIELD & HARVEST CO.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Tools and gear for people who still do their own work.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground/80">
          Specifications are as supplied by the manufacturer. This is a motion-activated outdoor light. It is not a security alarm, a camera or a monitored system, and it is not a substitute for one. The reviews on this page are published reviews of three-head solar motion lights written by buyers of other units, quoted as category testimony. They are not reviews of this product.
        </p>
        <p className="mt-6 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Field & Harvest Co.. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
