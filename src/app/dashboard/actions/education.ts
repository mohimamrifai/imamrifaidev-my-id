"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { education } from "@/db/schema";
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
    school: str(formData, "school"),
    href: str(formData, "href"),
    degree: str(formData, "degree"),
    logoUrl: str(formData, "logo"),
    start: str(formData, "start"),
    end: str(formData, "end"),
    sortOrder: int(formData, "sortOrder"),
  };
}

export async function createEducation(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  await db.insert(education).values(valuesFrom(formData));
  revalidatePath("/");
  redirect("/dashboard/education?saved=1");
}

export async function updateEducation(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  const id = int(formData, "id");
  await db
    .update(education)
    .set(valuesFrom(formData))
    .where(eq(education.id, id));
  revalidatePath("/");
  redirect("/dashboard/education?saved=1");
}

export async function deleteEducation(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  const id = int(formData, "id");
  await db.delete(education).where(eq(education.id, id));
  revalidatePath("/");
  redirect("/dashboard/education?deleted=1");
}