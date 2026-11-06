// Captures real homepage screenshots for every project and enables them on the site.
//   npm i && npx playwright install chromium && npm run shots
// Writes public/projects/<slug>.jpg and lists the slugs in src/data/shots.json.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(resolve(root, 'src/data/projects.js'), 'utf8');
const items = [...src.matchAll(/slug:\s*'([^']+)'[^}]*?url:\s*'([^']+)'/g)].map((m) => ({ slug: m[1], url: m[2] }));
const dir = resolve(root, 'public/projects');
mkdirSync(dir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1366, height: 854 } });
const ok = [];
for (const { slug, url } of items) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: resolve(dir, `${slug}.jpg`), type: 'jpeg', quality: 82 }).catch(() => {});
    ok.push(slug);
    console.log('✔', slug);
  } catch (e) {
    console.log('✘', slug, e.message.split('\n')[0]);
  }
}
await browser.close();
writeFileSync(resolve(root, 'src/data/shots.json'), JSON.stringify(ok, null, 2) + '\n');
console.log(`Done — ${ok.length}/${items.length}. Rebuild with: npm run build`);
