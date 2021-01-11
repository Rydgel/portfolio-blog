import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import Layout from '../components/design/layout';
import Post from '../interfaces/post';
import ReactMarkdown from 'react-markdown';
import { getRecentArticles } from '../lib/strapi';

type IndexProps = {
    articles: Post[];
};

const IndexPage: FC<IndexProps> = (props: IndexProps) => {
    return (
        <Layout page="index">
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
            <h3 className="text-2xl font-medium">{article.title}</h3>
            <p className="text-gray-500">{formatDate(article.display_time)}</p>
            <p className="prose lg:prose-xl">
                <ReactMarkdown>{article.description}</ReactMarkdown>
            </p>
            <hr className="border-t-1 h-0 border-gray-300 my-8" />
        </div>
    );
}

function formatDate(raw: string): string {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }).format(new Date(raw));
}

export const getStaticProps: GetStaticProps = async () => {
    const articles = await getRecentArticles();
    return {
        props: { articles },
        revalidate: 1,
    };
};

export default IndexPage;
