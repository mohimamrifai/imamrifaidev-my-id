"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/** Vercel Hobby rejects request bodies over ~4.5 MB, so stay well below it. */
const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;
/** Only bother re-encoding files bigger than this. */
const OPTIMIZE_THRESHOLD_BYTES = 1.2 * 1024 * 1024;
const MAX_DIMENSION = 1920;

const RASTER_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
]);

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Gambar tidak bisa dibaca."));
    };
    image.src = objectUrl;
  });
}

/**
 * Downscale and re-encode large raster images in the browser so uploads always
 * fit the serverless request limit. Small files and non-raster formats
 * (svg/gif) are returned unchanged.
 */
async function optimizeImage(file: File): Promise<File> {
  if (!RASTER_TYPES.has(file.type) || file.size <= OPTIMIZE_THRESHOLD_BYTES) {
    return file;
  }

  const image = await loadImage(file);
  const scale = Math.min(
    1,
    MAX_DIMENSION / Math.max(image.naturalWidth, image.naturalHeight)
  );
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  if (!context) {
    return file;
  }
  context.drawImage(image, 0, 0, width, height);

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/webp", 0.85)
  );
  if (!blob) {
    return file;
  }

  const name = `${file.name.replace(/\.[^.]+$/, "") || "image"}.webp`;
  const optimized = new File([blob], name, { type: "image/webp" });
  return optimized.size < file.size ? optimized : file;
}

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
  const rootRef = useRef<HTMLDivElement>(null);
  const fileInputId = `${name}-file`;

  /**
   * While an upload is running the form must not be submitted: the image URL
   * is not part of the form yet, so saving early would store the previous (or
   * an empty) image. Disabling the submit buttons blocks clicks and implicit
   * (Enter) submissions.
   */
  useEffect(() => {
    const form = rootRef.current?.closest("form");
    if (!form) {
      return;
    }
    const buttons = form.querySelectorAll<HTMLElement>(
      'button[type="submit"], input[type="submit"]'
    );
    for (const button of buttons) {
      if (uploading) {
        if (!button.hasAttribute("data-upload-guard")) {
          button.setAttribute("data-upload-guard", "true");
        }
        (button as HTMLButtonElement).disabled = true;
      } else if (button.hasAttribute("data-upload-guard")) {
        button.removeAttribute("data-upload-guard");
        (button as HTMLButtonElement).disabled = false;
      }
    }
  }, [uploading]);

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

      const prepared = await optimizeImage(file);

      if (prepared.size > MAX_UPLOAD_BYTES) {
        throw new Error(
          "Gambar terlalu besar (maksimal 4 MB setelah dikompres). Coba gambar lain."
        );
      }

      const formData = new FormData();
      formData.append("file", prepared);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json().catch(() => null)) as
        | { url?: string; error?: string }
        | null;
      if (response.status === 413) {
        throw new Error("Gambar terlalu besar untuk diunggah. Coba gambar lain.");
      }
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
    <div className="space-y-2" ref={rootRef}>
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
      {uploading && (
        <p className="text-xs text-amber-600">
          Menunggu upload selesai… tombol Simpan dinonaktifkan sementara.
        </p>
      )}
      {hint && !uploading && (
        <p className="text-xs text-muted-foreground">{hint}</p>
      )}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
