export type Comment = {
    id: string;
    date: string;
    user: UserData;
    comment: string;
    rating: number;
};

export type UserData = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
    email: string;
    token: string;
};

export type Comments = Comment[];

export type CommentData = {
    comment: string;
    rating: number;
    offerId: string;
  };
