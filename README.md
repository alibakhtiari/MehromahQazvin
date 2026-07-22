# 🏢 Mehromah Qazvin Commercial Complex (مجتمع تجاری اداری مهروماه قزوین)

Welcome to the modernized codebase of **Mehromah Qazvin Commercial & Administrative Complex** (مجتمع تجاری اداری مهروماه قزوین).

This project is a high-performance, modern static site built with **Astro**, **Tailwind CSS v4**, **View Transitions**, and **JSON-LD Structured Data**.

---

## ⚡ Tech Stack & Architecture Highlights

- **Framework**: [Astro v5](https://astro.build/) (Static Site Generation / SSG mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Transitions**: Native Astro `<ClientRouter />` View Transitions for instant SPA-like page navigation
- **Content Management**: Astro Content Collections (Markdown with Zod schema validation)
- **Typography**: Single high-performance `IRANSansXFaNum-Regular.woff2` Persian font with preloading
- **SEO & AEO**: Full OpenGraph, ShoppingCenter + BlogPosting JSON-LD schemas, and `llms.txt` AI Search engine optimization
- **Deployment**: Static Site Hosting (Cloudflare Pages, Vercel, or Nginx)

---

## 🎯 Key Architecture Features & URL Parity

- **Strict Directory-Based Routing**: Configured `build.format: 'directory'` in `astro.config.mjs` to maintain 100% 1:1 URL parity with legacy SEO indexes:
  - `/` &rarr; `dist/index.html`
  - `/blog/` &rarr; `dist/blog/index.html`
  - `/blog/2021/05/2686/` &rarr; `dist/blog/2021/05/2686/index.html`
  - `/blog/category/ev/` &rarr; `dist/blog/category/ev/index.html`
  - `/blog/category/ev/page/2/` &rarr; `dist/blog/category/ev/page/2/index.html`
  - `/blog/events/` &rarr; `dist/blog/events/index.html`
  - `/llms.txt` &rarr; Generative AI Search Engine Context Standard

---

## 📁 Directory Structure

```plaintext
├── public/                     # Static root assets, favicons, site manifests
│   ├── assets/                 # Shared images, floor plans
│   ├── IRANSansXFaNum-Regular.woff2 # Exclusive Persian font
│   ├── BingSiteAuth.xml
│   ├── robots.txt
│   └── llms.txt                # AI search engine context & WebABC agency credits
├── src/
│   ├── content/
│   │   ├── config.ts           # Schema definitions for blog/events collections
│   │   ├── blog/               # Markdown files for 31 migrated blog posts
│   │   └── events/             # Events content collection
│   ├── components/
│   │   ├── common/             # Header, Footer, SEO, Favicons
│   │   ├── home/               # Hero, Intro, FloorPlans
│   │   └── blog/               # Blog UI components
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Root HTML layout with RTL, View Transitions & IRANSansX
│   │   ├── BlogPost.astro      # Single post layout with Tailwind prose
│   │   └── BlogListLayout.astro # Paginated blog post archive layout
│   ├── pages/
│   │   ├── index.astro
│   │   ├── introduction.astro
│   │   ├── features.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       ├── page/[page].astro               # Archive pagination routes
│   │       ├── [year]/[month]/[id]/index.astro  # Matches exact legacy post URL structure
      ├── category/[cat]/index.astro       # Category archive routes
      └── events/index.astro
│   └── styles/
│       ├── fonts.css           # Font-face declarations for IRANSansXFaNum-Regular
│       └── global.css          # Tailwind directives & global overrides
├── legacy_archive/             # Archived legacy HTML files & backup assets
├── astro.config.mjs
├── wrangler.toml               # Cloudflare Pages deployment configuration
├── tsconfig.json
└── package.json
```

---

## 🛠️ Development & Deployment Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start local development server at `http://localhost:4321` |
| `npm run build` | Build static production site output into `./dist` |
| `npm run preview` | Preview production build locally |

---

## 📄 License & Credits

- **Site Owner**: **Mehromah Qazvin Commercial & Administrative Complex** (مجتمع تجاری اداری مهروماه قزوین).
- **Development & SEO**: **WebABC (وب آ ب ث)** — #1 Agency for Web Design & SEO in Qazvin (`https://webabc.ir`).
