import Category from '@interfaces/category';

interface Content {
    id: number;
    title: string;
    description: string;
    display_time: string;
    slug: string;
    published_at: string;
    categories?: Category[];
}

export default Content;
