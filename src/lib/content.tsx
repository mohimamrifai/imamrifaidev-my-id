import { Icons } from "@/components/icons";
import { asc } from "drizzle-orm";
import { db } from "@/db";
import {
  education,
  profile,
  projects,
  skills,
  socialLinks,
  workExperience,
} from "@/db/schema";
import {
  seedEducation,
  seedProfile,
  seedProjects,
  seedSkills,
  seedSocialLinks,
  seedWork,
} from "@/db/seed-data";
import { resolveIcon, type IconComponent } from "@/lib/icon-registry";
import type { ReactNode } from "react";

export type ProjectLinkContent = { type: string; href: string };

export type ProjectContent = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: ReactNode }[];
  image: string;
  video: string;
};

export type WorkContent = {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
};

export type EducationContent = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
};

export type SkillContent = { name: string; icon?: IconComponent };

export type SocialContent = Record<
  string,
  { name: string; url: string; icon: IconComponent; navbar: boolean }
>;

export type SiteContent = {
  name: string;
  initials: string;
  url: string;
  location: string;
  description: string;
  summary: string;
  avatarUrl: string;
  email: string;
  skills: SkillContent[];
  work: WorkContent[];
  education: EducationContent[];
  projects: ProjectContent[];
  social: SocialContent;
};

/**
 * Build the fallback content from the seed snapshot (`src/db/seed-data.ts`),
 * which mirrors the current state of the live database.
 */
function contentFromSnapshot(): SiteContent {
  const social: SocialContent = {};
  for (const link of seedSocialLinks) {
    const icon = resolveIcon(link.icon);
    if (!link.label || !icon) {
      continue;
    }
    social[link.label] = {
      name: link.label,
      url: link.url,
      icon,
      navbar: link.showInNavbar,
    };
  }
  return {
    name: seedProfile.name,
    initials: seedProfile.initials,
    url: seedProfile.url,
    location: seedProfile.location,
    description: seedProfile.description,
    summary: seedProfile.summary,
    avatarUrl: seedProfile.avatarUrl,
    email: seedProfile.email,
    skills: seedSkills.map((skill) => ({
      name: skill.name,
      icon: resolveIcon(skill.icon) ?? undefined,
    })),
    work: seedWork.map((work) => ({
      company: work.company,
      href: work.href,
      badges: [],
      location: work.location,
      title: work.title,
      logoUrl: work.logoUrl,
      start: work.start,
      end: work.end,
      description: work.description,
    })),
    education: seedEducation.map((entry) => ({
      school: entry.school,
      href: entry.href,
      degree: entry.degree,
      logoUrl: entry.logoUrl,
      start: entry.start,
      end: entry.end,
    })),
    projects: seedProjects.map((project) => ({
      title: project.title,
      href: project.href,
      dates: project.dates,
      active: project.active,
      description: project.description,
      technologies: [...project.technologies],
      image: project.imageUrl,
      video: project.videoUrl,
      links: project.links.map((link) => ({
        type: link.type,
        href: link.href,
        icon: <Icons.globe className="size-3" />,
      })),
    })),
    social,
  };
}

/**
 * Load the site content from the database. When the database is not configured
 * or fails for any reason, the static data in `src/data/resume.tsx` is used as
 * a fallback so the public site never breaks.
 */
export async function getContent(): Promise<SiteContent> {
  const fallback = contentFromSnapshot();
  if (!db) {
    return fallback;
  }

  try {
    const [[profileRow], skillRows, socialRows, workRows, educationRows, projectRows] =
      await Promise.all([
        db.select().from(profile).limit(1),
        db.select().from(skills).orderBy(asc(skills.sortOrder)),
        db.select().from(socialLinks).orderBy(asc(socialLinks.sortOrder)),
        db
          .select()
          .from(workExperience)
          .orderBy(asc(workExperience.sortOrder)),
        db.select().from(education).orderBy(asc(education.sortOrder)),
        db.select().from(projects).orderBy(asc(projects.sortOrder)),
      ]);

    const social: SocialContent = {};
    for (const row of socialRows) {
      const icon = resolveIcon(row.icon);
      if (!row.label || !icon) {
        continue;
      }
      social[row.label] = {
        name: row.label,
        url: row.url,
        icon,
        navbar: row.showInNavbar,
      };
    }

    const projectsContent: ProjectContent[] = projectRows
      .filter((project) => project.active)
      .map((project) => ({
        title: project.title || fallback.name,
        href: project.href,
        dates: project.dates,
        active: project.active,
        description: project.description,
        technologies: project.technologies,
        links: (project.links ?? []).map((link) => ({
          type: link.type,
          href: link.href,
          icon: <Icons.globe className="size-3" />,
        })),
        image: project.imageUrl,
        video: project.videoUrl,
      }));

    return {
      name: profileRow?.name || fallback.name,
      initials: profileRow?.initials || fallback.initials,
      url: profileRow?.url || fallback.url,
      location: profileRow?.location || fallback.location,
      description: profileRow?.description || fallback.description,
      summary: profileRow?.summary || fallback.summary,
      avatarUrl: profileRow?.avatarUrl || fallback.avatarUrl,
      email: profileRow?.email || fallback.email,
      skills: skillRows.length
        ? skillRows.map((row) => ({
            name: row.name,
            icon: resolveIcon(row.icon) ?? undefined,
          }))
        : fallback.skills,
      work: workRows.length
        ? workRows.map((row) => ({
            company: row.company,
            href: row.href,
            badges: [],
            location: row.location,
            title: row.title,
            logoUrl: row.logoUrl,
            start: row.start,
            end: row.end,
            description: row.description,
          }))
        : fallback.work,
      education: educationRows.length
        ? educationRows.map((row) => ({
            school: row.school,
            href: row.href,
            degree: row.degree,
            logoUrl: row.logoUrl,
            start: row.start,
            end: row.end,
          }))
        : fallback.education,
      projects: projectsContent.length
        ? projectsContent
        : fallback.projects,
      social: Object.keys(social).length ? social : fallback.social,
    };
  } catch (error) {
    console.error("[content] Database error, falling back to static data:", error);
    return fallback;
  }
}

/** Lightweight profile lookup used for the document metadata (title, description). */
export async function getSiteMeta() {
  const fallback = {
    name: seedProfile.name,
    url: seedProfile.url,
    description: seedProfile.description,
  };
  if (!db) {
    return fallback;
  }
  try {
    const [row] = await db.select().from(profile).limit(1);
    return {
      name: row?.name || fallback.name,
      url: row?.url || fallback.url,
      description: row?.description || fallback.description,
    };
  } catch (error) {
    console.error("[content] Metadata lookup failed, using snapshot:", error);
    return fallback;
  }
}

/** Convenience helper for the dashboard overview cards. */
export async function getDashboardStats() {
  if (!db) {
    return { projects: 0, work: 0, skills: 0, education: 0, social: 0, configured: false };
  }
  const [projectRows, workRows, skillRows, educationRows, socialRows] =
    await Promise.all([
      db.select().from(projects),
      db.select().from(workExperience),
      db.select().from(skills),
      db.select().from(education),
      db.select().from(socialLinks),
    ]);
  return {
    projects: projectRows.length,
    work: workRows.length,
    skills: skillRows.length,
    education: educationRows.length,
    social: socialRows.length,
    configured: true,
  };
}