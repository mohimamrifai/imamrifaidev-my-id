import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

/**
 * Single-row table that holds the hero / about information.
 * The row is always stored with id = 1.
 */
export const profile = pgTable("profile", {
  id: integer("id").primaryKey().default(1),
  name: text("name").notNull().default(""),
  initials: text("initials").notNull().default(""),
  url: text("url").notNull().default(""),
  location: text("location").notNull().default(""),
  description: text("description").notNull().default(""),
  summary: text("summary").notNull().default(""),
  avatarUrl: text("avatar_url").notNull().default(""),
  email: text("email").notNull().default(""),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  icon: text("icon").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const socialLinks = pgTable("social_links", {
  id: serial("id").primaryKey(),
  label: text("label").notNull(),
  url: text("url").notNull(),
  icon: text("icon").notNull().default(""),
  showInNavbar: boolean("show_in_navbar").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const workExperience = pgTable("work_experience", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  href: text("href").notNull().default(""),
  location: text("location").notNull().default(""),
  title: text("title").notNull(),
  description: text("description").notNull().default(""),
  logoUrl: text("logo_url").notNull().default(""),
  start: text("start").notNull().default(""),
  end: text("end").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  school: text("school").notNull(),
  href: text("href").notNull().default(""),
  degree: text("degree").notNull().default(""),
  logoUrl: text("logo_url").notNull().default(""),
  start: text("start").notNull().default(""),
  end: text("end").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
});

export type ProjectLink = {
  type: string;
  href: string;
};

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  href: text("href").notNull().default(""),
  dates: text("dates").notNull().default(""),
  description: text("description").notNull().default(""),
  technologies: text("technologies")
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  imageUrl: text("image_url").notNull().default(""),
  videoUrl: text("video_url").notNull().default(""),
  links: jsonb("links")
    .$type<ProjectLink[]>()
    .notNull()
    .default(sql`'[]'::jsonb`),
  active: boolean("active").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
});

export type ProfileRow = typeof profile.$inferSelect;
export type SkillRow = typeof skills.$inferSelect;
export type SocialLinkRow = typeof socialLinks.$inferSelect;
export type WorkRow = typeof workExperience.$inferSelect;
export type EducationRow = typeof education.$inferSelect;
export type ProjectRow = typeof projects.$inferSelect;
