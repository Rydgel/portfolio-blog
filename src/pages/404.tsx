import React, { FC } from 'react';
import Head from 'next/head';
import Layout from '../components/design/layout';

const NotFoundPage: FC = () => {
    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
            </Head>
            <Layout page="index">
                <p className="inline-block w-full text-9xl font-bold text-center leading-normal">
                    404
                    <br />
                    Not Found
                </p>
            </Layout>
        </>
    );
};

export default NotFoundPage;
