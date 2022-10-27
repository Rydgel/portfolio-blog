import Category from '../interfaces/category';
import Config from '../interfaces/config';
import Experiment from '../interfaces/experiment';
import Post from '../interfaces/post';

const API_ROOT = () => {
    /*const environment = process.env.NODE_ENV || 'development';
    if (environment == 'production') {
        return 'https://api.jeromem.dev';
    } else {
        return 'http://localhost:1337';
    }*/
    return 'https://api.jeromem.dev';
};

export async function getSiteConfig(): Promise<Config> {
    const request = await fetch(`${API_ROOT()}/config`);
    const response = await request.json();
    return response;
}

export async function getArticles(): Promise<Post[]> {
    const request = await fetch(`${API_ROOT()}/articles?_sort=display_time:DESC`);
    const response = await request.json();
    return response;
}

export async function getRecentArticles(): Promise<Post[]> {
    const request = await fetch(`${API_ROOT()}/articles?_limit=5&_sort=display_time:DESC`);
    const response = await request.json();
    return response;
}

export async function getArticleBySlug(slug: string | string[]): Promise<Post> {
    const request = await fetch(`${API_ROOT()}/articles?slug=${slug}`);
    const response = await request.json();
    return response[0];
}

export async function getArticlesByCategory(cat: string): Promise<Post[]> {
    const request = await fetch(`${API_ROOT()}/articles?categories.name=${cat}`);
    const response = await request.json();
    return response;
}

export async function getExperiments(): Promise<Experiment[]> {
    const request = await fetch(`${API_ROOT()}/experiments?_sort=display_time:DESC`);
    const response = await request.json();
    return response;
}

export async function getRecentExperiments(): Promise<Experiment[]> {
    const request = await fetch(`${API_ROOT()}/experiments?_limit=5&_sort=display_time:DESC`);
    const response = await request.json();
    return response;
}

export async function getExperimentBySlug(slug: string | string[]): Promise<Experiment> {
    const request = await fetch(`${API_ROOT()}/experiments?slug=${slug}`);
    const response = await request.json();
    return response[0];
}

export async function getCategories(): Promise<Category[]> {
    const request = await fetch(`${API_ROOT()}/categories`);
    const response = await request.json();
    return response;
}
