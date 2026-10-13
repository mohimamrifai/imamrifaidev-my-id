import "./load-env";
import { DATA } from "@/data/resume";
import { db } from "./index";
import {
  education,
  profile,
  projects,
  skills,
  socialLinks,
  workExperience,
} from "./schema";

const SKILL_ICONS: Record<string, string> = {
  React: "react",
  "Next.js": "nextjs",
  TypeScript: "typescript",
  "Node.js": "nodejs",
  "Nest.js": "nestjs",
  "Tailwind CSS": "tailwindcss",
  Laravel: "laravel",
  Prisma: "prisma",
  Drizzle: "prisma",
  MySQL: "mysql",
  Git: "git",
};

const SOCIAL_ICONS: Record<string, string> = {
  GitHub: "github",
  LinkedIn: "linkedin",
  Instagram: "instagram",
  WhatsApp: "whatsapp",
  "Send Email": "email",
};

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

  console.log("Mengisi profile…");
  await db.insert(profile).values({
    id: 1,
    name: DATA.name,
    initials: DATA.initials,
    url: DATA.url,
    location: DATA.location,
    description: DATA.description,
    summary: DATA.summary,
    avatarUrl: DATA.avatarUrl,
    email: DATA.contact.email,
  });

  console.log("Mengisi skills…");
  const skillValues = DATA.skills.map((skill, index) => ({
    name: skill.name,
    icon: SKILL_ICONS[skill.name] ?? "",
    sortOrder: index,
  }));
  if (skillValues.length > 0) {
    await db.insert(skills).values(skillValues);
  }

  console.log("Mengisi social links…");
  const socialValues = Object.entries(DATA.contact.social).map(
    ([name, value], index) => ({
      label: value.name,
      url: value.url,
      icon: SOCIAL_ICONS[name] ?? "",
      showInNavbar: value.navbar,
      sortOrder: index,
    })
  );
  if (socialValues.length > 0) {
    await db.insert(socialLinks).values(socialValues);
  }

  console.log("Mengisi work…");
  const workValues = DATA.work.map((work, index) => ({
    company: work.company,
    href: work.href,
    location: work.location,
    title: work.title,
    description: work.description,
    logoUrl: work.logoUrl,
    start: work.start,
    end: work.end ?? "",
    sortOrder: index,
  }));
  if (workValues.length > 0) {
    await db.insert(workExperience).values(workValues);
  }

  console.log("Mengisi education…");
  const educationValues = DATA.education.map((entry, index) => ({
    school: entry.school,
    href: entry.href,
    degree: entry.degree,
    logoUrl: entry.logoUrl,
    start: entry.start,
    end: entry.end ?? "",
    sortOrder: index,
  }));
  if (educationValues.length > 0) {
    await db.insert(education).values(educationValues);
  }

  console.log("Mengisi projects…");
  const projectValues = DATA.projects.map((project, index) => ({
    title: project.title,
    href: project.href,
    dates: project.dates,
    description: project.description,
    technologies: [...project.technologies],
    imageUrl: project.image,
    videoUrl: project.video,
    links: project.links.map((link) => ({ type: link.type, href: link.href })),
    active: project.active ?? true,
    sortOrder: index,
  }));
  if (projectValues.length > 0) {
    await db.insert(projects).values(projectValues);
  }

  console.log("Seed selesai ✔ (total project: " + projectValues.length + ")");
}

main().catch((error) => {
  console.error("Seed gagal:", error);
  process.exit(1);
});