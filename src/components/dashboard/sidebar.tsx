"use client";

import { logout } from "@/app/dashboard/actions/logout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Share2,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/dashboard", label: "Ringkasan", icon: LayoutDashboard },
  { href: "/dashboard/profile", label: "Profile", icon: User },
  { href: "/dashboard/projects", label: "Projects", icon: FolderKanban },
  { href: "/dashboard/work", label: "Work", icon: Briefcase },
  { href: "/dashboard/education", label: "Education", icon: GraduationCap },
  { href: "/dashboard/skills", label: "Skills", icon: Sparkles },
  { href: "/dashboard/social", label: "Social Links", icon: Share2 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-full flex-col border-b bg-card/60 backdrop-blur md:w-60 md:border-b-0 md:border-r md:min-h-dvh md:sticky md:top-0">
      <div className="flex items-center justify-between gap-2 px-4 py-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <LayoutDashboard className="size-4" />
          </span>
          <span>Dashboard</span>
        </Link>
        <Link
          href="/"
          target="_blank"
          className="hidden items-center gap-1 text-xs text-muted-foreground hover:text-foreground sm:flex"
        >
          <ExternalLink className="size-3" />
          Lihat situs
        </Link>
      </div>

      <nav className="flex flex-1 flex-row gap-1 overflow-x-auto px-3 pb-3 md:flex-col md:pb-0">
        {NAV.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="size-4 flex-none" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden p-3 md:block">
        <form action={logout}>
          <Button type="submit" variant="outline" className="w-full justify-start gap-2">
            <LogOut className="size-4" />
            Keluar
          </Button>
        </form>
      </div>
    </aside>
  );
}