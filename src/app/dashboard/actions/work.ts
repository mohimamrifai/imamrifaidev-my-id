"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { workExperience } from "@/db/schema";
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
    company: str(formData, "company"),
    href: str(formData, "href"),
    location: str(formData, "location"),
    title: str(formData, "title"),
    description: str(formData, "description"),
    logoUrl: str(formData, "logo"),
    start: str(formData, "start"),
    end: str(formData, "end"),
    sortOrder: int(formData, "sortOrder"),
  };
}

export async function createWork(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  await db.insert(workExperience).values(valuesFrom(formData));
  revalidatePath("/");
  redirect("/dashboard/work?saved=1");
}

export async function updateWork(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  const id = int(formData, "id");
  await db
    .update(workExperience)
    .set(valuesFrom(formData))
    .where(eq(workExperience.id, id));
  revalidatePath("/");
  redirect("/dashboard/work?saved=1");
}

export async function deleteWork(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  const id = int(formData, "id");
  await db.delete(workExperience).where(eq(workExperience.id, id));
  revalidatePath("/");
  redirect("/dashboard/work?deleted=1");
}