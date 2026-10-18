// ============================================================
// /early-black-friday-sweep : the ONE place the sale end date lives.
//
// DRAFT, NOT DEPLOYED. Owner sets this before the page ships.
// Every date on page.tsx reads from SALE_END. Nothing else on the
// page names a day, so changing this one line moves the whole page.
//
// Kept in a plain module (not the "use client" page) so the server
// layout.tsx can import it too if a date is ever wanted in metadata.
// Metadata is deliberately date-free for now: a share preview outlives
// an edit, and the date is not set yet.
// ============================================================

export const SALE_END = "October 31"
export const SALE_END_SHORT = "Oct 31"
