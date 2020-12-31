import Post from './post';

interface Category {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
    articles: Post[];
}

export default Category;
