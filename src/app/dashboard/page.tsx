import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DbWarning,
  PageHeader,
} from "@/components/dashboard/ui-helpers";
import { getDashboardStats } from "@/lib/content";
import {
  ArrowUpRight,
  Briefcase,
  FolderKanban,
  GraduationCap,
  Share2,
  Sparkles,
} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const stats = await getDashboardStats();

  const cards = [
    {
      label: "Projects",
      value: stats.projects,
      icon: FolderKanban,
      href: "/dashboard/projects",
    },
    {
      label: "Work",
      value: stats.work,
      icon: Briefcase,
      href: "/dashboard/work",
    },
    {
      label: "Skills",
      value: stats.skills,
      icon: Sparkles,
      href: "/dashboard/skills",
    },
    {
      label: "Education",
      value: stats.education,
      icon: GraduationCap,
      href: "/dashboard/education",
    },
    {
      label: "Social Links",
      value: stats.social,
      icon: Share2,
      href: "/dashboard/social",
    },
  ];

  return (
    <>
      <PageHeader
        title="Ringkasan"
        description="Kelola konten website imamrifaidev.my.id dari sini. Perubahan langsung tampil di halaman utama."
      />
      {!stats.configured && <DbWarning />}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className="group">
            <Card className="h-full transition-colors group-hover:border-primary/50">
              <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {card.label}
                </CardTitle>
                <card.icon className="size-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="flex items-end justify-between">
                <span className="text-3xl font-semibold tracking-tight">
                  {card.value}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-2 pt-6 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Tips:</strong> login memakai
            akun tunggal yang dikonfigurasi lewat{" "}
            <code>ADMIN_EMAIL</code> / <code>ADMIN_PASSWORD</code>. Gambar
            diunggah ke Vercel Blob (kuota gratis Hobby).
          </p>
          <p>
            Situs publik di-cache selama 5 menit, tapi setiap perubahan dari
            dashboard langsung memicu revalidasi — perubahan terlihat seketika.
          </p>
        </CardContent>
      </Card>
    </>
  );
}