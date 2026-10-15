import { getSession } from "@/lib/auth";
import { isStorageConfigured, uploadObject } from "@/lib/storage";
import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";

/** Allowed content types for images uploaded from the dashboard. */
const ALLOWED = new Set([
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/svg+xml",
]);

const MAX_SIZE = 4 * 1024 * 1024; // 4 MB (Vercel Hobby caps the body at ~4.5 MB)

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isStorageConfigured) {
    return NextResponse.json(
      { error: "Object storage belum dikonfigurasi." },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "File tidak ditemukan." },
        { status: 400 }
      );
    }
    if (!ALLOWED.has(file.type)) {
      return NextResponse.json(
        { error: "Tipe file tidak didukung." },
        { status: 400 }
      );
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { error: "Ukuran file maksimal 4 MB." },
        { status: 400 }
      );
    }

    const { url } = await uploadObject(file, "dashboard");
    return NextResponse.json({ url });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload gagal." },
      { status: 500 }
    );
  }
}