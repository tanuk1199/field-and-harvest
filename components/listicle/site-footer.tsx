export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 py-10 text-center">
        <p className="font-serif text-lg font-semibold tracking-[0.35em] text-foreground">
          FIELD & HARVEST CO.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Tools that keep you doing your own yard.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground/80">
          This is an advertisement. The Yeoman Handle is an ergonomic accessory, not a medical device, and is not intended to diagnose, treat, or cure any condition. Individual results vary.
        </p>
        <p className="mt-6 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Field & Harvest Co.. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
