"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ImageField({
  name,
  label,
  value,
  hint,
}: {
  name: string;
  label: string;
  value?: string;
  hint?: string;
}) {
  const [url, setUrl] = useState(value ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputId = `${name}-file`;

  async function handleFile(file: File | undefined) {
    if (!file) {
      return;
    }
    setUploading(true);
    setError(null);
    try {
      if (!file.type.startsWith("image/")) {
        throw new Error("File harus berupa gambar.");
      }
      if (file.size > 5 * 1024 * 1024) {
        throw new Error("Ukuran file maksimal 5 MB.");
      }
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json().catch(() => null)) as
        | { url?: string; error?: string }
        | null;
      if (!response.ok || !data?.url) {
        throw new Error(data?.error || "Upload gagal.");
      }
      setUrl(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload gagal.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={url}
          alt={label}
          className="h-28 w-full rounded-md border object-cover md:max-w-xs"
        />
      )}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <Input
          type="text"
          name={name}
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="https://… atau upload file di samping"
        />
        <input
          id={fileInputId}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => handleFile(event.target.files?.[0])}
        />
        <label
          htmlFor={fileInputId}
          className="inline-flex h-9 flex-none cursor-pointer items-center justify-center rounded-md border border-input bg-secondary px-3 text-sm font-medium shadow-sm hover:bg-secondary/80 disabled:cursor-not-allowed disabled:opacity-50"
          aria-disabled={uploading}
        >
          {uploading ? "Mengunggah…" : "Upload gambar"}
        </label>
      </div>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}