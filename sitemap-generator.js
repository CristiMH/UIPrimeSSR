import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { Readable } from "stream";

async function generateSitemap() {
  const links = [
    {
      url: "/",
      changefreq: "daily",
      priority: 1.0,
      links: [
        { lang: "ro", url: "https://uiprime.online/" },
        { lang: "en", url: "https://uiprime.online/en/" },
        { lang: "x-default", url: "https://uiprime.online/" }
      ]
    },
    {
      url: "/en/",
      changefreq: "daily",
      priority: 1.0,
      links: [
        { lang: "ro", url: "https://uiprime.online/" },
        { lang: "en", url: "https://uiprime.online/en/" },
        { lang: "x-default", url: "https://uiprime.online/" }
      ]
    }
  ];

  const stream = new SitemapStream({ hostname: "https://uiprime.online" });
  const writableStream = createWriteStream("./public/sitemap.xml");

  const sitemapPromise = streamToPromise(Readable.from(links).pipe(stream));
  stream.pipe(writableStream);

  await sitemapPromise;
  console.log("✅ Sitemap with hreflang has been generated: /public/sitemap.xml");
}

generateSitemap().catch(console.error);