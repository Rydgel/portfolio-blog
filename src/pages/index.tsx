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
        <Layout>
            <article className="prose lg:prose-2xl prose-bblue max-w-none">
                <h1>My articles</h1>
                <h2>test h2</h2>
                <h3>test h3</h3>
                <h4>test h4</h4>
                <h5>test h5</h5>
                <p>
                    Lorem ipsum <a href="">dolor</a> sit amet consectetur adipisicing elit. Rerum mollitia iusto
                    corrupti at repellat necessitatibus quae cumque, recusandae dicta quos ex est temporibus labore
                    velit commodi. Quasi totam ipsum quibusdam?
                </p>
                {props.articles.map((article) => {
                    return (
                        <div key={article.id}>
                            <h2>{article.title}</h2>
                            <div>{article.description}</div>
                        </div>
                    );
                })}
            </article>
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
