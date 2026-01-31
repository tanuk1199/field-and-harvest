'use client'

import { useState, useEffect } from 'react'

export function CountdownTimer({
  hours = 1,
  minutes = 14,
  seconds = 0,
  className,
}: {
  hours?: number
  minutes?: number
  seconds?: number
  className?: string
}) {
  const [remaining, setRemaining] = useState(
    hours * 3600 + minutes * 60 + seconds
  )

  useEffect(() => {
    if (remaining <= 0) return
    const interval = setInterval(() => {
      setRemaining((prev) => (prev <= 0 ? 0 : prev - 1))
    }, 1000)
    return () => clearInterval(interval)
  }, [remaining])

  const h = String(Math.floor(remaining / 3600)).padStart(2, '0')
  const m = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0')
  const s = String(remaining % 60).padStart(2, '0')

  return (
    <div className={`flex items-center font-mono ${className ?? ''}`}>
      <span className="text-sm md:text-xl font-bold">{h}</span>
      <span className="text-sm md:text-xl font-bold px-0.5">:</span>
      <span className="text-sm md:text-xl font-bold">{m}</span>
      <span className="text-sm md:text-xl font-bold px-0.5">:</span>
      <span className="text-sm md:text-xl font-bold">{s}</span>
    </div>
  )
}
