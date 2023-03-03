import Image from '@interfaces/image';

interface Config {
    site_title: string;
    site_title_short: string;
    site_title_alt?: string;
    site_logo: Image;
    site_url: string;
    strapi_url: string;
    path_prefix: string;
    site_description: string;
    site_rss: string;
    site_fb_app?: string;
    user_twitter?: string;
    ga?: string;
}

export default Config;
