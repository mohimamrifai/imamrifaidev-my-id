import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

/**
 * Neon Object Storage bucket that holds dashboard uploads. It is declared in
 * `neon.ts` with `access: "public_read"`, so objects are readable without a
 * credential while writes require the branch's S3 credentials.
 */
export const STORAGE_BUCKET = "assets";

const endpoint = process.env.AWS_ENDPOINT_URL_S3;
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

/** Whether the Neon Object Storage credentials are available. */
export const isStorageConfigured = Boolean(
  endpoint && region && accessKeyId && secretAccessKey
);

let client: S3Client | null = null;

function getClient(): S3Client | null {
  if (!isStorageConfigured) {
    return null;
  }
  // Neon requires path-style addressing and SigV4.
  client ??= new S3Client({
    region: region!,
    endpoint: endpoint!,
    forcePathStyle: true,
    credentials: {
      accessKeyId: accessKeyId!,
      secretAccessKey: secretAccessKey!,
    },
  });
  return client;
}

function buildPublicUrl(key: string): string {
  return `${endpoint!.replace(/\/+$/, "")}/${STORAGE_BUCKET}/${key}`;
}

/**
 * Upload a file to the bucket and return its public URL. Each upload gets a
 * unique, versioned key so caches never serve a stale image.
 */
export async function uploadObject(
  file: File,
  folder = "dashboard"
): Promise<{ key: string; url: string }> {
  const s3 = getClient();
  if (!s3) {
    throw new Error("Object storage belum dikonfigurasi.");
  }

  const safeName = file.name
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  const unique = crypto.randomUUID().slice(0, 8);
  const key = `${folder}/${Date.now()}-${unique}-${safeName || "image"}`;

  await s3.send(
    new PutObjectCommand({
      Bucket: STORAGE_BUCKET,
      Key: key,
      Body: new Uint8Array(await file.arrayBuffer()),
      ContentType: file.type || "application/octet-stream",
      CacheControl: "public, max-age=31536000, immutable",
    })
  );

  return { key, url: buildPublicUrl(key) };
}