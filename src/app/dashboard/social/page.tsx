import Link from "next/link";
import { createSocial, deleteSocial, updateSocial } from "@/app/dashboard/actions/social";
import { DeleteButton } from "@/components/dashboard/delete-button";
import { Field } from "@/components/dashboard/field";
import { IconField } from "@/components/dashboard/icon-field";
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
import { asc } from "drizzle-orm";
import { db } from "@/db";
import { socialLinks, type SocialLinkRow } from "@/db/schema";
import { resolveIcon } from "@/lib/icon-registry";
import { Pencil, Plus } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function SocialPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string }>;
}) {
  const { saved, deleted } = await searchParams;
  const rows = db
    ? await db
        .select()
        .from(socialLinks)
        .orderBy(asc(socialLinks.sortOrder), asc(socialLinks.id))
    : [];

  return (
    <>
      <PageHeader
        title="Social Links"
        description="Email kontak dan tautan media sosial."
        action={
          <Button asChild>
            <Link href="/dashboard/social/new">
              <Plus className="size-4" />
              Tambah Link
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
              <TableHead>Label</TableHead>
              <TableHead>URL</TableHead>
              <TableHead>Navbar</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="py-10 text-center text-muted-foreground">
                  Belum ada social link.
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
                      <span className="font-medium">{row.label}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-xs truncate text-xs text-muted-foreground">
                      {row.url}
                    </div>
                  </TableCell>
                  <TableCell>
                    {row.showInNavbar ? (
                      <Badge variant="outline">Tampil</Badge>
                    ) : (
                      <Badge variant="outline" className="text-muted-foreground">
                        Sembunyi
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/dashboard/social/${row.id}`}>
                          <Pencil className="size-3" />
                          Edit
                        </Link>
                      </Button>
                      <form action={deleteSocial}>
                        <input type="hidden" name="id" value={row.id} />
                        <DeleteButton confirmMessage={`Hapus link "${row.label}"?`} />
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

export function SocialForm({ link }: { link?: SocialLinkRow }) {
  const action = link ? updateSocial : createSocial;
  return (
    <>
      <PageHeader
        title={link ? "Edit Social Link" : "Tambah Social Link"}
        action={<BackLink href="/dashboard/social" />}
      />
      {!db && <DbWarning />}
      <form
        action={action}
        className="grid gap-5 rounded-lg border bg-card p-5 sm:p-6"
      >
        {link && <input type="hidden" name="id" value={link.id} />}

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Label">
            <Input name="label" defaultValue={link?.label ?? ""} placeholder="GitHub" required />
          </Field>
          <Field label="URL">
            <Input name="url" defaultValue={link?.url ?? ""} placeholder="https://…" required />
          </Field>
        </div>

        <IconField name="icon" label="Ikon" value={link?.icon ?? ""} />

        <div className="grid gap-5 md:grid-cols-2 sm:grid-cols-2">
          <div className="grid gap-1.5">
            <Label className="text-sm">Tampil di navbar</Label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="showInNavbar"
                defaultChecked={link?.showInNavbar ?? true}
                className="size-4 rounded border-input accent-primary"
              />
              Tampilkan
            </label>
          </div>
          <Field label="Urutan">
            <Input name="sortOrder" type="number" defaultValue={link?.sortOrder ?? 0} />
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