export interface StartupCardType {
    _id: number;
    _createdAt: Date;
    views: number;
    author: {
        _id: number;
        name: string;
        image: string;
    };
    description: string;
    image: string;
    category: string;
    title: string;
}

export interface StartupType {
    slug: {
        current: string;
        _type: "slug";
    };
    author: {
        _id: string;
        name: string;
        image: string;
        bio: string;
        username: string;
    };
    views: number;
    description: string;
    category: string;
    image: string;
    _id: string;
    title: string;
    _createdAt: Date;
    pitch: string;
}
