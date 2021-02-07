import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import Layout from '../components/design/layout';
import { getSiteConfig } from '../lib/strapi';
import HeadSeo from '../components/seo/head-seo';
import Config from '../interfaces/config';

type AboutMeProps = {
    config: Config;
};

const AboutMePage: FC<AboutMeProps> = (props: AboutMeProps) => {
    return (
        <Layout page="about">
            <HeadSeo config={props.config} postSEO={false} />
            <section>
                <div className="prose lg:prose-xl">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tenetur harum quos, repellat
                        nihil porro nostrum, culpa at adipisci rem corrupti ad expedita ex? Voluptatibus esse veritatis
                        incidunt culpa placeat.
                    </p>
                </div>
            </section>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const config = await getSiteConfig();
    // I don't plan to edit this page very often, so I don't
    // see the point of putting it inside the cms right now.
    return {
        props: { config },
        revalidate: 1,
    };
};

export default AboutMePage;
