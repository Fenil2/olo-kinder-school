import 'server-only'

import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'

export const SESSION_COOKIE = 'olo_admin'
const MAX_AGE_SECONDS = 60 * 60 * 8 // one working day

function secret(): string {
  const value = process.env.ADMIN_SESSION_SECRET
  if (!value) throw new Error('ADMIN_SESSION_SECRET is not set — see .env.example.')
  return value
}

/** Compare without leaking, through timing, how much of the input was right. */
function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a, 'utf8')
  const right = Buffer.from(b, 'utf8')
  // timingSafeEqual throws on a length mismatch, which would itself be a
  // signal, so both sides are hashed to a fixed width first.
  const ha = createHmac('sha256', secret()).update(left).digest()
  const hb = createHmac('sha256', secret()).update(right).digest()
  return timingSafeEqual(ha, hb)
}

export function passwordMatches(candidate: string): boolean {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) throw new Error('ADMIN_PASSWORD is not set — see .env.example.')
  return safeEqual(candidate, expected)
}

/**
 * A session token is `expiry.nonce.signature`.
 *
 * There is no session store: the signature is what makes it trustworthy, and
 * the expiry is inside the signed payload rather than left to the cookie's
 * own lifetime, which the browser holds and a client can edit. The nonce
 * means two logins never produce the same token.
 */
function sign(payload: string): string {
  return createHmac('sha256', secret()).update(payload).digest('hex')
}

export function issueToken(): string {
  const payload = `${Date.now() + MAX_AGE_SECONDS * 1000}.${randomBytes(12).toString('hex')}`
  return `${payload}.${sign(payload)}`
}

export function tokenIsValid(token: string | undefined): boolean {
  if (!token) return false
  const parts = token.split('.')
  if (parts.length !== 3) return false
  const [expiry, nonce, signature] = parts
  const payload = `${expiry}.${nonce}`

  const expected = Buffer.from(sign(payload), 'hex')
  let given: Buffer
  try {
    given = Buffer.from(signature, 'hex')
  } catch {
    return false
  }
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return false

  const expiresAt = Number(expiry)
  return Number.isFinite(expiresAt) && expiresAt > Date.now()
}

export async function isSignedIn(): Promise<boolean> {
  const store = await cookies()
  return tokenIsValid(store.get(SESSION_COOKIE)?.value)
}

export async function startSession(): Promise<void> {
  const store = await cookies()
  store.set(SESSION_COOKIE, issueToken(), {
    httpOnly: true, // never readable from JavaScript, so an XSS cannot lift it
    sameSite: 'lax', // blocks the cookie riding along on cross-site form posts
    secure: process.env.NODE_ENV === 'production', // plain http on localhost
    path: '/',
    maxAge: MAX_AGE_SECONDS,
  })
}

export async function endSession(): Promise<void> {
  const store = await cookies()
  store.delete(SESSION_COOKIE)
}
