import { Component } from 'react';
import Head from 'next/head';
import urljoin from 'url-join';
import Config from '../../interfaces/config';
import Post from '../../interfaces/post';
import Experiment from '../../interfaces/experiment';

type HeadSeoProps = {
    config: Config;
    postNode?: Post | Experiment;
    postPath?: string;
    postSEO: boolean;
};

class HeadSeo extends Component<HeadSeoProps> {
    render(): JSX.Element {
        const { config, postNode, postPath, postSEO } = this.props;
        let title: string;
        let description: string;
        let image: string;
        let postURL: string;

        if (postSEO && postNode) {
            title = postNode.title;
            description = postNode.description;
            image = postNode.image ? postNode.image.url : config.site_logo.url;

            postURL = urljoin(config.site_url, config.path_prefix, postPath);
        } else {
            title = config.site_title;
            description = config.site_description;
            image = config.site_logo.url;
        }

        image = urljoin(config.strapi_url, image);
        const blogURL = urljoin(config.site_url, config.path_prefix).replace(/\/$/, '');
        const schemaOrgJSONLD: Array<unknown> = [
            {
                '@context': 'http://schema.org',
                '@type': 'WebSite',
                'url': blogURL,
                'name': title,
                'alternateName': config.site_title_alt ? config.site_title_alt : '',
            },
        ];

        if (postSEO) {
            schemaOrgJSONLD.push(
                {
                    '@context': 'http://schema.org',
                    '@type': 'BreadcrumbList',
                    'itemListElement': [
                        {
                            '@type': 'ListItem',
                            'position': 1,
                            'item': {
                                '@id': postURL,
                                'name': title,
                                image,
                            },
                        },
                    ],
                },
                {
                    '@context': 'http://schema.org',
                    '@type': 'BlogPosting',
                    'url': blogURL,
                    'name': title,
                    'alternateName': config.site_title_alt ? config.site_title_alt : '',
                    'headline': title,
                    'image': {
                        '@type': 'ImageObject',
                        'url': image,
                    },
                    description,
                },
            );
        }

        return (
            <Head>
                {/* General tags */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="image" content={image} />

                {/* Schema.org tags */}
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    title="RSS feed for Jerome{m}"
                    href={config.site_rss}
                />

                {/* Schema.org tags */}
                <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

                {/* OpenGraph tags */}
                <meta property="og:url" content={postSEO ? postURL : blogURL} />
                {postSEO ? <meta property="og:type" content="article" /> : null}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="fb:app_id" content={config.site_fb_app ? config.site_fb_app : ''} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content={config.user_twitter ? config.user_twitter : ''} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            </Head>
        );
    }
}

export default HeadSeo;
