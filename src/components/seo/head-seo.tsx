import { Component } from 'react';
import Head from 'next/head';
import config from '../../config/config';
import urljoin from 'url-join';

type HeadSeoProps = {
    postNode: string;
    postPath: string;
    postSEO: boolean;
};

class HeadSeo extends Component<HeadSeoProps> {
    render(): JSX.Element {
        const { postNode, postPath, postSEO } = this.props;
        let title: string;
        let description: string;
        let image: string;
        let postURL: string;

        if (postSEO) {
            const postMeta = postNode.frontmatter;
            ({ title } = postMeta);
            description = postMeta.description ? postMeta.description : postNode.excerpt;
            image = postMeta.thumbImage ? postMeta.thumbImage.src : config.siteLogo;

            postURL = urljoin(config.siteUrl, config.pathPrefix, postPath);
        } else {
            title = config.siteTitle;
            description = config.siteDescription;
            image = config.siteLogo;
        }

        image = urljoin(config.siteUrl, config.pathPrefix, image);
        const blogURL = urljoin(config.siteUrl, config.pathPrefix);
        const schemaOrgJSONLD: any = [
            {
                '@context': 'http://schema.org',
                '@type': 'WebSite',
                url: blogURL,
                name: title,
                alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
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
                    'alternateName': config.siteTitleAlt ? config.siteTitleAlt : '',
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
                <meta name="description" content={description} />
                <meta name="image" content={image} />

                {/* Schema.org tags */}
                <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

                {/* OpenGraph tags */}
                <meta property="og:url" content={postSEO ? postURL : blogURL} />
                {postSEO ? <meta property="og:type" content="article" /> : null}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Head>
        );
    }
}

export default HeadSeo;
