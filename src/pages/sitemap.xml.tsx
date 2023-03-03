import Content from '@interfaces/content';
import { getArticles, getExperiments } from '@lib/strapi';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import beautifier from 'xml-beautifier';

const Sitemap: FC = () => null;

const getSlugPrefix = (post: Content): string => {
    if (typeof post.categories !== 'undefined') {
        return 'blog';
    } else {
        return 'lab';
    }
};

const generateSitemapItem = (post: Content): string => `
    <url>
        <loc>https://jeromem.dev/${getSlugPrefix(post)}/${post.slug}</loc>
        <lastmod>${new Date(post.display_time).toISOString()}</lastmod>
    </url>
`;

const generateSitemap = (posts: Content[]): string => `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        <url>
            <loc>https://jeromem.dev/about-me</loc>
            <lastmod>2022-04-21T13:40:09.125Z</lastmod>
        </url>
        ${posts.map(generateSitemapItem).join('')}
    </urlset>
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const articles = await getArticles();
    const experiments = await getExperiments();
    const all_content: Content[] = [].concat(articles, experiments);
    const to_utc = (date: string) => new Date(date).getTime();
    all_content.sort((a, b) => to_utc(b.display_time) - to_utc(a.display_time));

    context.res.setHeader('Content-Type', 'text/xml');
    if (articles.length > 0) {
        context.res.write(beautifier(generateSitemap(all_content)));
    }
    context.res.end();

    return {
        props: {},
    };
};

export default Sitemap;
