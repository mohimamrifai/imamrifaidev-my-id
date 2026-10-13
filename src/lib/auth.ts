import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  SESSION_COOKIE,
  validateCredentials,
  verifySession,
  type Session,
} from "@/lib/session";

/** Resolve the current session from the request cookies, or null. */
export async function getSession(): Promise<Session | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) {
    return null;
  }
  return verifySession(token);
}

/**
 * Resolve the current session and redirect to /login when missing.
 * Safe to call from server components and server actions.
 */
export async function requireSession(): Promise<Session> {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  return session;
}

/** Validate a login attempt. Throws when the credentials are wrong. */
export function requireValidCredentials(email: string, password: string) {
  if (!validateCredentials(email, password)) {
    throw new Error("Email atau password salah.");
  }
}