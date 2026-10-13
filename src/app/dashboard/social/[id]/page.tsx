import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { socialLinks } from "@/db/schema";
import { SocialForm } from "@/app/dashboard/social/page";

export const dynamic = "force-dynamic";

export default async function EditSocialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const link = db
    ? (await db.select().from(socialLinks).where(eq(socialLinks.id, Number(id))))[0]
    : undefined;

  if (!link) {
    notFound();
  }

  return <SocialForm link={link} />;
}