import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import { SiGithub, SiTwitter, SiMinutemailer } from 'react-icons/si';
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
                <div>
                    <h2 className="text-5xl font-bold block text-center mb-14">About me</h2>
                    <div className="prose lg:prose-xl dark:prose-dark dark:lg:prose-dark-xl">
                        <p className="text-center">
                            Web <em>&amp;</em> mobile developer with a soft spot for typography and functional
                            programming. I’ve been working in the field of web development for 15 years and I’m still
                            looking to improve and use the latest technologies for the job. I’m also interested in 3D
                            rendering and the making of video games.
                            <br />
                            My favorite languages right now are <a href="https://www.rust-lang.org/">Rust</a>,{' '}
                            <a href="https://www.typescriptlang.org/">Typescript</a>,{' '}
                            <a href="https://www.haskell.org/">Haskell</a> and{' '}
                            <a href="https://elixir-lang.org/">Elixir</a>.
                            <br />
                            Feel free to contact me.
                        </p>
                        <h3 className="text-center">Find me on</h3>
                    </div>
                </div>
                <div className="mt-4">
                    <section className="text-base lg:text-xl">
                        <ul className="text-center">
                            <li className="mb-2">
                                <a href="mailto:jerome.mahuet@gmail.com" className="no-underline hover:underline">
                                    <SiMinutemailer className="inline-block mr-3" />
                                    jerome.mahuet@gmail.com
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://github.com/rydgel" className="no-underline hover:underline">
                                    <SiGithub className="inline-block mr-3" />
                                    https://github.com/rydgel
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://twitter.com/rydgel" className="no-underline hover:underline">
                                    <SiTwitter className="inline-block mr-3" />
                                    https://twitter.com/rydgel
                                </a>
                            </li>
                        </ul>
                    </section>
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
