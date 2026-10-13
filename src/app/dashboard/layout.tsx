import { Sidebar } from "@/components/dashboard/sidebar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { logout } from "@/app/dashboard/actions/logout";
import { requireSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await requireSession();

  return (
    <div className="min-h-dvh md:flex">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 px-4 py-6 sm:px-8 sm:py-8">
          <div className="mx-auto w-full max-w-5xl space-y-8">{children}</div>
        </main>
        <footer className="border-t p-4 text-center md:hidden">
          <form action={logout}>
            <Button type="submit" variant="outline" size="sm">
              <LogOut className="size-4" />
              Keluar
            </Button>
          </form>
        </footer>
      </div>
    </div>
  );
}