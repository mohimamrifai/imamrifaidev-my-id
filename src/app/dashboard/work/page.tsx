import Link from "next/link";
import { createWork, deleteWork, updateWork } from "@/app/dashboard/actions/work";
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
import { Textarea } from "@/components/ui/textarea";
import { asc } from "drizzle-orm";
import { db } from "@/db";
import { workExperience, type WorkRow } from "@/db/schema";
import { Pencil, Plus } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>;
}) {
  const { saved, deleted } = await searchParams;
  const rows = db
    ? await db
        .select()
        .from(workExperience)
        .orderBy(asc(workExperience.sortOrder), asc(workExperience.id))
    : [];

  return (
    <>
      <PageHeader
        title="Work Experience"
        description="Riwayat pekerjaan yang tampil di halaman utama."
        action={
          <Button asChild>
            <Link href="/dashboard/work/new">
              <Plus className="size-4" />
              Tambah Work
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
              <TableHead>Perusahaan</TableHead>
              <TableHead>Posisi</TableHead>
              <TableHead>Periode</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="py-10 text-center text-muted-foreground">
                  Belum ada data work.
                </TableCell>
              </TableRow>
            )}
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <div className="font-medium">{row.company}</div>
                  <div className="max-w-xs truncate text-xs text-muted-foreground">
                    {row.location}
                  </div>
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {row.start} – {row.end || "Sekarang"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/dashboard/work/${row.id}`}>
                        <Pencil className="size-3" />
                        Edit
                      </Link>
                    </Button>
                    <form action={deleteWork}>
                      <input type="hidden" name="id" value={row.id} />
                      <DeleteButton confirmMessage={`Hapus ${row.company}?`} />
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

export function WorkForm({ work }: { work?: WorkRow }) {
  const action = work ? updateWork : createWork;
  return (
    <>
      <PageHeader
        title={work ? "Edit Work" : "Tambah Work"}
        action={<BackLink href="/dashboard/work" />}
      />
      {!db && <DbWarning />}
      <form
        action={action}
        className="grid gap-5 rounded-lg border bg-card p-5 sm:p-6"
      >
        {work && <input type="hidden" name="id" value={work.id} />}

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Nama Perusahaan">
            <Input name="company" defaultValue={work?.company ?? ""} required />
          </Field>
          <Field label="Posisi">
            <Input name="title" defaultValue={work?.title ?? ""} required />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="URL Perusahaan">
            <Input name="href" defaultValue={work?.href ?? ""} placeholder="https://…" />
          </Field>
          <Field label="Lokasi">
            <Input name="location" defaultValue={work?.location ?? ""} placeholder="Remote" />
          </Field>
        </div>

        <Field label="Deskripsi">
          <Textarea name="description" defaultValue={work?.description ?? ""} rows={4} />
        </Field>

        <div className="grid gap-5 md:grid-cols-3">
          <Field label="Mulai">
            <Input name="start" defaultValue={work?.start ?? ""} placeholder="2023" />
          </Field>
          <Field label="Selesai">
            <Input name="end" defaultValue={work?.end ?? ""} placeholder="Sekarang" />
          </Field>
          <Field label="Urutan">
            <Input name="sortOrder" type="number" defaultValue={work?.sortOrder ?? 0} />
          </Field>
        </div>

        <ImageField
          name="logo"
          label="Logo Perusahaan"
          value={work?.logoUrl ?? ""}
          hint="Upload otomatis ke Neon Object Storage."
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