import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { workExperience } from "@/db/schema";
import { WorkForm } from "@/app/dashboard/work/page";

export const dynamic = "force-dynamic";

export default async function EditWorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = db
    ? (await db.select().from(workExperience).where(eq(workExperience.id, Number(id))))[0]
    : undefined;

  if (!work) {
    notFound();
  }

  return <WorkForm work={work} />;
}