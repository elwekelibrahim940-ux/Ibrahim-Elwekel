// ─────────────────────────────────────────────────────────────
//  Personal data — edit here, the whole site updates.
//  Every user-facing text is { en, ar }.
// ─────────────────────────────────────────────────────────────

export const DEFAULT_LANG = 'en'; // 'en' | 'ar'  (visitor's choice is remembered afterwards)

export const profile = {
  name: { en: 'Ibrahim Elwekel', ar: 'إبراهيم الوكيل' },
  fullName: { en: 'Ibrahim Ali Khaled Ibrahim Elwekel', ar: 'إبراهيم علي خالد إبراهيم الوكيل' },
  title: { en: 'Senior Web Developer', ar: 'مطوّر ويب أول' },
  location: { en: 'Alexandria, Egypt', ar: 'الإسكندرية، مصر' },
  email: 'elwekelibrahim940@gmail.com',
  phone: '+20 120 415 0340',
  whatsapp: '201204150340', // international format, digits only
  // Add your profile URLs to show them in the contact section & footer. Leave '' to hide.
  social: {
    github: '',
    linkedin: '',
  },
};

export const roles = [
  { en: 'WordPress Developer', ar: 'مطوّر ووردبريس' },
  { en: 'React Developer', ar: 'مطوّر React' },
  { en: 'Custom Plugin Engineer', ar: 'مهندس إضافات مخصّصة' },
  { en: 'Web Department Manager', ar: 'مدير قسم الويب' },
];

export const stats = [
  { value: 4, suffix: '+', label: { en: 'Years in web development', ar: 'سنوات في تطوير الويب' } },
  { value: 4, suffix: '+', label: { en: 'Years in WordPress & PHP', ar: 'سنوات في ووردبريس وPHP' } },
  { value: 2, suffix: '+', label: { en: 'Years in React.js', ar: 'سنوات في React.js' } },
  { value: 16, suffix: '', label: { en: 'Live projects showcased', ar: 'مشروعًا منشورًا في المعرض' } },
];

export const pillars = [
  {
    icon: 'puzzle',
    title: { en: 'WordPress & PHP Engineering', ar: 'هندسة ووردبريس وPHP' },
    text: {
      en: 'Custom plugins, theme customization, WooCommerce, hooks / actions / filters and third-party API integrations — built around real business requirements.',
      ar: 'إضافات مخصّصة، وتخصيص القوالب، وWooCommerce، والـ Hooks والـ Actions والـ Filters، وتكاملات مع واجهات برمجية خارجية — مبنية على متطلبات العمل الفعلية.',
    },
  },
  {
    icon: 'code',
    title: { en: 'React & Modern Front-End', ar: 'React وواجهات الويب الحديثة' },
    text: {
      en: 'Component-based, responsive interfaces with REST API integration and full RTL / LTR support for Arabic and English audiences.',
      ar: 'واجهات متجاوبة قائمة على المكوّنات، مع ربط REST API ودعم كامل لاتجاهي RTL وLTR للجمهور العربي والإنجليزي.',
    },
  },
  {
    icon: 'team',
    title: { en: 'Technical Leadership', ar: 'القيادة التقنية' },
    text: {
      en: 'Planning, task distribution, quality and deadline monitoring, and coordination with clients and management from kickoff to delivery.',
      ar: 'التخطيط وتوزيع المهام ومتابعة الجودة والمواعيد، والتنسيق مع العملاء والإدارة من بداية المشروع حتى التسليم.',
    },
  },
];

export const education = {
  degree: { en: "Bachelor's Degree in Computers and Data Science", ar: 'بكالوريوس الحاسبات وعلوم البيانات' },
  school: { en: 'Faculty of Computers and Data Science, Alexandria University', ar: 'كلية الحاسبات وعلوم البيانات، جامعة الإسكندرية' },
  // Update this line once you graduate.
  note: { en: 'Expected graduation: 2026', ar: 'التخرّج المتوقع: 2026' },
};

export const languages = [
  { name: { en: 'Arabic', ar: 'العربية' }, level: { en: 'Native', ar: 'اللغة الأم' } },
  { name: { en: 'English', ar: 'الإنجليزية' }, level: { en: 'Good working proficiency', ar: 'إتقان جيد في العمل' } },
];

// Dates and company names were not in the CV — add `period` to any item to show it.
export const experience = [
  {
    role: { en: 'Web Department Manager & Team Leader', ar: 'مدير قسم الويب وقائد الفريق' },
    org: { en: 'Web Development Management', ar: 'إدارة تطوير الويب' },
    period: null,
    points: [
      { en: 'Managed web development operations and technical workflows.', ar: 'إدارة عمليات تطوير الويب وسير العمل التقني.' },
      { en: 'Led development teams and coordinated task distribution.', ar: 'قيادة فرق التطوير وتنسيق توزيع المهام.' },
      { en: 'Supervised website projects from planning to delivery.', ar: 'الإشراف على مشاريع المواقع من التخطيط حتى التسليم.' },
      { en: 'Monitored project quality, deadlines and technical performance.', ar: 'متابعة جودة المشاريع ومواعيدها وأدائها التقني.' },
      { en: 'Planned technical improvements and coordinated with clients, management and other departments.', ar: 'التخطيط للتحسينات التقنية والتنسيق مع العملاء والإدارة والأقسام الأخرى.' },
    ],
  },
  {
    role: { en: 'Web Developer', ar: 'مطوّر ويب' },
    org: { en: 'M Solution', ar: 'M Solution' },
    period: null,
    points: [
      { en: 'Developed and maintained WordPress websites.', ar: 'تطوير مواقع ووردبريس وصيانتها.' },
      { en: 'Implemented custom functionality using PHP, JavaScript and CSS.', ar: 'تنفيذ وظائف مخصّصة باستخدام PHP وJavaScript وCSS.' },
      { en: 'Customized themes and built tailored website solutions.', ar: 'تخصيص القوالب وبناء حلول مواقع مفصّلة حسب الحاجة.' },
      { en: 'Worked on website optimization and technical troubleshooting.', ar: 'العمل على تحسين أداء المواقع وحل المشكلات التقنية.' },
    ],
  },
  {
    role: { en: 'Web Developer', ar: 'مطوّر ويب' },
    org: { en: 'Eagle Vision', ar: 'Eagle Vision' },
    period: null,
    points: [
      { en: 'Contributed to web development projects.', ar: 'المساهمة في مشاريع تطوير الويب.' },
      { en: 'Built and customized WordPress websites.', ar: 'بناء مواقع ووردبريس وتخصيصها.' },
      { en: 'Implemented website improvements and custom functionality.', ar: 'تنفيذ تحسينات على المواقع ووظائف مخصّصة.' },
    ],
  },
  {
    role: { en: 'Freelance Web Developer', ar: 'مطوّر ويب مستقل' },
    org: { en: 'Various clients & projects', ar: 'عملاء ومشاريع متنوعة' },
    period: null,
    points: [
      { en: 'Developed websites and customized WordPress solutions for different businesses.', ar: 'تطوير مواقع وحلول ووردبريس مخصّصة لأنشطة تجارية مختلفة.' },
      { en: 'Delivered custom features based on client requirements — clients include Al Zaeem and Batoul Al-Arabiya.', ar: 'تنفيذ ميزات مخصّصة حسب متطلبات العملاء — ومن العملاء: الزعيم وبتول العربية.' },
      { en: 'Managed development tasks and project delivery independently.', ar: 'إدارة مهام التطوير وتسليم المشاريع بشكل مستقل.' },
    ],
  },
];

export const skillGroups = [
  {
    icon: 'puzzle',
    title: { en: 'WordPress & PHP', ar: 'ووردبريس وPHP' },
    items: [
      { en: 'Advanced WordPress development', ar: 'تطوير ووردبريس المتقدم' },
      { en: 'Custom plugin development', ar: 'تطوير الإضافات المخصّصة' },
      { en: 'Custom features & functionality', ar: 'ميزات ووظائف مخصّصة' },
      { en: 'PHP programming', ar: 'برمجة PHP' },
      { en: 'Hooks, actions & filters', ar: 'Hooks وActions وFilters' },
      { en: 'WooCommerce development', ar: 'تطوير WooCommerce' },
      { en: 'Theme customization', ar: 'تخصيص القوالب' },
      { en: 'Third-party API integration', ar: 'التكامل مع واجهات برمجية خارجية' },
    ],
  },
  {
    icon: 'code',
    title: { en: 'Front-End', ar: 'الواجهات الأمامية' },
    items: [
      { en: 'React.js', ar: 'React.js' },
      { en: 'JavaScript (ES6+)', ar: 'JavaScript (ES6+)' },
      { en: 'HTML5 & CSS3', ar: 'HTML5 وCSS3' },
      { en: 'Responsive web design', ar: 'التصميم المتجاوب' },
      { en: 'Component-based development', ar: 'التطوير القائم على المكوّنات' },
      { en: 'REST API integration', ar: 'ربط REST API' },
      { en: 'RTL / LTR layouts', ar: 'تخطيطات RTL / LTR' },
    ],
  },
  {
    icon: 'server',
    title: { en: 'Back-End', ar: 'الخلفية البرمجية' },
    items: [
      { en: 'Node.js', ar: 'Node.js' },
      { en: 'RESTful APIs', ar: 'RESTful APIs' },
      { en: 'MySQL', ar: 'MySQL' },
      { en: 'Server-side fundamentals', ar: 'أساسيات البرمجة من جهة الخادم' },
    ],
  },
  {
    icon: 'tools',
    title: { en: 'Tools & Delivery', ar: 'الأدوات والتسليم' },
    items: [
      { en: 'Git & GitHub', ar: 'Git وGitHub' },
      { en: 'Visual Studio Code', ar: 'Visual Studio Code' },
      { en: 'WPBakery', ar: 'WPBakery' },
      { en: 'Website deployment & maintenance', ar: 'نشر المواقع وصيانتها' },
      { en: 'Performance optimization', ar: 'تحسين الأداء' },
      { en: 'Technical troubleshooting', ar: 'حل المشكلات التقنية' },
    ],
  },
];

// Elwekel Digital — taken from the previous site.
export const venture = {
  name: 'Elwekel Digital',
  tag: { en: 'My digital solutions studio', ar: 'استوديو الحلول الرقمية الخاص بي' },
  text: {
    en: 'Alongside engineering roles, I run Elwekel Digital — an integrated digital studio that takes a business from idea to launch: websites, marketing, brand identity, video and content, with ongoing technical support.',
    ar: 'إلى جانب أدواري الهندسية، أدير «الوكيل ديجيتال» — استوديو رقمي متكامل ينقل المشروع من الفكرة إلى الإطلاق: مواقع، وتسويق، وهوية بصرية، وفيديو ومحتوى، مع دعم فني مستمر.',
  },
  services: [
    { en: 'Website design & development', ar: 'تصميم وتطوير المواقع الإلكترونية' },
    { en: 'Social media management & marketing', ar: 'إدارة وتسويق السوشيال ميديا' },
    { en: 'Digital marketing & paid advertising', ar: 'التسويق الإلكتروني والإعلانات الممولة' },
    { en: 'Graphic design & brand identity', ar: 'التصميم الجرافيكي والهوية البصرية' },
    { en: 'Video editing & production', ar: 'المونتاج وصناعة الفيديو' },
    { en: 'SEO & technical support', ar: 'تحسين محركات البحث والدعم الفني' },
  ],
};
