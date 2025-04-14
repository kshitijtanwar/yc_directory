export interface StartupCardType {
    _id: number;
    _createdAt: Date;
    views: number;
    author: {
        _id: number;
        name: string;
    };
    description: string;
    image: string;
    category: string;
    title: string;
}
