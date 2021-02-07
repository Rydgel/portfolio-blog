import { GetStaticProps } from 'next';
import Link from 'next/link';
import React, { FC } from 'react';
import urljoin from 'url-join';
import Layout from '../components/design/layout';
import HeadSeo from '../components/seo/head-seo';
import Config from '../interfaces/config';
import Experiment from '../interfaces/experiment';
import { getExperiments, getSiteConfig } from '../lib/strapi';

type LabPageProps = {
    config: Config;
    experiments: Experiment[];
};

const LabPage: FC<LabPageProps> = (props: LabPageProps) => {
    return (
        <Layout page="experiments">
            <HeadSeo config={props.config} postSEO={false} />
            <section>
                <h2 className="text-5xl font-bold block text-center mb-14">Experiments</h2>
                <div className="overflow-hidden">
                    {props.experiments.map((experiment) => {
                        const headerImage = () => {
                            if (experiment.image) {
                                const srcImg = urljoin(props.config.strapi_url, experiment.image.url);
                                return srcImg;
                            }
                        };
                        return (
                            <div key={`article_lab_id_${experiment.id}`} className="mb-16 w-full relative">
                                <Link href={`/lab/${experiment.slug}`}>
                                    <img src={headerImage()} className="rounded-md cursor-pointer dark:opacity-90" />
                                </Link>
                                <div className="prose lg:prose-xl dark:prose-dark lg:dark:prose-xl-dark bottom-0 w-full pt-3">
                                    <div className="text-2xl font-medium">{experiment.title}</div>
                                    <div className="text-gray-600">{experiment.description}</div>
                                    <Link href={`/lab/${experiment.slug}`}>Read full story</Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const config = await getSiteConfig();
    const experiments = await getExperiments();
    return {
        props: { config, experiments },
        revalidate: 1,
    };
};

export default LabPage;
