# minamiumezawa-re 项目文档

## 1. 项目信息

- **路径**：`E:\CCWorkSpace\20260625\minamiumezawa-re`
- **技术栈**：Next.js 15 + TypeScript + Tailwind CSS v4 + react-slick
- **构建方式**：静态导出（`output: 'export'`, `distDir: 'dist'`）
- **字体**：`Noto Serif JP`（400/600/700）、`Libre Baskerville`（400/700）
- **目标站点**：minamiumezawa.jp 复刻版

## 2. 页面结构与模块注释

### 2.1 入口页：`src/app/page.tsx`

```
<OpeningLoader />     // 开屏动画
<GlobalNav />         // 全局汉堡菜单导航
<FixedFollow />       // 桌面端左侧固定社交链接

<div id="wrap">
  <HeaderSlider />    // 全屏英雄轮播
  <main>
    <article className="ml-[10%] border-l border-[#eee]">
      <NewsSection />     // NEWS 列表
      <ScheduleSection /> // SCHEDULE 日期切换
      <ProfileSection />  // PROFILE 图文
      <WorksSection />    // WORKS 分类切换
      
      {/* 桌面端垂直时间线装饰 */}
      <div className="tateline hidden lg:block absolute left-[30%] ..." />
    </article>
  </main>
  <Footer />
</div>
```

**关键布局说明：**
- 整个 `<article>` 整体向右偏移 `10%`，形成左侧留白
- 桌面端内容区从 article 左边缘再缩进 `5%`，即距离视口左边缘 `35%`
- 桌面端标题区占 `30%`，内容区占 `60%`，中间 `5%` 为间距

### 2.2 开屏动画：`src/components/OpeningLoader.tsx`

- 白底全屏遮罩，z-index `1000`
- 文字 `MINAMI UMEZAWA` 使用 clip-path 从左向右揭示
- 1400ms 后进入 exit 淡出，3900ms 后完全移除 DOM

### 2.3 全局导航：`src/sections/GlobalNav.tsx`

- 固定右上角汉堡按钮，`65px × 60px`
- 点击后全屏白色遮罩菜单，同时锁定 body 滚动
- 包含 navItems 导航 + FOLLOW ME 社交图标

### 2.4 固定社交链接：`src/components/FixedFollow.tsx`

- 桌面端（`lg:`）显示在左侧 `4.5%` 处
- 包含 Twitter/X、Instagram SVG 图标 + 竖排 "FOLLOW ME" 文字

### 2.5 英雄轮播：`src/sections/HeaderSlider.tsx`

```
<Slider>
  <div className="relative">
    <div className="absolute inset-0 z-[1] bg-black/10" />  // 可读性遮罩
    <div className="block lg:hidden relative w-full h-[100vh]">  // Mobile
      <Image src={slide.spImage} fill object-cover object-top />
    </div>
    <div className="hidden lg:block relative w-full h-screen">   // Desktop
      <Image src={slide.pcImage} fill object-cover object-top />
    </div>
    <h1 className="absolute z-10 ...">MINAMI UMEZAWA</h1>       // 标题叠加
  </div>
</Slider>
<button onClick={togglePause}> // 右下角播放/暂停
```

**动态效果：**
- react-slick 配置：`fade: true`, `autoplay: true`, 5000ms 间隔
- 4 张幻灯片，标题位置每张略有不同（slide 3 在右上方，slide 4 在左下方等）

### 2.6 章节标题组件：`src/components/SectionTitle.tsx`

- 黑色左边框 + 文字
- 主文字使用 `clip-path` 滚动进入动画
- 浅灰色阴影文字绝对定位在底层，与主文字重叠
- **关键修复**：`h2` 必须为 `inline-block`，否则阴影文字会换行分离

### 2.7 NEWS：`src/sections/NewsSection.tsx`

```
<section className="area news py-[15%] lg:py-[10%] lg:pb-[5%]">
  <div className="lg:flex lg:items-start">
    <SectionTitle title="NEWS" className="lg:w-[30%] lg:pr-[5%] lg:text-right" />
    <div className="news_in inner lg:ml-[5%] lg:w-[60%]">
      <ul className="postlist">
        <li className="py-6 border-b border-[#eee]">
          <div className="post_data">        // 日期 + 分类，桌面端左浮动
            <span className="date">2026.06.22</span>
            <span className="cat">| OTHERS</span>
          </div>
          <p className="text lg:pl-[13em]">  // 桌面端让出日期宽度
            <Link>{title}</Link>
          </p>
        </li>
      </ul>
      <div className="viewbtn mt-12 lg:text-right">
        <ViewMoreButton href="/news/" />
      </div>
    </div>
  </div>
</section>
```

**图片：** 当前 NEWS 列表无图片，纯文本。

### 2.8 SCHEDULE：`src/sections/ScheduleSection.tsx`

```
<section className="area schedule article_schedule ...">
  <div className="lg:flex lg:items-start">
    <SectionTitle title="SCHEDULE" ... />
    <div className="schedule_area_wrap lg:w-[60%] lg:ml-[5%]">
      
      {/* 日期选择器 —— 横向滚动，7 天一组 */}
      <div className="schedule_day_select overflow-x-auto whitespace-nowrap">
        <ul className="schedule_day_group w-[200%] md:w-full">
          <li className="float-left w-[14.285%]">  // 每天 1/7 宽度
            <div className="day_box" onClick={...}>
              <div className="date">{day}</div>
              <div className="week">{week}</div>
              {/* 底部激活横线动画 */}
            </div>
          </li>
        </ul>
      </div>
      
      {/* 事件列表 */}
      <div className="schedule_in inner">
        {scheduleItems.map(item => (
          <ul className={activeDay === item ? "block" : "hidden"}>
            {item.events.map(event => (
              <li>
                <span className="cate">{event.category}</span>
                <span className="time">{event.time}</span>
                <p className="text"><Link>{event.title}</Link></p>
              </li>
            ))}
          </ul>
        ))}
        <div className="viewbtn mt-12 lg:text-right">
          <ViewMoreButton href="/schedule/" />
        </div>
      </div>
    </div>
  </div>
</section>
```

**动态效果：**
- 默认选中当天日期；若当天无数据，回退到第一天
- 点击日期切换事件列表，底部横线宽度过渡动画

### 2.9 PROFILE：`src/sections/ProfileSection.tsx`

```
<section className="area profile relative py-[15%] lg:py-[10%] lg:pb-[5%]">
  {/* 移动端标题 */}
  <div className="lg:hidden"><SectionTitle title="PROFILE" /></div>
  
  <div className="lg:flex lg:items-stretch">
    {/* 图片区 */}
    <div className="profile_img w-full lg:w-[40%]">
      <span className="block relative aspect-[2/3] w-full ml-[-12%] lg:ml-0">
        <Image src="/images/profile.jpg" fill object-cover object-center sizes="50vw" />
      </span>
    </div>
    
    {/* 文字区 */}
    <div className="profile_in inner lg:pl-[10%] lg:w-[50%] lg:flex lg:flex-col lg:justify-center">
      {/* 桌面端标题 */}
      <div className="hidden lg:block"><h2>PROFILE</h2></div>
      
      <h3>
        <span>梅澤 美波</span>
        <i>うめざわ みなみ</i>  // 移动端换行，桌面端通过 ::before 添加 ／
      </h3>
      
      <ul>
        {details.map(detail => (
          <li><span>{label}：</span>{value}</li>
        ))}
      </ul>
      
      <div className="viewbtn mt-12 lg:absolute lg:right-[10%] lg:bottom-[10%]">
        <ViewMoreButton href="/profile/" />
      </div>
    </div>
  </div>
</section>
```

**关键布局说明：**
- 移动端图片向左超出 `12%`（`ml-[-12%]`），营造破格效果；桌面端对齐
- 桌面端图片 `40%` 宽度，文字区 `50%`，中间剩余 `10%` 留白
- 文字区垂直居中，但 VIEW ALL 按钮绝对定位到文字区右下角

### 2.10 WORKS：`src/sections/WorksSection.tsx`

```
<section className="area works py-[15%] lg:py-[10%] lg:pb-[10%]">
  <div className="lg:flex lg:items-start">
    <SectionTitle title="WORKS" ... />
    <div className="works_in inner lg:ml-[5%] lg:w-[60%]">
      
      {/* 分类 Tab */}
      <ul className="catlist mb-16">
        {worksCategories.map(cat => (
          <li className="w-1/3 lg:w-1/5 float-left text-center" onClick={...}>
            {cat.label}
            {/* 底部激活横线动画 */}
          </li>
        ))}
      </ul>
      
      {/* 内容区 */}
      <div className="works_content clear-both">
        {worksCategories.map(cat => (
          <ul className={activeCategory === cat ? "block" : "hidden"}>
            {worksData[cat.key].map(work => (
              <li className="lg:float-left lg:w-1/3 lg:px-[3%]">
                <Link>
                  <p className="text">{work.title}</p>
                  <p>{work.note}</p>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      
      <div className="viewbtn mt-12 clear-both lg:text-right">
        <ViewMoreButton href="/works/" />
      </div>
    </div>
  </div>
</section>
```

**动态效果：**
- 默认选中 "MODEL" 分类
- 点击 Tab 切换内容列表，底部横线宽度动画
- 桌面端每行 3 列，移动端单列

**图片：** 当前 WORKS 列表无图片，纯文本列表。

### 2.11 Footer：`src/sections/Footer.tsx`

- 导航链接横向排列
- 移动端显示 FOLLOW ME 社交图标
- 桌面端社交图标由 `<FixedFollow />` 负责，Footer 中隐藏
- 版权信息居中

### 2.12 通用按钮：`src/components/ViewMoreButton.tsx`

- 文字默认 "VIEW ALL"，可配置 `label`
- 下划线 hover 动画：灰色底线 + 黑色横线从 0 展开到 100%
- 支持内部 `Link` 和外部 `a` 两种模式

## 3. 图片尺寸标注

### 3.1 英雄轮播图（HeaderSlider）

| 文件名 | 用途 | 实际像素 | 比例 | 显示尺寸 | 说明 |
|--------|------|----------|------|----------|------|
| `slide01-pc.jpg` | 桌面轮播 1 | 1920 × 1080 | 16:9 | `w-full h-screen` | `object-cover object-top` |
| `slide01-sp.jpg` | 移动轮播 1 | 750 × 1335 | ~9:16 | `w-full h-[100vh]` | `object-cover object-top` |
| `slide02-pc.jpg` | 桌面轮播 2 | 1920 × 1080 | 16:9 | `w-full h-screen` | `object-cover object-top` |
| `slide02-sp.jpg` | 移动轮播 2 | 750 × 1335 | ~9:16 | `w-full h-[100vh]` | `object-cover object-top` |
| `slide03-pc.jpg` | 桌面轮播 3 | 1920 × 1080 | 16:9 | `w-full h-screen` | `object-cover object-top` |
| `slide03-sp.jpg` | 移动轮播 3 | 750 × 1335 | ~9:16 | `w-full h-[100vh]` | `object-cover object-top` |
| `slide04-pc.jpg` | 桌面轮播 4 | 1920 × 1080 | 16:9 | `w-full h-screen` | `object-cover object-top` |
| `slide04-sp.jpg` | 移动轮播 4 | 750 × 1335 | ~9:16 | `w-full h-[100vh]` | `object-cover object-top` |

**建议：** 桌面图使用 1920×1080 或更大；移动图使用 750×1335 或更大（已满足）。

### 3.2 PROFILE 图片

| 文件名 | 用途 | 实际像素 | 比例 | 显示尺寸 | 说明 |
|--------|------|----------|------|----------|------|
| `profile.jpg` | PROFILE 人物照 | 1000 × 1500 | 2:3 | 容器 `aspect-[2/3]`，桌面 `lg:w-[40%]` | `object-cover object-center`，`sizes="50vw"` |

**建议：** `sizes="50vw"` 在桌面端合理，但移动端图片占满视口，可考虑改为 `sizes="(max-width: 1024px) 100vw, 50vw"`。

### 3.3 图标与 Meta 图片

| 文件名 | 用途 | 实际像素 | 说明 |
|--------|------|----------|------|
| `favicon.png` | 站点图标 | 48 × 48 | 浏览器标签页 |
| `apple-touch-icon.png` | iOS 主屏幕图标 | 180 × 180 | iOS 设备 |
| `og-image.png` | OpenGraph / Twitter 卡片 | 1200 × 630 | 社交媒体分享图，比例 1.91:1 |
| `btn-play.png` | 轮播播放按钮 | 256 × 256 | 背景图，实际显示 `w-6 h-6 lg:w-9 lg:h-9` |
| `btn-stop.png` | 轮播暂停按钮 | 256 × 256 | 背景图，实际显示 `w-6 h-6 lg:w-9 lg:h-9` |

## 4. 动态效果清单

| 效果 | 位置 | 实现方式 |
|------|------|----------|
| 开屏文字揭示 | `OpeningLoader` | `clip-path` + CSS transition |
| 汉堡菜单动画 | `GlobalNav` | CSS transform + opacity |
| 全屏英雄轮播 | `HeaderSlider` | `react-slick` fade 模式 |
| 轮播播放/暂停 | `HeaderSlider` | `slickPlay()` / `slickPause()` |
| 章节标题滚动揭示 | `SectionTitle` | `IntersectionObserver` + `clip-path` |
| 内容区滚动淡入 | `NewsSection / ScheduleSection / WorksSection / ProfileSection / Footer` | `useInView` + opacity transition |
| Schedule 日期切换 | `ScheduleSection` | React state + 底部横线宽度动画 |
| Schedule 当天高亮 | `ScheduleSection` | `new Date()` 匹配，无匹配回退第一天 |
| Works 分类切换 | `WorksSection` | React state + 底部横线宽度动画 |
| VIEW ALL hover 下划线 | `ViewMoreButton` | `group-hover:w-full` transition |

**注意：** 所有动态效果均为客户端 JavaScript/CSS，静态导出（`output: 'export'`）后仍可正常工作。

## 5. Git 提交记录

- **提交哈希**：`e18f5cd`
- **提交信息**：`fix: section layouts and profile image before deployment`
- **提交文件**：
  - `src/app/layout.tsx`
  - `src/app/page.tsx`
  - `src/components/SectionTitle.tsx`
  - `src/sections/HeaderSlider.tsx`
  - `src/sections/NewsSection.tsx`
  - `src/sections/ProfileSection.tsx`
  - `src/sections/ScheduleSection.tsx`
  - `src/sections/WorksSection.tsx`
- **未提交文件**：`HANDOVER.md`

## 6. 下一步任务

1. **Vercel 部署**
   - 用户已确认使用 Vercel 免费 Hobby Plan
   - 执行 `npx vercel --prod`（需已登录 Vercel CLI）
   - 部署后验证所有动态效果和图片加载

2. **可选优化**
   - `profile.jpg` 的 `sizes` 属性可优化为响应式 breakpoints
   - 检查 `og-image.png` 是否已替换为实际项目图片（当前路径与 `layout.tsx` 中硬编码 URL 不一致）
   - 评估是否需要为 NEWS/WORKS 列表添加缩略图

3. **代码清理**
   - 确认 `HANDOVER.md` 是否需要保留或删除
   - 确认 `minamiumezawa-re-web.md` 是否需要加入 `.gitignore`
