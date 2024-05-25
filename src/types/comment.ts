type Comment = {
    id: string;
    date: string;
    user: User;
    comment: string;
    rating: number;
};

export type User = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
    email: string;
    token: string;
};

export type Comments = Comment[];
