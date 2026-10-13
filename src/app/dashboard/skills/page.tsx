import Link from "next/link";
import { createSkill, deleteSkill, updateSkill } from "@/app/dashboard/actions/skills";
import { DeleteButton } from "@/components/dashboard/delete-button";
import { Field } from "@/components/dashboard/field";
import { IconField } from "@/components/dashboard/icon-field";
import { BackLink, PageHeader, DbWarning, SavedNotice } from "@/components/dashboard/ui-helpers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { asc } from "drizzle-orm";
import { db } from "@/db";
import { skills, type SkillRow } from "@/db/schema";
import { resolveIcon } from "@/lib/icon-registry";
import { Pencil, Plus } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function SkillsPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>;
}) {
  const { saved, deleted } = await searchParams;
  const rows = db
    ? await db.select().from(skills).orderBy(asc(skills.sortOrder), asc(skills.id))
    : [];

  return (
    <>
      <PageHeader
        title="Skills"
        description="Keahlian yang tampil di halaman utama."
        action={
          <Button asChild>
            <Link href="/dashboard/skills/new">
              <Plus className="size-4" />
              Tambah Skill
            </Link>
          </Button>
        }
      />
      {!db && <DbWarning />}
      <SavedNotice saved={saved === "1"} deleted={deleted === "1"} />

      <div className="overflow-hidden rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Skill</TableHead>
              <TableHead>Urutan</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="py-10 text-center text-muted-foreground">
                  Belum ada skill.
                </TableCell>
              </TableRow>
            )}
            {rows.map((row) => {
              const Icon = resolveIcon(row.icon);
              return (
                <TableRow key={row.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {Icon && <Icon className="size-4" />}
                      <span className="font-medium">{row.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{row.sortOrder}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/dashboard/skills/${row.id}`}>
                          <Pencil className="size-3" />
                          Edit
                        </Link>
                      </Button>
                      <form action={deleteSkill}>
                        <input type="hidden" name="id" value={row.id} />
                        <DeleteButton confirmMessage={`Hapus skill "${row.name}"?`} />
                      </form>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export function SkillForm({ skill }: { skill?: SkillRow }) {
  const action = skill ? updateSkill : createSkill;
  return (
    <>
      <PageHeader
        title={skill ? "Edit Skill" : "Tambah Skill"}
        action={<BackLink href="/dashboard/skills" />}
      />
      {!db && <DbWarning />}
      <form
        action={action}
        className="grid gap-5 rounded-lg border bg-card p-5 sm:p-6"
      >
        {skill && <input type="hidden" name="id" value={skill.id} />}

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Nama Skill">
            <Input name="name" defaultValue={skill?.name ?? ""} placeholder="React" required />
          </Field>
          <Field label="Urutan">
            <Input name="sortOrder" type="number" defaultValue={skill?.sortOrder ?? 0} />
          </Field>
        </div>

        <IconField name="icon" label="Ikon" value={skill?.icon ?? ""} />

        <div className="flex justify-end">
          <Button type="submit" disabled={!db}>
            Simpan
          </Button>
        </div>
      </form>
    </>
  );
}