import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = await getCollection('blog');
  
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Novexa.tech | Cyber Security, Programming, AI & Tech Blog',
    description: 'Technical articles, security research, local AI guides, and software engineering portfolios by Ahsan Habib.',
    site: context.site || 'https://novexa.tech',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Astro 5 glob loader IDs are the file name without extension
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
