# 🏢 Mehromah Qazvin Website (Astro + Tailwind CSS)

Welcome to the modernized codebase of **Mehromah Qazvin Commercial & Administrative Complex** (مجتمع تجاری اداری مهروماه قزوین).

This project has been migrated from a legacy WordPress HTML structure into a high-performance, modern static site built with **Astro** and **Tailwind CSS**.

---

## ⚡ Tech Stack

- **Framework**: [Astro v4](https://astro.build/) (Static Site Generation / SSG mode)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) + `@tailwindcss/typography`
- **Content Management**: Astro Content Collections (Markdown with Zod schema validation)
- **Typography**: Local `IRANSansWeb` Persian font hosting (`src/styles/fonts.css`)
- **Deployment**: Static Site Hosting (Cloudflare Pages, Vercel, or Nginx)

---

## 🎯 Key Architecture Features & URL Parity

- **Strict Directory-Based Routing**: Configured `build.format: 'directory'` in `astro.config.mjs` to maintain 100% 1:1 URL parity with legacy SEO indexes:
  - `/` &rarr; `dist/index.html`
  - `/blog/` &rarr; `dist/blog/index.html`
  - `/blog/2017/07/1173/` &rarr; `dist/blog/2017/07/1173/index.html`
  - `/blog/category/ev/` &rarr; `dist/blog/category/ev/index.html`
  - `/blog/category/ev/page/2/` &rarr; `dist/blog/category/ev/page/2/index.html`
  - `/blog/events/` &rarr; `dist/blog/events/index.html`

---

## 📁 Directory Structure

```plaintext
├── public/                     # Static root assets, favicons, site manifests
│   ├── assets/                 # Shared images, floor plans, font assets
│   ├── BingSiteAuth.xml
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── content/
│   │   ├── config.ts           # Schema definitions for blog/events collections
│   │   ├── blog/               # Markdown files for migrated blog posts
│   │   └── events/             # Events content collection
│   ├── components/
│   │   ├── common/             # Header, Footer, SEO, Favicons
│   │   ├── home/               # Hero, Intro, FloorPlans
│   │   └── blog/               # Blog UI components
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Root HTML layout with RTL & IRANSansWeb font
│   │   └── BlogPost.astro      # Single post layout with Tailwind prose
│   ├── pages/
│   │   ├── index.astro
│   │   ├── introduction.astro
│   │   ├── features.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       ├── [year]/[month]/[id]/index.astro  # Matches exact legacy post URL structure
│   │       ├── category/[cat]/index.astro       # Category archive routes
│   │       ├── category/[cat]/page/[page].astro # Category pagination routes
│   │       └── events/index.astro
│   └── styles/
│       ├── fonts.css           # Font-face declarations for IRANSansWeb
│       └── global.css          # Tailwind directives & global overrides
├── scripts/
│   └── migrate-posts.js        # Automated migration script for legacy HTML posts
├── legacy_archive/             # Archived legacy HTML files & backup assets
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🛠️ Development & Deployment

### Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local development server at `http://localhost:4321` |
| `npm run build` | Build static production site output into `./dist` |
| `npm run preview` | Preview production build locally |
| `node scripts/migrate-posts.js` | Re-run batch migration script for HTML posts |

---

## 🌐 SEO & Performance Highlights

- **Lighthouse Ready**: Ultra-fast SSG load times with 0 unnecessary JS overhead.
- **RTL First**: Built with `dir="rtl" lang="fa"` and Persian numeral typography support.
- **SEO & OpenGraph Tags**: Automatic canonical URL mapping and OpenGraph metadata generation via `SEO.astro`.

---

## 📄 License

Internal repository for **Mehromah Qazvin Complex**. All rights reserved.
