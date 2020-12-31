import Category from './category';

interface Post {
    id: number;
    title: string;
    content: string;
    display_time: string;
    slug: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    image?: string;
    categories: Category[];
}

export default Post;
