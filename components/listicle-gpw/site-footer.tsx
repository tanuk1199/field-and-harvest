export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 py-10 text-center">
        <p className="font-serif text-lg font-semibold tracking-[0.35em] text-foreground">
          FIELD & HARVEST CO.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Tools that keep you doing your own house.
        </p>
        <p className="mt-6 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Field & Harvest Co. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
