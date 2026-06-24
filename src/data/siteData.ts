export const siteMeta = {
  title: "梅澤美波 OFFICIAL WEBSITE",
  description:
    "モデル・女優として活躍する梅澤美波のオフィシャルサイト。最新の出演情報やニュース、プロフィールを掲載しています。",
  twitterUrl: "https://x.com/teamume2026",
  instagramUrl: "https://www.instagram.com/ume_minami.official/",
  contactUrl: "https://n46llc-seedandflowerllc.com/s/m00/form/inquiry",
  copyright: "©乃木坂46LLC",
};

export const navItems = [
  { label: "HOME", href: "/" },
  { label: "NEWS", href: "/news/" },
  { label: "SCHEDULE", href: "/schedule/" },
  { label: "PROFILE", href: "/profile/" },
  { label: "WORKS", href: "/works/" },
  { label: "CONTACT", href: siteMeta.contactUrl, external: true },
];

export const heroSlides = [
  {
    id: 1,
    spImage: "/images/slide01-sp.jpg",
    pcImage: "/images/slide01-pc.jpg",
    titleColor: "#435078",
  },
  {
    id: 2,
    spImage: "/images/slide02-sp.jpg",
    pcImage: "/images/slide02-pc.jpg",
    titleColor: "#fff",
  },
  {
    id: 3,
    spImage: "/images/slide03-sp.jpg",
    pcImage: "/images/slide03-pc.jpg",
    titleColor: "#3c3632",
  },
  {
    id: 4,
    spImage: "/images/slide04-sp.jpg",
    pcImage: "/images/slide04-pc.jpg",
    titleColor: "#fff",
  },
];

export const newsItems = [
  {
    id: 10004,
    date: "2026.06.22",
    category: "OTHERS",
    title: "梅澤美波モバイルファンクラブ、6月27日（土）12:00オープン決定！",
    href: "/news/10004/",
  },
  {
    id: 10003,
    date: "2026.06.21",
    category: "OTHERS",
    title: "6月22日（月）21:00～ 生配信の視聴方法をご案内",
    href: "/news/10003/",
  },
  {
    id: 10002,
    date: "2026.06.15",
    category: "OTHERS",
    title: "【6月22日】梅澤美波 卒業後・公式サイト開設後初の生配信が決定！",
    href: "/news/10002/",
  },
];

export const scheduleItems = [
  {
    year: 2026,
    month: 6,
    day: 26,
    week: "FRI",
    events: [
      { category: "MAGAZINE", time: "", title: "CLASSY.", href: "/schedule/2026/06/26/4209/" },
      { category: "WEB", time: "20:00頃～", title: "Instagram LIVE", href: "/schedule/2026/06/26/4234/" },
    ],
  },
  {
    year: 2026,
    month: 6,
    day: 27,
    week: "SAT",
    events: [
      { category: "WEB", time: "20:00頃～", title: "モバイルファンクラブ生配信", href: "/schedule/2026/06/27/4250/" },
    ],
  },
];

export const profileData = {
  image: "/images/profile.jpg",
  name: "梅澤 美波",
  kana: "うめざわ みなみ",
  details: [
    { label: "生年月日", value: "1999年1月6日" },
    { label: "血液型", value: "A型" },
    { label: "星座", value: "やぎ座" },
    { label: "身長", value: "170cm" },
  ],
};

export const worksCategories = [
  { key: "model", label: "MODEL" },
  { key: "stage", label: "STAGE" },
  { key: "movie", label: "MOVIE" },
  { key: "tv", label: "TV" },
  { key: "book", label: "BOOK" },
] as const;

export type WorksCategoryKey = (typeof worksCategories)[number]["key"];

export const worksData: Record<WorksCategoryKey, { title: string; note: string; href: string }[]> = {
  model: [
    { title: "「CLASSY.」", note: "レギュラーモデル（2024年～、光文社）", href: "/works/#model" },
  ],
  stage: [
    { title: "ミュージカル「梨泰院クラス」", note: "オ・スア 役（2025年、東京建物 Brillia HALLほか）", href: "/works/#stage" },
    { title: "「キングダム」", note: "楊端和 役（2023年、帝国劇場ほか）", href: "/works/#stage" },
    { title: "「七つの大罪 The STAGE」", note: "ヒロイン・エリザベス 役（2018年、天王洲 銀河劇場ほか）", href: "/works/#stage" },
  ],
  movie: [
    { title: "「九龍ジェネリックロマンス」", note: "楊明 役（2025年）", href: "/works/#movie" },
    { title: "「映像研には手を出すな！」", note: "金森さやか 役（2020年）", href: "/works/#movie" },
  ],
  tv: [
    { title: "毎日放送・TBS系「失恋カルタ」", note: "主演・夏野千波 役（2026年）", href: "/works/#tv" },
    { title: "関西テレビ「デスゲームで待ってる」", note: "秋澤和 役（2024年）", href: "/works/#tv" },
    { title: "読売テレビ「筋トレサラリーマン 中山筋太郎」", note: "渋沢まどか 役（2023年）", href: "/works/#tv" },
  ],
  book: [
    { title: "2nd写真集「透明な覚悟」", note: "（2026年、光文社）", href: "/works/#book" },
    { title: "著作「美しくありたい」", note: "（2024年、日経BP）", href: "/works/#book" },
    { title: "1st写真集「夢の近く」", note: "（2020年、講談社）", href: "/works/#book" },
  ],
};
