'use client'

import { useEffect, useState } from 'react'

type Units = { hours: number; minutes: number; seconds: number }

function getRemaining(target: number): Units {
  const diff = Math.max(0, target - Date.now())
  const totalSeconds = Math.floor(diff / 1000)
  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

const pad = (n: number) => n.toString().padStart(2, '0')

/**
 * Compact countdown used in the announcement bar (HRS / MIN / SEC columns).
 */
export function CountdownBadge() {
  // Fixed 20-minute urgency window from first render.
  const [target] = useState(() => Date.now() + 20 * 60 * 1000)
  const [time, setTime] = useState<Units>(() => getRemaining(target))

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <div className="flex items-center gap-2 rounded-md bg-background px-3 py-1.5 text-foreground">
      {(
        [
          ['HRS', time.hours],
          ['MIN', time.minutes],
          ['SEC', time.seconds],
        ] as const
      ).map(([label, value], i) => (
        <div key={label} className="flex items-center gap-2">
          {i > 0 && <span className="font-mono text-base font-bold text-primary">:</span>}
          <div className="flex flex-col items-center">
            <span className="font-mono text-base font-bold leading-none tabular-nums">{pad(value)}</span>
            <span className="mt-0.5 text-[9px] font-semibold tracking-widest text-muted-foreground">{label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 * Inline single-line countdown used in the final CTA ("DEAL ENDING IN: 00:19:05").
 */
export function CountdownInline() {
  const [target] = useState(() => Date.now() + 20 * 60 * 1000)
  const [time, setTime] = useState<Units>(() => getRemaining(target))

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <span className="font-mono text-xl font-bold tabular-nums text-primary">
      {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
    </span>
  )
}
