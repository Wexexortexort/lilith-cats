export const siteMeta = {
  title: "LILITH'S CATS",
  description: "好运常在，万事大吉 — 李好运与李大吉的专属主页。",
  socialUrl: "#",
  contactUrl: "#",
  copyright: "© lilith",
};

export const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about/" },
  { label: "GALLERY", href: "/gallery/" },
  { label: "CONTACT", href: siteMeta.contactUrl, external: true },
];

export const heroSlides = [
  {
    id: 1,
    spImage: "/images/slide01-sp.jpg",
    pcImage: "/images/slide01-pc.jpg",
    titleColor: "#fff",
    name: "李好运",
    subtitle: "高冷大小姐",
  },
  {
    id: 2,
    spImage: "/images/slide02-sp.jpg",
    pcImage: "/images/slide02-pc.jpg",
    titleColor: "#fff",
    name: "李大吉",
    subtitle: "粘人小跟班",
  },
];

export const newsItems = [
  {
    id: 1,
    date: "2026.06.20",
    category: "日常",
    title: "好运今天又在窗台晒太阳，一晒就是一下午",
    href: "#",
  },
  {
    id: 2,
    date: "2026.06.18",
    category: "趣事",
    title: "大吉偷吃零食被抓现行，一脸无辜",
    href: "#",
  },
  {
    id: 3,
    date: "2026.06.15",
    category: "日常",
    title: "两只猫第一次同框睡觉，好运勉强接受了大吉",
    href: "#",
  },
];

export const scheduleItems = [
  {
    year: 2025,
    month: 3,
    day: 15,
    week: "SAT",
    displayDate: "xxxx.xx.xx",
    events: [
      { category: "纪念日", time: "", title: "李好运到家 🐱", href: "#" },
    ],
  },
  {
    year: 2026,
    month: 5,
    day: 16,
    week: "FRI",
    events: [
      { category: "纪念日", time: "", title: "李大吉到家 🐱", href: "#" },
    ],
  },
  {
    year: 2026,
    month: 5,
    day: 26,
    week: "MON",
    events: [
      { category: "纪念日", time: "", title: "好运大吉首次同框 📸", href: "#" },
    ],
  },
];

export interface CatProfile {
  image: string;
  name: string;
  nameEn: string;
  gender: string;
  personality: string;
  birthday: string;
  gotchaDay: string;
  details: { label: string; value: string }[];
}

export const catProfiles: CatProfile[] = [
  {
    image: "/images/profile-haoyun.jpg",
    name: "李好运",
    nameEn: "Haoyun",
    gender: "♀",
    personality: "高冷",
    birthday: "占位生日",
    gotchaDay: "xxxx.xx.xx",
    details: [
      { label: "性格", value: "高冷 · 独立 · 傲娇" },
      { label: "爱好", value: "窗台晒太阳、独占猫窝" },
      { label: "特点", value: "心情好才理你" },
    ],
  },
  {
    image: "/images/profile-daji.jpg",
    name: "李大吉",
    nameEn: "Daji",
    gender: "♂",
    personality: "粘人",
    birthday: "占位生日",
    gotchaDay: "2026年5月16日",
    details: [
      { label: "性格", value: "粘人 · 活泼 · 贪吃" },
      { label: "爱好", value: "蹭人、追尾巴、偷零食" },
      { label: "特点", value: "走到哪跟到哪" },
    ],
  },
];

export const galleryCategories = [
  { key: "cute", label: "萌照" },
  { key: "funny", label: "搞怪" },
  { key: "daily", label: "日常" },
  { key: "outdoor", label: "户外" },
  { key: "highlight", label: "高光" },
] as const;

export type GalleryCategoryKey = (typeof galleryCategories)[number]["key"];

export const galleryData: Record<GalleryCategoryKey, { title: string; note: string; href: string }[]> = {
  cute: [
    { title: "好运的凝视", note: "窗台边的优雅侧脸", href: "#" },
    { title: "大吉的撒娇", note: "翻肚皮求摸摸", href: "#" },
    { title: "并排躺平", note: "难得的和谐时刻", href: "#" },
  ],
  funny: [
    { title: "大吉卡纸箱", note: "头进去了身体还在外面", href: "#" },
    { title: "好运嫌弃脸", note: "对大吉的日常态度", href: "#" },
  ],
  daily: [
    { title: "早餐时间", note: "两只猫排队等开罐头", href: "#" },
    { title: "午后时光", note: "阳光下的慵懒", href: "#" },
    { title: "睡前仪式", note: "抢枕头大战", href: "#" },
  ],
  outdoor: [
    { title: "阳台探险", note: "好运第一次上阳台", href: "#" },
  ],
  highlight: [
    { title: "好运常在", note: "万事大吉", href: "#" },
  ],
};
