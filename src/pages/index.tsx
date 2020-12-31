import { GetStaticProps } from 'next';
import { FC } from 'react';
import Post from '../interfaces/post';
import { getArticles } from '../lib/strapi';

type IndexProps = {
    articles: Post[];
};

const IndexPage: FC<IndexProps> = (props: IndexProps) => {
    return (
        <div>
            <h1>My articles</h1>
            {props.articles.map((article) => {
                return (
                    <div key={article.id}>
                        <h2>{article.title}</h2>
                        <div>{article.content}</div>
                    </div>
                );
            })}
        </div>
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
