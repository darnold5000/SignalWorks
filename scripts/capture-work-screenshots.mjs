/**
 * Captures desktop + mobile screenshots for portfolio projects.
 * Run: node scripts/capture-work-screenshots.mjs
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const targets = [
  {
    id: "cornerstone-hoops",
    url: "https://cornerstonehoops.vercel.app",
    pages: [
      { name: "desktop", path: "/", viewport: { width: 1440, height: 900 } },
      { name: "mobile", path: "/", viewport: { width: 390, height: 844 } },
      { name: "programs", path: "/#training", viewport: { width: 1440, height: 900 } },
      { name: "schedule", path: "/schedule", viewport: { width: 1440, height: 900 } },
    ],
  },
  {
    id: "dawg-training",
    url: "https://dawg-ashen.vercel.app",
    pages: [
      { name: "desktop", path: "/", viewport: { width: 1440, height: 900 } },
      { name: "mobile", path: "/", viewport: { width: 390, height: 844 } },
      { name: "programs", path: "/", viewport: { width: 1440, height: 900 }, scrollY: 800 },
      { name: "schedule", path: "/", viewport: { width: 1440, height: 900 }, scrollY: 1400 },
    ],
  },
  {
    id: "oak-tree-golf",
    url: "https://oaktreegolf.vercel.app",
    pages: [
      { name: "desktop", path: "/", viewport: { width: 1440, height: 900 } },
      { name: "mobile", path: "/", viewport: { width: 390, height: 844 } },
      { name: "booking", path: "/", viewport: { width: 1440, height: 900 }, scrollY: 900 },
      { name: "course", path: "/", viewport: { width: 1440, height: 900 }, scrollY: 500 },
    ],
  },
  {
    id: "dbat",
    url: process.env.DBAT_URL ?? "https://dbat.vercel.app",
    pages: [
      { name: "desktop", path: "/", viewport: { width: 1440, height: 900 } },
      { name: "mobile", path: "/", viewport: { width: 390, height: 844 } },
      { name: "instructors", path: "/instructors", viewport: { width: 1440, height: 900 } },
      { name: "memberships", path: "/memberships", viewport: { width: 1440, height: 900 } },
    ],
  },
  {
    id: "zero-limits",
    url: "https://zerolimits.vercel.app",
    pages: [
      { name: "desktop", path: "/", viewport: { width: 1440, height: 900 } },
      { name: "mobile", path: "/", viewport: { width: 390, height: 844 } },
      { name: "programs", path: "/schedule-training", viewport: { width: 1440, height: 900 } },
      { name: "facility", path: "/facility", viewport: { width: 1440, height: 900 } },
    ],
  },
  {
    id: "willow-mane",
    url: process.env.SALON_URL ?? "http://127.0.0.1:3010",
    pages: [
      { name: "desktop", path: "/", viewport: { width: 1440, height: 900 } },
      { name: "mobile", path: "/", viewport: { width: 390, height: 844 } },
      { name: "services", path: "/services", viewport: { width: 1440, height: 900 } },
      { name: "stylists", path: "/stylists", viewport: { width: 1440, height: 900 } },
    ],
  },
];

async function capture() {
  const browser = await chromium.launch({ headless: true });

  for (const target of targets) {
    const outDir = path.join(root, "public/images/work", target.id);
    await mkdir(outDir, { recursive: true });

    for (const pageSpec of target.pages) {
      const context = await browser.newContext({
        viewport: pageSpec.viewport,
        deviceScaleFactor: 1,
      });
      const page = await context.newPage();
      const url = `${target.url}${pageSpec.path}`;
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
        await page.waitForTimeout(800);
        if (pageSpec.scrollY) {
          await page.evaluate((y) => window.scrollTo(0, y), pageSpec.scrollY);
          await page.waitForTimeout(400);
        }
        const outPath = path.join(outDir, `${pageSpec.name}.png`);
        await page.screenshot({ path: outPath, type: "png" });
        console.log(`✓ ${target.id}/${pageSpec.name}.png`);
      } catch (err) {
        console.error(`✗ ${target.id}/${pageSpec.name}: ${err.message}`);
      }
      await context.close();
    }
  }

  await browser.close();
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
