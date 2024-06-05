export type Review = {
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

export type Reviews = Review[];

export type ReviewData = {
    comment: string;
    rating: number;
    offerId: string;
  };
