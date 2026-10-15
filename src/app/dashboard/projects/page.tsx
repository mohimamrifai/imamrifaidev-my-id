import Link from "next/link";
import { createProject, deleteProject, updateProject } from "@/app/dashboard/actions/projects";
import { Field } from "@/components/dashboard/field";
import { ImageField } from "@/components/dashboard/image-field";
import { BackLink, PageHeader, DbWarning, SavedNotice } from "@/components/dashboard/ui-helpers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { projects, type ProjectRow } from "@/db/schema";
import { Pencil, Plus } from "lucide-react";
import { DeleteButton } from "@/components/dashboard/delete-button";

export const dynamic = "force-dynamic";

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>;
}) {
  const { saved, deleted } = await searchParams;
  const rows = db
    ? await db
        .select()
        .from(projects)
        .orderBy(asc(projects.sortOrder), asc(projects.id))
    : [];

  return (
    <>
      <PageHeader
        title="Projects"
        description="Kelola project yang tampil di halaman utama."
        action={
          <Button asChild>
            <Link href="/dashboard/projects/new">
              <Plus className="size-4" />
              Tambah Project
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
              <TableHead>Project</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="py-10 text-center text-muted-foreground">
                  Belum ada project. Klik “Tambah Project”.
                </TableCell>
              </TableRow>
            )}
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <div className="font-medium">{row.title}</div>
                  <div className="max-w-xs truncate text-xs text-muted-foreground">
                    {row.href}
                  </div>
                </TableCell>
                <TableCell>{row.dates || "—"}</TableCell>
                <TableCell>
                  {row.active ? (
                    <Badge variant="outline" className="border-emerald-400/50 text-emerald-600 dark:text-emerald-400">
                      Tampil
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-muted-foreground">
                      Tersembunyi
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/dashboard/projects/${row.id}`}>
                        <Pencil className="size-3" />
                        Edit
                      </Link>
                    </Button>
                    <form action={deleteProject}>
                      <input type="hidden" name="id" value={row.id} />
                      <DeleteButton confirmMessage={`Hapus project "${row.title}"?`} />
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

export function ProjectForm({ project }: { project?: ProjectRow }) {
  const action = project ? updateProject : createProject;
  return (
    <>
      <PageHeader
        title={project ? "Edit Project" : "Tambah Project"}
        action={<BackLink href="/dashboard/projects" />}
      />
      {!db && <DbWarning />}
      <form
        action={action}
        className="grid gap-5 rounded-lg border bg-card p-5 sm:p-6"
      >
        {project && <input type="hidden" name="id" value={project.id} />}

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Judul">
            <Input name="title" defaultValue={project?.title ?? ""} required />
          </Field>
          <Field label="Tanggal / Tahun">
            <Input name="dates" defaultValue={project?.dates ?? ""} placeholder="2025" />
          </Field>
        </div>

        <Field label="URL Project">
          <Input name="href" defaultValue={project?.href ?? ""} placeholder="https://…" />
        </Field>

        <Field label="Deskripsi" hint="Mendukung Markdown.">
          <Textarea name="description" defaultValue={project?.description ?? ""} rows={4} />
        </Field>

        <Field label="Teknologi" hint="Pisahkan dengan koma, contoh: Next.js, Tailwind CSS">
          <Input
            name="technologies"
            defaultValue={(project?.technologies ?? []).join(", ")}
          />
        </Field>

        <div className="grid gap-5 md:grid-cols-2">
          <ImageField
            name="image"
            label="Gambar Thumbnail"
            value={project?.imageUrl ?? ""}
            hint="Upload otomatis ke Neon Object Storage."
          />
          <Field label="URL Video (opsional)">
            <Input name="video" defaultValue={project?.videoUrl ?? ""} placeholder="https://…" />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Label Link (opsional)" hint="Label tombol, mis. Website / Template">
            <Input name="linkType" defaultValue={project?.links?.[0]?.type ?? ""} />
          </Field>
          <Field label="URL Link">
            <Input name="linkHref" defaultValue={project?.links?.[0]?.href ?? ""} placeholder="https://…" />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-1.5">
            <Label className="text-sm">Status</Label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="active"
                defaultChecked={project?.active ?? true}
                className="size-4 rounded border-input accent-primary"
              />
              Tampilkan di halaman utama
            </label>
          </div>
          <Field label="Urutan">
            <Input name="sortOrder" type="number" defaultValue={project?.sortOrder ?? 0} />
          </Field>
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={!db}>
            Simpan
          </Button>
        </div>
      </form>
    </>
  );
}