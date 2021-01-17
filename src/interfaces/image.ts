type Image = {
    id: string;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
        thumbnail: SubImage;
        medium: SubImage;
        small: SubImage;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: string;
    created_at: string;
    updated_at: string;
};

type SubImage = {
    name: string;
    hash: string;
    ext: string;
    width: number;
    height: number;
    size: number;
    path?: string;
    url: string;
};

export default Image;
