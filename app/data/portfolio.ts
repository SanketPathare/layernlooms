export interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    longDescription: string;
    image: string;
    client: string;
    year: string;
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
        slug: "eco-store-modernization",
        title: "EcoStore Platform",
        category: "E-Commerce",
        description: "A high-performance sustainable marketplace built with Next.js.",
        longDescription: "EcoStore needed a modern solution to handle their growing traffic and provide a seamless shopping experience for environmentally conscious consumers. We built a custom Next.js platform integrated with Shopify's headless API, resulting in a 45% increase in conversion rate.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
        client: "EcoStore Global",
        year: "2024",
        services: ["Web Development", "UI/UX Design", "E-commerce"],
        technologies: ["Next.js", "Shopify API", "Tailwind CSS", "Framer Motion"],
        result: "45% conversion increase, 2s reduction in load time.",
        testimonial: {
            text: "The new platform has completely transformed how we interact with our customers. The speed and design are unmatched.",
            author: "Sarah Jenkins",
            role: "CEO, EcoStore"
        }
    },
    {
        slug: "fintech-dashboard",
        title: "Nexus Finance Dashboard",
        category: "FinTech",
        description: "Real-time analytics and portfolio management for crypto investors.",
        longDescription: "Nexus Finance approached us to build a robust dashboard that could aggregate data from multiple exchanges and provide real-time tax calculations. We implemented a secure, high-availability architecture that handles millions of transactions per second.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
        client: "Nexus Labs",
        year: "2023",
        services: ["Web App Development", "FinTech Solutions", "Cloud Infrastructure"],
        technologies: ["React", "Node.js", "AWS", "Socket.io"],
        result: "Successfully handled $500M+ in assets under management.",
        testimonial: {
            text: "Technical excellence at its finest. The team delivered a complex product ahead of schedule.",
            author: "Marcus Chen",
            role: "CTO, Nexus Labs"
        }
    },
    {
        slug: "health-track-mobile",
        title: "HealthTrack App",
        category: "Healthcare",
        description: "A cross-platform mobile app for remote patient monitoring.",
        longDescription: "HealthTrack is a revolutionary mobile app that allows doctors to monitor patients' vitals in real-time. We used Flutter to build a consistent experience across iOS and Android, focusing on accessibility and HIPAA compliance.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600",
        client: "MediLife Systems",
        year: "2023",
        services: ["Mobile Development", "HealthTech", "UI/UX Design"],
        technologies: ["Flutter", "Firebase", "WebRTC", "Google Cloud"],
        result: "Adopted by 50+ clinics within the first 3 months.",
    },
    {
        slug: "urban-smart-city",
        title: "SmartCity IoT Portal",
        category: "Infrastructure",
        description: "Visualizing urban data for smarter city management.",
        longDescription: "We partnered with the city council to create a data visualization portal for their IoT sensor network. The portal helps urban planners monitor air quality, traffic flow, and energy consumption in real-time.",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1600",
        client: "City of Future",
        year: "2024",
        services: ["Data Visualization", "IoT Integration", "GIS Development"],
        technologies: ["D3.js", "Mapbox", "Next.js", "PostgreSQL"],
        result: "Reduced energy waste by 15% through data-driven insights.",
    }
];

export function getAllProjects() {
    return projects;
}

export function getProjectBySlug(slug: string) {
    return projects.find(project => project.slug === slug);
}
