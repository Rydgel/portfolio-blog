import Content from '@interfaces/content';
import { getArticles, getExperiments } from '@lib/strapi';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import beautifier from 'xml-beautifier';

const Feed: FC = () => null;

const getSlugPrefix = (post: Content): string => {
    if (typeof post.categories !== 'undefined') {
        return 'blog';
    } else {
        return 'lab';
    }
};

const generateRssItem = (post: Content): string => `
  <item>
    <guid>https://jeromem.dev/${getSlugPrefix(post)}/${post.slug}</guid>
    <title>${post.title}</title>
    <link>https://jeromem.dev/${getSlugPrefix(post)}/${post.slug}</link>
    <description>${post.description}</description>
    <pubDate>${new Date(post.display_time).toUTCString()}</pubDate>
  </item>
`;

const generateRss = (posts: Content[]): string => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Jerome{m}</title>
      <link>https://jeromem.dev</link>
      <description>Web &amp; mobile developer with a soft spot for typography and functional programming.</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].display_time).toUTCString()}</lastBuildDate>
      <atom:link href="https://jeromem.dev/feed" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const articles = await getArticles();
    const experiments = await getExperiments();
    const all_content: Content[] = [].concat(articles, experiments);
    const to_utc = (date: string) => new Date(date).getTime();
    all_content.sort((a, b) => to_utc(b.display_time) - to_utc(a.display_time));

    context.res.setHeader('Content-Type', 'text/xml');
    if (articles.length > 0) {
        context.res.write(beautifier(generateRss(all_content)));
    }
    context.res.end();

    return {
        props: {},
    };
};

export default Feed;
