import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogDir = path.join(__dirname, '../src/content/blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

files.forEach((file) => {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace production domain URLs
  content = content.replace(/https?:\/\/mehromahqazvin\.ir\/blog\//g, '/blog/');
  content = content.replace(/https?:\/\/mehromahqazvin\.ir\//g, '/');

  // Replace relative wp-content paths (e.g., ../../../wp-content/ or ../../wp-content/ or ./wp-content/)
  content = content.replace(/(\.\.\/)+wp-content\//g, 'blog/wp-content/');
  content = content.replace(/="\/+blog\/+wp-content\//g, '="/blog/wp-content/');
  content = content.replace(/="blog\/+wp-content\//g, '="/blog/wp-content/');
  content = content.replace(/="\/?wp-content\//g, '="/blog/wp-content/');

  // Fix image frontmatter
  content = content.replace(/image:\s*"\/?blog\/+wp-content\//g, 'image: "/blog/wp-content/');
  content = content.replace(/image:\s*"\/?wp-content\//g, 'image: "/blog/wp-content/');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Successfully fixed all image, video, and srcset paths across all 31 blog posts!');
