import { NextResponse, type NextRequest } from "next/server"

/**
 * LAYOUT TEST 1 — above-the-fold restructure on /the-trimmer-switch
 *
 * Splits traffic at the edge, before any HTML reaches the browser, so neither arm carries a
 * rendering artifact into the thing being measured. Arm B is served by REWRITE, not redirect,
 * so the URL stays /the-trimmer-switch in both arms and ad links, UTMs and attribution are
 * untouched.
 *
 * Arm A = /the-trimmer-switch          (control, current live layout)
 * Arm B = /the-trimmer-switch-v2       (headline above image, no badge, tighter type)
 *
 * TO TURN THE TEST OFF: set TEST_ENABLED to false and deploy, or revert the commit that added
 * this file. Either way every visitor falls through to arm A, the current live page.
 *
 * Blast radius is one path. The matcher below is an exact match, so no other route on the site
 * can be affected, and every branch is wrapped so that any unexpected error serves the normal
 * page rather than failing the request.
 */

const TEST_ENABLED = true

const COOKIE = "fh_lt"
const ARM_A = "test1-a"
const ARM_B = "test1-b"
const VARIANT_B_PATH = "/the-trimmer-switch-v2"
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
