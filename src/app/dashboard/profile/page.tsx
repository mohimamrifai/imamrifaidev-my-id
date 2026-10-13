import { updateProfile } from "@/app/dashboard/actions/profile";
import { Field } from "@/components/dashboard/field";
import { ImageField } from "@/components/dashboard/image-field";
import { PageHeader, DbWarning, SavedNotice } from "@/components/dashboard/ui-helpers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/db";
import { profile } from "@/db/schema";

export const dynamic = "force-dynamic";

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string }>;
}) {
  const { saved } = await searchParams;
  const row = db ? (await db.select().from(profile).limit(1))[0] : undefined;

  return (
    <>
      <PageHeader
        title="Profile"
        description="Edit hero, informasi about, dan email kontak."
      />
      {!db && <DbWarning />}
      <SavedNotice saved={saved === "1"} />

      <form
        action={updateProfile}
        className="grid gap-5 rounded-lg border bg-card p-5 sm:p-6"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Nama">
            <Input name="name" defaultValue={row?.name ?? ""} required />
          </Field>
          <Field label="Inisial">
            <Input name="initials" defaultValue={row?.initials ?? ""} />
          </Field>
          <Field label="URL Website">
            <Input name="url" defaultValue={row?.url ?? ""} placeholder="https://imamrifaidev.my.id" />
          </Field>
          <Field label="Lokasi">
            <Input name="location" defaultValue={row?.location ?? ""} />
          </Field>
        </div>

        <Field label="Deskripsi singkat">
          <Input name="description" defaultValue={row?.description ?? ""} />
        </Field>

        <Field label="Ringkasan (About)" hint="Mendukung Markdown (enter dua kali untuk paragraf).">
          <Textarea name="summary" defaultValue={row?.summary ?? ""} rows={6} />
        </Field>

        <Field label="Email kontak">
          <Input name="email" type="email" defaultValue={row?.email ?? ""} />
        </Field>

        <ImageField
          name="avatarUrl"
          label="Foto Profil"
          value={row?.avatarUrl ?? ""}
          hint="Upload otomatis ke Vercel Blob, atau tempel URL gambar."
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