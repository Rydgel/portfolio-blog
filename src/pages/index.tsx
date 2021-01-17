import { GetStaticProps } from 'next';
import Link from 'next/link';
import React, { FC } from 'react';
import Layout from '../components/design/layout';
import Post from '../interfaces/post';
import ReactMarkdown from 'react-markdown';
import { getRecentArticles, getSiteConfig } from '../lib/strapi';
import { formatDate } from '../lib/date_utils';
import HeadSeo from '../components/seo/head-seo';
import Config from '../interfaces/config';

type IndexProps = {
    config: Config;
    articles: Post[];
};

const IndexPage: FC<IndexProps> = (props: IndexProps) => {
    return (
        <Layout page="index">
            <HeadSeo config={props.config} postSEO={false} />
            <section>
                <h2 className="text-5xl font-bold block text-center mb-14">Latest articles</h2>
                {props.articles.map(oneArticleRow)}
                <h2 className="text-5xl font-bold block text-center mt-14 mb-7">Latest experiments</h2>
            </section>
        </Layout>
    );
};

function oneArticleRow(article: Post): React.ReactNode {
    return (
        <div key={article.id}>
            <h3 className="text-2xl font-medium">
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
            </h3>
            <p className="text-gray-500">{formatDate(article.display_time)}</p>
            <div className="prose lg:prose-xl">
                <ReactMarkdown>{article.description}</ReactMarkdown>
            </div>
            <hr className="border-t-1 h-0 border-gray-300 my-8" />
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const config = await getSiteConfig();
    const articles = await getRecentArticles();
    return {
        props: { config, articles },
        revalidate: 1,
    };
};

export default IndexPage;
