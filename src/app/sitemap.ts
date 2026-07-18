import type { MetadataRoute } from "next";
import { getVisibleProjects } from "@/data/projects";
import { services } from "@/data/services";
import { SHOW_WORK } from "@/lib/flags";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    "",
    ...(SHOW_WORK ? ["/work"] : []),
    "/services",
    "/capabilities",
    "/pricing",
    "/process",
    "/about",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectPages = SHOW_WORK
    ? getVisibleProjects().map((project) => ({
        url: `${baseUrl}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
    : [];

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...servicePages];
}
