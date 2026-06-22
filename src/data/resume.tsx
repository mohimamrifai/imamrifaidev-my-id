import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Wind, Database, GitBranch, Palette, Layers, Server } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";

export const DATA = {
  name: "Mohammad Imam Rifai",
  initials: "MIR",
  url: "https://imamrifaidev.my.id",
  location: "Indonesia",
  locationLink: "https://www.google.com/maps/place/Indonesia",
  description:
    "Founder Maskode_Labs • Software Engineer • Remote Worker. Saya membangun pengalaman digital yang indah, bersih, dan fungsional dengan Next.js, TypeScript, dan Tailwind CSS.",
  summary:
    "Saya seorang software engineer dan UI/UX designer yang passionate di bidang teknologi. Berfokus pada Next.js, TypeScript, dan Tailwind CSS untuk menciptakan solusi digital yang modern, responsif, dan ramah pengguna. Aktif membangun produk di Maskode_Labs serta melayani klien melalui layanan UI/UX Design, Web Development, dan SEO Optimization.",
  avatarUrl: "/profile.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Tailwind CSS", icon: Wind },
    { name: "Laravel", icon: Layers },
    { name: "Prisma", icon: Server },
    { name: "MySQL", icon: Database },
    { name: "Git", icon: GitBranch },
    { name: "Figma", icon: Palette },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@imamrifaidev.my.id",
    tel: "+6282118668919",
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
        url: "mailto:hello@imamrifaidev.my.id",
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
      logoUrl: "/profile.jpg",
      start: "2024",
      end: "Sekarang",
      description:
        "Membangun produk digital dan melayani klien dalam pembuatan website modern, UI/UX design, serta optimasi SEO. Berkomitmen menghadirkan solusi teknologi yang berdampak positif bagi pertumbuhan bisnis klien.",
    },
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
      title: "Topupaja.com",
      href: "https://topupaja-com.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Website topup game dirancang menggunakan Next.js, Tailwind CSS, dan TypeScript. Dilengkapi dengan integrasi payment gateway dan dashboard admin.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "MySQL",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://topupaja-com.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project8.png",
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
    {
      title: "Easy Rent | Rental Mobile",
      href: "https://rent-mir.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Platform rental mobil dengan sistem yang user-friendly, pencarian unit yang mudah, dan proses pemesanan yang cepat.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://rent-mir.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project6.png",
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
      title: "Umahku | Furniture Shop",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Desain UI/UX untuk toko furniture online. Fokus pada pengalaman pengguna yang intuitif untuk menjelajahi dan membeli produk furniture.",
      technologies: ["Figma"],
      links: [],
      image: "/project2.png",
      video: "",
    },
    {
      title: "Website Digital Bank",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Desain UI/UX untuk aplikasi digital banking dengan tampilan modern dan fitur yang user-friendly.",
      technologies: ["Figma"],
      links: [],
      image: "/project4.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;