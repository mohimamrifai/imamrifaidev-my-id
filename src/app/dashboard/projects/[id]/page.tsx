import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { ProjectForm } from "@/app/dashboard/projects/page";

export const dynamic = "force-dynamic";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = db
    ? (await db.select().from(projects).where(eq(projects.id, Number(id))))[0]
    : undefined;

  if (!project) {
    notFound();
  }

  return <ProjectForm project={project} />;
}