import { NextResponse, type NextRequest } from "next/server"

/**
 * TEST 2 — Reason 1 card rebuild on /the-trimmer-switch
 *
 * Splits traffic at the edge, before any HTML reaches the browser, so neither arm carries a
 * rendering artifact into the thing being measured. Arm B is served by REWRITE, not redirect,
 * so the URL stays /the-trimmer-switch in both arms and ad links, UTMs and attribution are
 * untouched.
 *
 * Arm A = /the-trimmer-switch          (control, current live Reason 1)
 * Arm B = /the-trimmer-switch-r1       (cause-first Reason 1: back pain named, five-brand proof,
 *                                       low-grip image, trademark deferred to the last sentence)
 *
 * The two page files are identical apart from the Reason 1 card and the LAYOUT_VARIANT constant.
 *
 * Running here rather than in Intelligems because the org's plan gates every `start_*` scope as
 * of 2026-07-30 (see the store CLAUDE.md). Experiment 76f40040-b9f2-49ef-989b-1ae608f57798 is
 * built and paused in the dashboard if that plan is ever bought.
 *
 * READING IT: each page tags its arm into Clarity as `layout_variant` (test2-a / test2-b) for
 * scroll depth, heatmaps and recordings, and appends `lt=<arm>` to store-bound CTA links so
 * Shopify order data reads per arm too.
 *
 * TO TURN THE TEST OFF: set TEST_ENABLED to false and deploy, or revert the commit. Either way
 * every visitor falls through to arm A, the current live page.
 *
 * Blast radius is one path. The matcher below is an exact match, so no other route on the site
 * can be affected, and every branch is wrapped so that any unexpected error serves the normal
 * page rather than failing the request.
 */

const TEST_ENABLED = true

// New cookie name per test. Test 1 wrote fh_lt, so a stale bucket from that test can never leak
// into this one or pin a returning visitor to an arm that no longer means the same thing.
const COOKIE = "fh_t2"
const ARM_A = "test2-a"
const ARM_B = "test2-b"
const VARIANT_B_PATH = "/the-trimmer-switch-r1"
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 days

export const config = {
  matcher: "/the-trimmer-switch",
}

export function middleware(request: NextRequest) {
  try {
    if (!TEST_ENABLED) return NextResponse.next()

    const existing = request.cookies.get(COOKIE)?.value
    const arm = existing === ARM_A || existing === ARM_B ? existing : Math.random() < 0.5 ? ARM_A : ARM_B

    const url = request.nextUrl.clone()
    if (arm === ARM_B) url.pathname = VARIANT_B_PATH

    const response = NextResponse.rewrite(url)

    // Re-set on every request so the 30 day window rolls forward for returning visitors.
    response.cookies.set(COOKIE, arm, {
      path: "/",
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax",
    })

    return response
  } catch {
    // Never let the split break the page. Any failure serves the control layout.
    return NextResponse.next()
  }
}
