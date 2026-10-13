import Link from "next/link";
import {
  createEducation,
  deleteEducation,
  updateEducation,
} from "@/app/dashboard/actions/education";
import { DeleteButton } from "@/components/dashboard/delete-button";
import { Field } from "@/components/dashboard/field";
import { ImageField } from "@/components/dashboard/image-field";
import { BackLink, PageHeader, DbWarning, SavedNotice } from "@/components/dashboard/ui-helpers";
import { Badge } from "@/components/ui/badge";
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
import { education, type EducationRow } from "@/db/schema";
import { Pencil, Plus } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function EducationPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>;
}) {
  const { saved, deleted } = await searchParams;
  const rows = db
    ? await db
        .select()
        .from(education)
        .orderBy(asc(education.sortOrder), asc(education.id))
    : [];

  return (
    <>
      <PageHeader
        title="Education"
        description="Riwayat pendidikan yang tampil di halaman utama."
        action={
          <Button asChild>
            <Link href="/dashboard/education/new">
              <Plus className="size-4" />
              Tambah Education
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
              <TableHead>Institusi</TableHead>
              <TableHead>Gelar</TableHead>
              <TableHead>Periode</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="py-10 text-center text-muted-foreground">
                  Belum ada data education.
                </TableCell>
              </TableRow>
            )}
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <div className="font-medium">{row.school}</div>
                </TableCell>
                <TableCell>{row.degree || "—"}</TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {row.start} – {row.end || "Sekarang"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/dashboard/education/${row.id}`}>
                        <Pencil className="size-3" />
                        Edit
                      </Link>
                    </Button>
                    <form action={deleteEducation}>
                      <input type="hidden" name="id" value={row.id} />
                      <DeleteButton confirmMessage={`Hapus ${row.school}?`} />
                    </form>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export function EducationForm({ entry }: { entry?: EducationRow }) {
  const action = entry ? updateEducation : createEducation;
  return (
    <>
      <PageHeader
        title={entry ? "Edit Education" : "Tambah Education"}
        action={<BackLink href="/dashboard/education" />}
      />
      {!db && <DbWarning />}
      <form
        action={action}
        className="grid gap-5 rounded-lg border bg-card p-5 sm:p-6"
      >
        {entry && <input type="hidden" name="id" value={entry.id} />}

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Institusi / Sekolah">
            <Input name="school" defaultValue={entry?.school ?? ""} required />
          </Field>
          <Field label="Gelar / Fokus">
            <Input name="degree" defaultValue={entry?.degree ?? ""} />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="URL Institusi">
            <Input name="href" defaultValue={entry?.href ?? ""} placeholder="https://…" />
          </Field>
          <div className="grid grid-cols-3 gap-3">
            <Field label="Mulai">
              <Input name="start" defaultValue={entry?.start ?? ""} placeholder="2021" />
            </Field>
            <Field label="Selesai">
              <Input name="end" defaultValue={entry?.end ?? ""} placeholder="Sekarang" />
            </Field>
            <Field label="Urutan">
              <Input name="sortOrder" type="number" defaultValue={entry?.sortOrder ?? 0} />
            </Field>
          </div>
        </div>

        <ImageField
          name="logo"
          label="Logo Institusi"
          value={entry?.logoUrl ?? ""}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={!db}>
            Simpan
          </Button>
        </div>
      </form>
    </>
  );
}