import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "portfolio_session";
export const SESSION_DURATION_SECONDS = 60 * 60 * 24 * 7; // 7 days

const DEFAULT_ADMIN_EMAIL = "imamrifaibisnis@gmail.com";
const DEFAULT_ADMIN_PASSWORD = "Webkumaspalul123@";

export type Session = {
  email: string;
};

function getSecretKey(): Uint8Array {
  const secret =
    process.env.AUTH_SECRET ||
    "dev-secret-please-override-in-production-through-AUTH_SECRET";
  return new TextEncoder().encode(secret);
}

/**
 * Constant-time string comparison to avoid leaking credential contents
 * through timing differences on the login path.
 */
function timingSafeEqual(a: string, b: string): boolean {
  const aBytes = new TextEncoder().encode(a);
  const bBytes = new TextEncoder().encode(b);
  let diff = aBytes.length === bBytes.length ? 0 : 1;
  const length = Math.max(aBytes.length, bBytes.length);
  for (let i = 0; i < length; i++) {
    diff |= (aBytes[i] ?? 0) ^ (bBytes[i] ?? 0);
  }
  return diff === 0;
}

export function getAdminEmail(): string {
  return process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL;
}

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;
}

export function validateCredentials(email: string, password: string): boolean {
  const emailOk = timingSafeEqual(
    email.trim().toLowerCase(),
    getAdminEmail().trim().toLowerCase()
  );
  const passwordOk = timingSafeEqual(password, getAdminPassword());
  return emailOk && passwordOk;
}

export async function signSession(email: string): Promise<string> {
  return new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(getSecretKey());
}

export async function verifySession(token: string): Promise<Session | null> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    if (typeof payload.email !== "string" || payload.email.length === 0) {
      return null;
    }
    return { email: payload.email };
  } catch {
    return null;
  }
}