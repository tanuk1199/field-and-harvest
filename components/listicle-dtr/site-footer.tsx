export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 py-10 text-center">
        <p className="font-serif text-lg font-semibold tracking-[0.35em] text-foreground">FIELD &amp; HARVEST CO.</p>
        <p className="mt-3 text-sm text-muted-foreground">Made for men who still do their own work.</p>

        <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground/80">
          This is an advertisement. The quoted reviews on this page are published reviews of push lawn sweepers
          written by buyers of other machines in this category. They are not reviews of the Yeoman Sweep and are
          quoted to describe the category, not this product. The Yeoman Sweep is new and has no collected reviews
          yet. Comparisons describe categories of tool and do not refer to any particular brand. It has no motor:
          you supply the power. If pushing a mower is already too much, this will be too. Individual results vary.
        </p>
        <p className="mt-6 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Field &amp; Harvest Co. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
