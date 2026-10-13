import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export function BackLink({ href, label }: { href: string; label?: string }) {
  return (
    <Button asChild variant="ghost" size="sm" className="-ml-2">
      <Link href={href}>
        <ArrowLeft className="size-4" />
        {label ?? "Kembali"}
      </Link>
    </Button>
  );
}

export function DbWarning() {
  return (
    <div className="flex items-start gap-2 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300">
      <TriangleAlert className="mt-0.5 size-4 flex-none" />
      <div>
        <p className="font-medium">Database belum dikonfigurasi</p>
        <p className="text-xs">
          Set variabel <code>DATABASE_URL</code> lalu jalankan{" "}
          <code>pnpm db:push</code> dan <code>pnpm db:seed</code>. Selama belum
          dikonfigurasi, situs publik memakai data statis dan tombol simpan
          dinonaktifkan.
        </p>
      </div>
    </div>
  );
}

export function SavedNotice({ saved, deleted }: { saved?: boolean; deleted?: boolean }) {
  if (!saved && !deleted) {
    return null;
  }
  return (
    <div className="flex items-center gap-2 rounded-md border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-800 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300">
      <CheckCircle2 className="size-4 flex-none" />
      {saved ? "Perubahan berhasil disimpan." : "Item berhasil dihapus."}
    </div>
  );
}