import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';
import Layout from '../../components/design/layout';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { getExperimentBySlug, getExperiments, getSiteConfig } from '../../lib/strapi';
import { formatDate } from '../../lib/date_utils';
import MySyntax from '../../lib/renderer';
import Config from '../../interfaces/config';
import HeadSeo from '../../components/seo/head-seo';
import Experiment from '../../interfaces/experiment';

type LabProps = {
    config: Config;
    experiment: Experiment;
};

const LabPage: FC<LabProps> = (props: LabProps) => {
    return (
        <Layout page="experiment" headerImage={props.experiment.image} config={props.config}>
            <HeadSeo
                config={props.config}
                postNode={props.experiment}
                postPath={`/lab/${props.experiment.slug}`}
                postSEO={true}
            />
            <article>
                <header>
                    <h1 className="text-3xl lg:text-5xl font-bold block text-center mb-4 capitalize lg:leading-tight">
                        {props.experiment.title}
                    </h1>
                    <time className="block text-center text-gray-500 mb-6 italic">
                        {formatDate(props.experiment.display_time)}
                    </time>
                </header>
                <section className="prose lg:prose-xl dark:prose-dark dark:lg:dark-prose-xl">
                    <ReactMarkdown components={{ code: MySyntax }} remarkPlugins={[gfm]}>
                        {props.experiment.content}
                    </ReactMarkdown>
                </section>
            </article>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const config = await getSiteConfig();
    const experiment = await getExperimentBySlug(params.slug);

    if (!experiment) {
        return {
            notFound: true,
        };
    }

    return {
        props: { config, experiment },
        revalidate: 300,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const experiments = await getExperiments();
    return {
        paths: experiments.map((experiment) => ({
            params: {
                slug: experiment.slug,
            },
        })),
        fallback: 'blocking',
    };
};

export default LabPage;
