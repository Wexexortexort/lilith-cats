# 梅澤美波 官网复刻 — 任务交接报告

> 项目路径：`E:\CCWorkSpace\20260625\minamiumezawa-re`
>
> 技术栈：Next.js 15 + TypeScript + App Router + Tailwind CSS + Static Export
>
> 参考站：https://minamiumezawa.jp/

---

## 一、项目目标

| # | 任务 | 状态 |
|---|---|---|
| 01 | 提取参考站资源与内容数据 — HTML/CSS/JS/图片下载，`siteData.ts` 结构化 | ✅ |
| 02 | 初始化 Next.js + Tailwind 项目 — 字体、全局样式、next.config.ts、目录结构 | ✅ |
| 03 | 实现 Header 主视觉轮播与开场动画 — react-slick 4 张，PC/SP 响应，OpeningLoader | ✅ |
| 04 | 实现导航菜单与社交链接 — 汉堡菜单，全屏覆盖，桌面 FixedFollow | ✅ |
| 05 | 实现 NEWS 与 SCHEDULE 区块 — 新闻列表，日期选择器，桌面 30/60 布局 | ✅ |
| 06 | 实现 PROFILE 与 WORKS 区块 — 图片+详情，5 分类标签切换，三列网格 | ✅ |
| 07 | 实现 Footer 与全局动画交互 — 导航+版权，scroll fade-in，标题 clip-path 揭示 | ✅ |
| 08 | 响应式精调与还原度检查 — 多断点对比，build 验证 | ✅ |
| 09 | 配置构建与部署 — Static Export -> Vercel | ⏳ 未开始 |

---

## 二、已完成文件清单

### 项目配置

| 文件 | 说明 |
|---|---|
| `next.config.ts` | `output: 'export'`, `distDir: 'dist'`, `images.unoptimized` |
| `src/app/layout.tsx` | Noto Serif JP + Libre Baskerville 双字体，Meta/OGP 标签，favicon |
| `src/app/globals.css` | Tailwind v4 `@theme`，响应式字体基准，slick 样式，动画 keyframes |
| `src/app/page.tsx` | 组合所有 Section，contents 左边缘线，tateline |

### 数据层

| 文件 | 说明 |
|---|---|
| `src/data/siteData.ts` | 全部内容：heroSlides(4) / newsItems(3) / scheduleItems(2) / profileData / worksData(5 分类) / navItems / siteMeta |

### 组件

| 文件 | 说明 |
|---|---|
| `src/components/OpeningLoader.tsx` | 页面加载：“MINAMI UMEZAWA” clip-path 揭示 → blur 淡出 |
| `src/components/SectionTitle.tsx` | 标题：左竖线 + clip-path 滚动揭示 + 灰色阴影层 |
| `src/components/ViewMoreButton.tsx` | "VIEW ALL" 按钮：hover 下划线动画 |
| `src/components/FixedFollow.tsx` | 桌面左侧竖排社交栏，X + Instagram SVG |

### Sections

| 文件 | 说明 |
|---|---|
| `src/sections/HeaderSlider.tsx` | react-slick 全屏轮播，PC/SP 图片切换，暂停/播放按钮，4 种标题定位 |
| `src/sections/GlobalNav.tsx` | 右上汉堡菜单按钮，全屏导航覆盖，身体滚动锁定，社交链接 |
| `src/sections/NewsSection.tsx` | 新闻列表，日期|分类|标题布局，桌面双栏 |
| `src/sections/ScheduleSection.tsx` | 横向日期选择器（可滚动），活动列表，选中态下划线 |
| `src/sections/ProfileSection.tsx` | 大图 + 姓名 / 基本信息 / VIEW ALL，桌面 flex 双栏 |
| `src/sections/WorksSection.tsx` | MODEL/STAGE/MOVIE/TV/BOOK 标签切换，桌面三列网格 |
| `src/sections/Footer.tsx` | 导航链接 + 社交图标 + ©乃木坂46LLC |

### Hooks

| 文件 | 说明 |
|---|---|
| `src/hooks/useInView.ts` | IntersectionObserver 封装，默认 triggerOnce，可配 threshold/rootMargin |

### 静态资源

`public/images/` 共 14 文件：

| 文件 | 来源 |
|---|---|
| `slide01-pc.jpg` / `slide01-sp.jpg` | KV 主视觉 ① |
| `slide02-pc.jpg` / `slide02-sp.jpg` | KV 主视觉 ② |
| `slide03-pc.jpg` / `slide03-sp.jpg` | KV 主视觉 ③ |
| `slide04-pc.jpg` / `slide04-sp.jpg` | KV 主视觉 ④ |
| `profile.jpg` | PROFILE 人物照 |
| `favicon.png` | 站点图标 |
| `apple-touch-icon.png` | Apple 触控图标 |
| `og-image.png` | OGP 分享图 |
| `btn-stop.png` / `btn-play.png` | 轮播暂停/播放按钮 |

---

## 三、技术路径概要

```
路由策略: App Router, 单页静态, output: 'export'
样式方案: Tailwind CSS v4 (CSS-based @theme), 少量 global CSS
字体加载: next/font/google (Noto Serif JP + Libre Baskerville)
轮播方案: react-slick (对齐原站)
动画方案: CSS transition + IntersectionObserver (useInView hook)
图片方案: next/image (fill) + CSS background-image 混合
数据组织: src/data/siteData.ts 集中管理
```

---

## 四、下一步要做的事（详细到文件行）

### 🔜 1. 部署上线（原 task 09）

配置已完成，直接操作：

```bash
cd E:\CCWorkSpace\20260625\minamiumezawa-re
npx vercel --prod
```

或 Push 到 GitHub 后在 Vercel Dashboard 导入该项目。

### 🔜 2. 修复 HeaderSlider 文字可读性

**文件**: `src/sections/HeaderSlider.tsx:38-60`

问题：slide02/slide04 标题颜色设为 `#fff`，但图片浅色区域导致文字看不清。原站可能在图片上方叠加了半透明遮罩。

修复：在每个 slide 的 `<div>` 容器上加一层 `bg-black/10`：

```tsx
<div key={slide.id} className="relative">
  <div className="absolute inset-0 z-[1] bg-black/10" />
  {/* 原有图片和标题 */}
</div>
```

### 🔜 3. ScheduleSection 日期联动

**文件**: `src/sections/ScheduleSection.tsx:27` / `src/data/siteData.ts`

目前 `scheduleItems` 仅硬编码 2 天数据（2026.6.26、2026.6.27），且 `activeDay` 默认取 `scheduleItems[0]`。需要对接真实数据源，或自动计算"今天"对应的日期并高亮。

### 🔜 4. SVG 填充色验证

**文件**: 
- `src/components/FixedFollow.tsx:47`
- `src/sections/GlobalNav.tsx:143`
- `src/sections/Footer.tsx:26`

SVG 已加 `fill-current` 类，理论上继承文字颜色 `#333`。需截图确认渲染正常。

### 🔜 5. 字体文件裁剪

**文件**: `src/app/layout.tsx:3-14`

目前 `Noto_Serif_JP` 加载了全部 7 个字重（200~900），实际只用到了 400/600/700。建议精简：

```tsx
const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
```

可减少 ~50% 字体文件体积（当前 ~130 个 woff2 中超过一半是 Noto Serif JP 字重变体）。

---

## 五、已知问题 / 待确认

| # | 问题 | 文件 | 优先级 |
|---|---|---|---|
| 🐛 | slide02/slide04 白字在浅色图片上看不清 | `HeaderSlider.tsx:38-60` | 高 |
| ⚠️ | OpeningLoader 开场 4s，截屏时可能挡住内容 | `OpeningLoader.tsx` | 低 |
| ⚠️ | Schedule `w-[200%]` 日期滚动宽度硬编码 | `ScheduleSection.tsx:37` | 中 |
| ℹ️ | WorksSection useEffect 设置默认分类可简化为 `useState` 直接初始化 | `WorksSection.tsx:18-23` | 低 |
| ℹ️ | `duration-[400ms]` 等 Tailwind 任意值，v4 兼容，无需改 | 多处 | — |

---

## 六、构建验证

```bash
npm run build
# ✓ Compiled successfully (Turbopack)
# ✓ TypeScript 检查通过
# ✓ 生成 pages: /, /_not-found
# 输出到 dist/
```

---

> 生成时间：2026-06-25
> 最后 commit：`63ec2d6` — feat: replicate minamiumezawa.jp official site with Next.js + Tailwind
