import Image from './image';

interface Experiment {
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
}

export default Experiment;
