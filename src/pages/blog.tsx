import { GetStaticProps } from 'next';
import Link from 'next/link';
import React, { FC } from 'react';
import Layout from '../components/design/layout';
import HeadSeo from '../components/seo/head-seo';
import Config from '../interfaces/config';
import Post from '../interfaces/post';
import { formatDate } from '../lib/date_utils';
import { getArticles, getSiteConfig } from '../lib/strapi';

type ArticlePageProps = {
    config: Config;
    articles: Post[];
};

const ArticlePage: FC<ArticlePageProps> = (props: ArticlePageProps) => {
    return (
        <Layout page="articles" config={props.config}>
            <HeadSeo config={props.config} postSEO={false} />
            <section>
                <h2 className="text-5xl font-bold block text-center mb-14">Articles</h2>
                {props.articles.map((article) => (
                    <div
                        key={`article_page_id_${article.id}`}
                        className="prose lg:prose-xl dark:prose-dark dark:lg:dark-prose-xl"
                    >
                        <Link href={`/blog/${article.slug}`}>
                            <a className="capitalize">{article.title}</a>
                        </Link>{' '}
                        — <span className="text-gray-500">{formatDate(article.display_time)}</span>
                    </div>
                ))}
            </section>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const config = await getSiteConfig();
    const articles = await getArticles();
    return {
        props: { config, articles },
        revalidate: 300,
    };
};

export default ArticlePage;
