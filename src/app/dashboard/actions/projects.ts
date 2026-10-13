"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { projects, type ProjectLink } from "@/db/schema";
import { requireSession } from "@/lib/auth";

function str(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function int(formData: FormData, key: string): number {
  const parsed = Number(str(formData, key));
  return Number.isFinite(parsed) ? Math.trunc(parsed) : 0;
}

function toLinks(formData: FormData): ProjectLink[] {
  const type = str(formData, "linkType");
  const href = str(formData, "linkHref");
  if (type && href) {
    return [{ type, href }];
  }
  return [];
}

function valuesFrom(formData: FormData) {
  return {
    title: str(formData, "title"),
    href: str(formData, "href"),
    dates: str(formData, "dates"),
    description: str(formData, "description"),
    technologies: str(formData, "technologies")
      .split(",")
      .map((tech) => tech.trim())
      .filter(Boolean),
    imageUrl: str(formData, "image"),
    videoUrl: str(formData, "video"),
    links: toLinks(formData),
    active: formData.get("active") === "on",
    sortOrder: int(formData, "sortOrder"),
  };
}

export async function createProject(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  await db.insert(projects).values(valuesFrom(formData));
  revalidatePath("/");
  redirect("/dashboard/projects?saved=1");
}

export async function updateProject(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  const id = int(formData, "id");
  await db
    .update(projects)
    .set(valuesFrom(formData))
    .where(eq(projects.id, id));
  revalidatePath("/");
  redirect("/dashboard/projects?saved=1");
}

export async function deleteProject(formData: FormData) {
  await requireSession();
  if (!db) {
    throw new Error("Database belum dikonfigurasi.");
  }
  const id = int(formData, "id");
  await db.delete(projects).where(eq(projects.id, id));
  revalidatePath("/");
  redirect("/dashboard/projects?deleted=1");
}