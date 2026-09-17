export function EmailSignup() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 text-center">
      <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Not ready yet?</h2>
      <p className="mt-3 text-muted-foreground">Leave your email and we will send the placement guide: where to mount it, how to aim three heads, and the one spot to avoid.</p>

      <form
        className="mx-auto mt-6 flex max-w-lg flex-col gap-3 sm:flex-row"
        action="https://fieldandharvestco.com/products/the-nightwatch-solar-light"
        method="get"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email here"
          className="flex-1 rounded-lg border border-border bg-card px-4 py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
        <button
          type="submit"
          className="rounded-lg bg-secondary px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-secondary-foreground transition-opacity hover:opacity-90"
        >
          Send Me The Guide
        </button>
      </form>
    </section>
  )
}
