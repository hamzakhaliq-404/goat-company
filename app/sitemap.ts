import type { MetadataRoute } from "next"

const siteUrl = "https://goatfzllc.com"

export default function sitemap(): MetadataRoute.Sitemap {
  // Add dynamic routes here if you have them (e.g., blog posts, product pages)
  // const posts = await fetch('https://.../posts').then((res) => res.json())
  // const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
  //   url: `${siteUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'weekly',
  //   priority: 0.8,
  // }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(), // Or a specific date of last major update
      changeFrequency: "monthly", // How often the content of this page is likely to change
      priority: 1, // Priority for the homepage (0.0 to 1.0)
    },
    // Add other static pages if any
    // {
    //   url: `${siteUrl}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.8,
    // },
    // ...postEntries, // if you have dynamic routes
  ]
}
