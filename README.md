# موقع إبراهيم الوكيل الشخصي (React Portfolio)

موقع Portfolio احترافي بـ React، ثنائي اللغة (عربي RTL / إنجليزي LTR)، وضع داكن/فاتح، متجاوب بالكامل.

## تشغيل المشروع
```bash
npm install
npm run dev        # تطوير على localhost
npm run build      # بناء Vite → مجلد dist
```
> مجلد `dist/` **جاهز مسبقًا** (مبني بـ esbuild): ارفعه كما هو على الاستضافة، أو افتح `dist/index.html` مباشرة للمعاينة.
> بديل بدون Vite: `npm run build:static`.

## تعديل المحتوى (كل شيء من ملفين)
- `src/data/profile.js` — الاسم، الهاتف، الإيميل، النبذة، الخبرات، المهارات، روابط GitHub/LinkedIn، اللغة الافتراضية (`DEFAULT_LANG`).
- `src/data/projects.js` — المشاريع الـ 16 (أضف مشروعًا بنسخ أي كائن وتغيير `slug` و`url`).
- الخبرات بدون تواريخ: أضف `period: { en: '2023 — Present', ar: '2023 — الآن' }` لأي وظيفة.

## صور حقيقية للمشاريع (اختياري، موصى به)
```bash
npx playwright install chromium
npm run shots     # يلتقط لقطة لكل موقع ويفعّلها تلقائيًا
npm run build
```

## النشر
ارفع محتوى `dist/` على أي استضافة ثابتة (cPanel / Netlify / Vercel / GitHub Pages). المسارات نسبية فتعمل من أي مجلد.
