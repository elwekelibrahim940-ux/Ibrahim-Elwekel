import shots from './shots.json';

// Categories used by the filter bar.
export const categories = [
  { id: 'all', label: { en: 'All', ar: 'الكل' } },
  { id: 'ecommerce', label: { en: 'E-commerce', ar: 'متاجر إلكترونية' } },
  { id: 'corporate', label: { en: 'Corporate & Services', ar: 'شركات وخدمات' } },
  { id: 'booking', label: { en: 'Booking & Listings', ar: 'حجوزات وعقارات' } },
];

// `hue` tints the preview card. `shot` is auto-set once you run `npm run shots`
// (real screenshots are then used instead of the designed cover).
const raw = [
  {
    slug: 'veronica-flowers', name: 'Veronica Flowers', url: 'https://veronicaflowers.ae/', category: 'ecommerce', hue: 340,
    place: { en: 'UAE', ar: 'الإمارات' },
    desc: { en: 'Flower shop storefront with bouquets, roses, vases and gift bases, shopping bag, wishlist and multi-currency pricing.', ar: 'متجر زهور إلكتروني للباقات والورود والمزهريات وقواعد الهدايا، مع سلة تسوق وقائمة مفضلة وأسعار بعملات متعددة.' },
    tags: ['English', 'Cart & checkout', 'Wishlist'],
  },
  {
    slug: 'art-and-blooms', name: 'Art & Blooms', url: 'https://artandblooms.ae/', category: 'ecommerce', hue: 315,
    place: { en: 'Abu Dhabi, UAE', ar: 'أبوظبي، الإمارات' },
    desc: { en: 'Online florist with arrangements, flower boxes and plants, delivery, and a dedicated business-inquiry page for corporate clients.', ar: 'متجر زهور بترتيبات وصناديق ونباتات مع خدمة توصيل، وصفحة مخصّصة لطلبات الشركات.' },
    tags: ['English', 'Delivery', 'Corporate inquiries'],
  },
  {
    slug: 'suhail-perfumes', name: 'Suhail Perfumes', url: 'https://suhailperfumes.ae/', category: 'ecommerce', hue: 38,
    place: { en: 'Abu Dhabi, UAE', ar: 'أبوظبي، الإمارات' },
    desc: { en: 'Arabic-first perfume brand store with product categories, cart and shipping information.', ar: 'متجر علامة عطور بواجهة عربية أولًا، بتصنيفات للمنتجات وسلة تسوق ومعلومات الشحن.' },
    tags: ['Arabic', 'Product categories', 'Cart & shipping'],
  },
  {
    slug: 'sudanica', name: 'Sudanica', url: 'https://www.sudanica.com/ar', category: 'ecommerce', hue: 28,
    place: { en: 'UAE', ar: 'الإمارات' },
    desc: { en: 'Skincare and perfume store with a bilingual Arabic / English storefront, product catalog and cart.', ar: 'متجر للعناية بالبشرة والعطور بواجهة ثنائية اللغة عربي / إنجليزي، مع كتالوج منتجات وسلة تسوق.' },
    tags: ['Arabic / English', 'Catalog', 'Cart'],
  },
  {
    slug: 'sempre-italiano', name: 'Sempre Italiano', url: 'https://sempreitalianoo.com/', category: 'ecommerce', hue: 152,
    place: { en: 'Egypt', ar: 'مصر' },
    desc: { en: 'Online platform selling a self-paced Italian language course (A0 to C1) with Arabic and English versions, cart, checkout and EGP pricing.', ar: 'منصة لبيع دورة تعلّم اللغة الإيطالية الذاتية (من A0 إلى C1) بنسختين عربية وإنجليزية، مع سلة ودفع وأسعار بالجنيه المصري.' },
    tags: ['Arabic / English', 'Course sales', 'Checkout'],
  },
  {
    slug: 'triamo', name: 'Triamo', url: 'https://triamo.online/en/', category: 'ecommerce', hue: 18,
    place: { en: 'Jordan · UAE · KSA', ar: 'الأردن · الإمارات · السعودية' },
    desc: { en: 'Catalog store for confectionery ingredients — chocolates, fillings, gelato and pastry supplies — with accounts and country-specific versions.', ar: 'متجر كتالوج لمستلزمات الحلويات — شوكولاتة وحشوات وجيلاتو ومستلزمات معجنات — مع حسابات ونسخ خاصة لكل دولة.' },
    tags: ['English', 'Accounts', 'Multi-country'],
  },
  {
    slug: 'al-razi-pharmacy', name: 'Al Razi Pharmacy', url: 'https://alrazipharmacy.om/', category: 'ecommerce', hue: 170,
    place: { en: 'Muscat, Oman', ar: 'مسقط، سلطنة عُمان' },
    desc: { en: 'Pharmacy e-commerce site covering pharmaceuticals, medical and surgical supplies, cosmetics and supplements.', ar: 'موقع تجارة إلكترونية لصيدلية يغطي الأدوية والمستلزمات الطبية والجراحية ومستحضرات التجميل والمكمّلات.' },
    tags: ['English', 'Product catalog', 'Cart'],
  },
  {
    slug: 'the-umberalla', name: 'The Umberalla', url: 'https://theumberalla.com/', category: 'corporate', hue: 262,
    place: { en: 'Egypt', ar: 'مصر' },
    desc: { en: 'Corporate website for a digital marketing agency presenting services, client logos and contact details.', ar: 'موقع تعريفي لوكالة تسويق رقمي يعرض الخدمات وشعارات العملاء وبيانات التواصل.' },
    tags: ['English', 'Agency', 'Client logos'],
  },
  {
    slug: 'al-zaeem', name: 'Al Zaeem', url: 'https://alzaiem1.com/', category: 'corporate', hue: 215,
    place: { en: 'Saudi Arabia', ar: 'السعودية' },
    desc: { en: 'Digital services company site covering custom software, e-commerce, marketing / SEO and creative design, with portfolio, blog and reviews.', ar: 'موقع شركة خدمات رقمية يغطي البرمجيات المخصّصة والتجارة الإلكترونية والتسويق وSEO والتصميم، مع معرض أعمال ومدونة وآراء العملاء.' },
    tags: ['English / Arabic', 'Portfolio', 'Blog'],
  },
  {
    slug: 'eagle-vision', name: 'Eagle Vision', url: 'https://eaglevision.tech/', category: 'corporate', hue: 200,
    place: { en: 'Saudi Arabia · Egypt', ar: 'السعودية · مصر' },
    desc: { en: 'Arabic-language software and design company site: services, portfolio, blog and a link to a separate e-commerce store.', ar: 'موقع شركة برمجيات وتصميم بواجهة عربية: الخدمات ومعرض الأعمال والمدونة، مع رابط لمتجر إلكتروني منفصل.' },
    tags: ['Arabic', 'Portfolio', 'Blog'],
  },
  {
    slug: 'haz-consulting', name: 'HAZ Consulting', url: 'https://haz-consulting.net/', category: 'corporate', hue: 230,
    place: { en: 'Saudi Arabia', ar: 'السعودية' },
    desc: { en: 'Arabic consulting firm site for zakat, income tax, VAT and withholding-tax advisory — with a zakat calculator, testimonials, FAQ and blog.', ar: 'موقع مكتب استشارات عربي في الزكاة وضريبة الدخل والقيمة المضافة والاستقطاع، مع حاسبة زكاة وآراء عملاء وأسئلة شائعة ومدونة.' },
    tags: ['Arabic', 'Zakat calculator', 'FAQ & blog'],
  },
  {
    slug: 'the-founders-uae', name: 'The Founders UAE', url: 'https://thefoundersuae.com/', category: 'corporate', hue: 245,
    place: { en: 'UAE', ar: 'الإمارات' },
    desc: { en: 'Corporate site for a business-setup firm — company formation, structuring and compliance — with a consultation call-to-action.', ar: 'موقع تعريفي لشركة تأسيس أعمال — تأسيس الشركات والهيكلة والامتثال — مع دعوة واضحة لحجز استشارة.' },
    tags: ['English', 'Lead generation', 'Services'],
  },
  {
    slug: 'cleanly', name: 'Cleanly', url: 'https://cleanly.is/', category: 'corporate', hue: 188,
    place: { en: 'Reykjavík, Iceland', ar: 'ريكيافيك، آيسلندا' },
    desc: { en: 'Icelandic-language site for a cleaning company — moving, Airbnb, business and post-construction cleaning — driven by quote requests.', ar: 'موقع بالآيسلندية لشركة تنظيف — نقل وAirbnb وأعمال وما بعد البناء — يعتمد على طلبات عروض الأسعار.' },
    tags: ['Icelandic', 'Quote requests', 'Services'],
  },
  {
    slug: 'babil-car', name: 'Babil Car', url: 'https://babilcar.com/', category: 'booking', hue: 8,
    place: { en: 'Dubai, UAE', ar: 'دبي، الإمارات' },
    desc: { en: 'Car-rental site listing economy to luxury, sports, SUV and convertible vehicles with daily prices and booking via WhatsApp or phone.', ar: 'موقع تأجير سيارات يعرض الفئات الاقتصادية والفاخرة والرياضية والـ SUV والكشف بأسعار يومية، مع الحجز عبر واتساب أو الهاتف.' },
    tags: ['English', 'Rental listings', 'WhatsApp booking'],
  },
  {
    slug: 'al-saeb', name: 'Al Saeb', url: 'https://alsaeb.com/', category: 'booking', hue: 222,
    place: { en: 'Dubai, UAE', ar: 'دبي، الإمارات' },
    desc: { en: 'Real-estate marketplace for property sales, rentals and shares, with a Dubai focus and a multi-language selector.', ar: 'منصة عقارية للبيع والإيجار والحصص، بتركيز على دبي ومحدّد لغات متعدد.' },
    tags: ['Multi-language', 'Property listings', 'Lead capture'],
  },
  {
    slug: 'pearl-smile', name: 'Dr. Ahmed Pearl Smile', url: 'https://drahmedpearlsmile.com/', category: 'booking', hue: 195,
    place: { en: 'Sheikh Zayed, Giza, Egypt', ar: 'الشيخ زايد، الجيزة، مصر' },
    desc: { en: 'Arabic dental-clinic website with service and doctor listings, online booking, blog, patient reviews and newsletter sign-up.', ar: 'موقع عيادة أسنان بواجهة عربية، بقوائم للخدمات والأطباء، وحجز إلكتروني، ومدونة، وآراء المرضى، واشتراك بالنشرة.' },
    tags: ['Arabic', 'Online booking', 'Reviews'],
  },
];

export const projects = raw.map((p) => ({
  ...p,
  host: new URL(p.url).hostname.replace(/^www\./, ''),
  shot: Array.isArray(shots) && shots.includes(p.slug) ? `projects/${p.slug}.jpg` : null,
}));
