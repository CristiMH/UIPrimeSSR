import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { Readable } from "stream";

async function generateSitemap() {
  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 }
  ];

  const stream = new SitemapStream({ hostname: "https://uiprime.online" });
  const writableStream = createWriteStream("./public/sitemap.xml");

  const sitemapPromise = streamToPromise(Readable.from(links).pipe(stream));
  stream.pipe(writableStream);

  await sitemapPromise;
  console.log("Sitemap has been generated and saved to /public/sitemap.xml");
}

generateSitemap().catch(console.error);