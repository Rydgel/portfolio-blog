import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';
import Post from '../../interfaces/post';
import Layout from '../../components/design/layout';
import ReactMarkdown from 'react-markdown';
import { getArticleBySlug, getArticles } from '../../lib/strapi';
import { formatDate } from '../../lib/date_utils';
import { MyRenderer } from '../../lib/renderer';

type ArticleProps = {
    article: Post;
};

const ArticlePage: FC<ArticleProps> = (props: ArticleProps) => {
    return (
        <Layout page="article">
            <article>
                <header>
                    <h1 className="text-3xl lg:text-5xl font-bold block text-center mb-4">{props.article.title}</h1>
                    <time className="block text-center text-gray-500 mb-6">
                        {formatDate(props.article.display_time)}
                    </time>
                </header>
                <section className="prose lg:prose-xl">
                    <ReactMarkdown renderers={MyRenderer()}>{props.article.content}</ReactMarkdown>
                </section>
            </article>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const article = await getArticleBySlug(params.slug);
    return {
        props: { article },
        revalidate: 1,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const articles = await getArticles();
    return {
        paths: articles.map((article) => ({
            params: {
                slug: article.slug,
            },
        })),
        fallback: false,
    };
};

export default ArticlePage;
