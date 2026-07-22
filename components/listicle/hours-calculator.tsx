'use client'

import { useState } from 'react'
import { Clock } from 'lucide-react'
import { CtaButton } from '@/components/listicle/cta-button'

// Rough spring-through-fall trimming season, used only to turn the user's own
// hours/week into an honest "hours this season" figure. No medical claims.
const SEASON_WEEKS = 28

function usageBand(hoursPerWeek: number): string {
  if (hoursPerWeek <= 1) return 'about what an average homeowner puts in'
  if (hoursPerWeek <= 4) return 'more trimming than most homeowners do'
  if (hoursPerWeek <= 9) return 'heavy use, well past the average homeowner'
  return 'pro-level hours on the trimmer'
}

export function HoursCalculator() {
  const [hrs, setHrs] = useState(3)
  const seasonHours = Math.round(hrs * SEASON_WEEKS)

  return (
    <section className="mx-auto max-w-3xl px-4 py-12" aria-labelledby="hours-heading">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="flex items-center gap-2 text-primary">
          <Clock className="h-5 w-5" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em]">The Bend Adds Up</span>
        </div>

        <h2 id="hours-heading" className="mt-3 text-balance font-serif text-2xl font-semibold leading-tight sm:text-3xl">
          How many hours a week are you bent over your trimmer?
        </h2>
        <p className="mt-2 text-muted-foreground">Slide to your hours. See what one season actually adds up to.</p>

        <div className="mt-7">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Hours a week</span>
            <span className="font-serif text-3xl font-semibold text-primary tabular-nums">
              {hrs}
              {hrs >= 15 ? '+' : ''}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={15}
            step={1}
            value={hrs}
            onChange={(e) => setHrs(Number(e.target.value))}
            aria-label="Hours per week spent trimming"
            className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-muted"
            style={{ accentColor: 'var(--primary)' }}
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>15+</span>
          </div>
        </div>

        <div className="mt-7 rounded-xl bg-accent px-5 py-6 text-center text-accent-foreground">
          <p className="text-xs font-semibold uppercase tracking-[0.15em]">Over one season, that is</p>
          <p className="mt-1 font-serif text-4xl font-semibold text-primary tabular-nums sm:text-5xl">
            {seasonHours} hours
          </p>
          <p className="mt-1 text-sm">
            bent forward over your trimmer, and that is {usageBand(hrs)}.
          </p>
        </div>

        <p className="mt-6 text-base leading-relaxed text-pretty text-foreground/90">
          Every one of those hours, your lower back is doing the bending the handle should be doing. The Yeoman extends
          your grip out so you get that same reach standing straight, which means those{' '}
          <span className="font-semibold text-foreground">{seasonHours} hours</span> are spent upright instead of hunched.
        </p>

        <div className="mt-6">
          <CtaButton label="Stand Up For The Next Season" location="hours-calculator" className="w-full sm:w-auto" />
        </div>

        <p className="mt-4 text-xs italic text-muted-foreground">
          Season estimate based on a roughly 28-week trimming season, for general illustration only. The Yeoman is an
          ergonomic tool, not a medical device.
        </p>
      </div>
    </section>
  )
}
