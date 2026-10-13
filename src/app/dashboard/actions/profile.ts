"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { profile } from "@/db/schema";
import { requireSession } from "@/lib/auth";

function str(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function updateProfile(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }

  const values = {
    name: str(formData, "name"),
    initials: str(formData, "initials"),
    url: str(formData, "url"),
    location: str(formData, "location"),
    description: str(formData, "description"),
    summary: str(formData, "summary"),
    avatarUrl: str(formData, "avatarUrl"),
    email: str(formData, "email"),
  };

  const existing = await db.select().from(profile).limit(1);
  if (existing.length === 0) {
    await db.insert(profile).values({ id: 1, ...values });
  } else {
    await db
      .update(profile)
      .set({ ...values, updatedAt: new Date() })
      .where(eq(profile.id, 1));
  }

  revalidatePath("/");
  redirect("/dashboard/profile?saved=1");
}