import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'blog');
const outputDir = path.join(process.cwd(), 'src', 'content', 'blog');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function decodeHTMLEntities(text) {
  if (!text) return '';
  return text
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      // Check if this directory matches YYYY/MM/ID structure
      const relativePath = path.relative(blogDir, fullPath);
      const parts = relativePath.split(path.sep);

      if (parts.length === 3) {
        const [year, month, id] = parts;
        const htmlFile = path.join(fullPath, 'index.html');
        if (fs.existsSync(htmlFile)) {
          convertPost(htmlFile, year, month, id);
        }
      } else {
        processDirectory(fullPath);
      }
    }
  }
}

function convertPost(htmlFile, year, month, id) {
  try {
    const html = fs.readFileSync(htmlFile, 'utf8');

    // Extract Title
    let title = '';
    const titleMatch = html.match(/<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i) ||
                       html.match(/<title>([\s\S]*?)<\/title>/i);
    if (titleMatch) {
      title = titleMatch[1].replace(/<[^>]+>/g, '').trim();
      title = title.replace(/\s*&#8211;\s*مجتمع تجاری مهروماه قزوین/g, '').trim();
      title = decodeHTMLEntities(title);
    } else {
      title = `پست شماره ${id}`;
    }

    // Extract Date
    let pubDate = `${year}-${month}-01`;
    const dateMatch = html.match(/class="[^"]*entry-date[^"]*"[^>]*datetime="([^"]+)"/i) ||
                      html.match(/published"[^>]*content="([^"]+)"/i);
    if (dateMatch) {
      pubDate = dateMatch[1].split('T')[0];
    }

    // Extract Category
    let category = 'ev';
    const catMatch = html.match(/rel="category tag"[^>]*>([^<]+)</i);
    if (catMatch) {
      category = decodeHTMLEntities(catMatch[1].trim());
    }

    // Extract Main Content
    let contentHtml = '';
    const contentMatch = html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<!-- \.entry-content -->/i) ||
                         html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    
    if (contentMatch) {
      contentHtml = contentMatch[1];
      // Clean scripts and unwanted WP tags
      contentHtml = contentHtml.replace(/<script[\s\S]*?<\/script>/gi, '');
      contentHtml = contentHtml.replace(/<style[\s\S]*?<\/style>/gi, '');
      contentHtml = decodeHTMLEntities(contentHtml);
    } else {
      contentHtml = `<p>${title}</p>`;
    }

    // Prepare Markdown content with frontmatter
    const mdFileName = `${year}-${month}-${id}.md`;
    const mdFilePath = path.join(outputDir, mdFileName);

    const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
pubDate: "${pubDate}"
year: "${year}"
month: "${month}"
id: "${id}"
category: "${category}"
author: "مدیریت مهروماه"
description: "${title.replace(/"/g, '\\"')}"
---

${contentHtml.trim()}
`;

    fs.writeFileSync(mdFilePath, frontmatter, 'utf8');
  } catch (err) {
    console.error(`Error converting ${htmlFile}:`, err);
  }
}

console.log('Starting migration of legacy HTML posts...');
processDirectory(blogDir);
console.log('Migration complete!');
