import { Icons } from "@/components/icons";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Docker } from "@/components/ui/svgs/docker";
import { Golang } from "@/components/ui/svgs/golang";
import { Java } from "@/components/ui/svgs/java";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import {
  Database,
  GitBranch,
  Globe,
  Home,
  Layers,
  Mail,
  Server,
  Wind,
} from "lucide-react";
import type { ComponentType } from "react";

export type IconComponent = ComponentType<{ className?: string }>;

export type IconGroup = "social" | "tech" | "general";

export type IconDefinition = {
  key: string;
  label: string;
  group: IconGroup;
  Icon: IconComponent;
};

/**
 * All icons that can be assigned to a skill or a social link. The `key` is what
 * gets stored in the database, so the dashboard can offer a dropdown of options
 * while the public site renders the matching component.
 */
export const ICON_DEFINITIONS: IconDefinition[] = [
  // Social / brand
  { key: "github", label: "GitHub", group: "social", Icon: Icons.github },
  { key: "linkedin", label: "LinkedIn", group: "social", Icon: Icons.linkedin },
  { key: "instagram", label: "Instagram", group: "social", Icon: Icons.instagram },
  { key: "whatsapp", label: "WhatsApp", group: "social", Icon: Icons.whatsapp },
  { key: "email", label: "Email", group: "social", Icon: Mail },
  { key: "x", label: "X (Twitter)", group: "social", Icon: Icons.x },
  { key: "youtube", label: "YouTube", group: "social", Icon: Icons.youtube },
  { key: "notion", label: "Notion", group: "social", Icon: Icons.notion },
  { key: "openai", label: "OpenAI", group: "social", Icon: Icons.openai },
  { key: "google-drive", label: "Google Drive", group: "social", Icon: Icons.googleDrive },

  // Tech / skills
  { key: "react", label: "React", group: "tech", Icon: ReactLight },
  { key: "nextjs", label: "Next.js", group: "tech", Icon: NextjsIconDark },
  { key: "typescript", label: "TypeScript", group: "tech", Icon: Typescript },
  { key: "nodejs", label: "Node.js", group: "tech", Icon: Nodejs },
  { key: "nestjs", label: "Nest.js / Server", group: "tech", Icon: Server },
  { key: "tailwindcss", label: "Tailwind CSS", group: "tech", Icon: Icons.tailwindcss },
  { key: "laravel", label: "Laravel / Layers", group: "tech", Icon: Layers },
  { key: "prisma", label: "Prisma / Database", group: "tech", Icon: Database },
  { key: "mysql", label: "MySQL / Database", group: "tech", Icon: Database },
  { key: "postgresql", label: "PostgreSQL", group: "tech", Icon: Postgresql },
  { key: "git", label: "Git", group: "tech", Icon: GitBranch },
  { key: "python", label: "Python", group: "tech", Icon: Python },
  { key: "java", label: "Java", group: "tech", Icon: Java },
  { key: "golang", label: "Golang", group: "tech", Icon: Golang },
  { key: "csharp", label: "C#", group: "tech", Icon: Csharp },
  { key: "docker", label: "Docker", group: "tech", Icon: Docker },
  { key: "kubernetes", label: "Kubernetes", group: "tech", Icon: Kubernetes },
  { key: "wind", label: "Wind (generic)", group: "tech", Icon: Wind },

  // General
  { key: "globe", label: "Globe", group: "general", Icon: Globe },
  { key: "home", label: "Home", group: "general", Icon: Home },
];

const ICON_MAP: Record<string, IconComponent> = Object.fromEntries(
  ICON_DEFINITIONS.map((definition) => [definition.key, definition.Icon])
);

export const ICON_OPTIONS = ICON_DEFINITIONS.map(({ key, label, group }) => ({
  key,
  label,
  group,
}));

/**
 * Resolve a stored icon key to a component. Falls back to `null` when the key is
 * unknown or empty so callers can render a placeholder.
 */
export function resolveIcon(key?: string | null): IconComponent | null {
  if (!key) {
    return null;
  }
  return ICON_MAP[key] ?? null;
}
