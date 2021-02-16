import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';
import Layout from '../../components/design/layout';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { getExperimentBySlug, getExperiments, getSiteConfig } from '../../lib/strapi';
import { formatDate } from '../../lib/date_utils';
import { MyRenderer } from '../../lib/renderer';
import Config from '../../interfaces/config';
import HeadSeo from '../../components/seo/head-seo';
import urljoin from 'url-join';
import Experiment from '../../interfaces/experiment';

type LabProps = {
    config: Config;
    experiment: Experiment;
};

const LabPage: FC<LabProps> = (props: LabProps) => {
    const headerImage = () => {
        if (props.experiment.image) {
            const srcImg = urljoin(props.config.strapi_url, props.experiment.image.url);
            return srcImg;
        }
    };
    return (
        <Layout page="experiment" headerImage={headerImage()}>
            <HeadSeo
                config={props.config}
                postNode={props.experiment}
                postPath={`/lab/${props.experiment.slug}`}
                postSEO={true}
            />
            <article>
                <header>
                    <h1 className="text-3xl lg:text-5xl font-bold block text-center mb-4">{props.experiment.title}</h1>
                    <time className="block text-center text-gray-500 mb-6">
                        {formatDate(props.experiment.display_time)}
                    </time>
                </header>
                <section className="prose lg:prose-xl dark:prose-dark dark:lg:dark-prose-xl">
                    <ReactMarkdown renderers={MyRenderer()} plugins={[gfm]}>
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
    return {
        props: { config, experiment },
        revalidate: 1,
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
        fallback: false,
    };
};

export default LabPage;
