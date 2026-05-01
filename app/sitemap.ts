import { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";
import { ringkasanData } from "@/data/ringkasan"; // tambahkan import ini

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cakrasera.com"; // Replace with your actual domain

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/terapin`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  // Dynamic project pages
  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  // Tambahkan ini — halaman index ringkasan
  const ringkasanIndexPage = {
    url: `${baseUrl}/terapin/ringkasan`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8, // lebih tinggi karena ini konten SEO utama
  };

  // Tambahkan ini — setiap halaman detail buku
  const ringkasanPages = ringkasanData.map((buku) => ({
    url: `${baseUrl}/terapin/ringkasan/${buku.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85, // lebih tinggi dari projects karena ini target SEO
  }));

  return [
    ...staticPages,
    ...projectPages,
    ringkasanIndexPage,
    ...ringkasanPages,
  ];
}
