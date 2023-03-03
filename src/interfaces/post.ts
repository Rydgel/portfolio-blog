import Category from '@interfaces/category';
import Content from '@interfaces/content';
import Image from '@interfaces/image';

interface Post extends Content {
    id: number;
    title: string;
    description: string;
    content: string;
    display_time: string;
    slug: string;
    published_at: string;
    created_at: string;
    updated_at: string;
    image?: Image;
    categories: Category[];
}

export default Post;
