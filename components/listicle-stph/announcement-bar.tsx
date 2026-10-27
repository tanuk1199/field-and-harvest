'use client'

import { useEffect, useState } from 'react'

// Port of snippets/fh-bunkhouse-promo-bar.liquid, same as /hunt-the-last-hour.
// Same text, gradient, type and rolling countdown to the visitor's local midnight.
// SALE_NAME is the one place the sale is named: rename it after Oct 31, with the PDP bar.
// SAVE is the PDP banner's dollar figure ($450 - $289). It is the only money figure on the page.
export const SALE_NAME = 'Halloween Sale'
export const SAVE = '$161'

export function AnnouncementBar() {
  const [t, setT] = useState({ h: '00', m: '00', s: '00' })
  useEffect(() => {
    const pad = (n: number) => (n < 10 ? '0' : '') + n
    const tick = () => {
      const now = new Date()
      const end = new Date(now)
      end.setHours(24, 0, 0, 0)
      const sec = Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000))
      setT({ h: pad(Math.floor(sec / 3600)), m: pad(Math.floor((sec % 3600) / 60)), s: pad(sec % 60) })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="fhb-promo" role="region" aria-label="Sale">
      <div className="fhb-promo-in">
        <span className="fhb-promo-txt">
          <b>{SALE_NAME.toUpperCase()}</b>
          <i>|</i>
          <span className="fhb-promo-sub">{SAVE} OFF + FREE 1 YEAR WARRANTY 🎃</span>
        </span>
        <span className="fhb-promo-clock">
          <span className="fhb-u"><b>00</b><small>DAYS</small></span><em>:</em>
          <span className="fhb-u"><b>{t.h}</b><small>HRS</small></span><em>:</em>
          <span className="fhb-u"><b>{t.m}</b><small>MIN</small></span><em>:</em>
          <span className="fhb-u"><b>{t.s}</b><small>SEC</small></span>
        </span>
      </div>
      <style>{`
  .fhb-promo { background: linear-gradient(90deg, #241A13 0%, #4A2A16 45%, #C0653F 100%); color: #FBF6EC; }
  .fhb-promo-in { max-width: 1200px; margin: 0 auto; padding: 8px 16px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  .fhb-promo-txt { font: 600 13px/1.3 var(--font-body--family, Inter, sans-serif); letter-spacing: .04em; text-align: left; min-width: 0; }
  .fhb-promo-clock { flex: none; }
  .fhb-promo-txt b { font-weight: 800; letter-spacing: .06em; }
  .fhb-promo-txt i { font-style: normal; opacity: .6; margin: 0 10px; }
  .fhb-promo-clock { display: inline-flex; align-items: flex-start; gap: 4px; }
  .fhb-promo-clock em { font-style: normal; font-weight: 700; line-height: 26px; opacity: .8; }
  .fhb-u { display: inline-flex; flex-direction: column; align-items: center; }
  .fhb-u b { background: rgba(251,246,236,.14); border: 1px solid rgba(251,246,236,.25); border-radius: 4px; min-width: 32px; padding: 3px 4px; text-align: center; font: 700 15px/1.2 var(--font-body--family, Inter, sans-serif); font-variant-numeric: tabular-nums; }
  .fhb-u small { font-size: 8px; letter-spacing: .1em; opacity: .75; margin-top: 2px; }
  @media (max-width: 749px) { .fhb-promo-in { gap: 8px; padding: 8px 10px; } .fhb-promo-txt { flex: 1 1 auto; text-align: center; font-size: 10px; letter-spacing: 0; white-space: nowrap; } .fhb-promo-txt b { display: block; font-size: 14px; margin-bottom: 2px; } .fhb-promo-txt i { display: none; } .fhb-promo-sub { display: block; } .fhb-promo-clock { gap: 3px; } .fhb-u b { min-width: 23px; font-size: 11px; padding: 3px 2px; } .fhb-promo-clock em { line-height: 22px; } .fhb-u small { font-size: 7px; } }
      `}</style>
    </div>
  )
}
