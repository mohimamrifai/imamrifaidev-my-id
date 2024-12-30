import { FaCode, FaPaintBrush, FaSearchPlus } from "react-icons/fa";

export const services = [
    {
        icon: <FaPaintBrush className="text-4xl text-purple-500" />,
        title: "UI/UX Design",
        description: "Merancang antarmuka dan pengalaman pengguna yang menarik, intuitif dan efektif menggunakan Figma dengan prinsip desain modern",
        price: [
            {
                title: "Basic",
                price: "Rp 200.000"
            },
            {
                title: "Intermediate",
                price: "Rp 600.000"
            },
            {
                title: "Pro",
                price: "Rp 1.200.000"
            }
        ],
        levels: {
            basic: [
                { feature: "Desain UI 3 halaman", available: true },
                { feature: "Wireframing", available: true },
                { feature: "File sumber Figma", available: true },
                { feature: "Konsultasi desain", available: true },
                { feature: "Responsive design", available: true },
                { feature: "Design system", available: false },
                { feature: "Revisi desain", available: false },
                { feature: "Interactive prototype", available: false },
                { feature: "Style guide & dokumentasi", available: false },
                { feature: "After-service support", available: false }
            ],
            intermediate: [
                { feature: "Desain UI 6 halaman", available: true },
                { feature: "Wireframing", available: true },
                { feature: "File sumber Figma", available: true },
                { feature: "Konsultasi desain", available: true },
                { feature: "Responsive design", available: true },
                { feature: "Design system", available: true },
                { feature: "Revisi desain", available: true },
                { feature: "Interactive prototype", available: true },
                { feature: "Style guide & dokumentasi", available: false },
                { feature: "After-service support", available: false }
            ],
            pro: [
                { feature: "Desain UI 10+ halaman", available: true },
                { feature: "Wireframing", available: true },
                { feature: "File sumber Figma", available: true },
                { feature: "Konsultasi desain", available: true },
                { feature: "Responsive design", available: true },
                { feature: "Design system", available: true },
                { feature: "Revisi desain", available: true },
                { feature: "Interactive prototype", available: true },
                { feature: "Style guide & dokumentasi", available: true },
                { feature: "After-service support", available: true }
            ]
        },
        message: [
            {
                type: "basic",
                message: "Halo, saya ingin memesan layanan UI/UX Design paket Basic"
            },
            {
                type: "intermediate",
                message: "Halo, saya ingin memesan layanan UI/UX Design paket Intermediate"
            },
            {
                type: "pro",
                message: "Halo, saya ingin memesan layanan UI/UX Design paket Pro"
            }
        ]
    },
    {
        icon: <FaCode className="text-4xl text-blue-500" />,
        title: "Web Development",
        description: "Membangun website profesional yang responsif, cepat dan optimal menggunakan teknologi modern seperti Next.js dan Laravel",
        price: [
            {
                title: "Basic",
                price: "Rp 200.000"
            },
            {
                title: "Intermediate",
                price: "Rp 900.000"
            },
            {
                title: "Pro",
                price: "Rp 4.900.000"
            }
        ],
        levels: {
            basic: [
                { feature: "3 halaman website", available: true },
                { feature: "Responsive design", available: true },
                { feature: "Form & fitur interaktif", available: true },
                { feature: "Setup hosting & domain", available: true },
                { feature: "SEO optimization", available: false },
                { feature: "Revisi", available: false },
                { feature: "CMS integration", available: false },
                { feature: "Fitur e-commerce", available: false },
                { feature: "API integration", available: false },
                { feature: "Maintenance support", available: false }
            ],
            intermediate: [
                { feature: "5+ halaman website", available: true },
                { feature: "Responsive design", available: true },
                { feature: "Form & fitur interaktif", available: true },
                { feature: "Setup hosting & domain", available: true },
                { feature: "SEO optimization", available: true },
                { feature: "Revisi", available: true },
                { feature: "CMS integration", available: true },
                { feature: "Fitur e-commerce", available: false },
                { feature: "API integration", available: false },
                { feature: "Maintenance support", available: false }
            ],
            pro: [
                { feature: "10+ halaman website", available: true },
                { feature: "Responsive design", available: true },
                { feature: "Form & fitur interaktif", available: true },
                { feature: "Setup hosting & domain", available: true },
                { feature: "SEO optimization", available: true },
                { feature: "Revisi", available: true },
                { feature: "CMS integration", available: true },
                { feature: "Fitur e-commerce", available: true },
                { feature: "API integration", available: true },
                { feature: "Maintenance support", available: true }
            ]
        },
        message: [
            {
                type: "basic",
                message: "Halo, saya ingin memesan layanan Web Development paket Basic"
            },
            {
                type: "intermediate",
                message: "Halo, saya ingin memesan layanan Web Development paket Intermediate"
            },
            {
                type: "pro",
                message: "Halo, saya ingin memesan layanan Web Development paket Pro"
            }
        ]
    },
    {
        icon: <FaSearchPlus className="text-4xl text-green-500" />,
        title: "SEO Optimization",
        description: "Mengoptimalkan website Anda untuk mesin pencari dengan teknik SEO terbaik untuk meningkatkan peringkat dan visibilitas online",
        price: [
            {
                title: "Basic",
                price: "Rp 200.000"
            },
            {
                title: "Intermediate",
                price: "Rp 600.000"
            },
            {
                title: "Pro",
                price: "Rp 1.200.000"
            }
        ],
        levels: {
            basic: [
                { feature: "Riset keyword", available: true },
                { feature: "On-page SEO", available: true },
                { feature: "Laporan performa", available: true },
                { feature: "Local SEO optimization", available: true },
                { feature: "Konsultasi & support", available: true },
                { feature: "Technical SEO audit", available: false },
                { feature: "Content strategy", available: false },
                { feature: "Backlink building", available: false },
                { feature: "Competitor analysis", available: false },
                { feature: "Conversion optimization", available: false },
            ],
            intermediate: [
                { feature: "Riset keyword", available: true },
                { feature: "On-page SEO", available: true },
                { feature: "Laporan performa", available: true },
                { feature: "Local SEO optimization", available: true },
                { feature: "Konsultasi & support", available: true },
                { feature: "Technical SEO audit", available: true },
                { feature: "Content strategy", available: true },
                { feature: "Backlink building", available: false },
                { feature: "Competitor analysis", available: false },
                { feature: "Conversion optimization", available: false },
            ],
            pro: [
                { feature: "Riset keyword", available: true },
                { feature: "On-page SEO", available: true },
                { feature: "Laporan performa", available: true },
                { feature: "Local SEO optimization", available: true },
                { feature: "Technical SEO audit", available: true },
                { feature: "Content strategy", available: true },
                { feature: "Backlink building", available: true },
                { feature: "Competitor analysis", available: true },
                { feature: "Conversion optimization", available: true },
                { feature: "Konsultasi & support", available: true }
            ]
        },
        message: [
            {
                type: "basic",
                message: "Halo, saya ingin memesan layanan SEO Optimization paket Basic"
            },
            {
                type: "intermediate",
                message: "Halo, saya ingin memesan layanan SEO Optimization paket Intermediate"
            },
            {
                type: "pro",
                message: "Halo, saya ingin memesan layanan SEO Optimization paket Pro"
            }
        ]
    }
];