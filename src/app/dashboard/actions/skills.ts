"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { skills } from "@/db/schema";
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
    name: str(formData, "name"),
    icon: str(formData, "icon"),
    sortOrder: int(formData, "sortOrder"),
  };
}

export async function createSkill(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  await db.insert(skills).values(valuesFrom(formData));
  revalidatePath("/");
  redirect("/dashboard/skills?saved=1");
}

export async function updateSkill(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  const id = int(formData, "id");
  await db
    .update(skills)
    .set(valuesFrom(formData))
    .where(eq(skills.id, id));
  revalidatePath("/");
  redirect("/dashboard/skills?saved=1");
}

export async function deleteSkill(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  const id = int(formData, "id");
  await db.delete(skills).where(eq(skills.id, id));
  revalidatePath("/");
  redirect("/dashboard/skills?deleted=1");
}