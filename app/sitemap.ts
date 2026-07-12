import { MetadataRoute } from "next";

const BASE_URL = "https://bludotlabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/about",
        "/careers",
        "/contact",
        "/engineering-archive",
        "/products",
        "/products/atcampus",
        "/products/dentura",
        "/products/frenzo",
        "/research",
        "/solutions",
        "/solutions/healthcare",
        "/solutions/higher-education",
        "/solutions/logistics",
        "/case-studies",
        "/case-studies/balaji-dental",
        "/case-studies/logistics-ai-audit",
        "/case-studies/sairam-atcampus",
    ];

    return routes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency:
            route === ""
                ? "weekly"
                : route.startsWith("/case-studies")
                    ? "monthly"
                    : "monthly",
        priority:
            route === ""
                ? 1.0
                : route === "/contact"
                    ? 0.9
                    : route.startsWith("/solutions")
                        ? 0.9
                        : route.startsWith("/products")
                            ? 0.8
                            : route.startsWith("/case-studies")
                                ? 0.8
                                : 0.7,
    }));
}