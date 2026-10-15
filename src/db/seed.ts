import "./load-env";
import { db } from "./index";
import {
  education,
  profile,
  projects,
  skills,
  socialLinks,
  workExperience,
} from "./schema";
import {
  seedEducation,
  seedProfile,
  seedProjects,
  seedSkills,
  seedSocialLinks,
  seedWork,
} from "./seed-data";

/**
 * Restore the database from `src/db/seed-data.ts`, the snapshot of the live
 * content. Regenerate the snapshot with `npm run db:snapshot` after making
 * changes in the dashboard so the seed always matches the current data.
 */
async function main() {
  if (!db) {
    console.error(
      "DATABASE_URL tidak tersedia. Buat file .env.local (lihat .env.example) lalu jalankan lagi."
    );
    process.exit(1);
  }

  console.log("Menghapus data lama…");
  await Promise.all([
    db.delete(projects),
    db.delete(workExperience),
    db.delete(education),
    db.delete(skills),
    db.delete(socialLinks),
    db.delete(profile),
  ]);

  console.log("Mengisi data dari snapshot (src/db/seed-data.ts)…");
  await db.insert(profile).values({ id: 1, ...seedProfile });
  if (seedSkills.length > 0) {
    await db.insert(skills).values(seedSkills);
  }
  if (seedSocialLinks.length > 0) {
    await db.insert(socialLinks).values(seedSocialLinks);
  }
  if (seedWork.length > 0) {
    await db.insert(workExperience).values(seedWork);
  }
  if (seedEducation.length > 0) {
    await db.insert(education).values(seedEducation);
  }
  if (seedProjects.length > 0) {
    await db.insert(projects).values(seedProjects);
  }

  console.log(
    `Seed selesai ✔ (skills: ${seedSkills.length}, social: ${seedSocialLinks.length}, ` +
      `work: ${seedWork.length}, education: ${seedEducation.length}, projects: ${seedProjects.length})`
  );
}

main().catch((error) => {
  console.error("Seed gagal:", error);
  process.exit(1);
});
