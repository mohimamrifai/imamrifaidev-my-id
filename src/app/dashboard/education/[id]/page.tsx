import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { education } from "@/db/schema";
import { EducationForm } from "@/app/dashboard/education/page";

export const dynamic = "force-dynamic";

export default async function EditEducationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const entry = db
    ? (await db.select().from(education).where(eq(education.id, Number(id))))[0]
    : undefined;

  if (!entry) {
    notFound();
  }

  return <EducationForm entry={entry} />;
}