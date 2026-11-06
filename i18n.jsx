import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LANG } from './profile.js';

const UI = {
  en: {
    'nav.home': 'Home', 'nav.about': 'About', 'nav.experience': 'Experience', 'nav.projects': 'Projects',
    'nav.skills': 'Skills', 'nav.contact': 'Contact', 'nav.cta': "Let's talk",
    'nav.menu': 'Menu', 'nav.main': 'Main navigation', 'skip': 'Skip to content',
    'theme.toggle': 'Toggle light / dark theme', 'lang.toggle': 'Switch language', 'lang.label': 'العربية',
    'hero.badge': 'Based in', 'hero.kicker': "Hi, I'm",
    'hero.h1a': 'Building high-quality web platforms', 'hero.h1b': 'and the teams that deliver them.',
    'hero.sum': 'Senior Web Developer and Web Department Manager with 4+ years in WordPress and custom plugin development, 2+ years of React, and hands-on Node.js. I turn business requirements into responsive, optimized and maintainable web solutions.',
    'hero.cta1': 'View my projects', 'hero.cta2': 'Get in touch', 'hero.scroll': 'Scroll',
    'hero.chip1': 'React.js', 'hero.chip2': 'WordPress & PHP',
    'about.eyebrow': 'About me', 'about.title': 'Engineer first, team lead by experience',
    'about.p1': 'I am a web developer and technical team leader with over 4 years of experience in WordPress development, custom plugins, PHP and bespoke website functionality. For more than 2 years I have also built front-ends with React and worked on back-ends with Node.js.',
    'about.p2': 'I have managed web development departments — coordinating projects, distributing work and overseeing the delivery workflow — and I am at my best turning business requirements into responsive, optimized and reliable web solutions.',
    'about.edu': 'Education', 'about.lang': 'Languages', 'about.loc': 'Location',
    'exp.eyebrow': 'Experience', 'exp.title': 'Where I have shipped work',
    'exp.lead': 'From hands-on WordPress engineering to running a web department.',
    'proj.eyebrow': 'Selected work', 'proj.title': 'Live projects across 6 markets',
    'proj.lead': 'A selection of real websites I have developed for clients in the Gulf, Egypt, Jordan and Iceland. Every card links to the live site.',
    'proj.filter': 'Filter projects', 'proj.visit': 'Visit site', 'proj.showing': 'Showing', 'proj.of': 'of',
    'skills.eyebrow': 'Skills', 'skills.title': 'The toolkit behind the work',
    'skills.lead': 'A practical stack across WordPress, modern front-end and back-end, with the tooling to deliver and maintain it.',
    'venture.eyebrow': 'Beyond the day job', 'venture.cta': 'Talk about a project',
    'contact.eyebrow': 'Contact', 'contact.title': "Let's build something solid",
    'contact.lead': 'Have a project, a role or a question? Send me a message — I read everything and reply personally.',
    'contact.email': 'Email', 'contact.phone': 'Phone', 'contact.wa': 'WhatsApp', 'contact.loc': 'Location',
    'contact.chat': 'Chat now',
    'form.name': 'Your name', 'form.email': 'Your email', 'form.msg': 'How can I help?',
    'form.ph.name': 'Jane Doe', 'form.ph.email': 'jane@company.com', 'form.ph.msg': 'Tell me about your project, timeline and goals…',
    'form.sendMail': 'Send by email', 'form.sendWa': 'Send on WhatsApp',
    'form.err.name': 'Please enter your name.', 'form.err.email': 'Please enter a valid email address.', 'form.err.msg': 'Please write a short message (10+ characters).',
    'form.note': 'This opens your email app or WhatsApp with the message prepared — nothing is stored on this site.',
    'form.mailSubject': 'Portfolio enquiry from',
    'foot.rights': 'All rights reserved.', 'foot.built': 'Designed & built with React.', 'foot.top': 'Back to top',
    'foot.links': 'Explore', 'foot.reach': 'Reach me',
    'top': 'Back to top',
    'doc.title': 'Ibrahim Elwekel | Senior Web Developer — WordPress, React & Node.js',
  },
  ar: {
    'nav.home': 'الرئيسية', 'nav.about': 'نبذة عني', 'nav.experience': 'الخبرات', 'nav.projects': 'الأعمال',
    'nav.skills': 'المهارات', 'nav.contact': 'تواصل', 'nav.cta': 'لنتحدث',
    'nav.menu': 'القائمة', 'nav.main': 'القائمة الرئيسية', 'skip': 'تخطي إلى المحتوى',
    'theme.toggle': 'تبديل الوضع الفاتح / الداكن', 'lang.toggle': 'تغيير اللغة', 'lang.label': 'English',
    'hero.badge': 'المقر:', 'hero.kicker': 'أهلًا، أنا',
    'hero.h1a': 'أبني منصات ويب عالية الجودة', 'hero.h1b': 'وأقود الفِرق التي تُسلّمها.',
    'hero.sum': 'مطوّر ويب أول ومدير قسم الويب، بخبرة تتجاوز 4 سنوات في تطوير ووردبريس والإضافات المخصّصة، وأكثر من سنتين في React، مع خبرة عملية في Node.js. أحوّل متطلبات العمل إلى حلول ويب متجاوبة ومحسّنة وسهلة الصيانة.',
    'hero.cta1': 'استعرض أعمالي', 'hero.cta2': 'تواصل معي', 'hero.scroll': 'مرّر',
    'hero.chip1': 'React.js', 'hero.chip2': 'ووردبريس وPHP',
    'about.eyebrow': 'نبذة عني', 'about.title': 'مهندس أولًا، وقائد فريق بالخبرة',
    'about.p1': 'أنا مطوّر ويب وقائد فريق تقني، بخبرة تزيد على 4 سنوات في تطوير ووردبريس والإضافات المخصّصة وبرمجة PHP وبناء وظائف مخصّصة للمواقع. ومنذ أكثر من سنتين أبني الواجهات الأمامية بـ React وأعمل على الخلفية البرمجية بـ Node.js.',
    'about.p2': 'أدرت أقسام تطوير ويب — أنسّق المشاريع وأوزّع المهام وأشرف على سير التسليم — وأتميّز في تحويل متطلبات العمل إلى حلول ويب متجاوبة ومحسّنة وموثوقة.',
    'about.edu': 'التعليم', 'about.lang': 'اللغات', 'about.loc': 'الموقع',
    'exp.eyebrow': 'الخبرات', 'exp.title': 'أين نفّذت أعمالي',
    'exp.lead': 'من هندسة ووردبريس العملية إلى إدارة قسم ويب كامل.',
    'proj.eyebrow': 'أعمال مختارة', 'proj.title': 'مشاريع منشورة في 6 أسواق',
    'proj.lead': 'مجموعة من المواقع الفعلية التي طوّرتها لعملاء في الخليج ومصر والأردن وآيسلندا. كل بطاقة تفتح الموقع المباشر.',
    'proj.filter': 'تصفية المشاريع', 'proj.visit': 'زيارة الموقع', 'proj.showing': 'عرض', 'proj.of': 'من',
    'skills.eyebrow': 'المهارات', 'skills.title': 'الأدوات التي تقف خلف العمل',
    'skills.lead': 'حزمة عملية تغطي ووردبريس والواجهات الحديثة والخلفية البرمجية، مع أدوات التسليم والصيانة.',
    'venture.eyebrow': 'خارج الوظيفة', 'venture.cta': 'لنتحدث عن مشروعك',
    'contact.eyebrow': 'تواصل', 'contact.title': 'لنبنِ شيئًا متينًا',
    'contact.lead': 'عندك مشروع أو فرصة عمل أو سؤال؟ أرسل لي رسالة — أقرأ كل الرسائل وأردّ عليها بنفسي.',
    'contact.email': 'البريد الإلكتروني', 'contact.phone': 'الهاتف', 'contact.wa': 'واتساب', 'contact.loc': 'الموقع',
    'contact.chat': 'ابدأ المحادثة',
    'form.name': 'الاسم', 'form.email': 'البريد الإلكتروني', 'form.msg': 'كيف يمكنني مساعدتك؟',
    'form.ph.name': 'الاسم الكامل', 'form.ph.email': 'name@company.com', 'form.ph.msg': 'احكِ لي عن مشروعك وأهدافك والمدة المتوقعة…',
    'form.sendMail': 'إرسال بالبريد', 'form.sendWa': 'إرسال عبر واتساب',
    'form.err.name': 'من فضلك اكتب اسمك.', 'form.err.email': 'من فضلك أدخل بريدًا إلكترونيًا صحيحًا.', 'form.err.msg': 'من فضلك اكتب رسالة قصيرة (10 أحرف على الأقل).',
    'form.note': 'سيفتح هذا تطبيق البريد أو واتساب والرسالة جاهزة — لا يتم حفظ أي بيانات على هذا الموقع.',
    'form.mailSubject': 'استفسار من موقعك الشخصي — ',
    'foot.rights': 'جميع الحقوق محفوظة.', 'foot.built': 'تصميم وتطوير بواسطة React.', 'foot.top': 'العودة للأعلى',
    'foot.links': 'استكشف', 'foot.reach': 'تواصل معي',
    'top': 'العودة للأعلى',
    'doc.title': 'إبراهيم الوكيل | مطوّر ويب أول — ووردبريس وReact وNode.js',
  },
};

const Ctx = createContext(null);

const readLang = () => {
  try {
    const s = localStorage.getItem('iw-lang');
    if (s === 'ar' || s === 'en') return s;
  } catch (e) { /* storage unavailable */ }
  return DEFAULT_LANG === 'ar' ? 'ar' : 'en';
};

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(readLang);

  useEffect(() => {
    const d = document.documentElement;
    d.lang = lang;
    d.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = UI[lang]['doc.title'];
    try { localStorage.setItem('iw-lang', lang); } catch (e) { /* ignore */ }
  }, [lang]);

  const toggle = useCallback(() => setLang((l) => (l === 'ar' ? 'en' : 'ar')), []);
  const t = useCallback((k) => UI[lang][k] ?? UI.en[k] ?? k, [lang]);
  const tx = useCallback((o) => (o && typeof o === 'object' ? o[lang] ?? o.en : o), [lang]);
  const value = useMemo(() => ({ lang, toggle, t, tx, isRtl: lang === 'ar' }), [lang, toggle, t, tx]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
