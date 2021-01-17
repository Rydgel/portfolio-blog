import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';
import Post from '../../interfaces/post';
import Layout from '../../components/design/layout';
import ReactMarkdown from 'react-markdown';
import { getArticleBySlug, getArticles, getSiteConfig } from '../../lib/strapi';
import { formatDate } from '../../lib/date_utils';
import { MyRenderer } from '../../lib/renderer';
import Config from '../../interfaces/config';
import HeadSeo from '../../components/seo/head-seo';
import urljoin from 'url-join';

type ArticleProps = {
    config: Config;
    article: Post;
};

const ArticlePage: FC<ArticleProps> = (props: ArticleProps) => {
    const HeaderImage = () => {
        if (props.article.image) {
            const srcImg = urljoin(props.config.strapi_url, props.article.image.url);
            return (
                <figure>
                    <img className="mb-8" src={srcImg} alt={props.article.title} />
                </figure>
            );
        }
    };
    return (
        <Layout page="article">
            <HeadSeo
                config={props.config}
                postNode={props.article}
                postPath={`/blog/${props.article.slug}`}
                postSEO={true}
            />
            <article>
                <HeaderImage />
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
    const config = await getSiteConfig();
    const article = await getArticleBySlug(params.slug);
    return {
        props: { config, article },
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
