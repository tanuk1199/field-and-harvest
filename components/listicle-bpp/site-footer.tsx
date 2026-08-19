export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 py-10 text-center">
        <p className="font-serif text-lg font-semibold tracking-[0.35em] text-foreground">FIELD &amp; HARVEST CO.</p>
        <p className="mt-3 text-sm text-muted-foreground">Made for men who still do their own work.</p>

        <div className="mx-auto mt-7 max-w-2xl text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Sources</p>
          <ol className="mt-2 list-decimal pl-5 text-xs leading-relaxed text-muted-foreground/80">
            <li>Shoba G et al. Influence of piperine on the pharmacokinetics of curcumin. Planta Medica 1998;64(4):353-6. n=8, crossover.</li>
            <li>Three-arm human pharmacokinetic comparison of 95 percent curcuminoids with one percent and ten percent piperine, 2025.</li>
            <li>Inhibition of glucuronidation by piperine is the published basis of the absorption claim itself.</li>
          </ol>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-muted-foreground/80">
          This is an advertisement. These statements have not been evaluated by the Food and Drug Administration.
          This product is not intended to diagnose, treat, cure or prevent any disease. Consult your doctor before
          starting any supplement, particularly if you take prescription medication. This page describes practices
          found across the turmeric category and does not refer to any specific brand. Individual results vary.
        </p>
        <p className="mt-6 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Field &amp; Harvest Co. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
