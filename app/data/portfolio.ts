export interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    longDescription: string;
    image: string;
    client: string;
    year: string;
    url?: string;
    services: string[];
    technologies: string[];
    result: string;
    testimonial?: {
        text: string;
        author: string;
        role: string;
    };
}

export const projects: Project[] = [
  
    


    {
        slug: "imgira-tools",
        title: "Imgira Tools",
        category: "Design & Developer Tools",
        description: "200+ free, browser-based tools for creators, designers, and developers — no installs or sign-ups required.",
        longDescription: "Imgira is a comprehensive online platform offering 200+ free, browser-based tools for creators, designers, and developers. It requires no installations, downloads, or sign-ups. Key tool categories include: Image Editing & Analysis with advanced features like edge detection, threshold tools, channel splitters, histogram viewers, and built-in drawing workspaces; GIF & Media Utilities for converting video to GIF, adjusting speed, optimizing file sizes, and editing metadata; Design & Typography tools for generating custom shape cutouts, removing watermarks, and designing 3D text effects; and Math & Generative Art features such as ASCII art generation from images, recursive fractal tree simulation (Pythagoras tree generator), and Pascal's Triangle visualization.",
        image: "/portfolio/imgira.png",
        client: "Imgira Inc.",
        year: "2025",
        url: "https://www.imgira.site/",
        services: ["Web Development", "UI/UX Design", "Cloud Infrastructure"],
        technologies: ["Next.js", "React", "TypeScript", "Node.js", "Canvas API", "WebAssembly", "Tailwind CSS"],
        result: "200+ free tools launched with zero sign-up friction, serving thousands of daily active creators and developers.",
    },
    {
        slug: "temp-nova",
        title: "Temp Nova",
        category: "Privacy & Security",
        description: "Disposable email, temporary SMS, and privacy utilities for protecting your digital identity.",
        longDescription: "TempNova is a comprehensive privacy and security utility suite designed to provide disposable, anonymous digital identifiers for modern web users and developers. It serves as a tool for protecting personal data by replacing permanent information with transient, temporary alternatives. Core features include: Disposable Email for generating temporary email addresses to avoid spam, newsletter subscriptions, and tracking pixels during registrations; Temporary SMS for providing virtual phone numbers to receive OTPs and verification codes while keeping your real mobile number private; Identity Protection tools including a Temp Username Generator and self-destructing notes with encrypted links; Testing & Development utilities for QA testing with multiple concurrent inboxes to test registration flows and multi-user scenarios. The platform operates on a stateless architecture — no personal information, email content, or location data is permanently logged or stored.",
        image: "/portfolio/temp-nova.png",
        client: "TempNova Systems",
        year: "2025",
        url: "https://www.temp-nova.com/",
        services: ["Web Development", "Security Engineering", "Cloud Infrastructure"],
        technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
        result: "Privacy-first platform serving thousands of users with zero data retention and full stateless architecture.",
    }
];

export function getAllProjects() {
    return projects;
}

export function getProjectBySlug(slug: string) {
    return projects.find(project => project.slug === slug);
}
