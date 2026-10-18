// ============================================================
// /early-black-friday-sweep : the ONE place the sale end date lives.
//
// DRAFT, NOT DEPLOYED. Owner set the date 2026-10-18 (Tobe, via CMO):
// October 31, and if stock sells out before then the sale ends early.
// Every date on page.tsx and layout.tsx reads from these constants, so
// changing them moves the whole page, metadata included.
//
// WHY the sale runs now (owner, verbatim): "By the time Black Friday rolls
// around these will be sold out. We want to pass the offer up. We want our
// customers to get the best deal possible before these sell out."
// ============================================================

export const SALE_END = "October 31"
export const SALE_END_SHORT = "Oct 31"
export const SELL_OUT_LINE = "If stock sells out before then, the sale ends early."
