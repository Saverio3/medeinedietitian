import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type BlogCategory =
  | 'fertility'
  | 'weightLoss'
  | 'glp1'
  | 'womensHealth'
  | 'nutrition'
  | 'recipes';

export type BlogPost = {
  slug: string;
  locale: 'en' | 'lt';
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  cover?: string;
  readingTime: number;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(locale: 'en' | 'lt' = 'en'): BlogPost[] {
  const localeDir = path.join(BLOG_DIR, locale);
  if (!fs.existsSync(localeDir)) return [];

  const files = fs.readdirSync(localeDir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, '');
    return getPostBySlug(slug, locale);
  });

  return posts
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string, locale: 'en' | 'lt' = 'en'): BlogPost | null {
  const mdPath = path.join(BLOG_DIR, locale, `${slug}.md`);
  const mdxPath = path.join(BLOG_DIR, locale, `${slug}.mdx`);
  const filePath = fs.existsSync(mdPath) ? mdPath : fs.existsSync(mdxPath) ? mdxPath : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  const readingTime = Math.max(1, Math.round(content.split(/\s+/).length / 220));

  return {
    slug,
    locale,
    title: data.title || 'Untitled',
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    category: (data.category as BlogCategory) || 'nutrition',
    cover: data.cover || undefined,
    readingTime,
    content,
  };
}

export function getAllSlugs(locale: 'en' | 'lt' = 'en'): string[] {
  const localeDir = path.join(BLOG_DIR, locale);
  if (!fs.existsSync(localeDir)) return [];
  return fs
    .readdirSync(localeDir)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx?$/, ''));
}
