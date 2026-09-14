export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 py-10 text-center">
        <p className="font-serif text-lg font-semibold tracking-[0.35em] text-foreground">FIELD &amp; HARVEST CO.</p>
        <p className="mt-3 text-sm text-muted-foreground">Made for men who still do their own work.</p>

        <p className="mt-6 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Field &amp; Harvest Co. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
