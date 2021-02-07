import { GetStaticProps } from 'next';
import Link from 'next/link';
import React, { FC } from 'react';
import Layout from '../components/design/layout';
import Post from '../interfaces/post';
import ReactMarkdown from 'react-markdown';
import { getRecentArticles, getRecentExperiments, getSiteConfig } from '../lib/strapi';
import { formatDate } from '../lib/date_utils';
import HeadSeo from '../components/seo/head-seo';
import Config from '../interfaces/config';
import Experiment from '../interfaces/experiment';

type IndexProps = {
    config: Config;
    articles: Post[];
    experiments: Experiment[];
};

const IndexPage: FC<IndexProps> = (props: IndexProps) => {
    return (
        <Layout page="index">
            <HeadSeo config={props.config} postSEO={false} />
            <section>
                <h2 className="text-5xl font-bold block text-center mb-14">Latest articles</h2>
                {props.articles.map(onePostRow('blog'))}
                <h2 className="text-5xl font-bold block text-center mt-14 mb-14">Latest experiments</h2>
                {props.experiments.map(onePostRow('lab'))}
            </section>
        </Layout>
    );
};

function onePostRow(type: string): (post: Post | Experiment) => React.ReactNode {
    return function (post: Post | Experiment): React.ReactNode {
        const PostRow = () => (
            <div key={post.id}>
                <h3 className="text-3xl font-medium">
                    <Link href={`/${type}/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-400 italic">{formatDate(post.display_time)}</p>
                <div className="prose lg:prose-xl">
                    <ReactMarkdown>{post.description}</ReactMarkdown>
                </div>
                <hr className="border-t-1 h-0 border-gray-100 my-8" />
            </div>
        );
        return PostRow();
    };
}

export const getStaticProps: GetStaticProps = async () => {
    const config = await getSiteConfig();
    const articles = await getRecentArticles();
    const experiments = await getRecentExperiments();
    return {
        props: { config, articles, experiments },
        revalidate: 1,
    };
};

export default IndexPage;
