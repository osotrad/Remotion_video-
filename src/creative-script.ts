export const CREATIVE_SCRIPT = [
  {
    id: 'intro',
    title: 'ولادة العقل الرقمي',
    subtitle: 'رحلة في أعماق الذكاء الاصطناعي',
    duration: 15 * 30, // 15s
    description: 'نقطة ضوء تنفجر لتتحول إلى شبكة من المعلومات'
  },
  {
    id: 'data',
    title: 'محيط المعرفة',
    subtitle: 'المليارات من النصوص والكتب',
    duration: 25 * 30, // 25s
    description: 'تصور للبيانات الضخمة كأمواج رقمية متلاطمة'
  },
  {
    id: 'architecture',
    title: 'المتاهة العصبية',
    subtitle: 'بنية المحولات (Transformers)',
    duration: 30 * 30, // 30s
    description: 'استعراض الطبقات والاتصالات المعقدة داخل النموذج'
  },
  {
    id: 'vectors',
    title: 'لغة الأرقام',
    subtitle: 'تحويل الكلمات إلى أبعاد مكانية',
    duration: 25 * 30, // 25s
    description: 'الكلمات تطفو في فضاء ثلاثي الأبعاد كمتجهات'
  },
  {
    id: 'attention',
    title: 'سيمفونية الانتباه',
    subtitle: 'كيف يفهم النموذج السياق',
    duration: 25 * 30, // 25s
    description: 'خطوط ضوئية تربط الكلمات ذات الصلة ببعضها'
  },
  {
    id: 'interaction',
    title: 'الصدى الرقمي',
    subtitle: 'الحوار بين الإنسان والآلة',
    duration: 20 * 30, // 20s
    description: 'تجربة دردشة حية بلمسة فنية'
  },
  {
    id: 'outro',
    title: 'أفق جديد',
    subtitle: 'مستقبل الذكاء والتعاون',
    duration: 10 * 30, // 10s
    description: 'نهاية ملهمة'
  }
];

export const TOTAL_CREATIVE_DURATION = CREATIVE_SCRIPT.reduce((acc, s) => acc + s.duration, 0);
