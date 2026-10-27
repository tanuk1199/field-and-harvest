export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 py-10 text-center">
        <p className="font-serif text-lg font-semibold tracking-[0.35em] text-foreground">
          FIELD & HARVEST CO.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Gear that keeps you out there longer.
        </p>
        <p className="mt-6 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Field & Harvest Co. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
