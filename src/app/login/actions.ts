"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  SESSION_COOKIE,
  SESSION_DURATION_SECONDS,
  getAdminEmail,
  signSession,
  validateCredentials,
} from "@/lib/session";

export type LoginState = { error?: string } | undefined;

function safeNext(value: string): string {
  if (value.startsWith("/") && !value.startsWith("//")) {
    return value;
  }
  return "/dashboard";
}

export async function loginAction(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const next = safeNext(String(formData.get("next") ?? "/dashboard"));

  if (!validateCredentials(email, password)) {
    return { error: "Email atau password salah." };
  }

  const token = await signSession(getAdminEmail());
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
  });

  redirect(next);
}