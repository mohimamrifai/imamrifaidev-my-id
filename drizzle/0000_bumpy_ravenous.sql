CREATE TABLE "education" (
	"id" serial PRIMARY KEY NOT NULL,
	"school" text NOT NULL,
	"href" text DEFAULT '' NOT NULL,
	"degree" text DEFAULT '' NOT NULL,
	"logo_url" text DEFAULT '' NOT NULL,
	"start" text DEFAULT '' NOT NULL,
	"end" text DEFAULT '' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "profile" (
	"id" integer PRIMARY KEY DEFAULT 1 NOT NULL,
	"name" text DEFAULT '' NOT NULL,
	"initials" text DEFAULT '' NOT NULL,
	"url" text DEFAULT '' NOT NULL,
	"location" text DEFAULT '' NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"summary" text DEFAULT '' NOT NULL,
	"avatar_url" text DEFAULT '' NOT NULL,
	"email" text DEFAULT '' NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"href" text DEFAULT '' NOT NULL,
	"dates" text DEFAULT '' NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"technologies" text[] DEFAULT '{}'::text[] NOT NULL,
	"image_url" text DEFAULT '' NOT NULL,
	"video_url" text DEFAULT '' NOT NULL,
	"links" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"icon" text DEFAULT '' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "social_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" text NOT NULL,
	"url" text NOT NULL,
	"icon" text DEFAULT '' NOT NULL,
	"show_in_navbar" boolean DEFAULT true NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "work_experience" (
	"id" serial PRIMARY KEY NOT NULL,
	"company" text NOT NULL,
	"href" text DEFAULT '' NOT NULL,
	"location" text DEFAULT '' NOT NULL,
	"title" text NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"logo_url" text DEFAULT '' NOT NULL,
	"start" text DEFAULT '' NOT NULL,
	"end" text DEFAULT '' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
