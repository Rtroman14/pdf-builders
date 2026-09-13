import { services } from "@/lib/services-data";
import { projects } from "@/lib/projects-data";
import { resources } from "@/lib/resources-data";
import { cities } from "@/lib/cities-data";

const BASE_URL = "https://pdfbuilders.com";

export default function sitemap() {
    const now = new Date();

    const staticRoutes = [
        { path: "", priority: 1, changeFrequency: "monthly" },
        { path: "/services", priority: 0.9, changeFrequency: "monthly" },
        { path: "/projects", priority: 0.9, changeFrequency: "monthly" },
        { path: "/process", priority: 0.8, changeFrequency: "monthly" },
        { path: "/about-us", priority: 0.7, changeFrequency: "yearly" },
        { path: "/reviews", priority: 0.7, changeFrequency: "monthly" },
        { path: "/resources", priority: 0.7, changeFrequency: "monthly" },
        { path: "/service-areas", priority: 0.8, changeFrequency: "monthly" },
        { path: "/investment", priority: 0.7, changeFrequency: "monthly" },
        { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    ];

    const dynamicRoutes = [
        ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8 })),
        ...projects.map((p) => ({ path: `/projects/${p.slug}`, priority: 0.7 })),
        ...resources.map((r) => ({ path: `/resources/${r.slug}`, priority: 0.6 })),
        ...cities.map((c) => ({ path: `/service-areas/${c.slug}`, priority: 0.7 })),
    ];

    return [...staticRoutes, ...dynamicRoutes].map((route) => ({
        url: `${BASE_URL}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency || "monthly",
        priority: route.priority,
    }));
}
