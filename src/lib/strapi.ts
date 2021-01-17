import axios from 'axios';
import Category from '../interfaces/category';
import Config from '../interfaces/config';
import Post from '../interfaces/post';

const API_ROOT = () => {
    const environment = process.env.NODE_ENV || 'development';
    if (environment == 'production') {
        // todo, change url for prod
        return '';
    } else {
        return 'http://localhost:1337';
    }
};

export async function getSiteConfig(): Promise<Config> {
    const response = await axios.get<Config>(`${API_ROOT()}/config`);
    return response.data;
}

export async function getArticles(): Promise<Post[]> {
    const response = await axios.get<Post[]>(`${API_ROOT()}/articles?_sort=display_time:DESC`);
    return response.data;
}

export async function getRecentArticles(): Promise<Post[]> {
    const response = await axios.get<Post[]>(`${API_ROOT()}/articles?_limit=5&_sort=display_time:DESC`);
    return response.data;
}

export async function getArticleBySlug(slug: string | string[]): Promise<Post> {
    const response = await axios.get<Post[]>(`${API_ROOT()}/articles?slug=${slug}`);
    return response.data[0];
}

export async function getArticlesByCategory(cat: string): Promise<Post[]> {
    const response = await axios.get<Post[]>(`${API_ROOT()}/articles?categories.name=${cat}`);
    return response.data;
}

export async function getCategories(): Promise<Category[]> {
    const response = await axios.get<Category[]>(`${API_ROOT()}/categories`);
    return response.data;
}
