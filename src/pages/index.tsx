import { GetStaticProps } from 'next';
import React, { FC } from 'react';
import Layout from '../components/design/layout';
import Post from '../interfaces/post';
import { getArticles } from '../lib/strapi';

type IndexProps = {
    articles: Post[];
};

const IndexPage: FC<IndexProps> = (props: IndexProps) => {
    return (
        <Layout page="index">
            <section>
                <h2>Latest articles</h2>
                {props.articles.map((article) => {
                    return (
                        <div key={article.id}>
                            <h3>{article.title}</h3>
                            <div>{article.description}</div>
                        </div>
                    );
                })}
                <h2>Latest experiments</h2>
            </section>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const articles = await getArticles();
    return {
        props: { articles },
        revalidate: 1,
    };
};

export default IndexPage;
