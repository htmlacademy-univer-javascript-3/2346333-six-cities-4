type Review = {
    id: number;
    author: string;
    avatar: {src:string; alt: string};
    rating: number;
    date: string;
    description: string;
};

export type Reviews = Review[];
