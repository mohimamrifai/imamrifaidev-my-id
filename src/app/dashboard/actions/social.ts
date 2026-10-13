"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { socialLinks } from "@/db/schema";
import { requireSession } from "@/lib/auth";

function str(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function int(formData: FormData, key: string): number {
  const parsed = Number(str(formData, key));
  return Number.isFinite(parsed) ? Math.trunc(parsed) : 0;
}

function valuesFrom(formData: FormData) {
  return {
    label: str(formData, "label"),
    url: str(formData, "url"),
    icon: str(formData, "icon"),
    showInNavbar: formData.get("showInNavbar") === "on",
    sortOrder: int(formData, "sortOrder"),
  };
}

export async function createSocial(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  await db.insert(socialLinks).values(valuesFrom(formData));
  revalidatePath("/");
  redirect("/dashboard/social?saved=1");
}

export async function updateSocial(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  const id = int(formData, "id");
  await db
    .update(socialLinks)
    .set(valuesFrom(formData))
    .where(eq(socialLinks.id, id));
  revalidatePath("/");
  redirect("/dashboard/social?saved=1");
}

export async function deleteSocial(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  const id = int(formData, "id");
  await db.delete(socialLinks).where(eq(socialLinks.id, id));
  revalidatePath("/");
  redirect("/dashboard/social?deleted=1");
}