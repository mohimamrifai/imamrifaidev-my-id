import { Icons } from "@/components/icons";
import { HomeIcon, Wind, Database, GitBranch, Palette, Layers, Server } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";

export const DATA = {
  name: "Mohammad Imam Rifai",
  initials: "MIR",
  url: "https://imamrifaidev.my.id",
  location: "Indonesia",
  description:
    "Founder Maskode_Labs • Software Engineer • Remote Worker. Dari Indonesia 🇮🇩",
  summary:
    "Saya adalah seorang software engineer yang senang membangun hal-hal baru di internet. Mulai dari website, aplikasi web, hingga produk berbasis AI, saya tertarik menciptakan solusi yang tidak hanya terlihat menarik tetapi juga benar-benar bermanfaat bagi penggunanya.",
  avatarUrl: "/profile.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Nest.js", icon: Server },
    { name: "Tailwind CSS", icon: Wind },
    { name: "Laravel", icon: Layers },
    { name: "Prisma", icon: Server },
    { name: "Drizzle", icon: Server },
    { name: "MySQL", icon: Database },
    { name: "Git", icon: GitBranch },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "imamrifaibisnis@gmail.com",
    // tel: "+6282118668919",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mohimamrifai",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammad-imam-rifai-79bab9265/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/maspalul_",
        icon: Icons.instagram,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/6282118668919",
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:imamrifaibisnis@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Maskode_Labs",
      href: "https://maskode.my.id",
      badges: [],
      location: "Remote",
      title: "Founder & Software Engineer",
      logoUrl: "/maskode.svg",
      start: "2023",
      end: "Sekarang",
      description:
        "Membangun produk digital dan melayani klien dalam pembuatan website modern, UI/UX design, serta optimasi SEO. Berkomitmen menghadirkan solusi teknologi yang berdampak positif bagi pertumbuhan bisnis klien.",
    },
    {
      fastwork: true,
      company: "Fastwork",
      href: "https://fastwork.id/byob/9u0B00PF3g?openExternalBrowser=1&source=byob",
      badges: [],
      location: "Remote",
      title: "Freelance Software Engineer",
      logoUrl: "/fastwork.svg",
      start: "2023",
      end: "Sekarang",
      description:
        "Membangun produk digital dan melayani klien dalam pembuatan website dan aplikasi mobile. Berkomitmen menghadirkan solusi teknologi yang berdampak positif bagi pertumbuhan bisnis klien.",
    }
  ],
  education: [
    {
      school: "Belajar Otodidak & Kursus Online",
      href: "https://www.dicoding.com",
      degree: "Fokus pada Web Development & UI/UX Design",
      logoUrl: "/profile.jpg",
      start: "2021",
      end: "Sekarang",
    },
  ],
  projects: [
    {
      title: "La Mania Academy Football",
      href: "https://lamania-academy.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Landing page dan website untuk Sebuah Sekolah Sepak bola, Lebih dari 200 siswa aktif ditempa oleh pelatih bersertifikat UEFA & PSSI di lapangan standar FIFA. Usia 6 sampai 17 tahun.",
      technologies: ["Fullstack Next.js","Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://lamania-academy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfolio/lamania.png",
      video: "",
    },
    {
      title: "Caker.id | Job Portal",
      href: "https://caker.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Jelajahi ribuan lowongan dari perusahaan terpercaya. Filter berdasarkan keahlian, lokasi, dan rentang gaji—semua dalam satu tempat yang tenang dan tanpa gangguan.",
      technologies: ["Fullstack Next.js","PostgreSQL","Prisma","Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://caker.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfolio/caker.png",
      video: "",
    },
    {
      title: "Pusat Tech Ventur",
      href: "https://pusat-techventur.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Direktori terkurasi berisi 12.000+ tempat, layanan, dan peluang teknologi pilihan—dari co-working space, startup studio, hingga investor & mentor. Kurasi tim lokal, diperbarui setiap minggu.",
      technologies: ["Next.js","Nest.js","PostgreSQL","Prisma","Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://pusat-techventur.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfolio/tech-ventur.png",
      video: "",
    },
    {
      title: "Bengkel Kita",
      href: "https://bengkelkita.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Teknisi profesional untuk servis AC, listrik, pipa, las, dan mekanik kendaraan. Datang ke tempat Anda, harga transparan, bergaransi 30 hari.",
      technologies: ["Fullstack Next.js","Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://bengkelkita.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfolio/bengkelkita.png",
      video: "",
    },
    {
      title: "Rental Mobil - Template V2",
      href: "https://rentaldotmobil.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Landing page untuk rental mobil yang dirancang menggunakan Next.js, Tailwind CSS, dan Framer Motion dengan animasi yang halus.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Template",
          href: "https://rentaldotmobil.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfolio/rental-mobil.png",
      video: "",
    },
    {
      title: "Digify | Digital Marketing Landing Page",
      href: "https://digify-pi.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Landing page untuk digital marketing dirancang menggunakan Next.js, Tailwind CSS, dan Framer Motion dengan animasi yang halus.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://digify-pi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project1.png",
      video: "",
    },
    {
      title: "Website Seblak Prasmanan",
      href: "https://seblak-prasmanan-lubis.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Website untuk usaha seblak prasmanan dirancang menggunakan Next.js, Tailwind CSS, dan Framer Motion. Menampilkan menu, lokasi, dan informasi bisnis.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://seblak-prasmanan-lubis.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project3.png",
      video: "",
    },
    {
      title: "Easy Rent | Rental Mobile V1",
      href: "https://rent-mir.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Platform rental mobil dengan sistem yang user-friendly, pencarian unit yang mudah, dan proses pemesanan yang cepat.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Template",
          href: "https://rent-mir.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/portfolio/easy-rent.png",
      video: "",
    },
    {
      title: "Website Bakso Sapi Mang Budi",
      href: "https://baksomangbudi.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Website untuk usaha bakso sapi milik Mang Budi. Menampilkan menu, testimoni pelanggan, dan lokasi outlet.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://baksomangbudi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project7.png",
      video: "",
    },
    {
      title: "Mirland | Jasa Website",
      href: "https://mirland-id.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Website untuk layanan jasa pembuatan website. Didirikan untuk membantu UMKM memiliki website profesional dengan harga terjangkau.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://mirland-id.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project5.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;