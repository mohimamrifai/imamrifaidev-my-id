import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { skills } from "@/db/schema";
import { SkillForm } from "@/app/dashboard/skills/page";

export const dynamic = "force-dynamic";

export default async function EditSkillPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const skill = db
    ? (await db.select().from(skills).where(eq(skills.id, Number(id))))[0]
    : undefined;

  if (!skill) {
    notFound();
  }

  return <SkillForm skill={skill} />;
}