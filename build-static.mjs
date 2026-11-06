// Dependency-light production build (esbuild only).
// Output: dist/  →  index.html + assets/app.js + assets/app.css + public files.
// The bundle is a classic (non-module) script, so dist/index.html also works when opened
// straight from disk (file://) — handy for a quick preview before uploading.
import { createRequire } from 'node:module';
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const esbuild = require('esbuild');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');

rmSync(dist, { recursive: true, force: true });
mkdirSync(resolve(dist, 'assets'), { recursive: true });

await esbuild.build({
  entryPoints: [resolve(root, 'src/main.jsx')],
  outdir: resolve(dist, 'assets'),
  entryNames: 'app',
  bundle: true,
  minify: true,
  format: 'iife',
  target: 'es2020',
  jsx: 'automatic',
  loader: { '.js': 'jsx' },
  define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'none',
  nodePaths: (process.env.NODE_PATH || '').split(':').filter(Boolean),
  logLevel: 'info',
});

if (existsSync(resolve(root, 'public'))) cpSync(resolve(root, 'public'), dist, { recursive: true });

const html = readFileSync(resolve(root, 'index.html'), 'utf8')
  .replace(
    '<script type="module" src="/src/main.jsx"></script>',
    '<script src="assets/app.js" defer></script>',
  )
  .replace('</head>', '<link rel="stylesheet" href="assets/app.css">\n</head>');
writeFileSync(resolve(dist, 'index.html'), html);
console.log('✔ dist/ ready');
