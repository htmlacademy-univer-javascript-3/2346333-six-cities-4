import { LoadingStatus, NameSpace } from '../../const';
import { Comments } from '../../types/comment';
import { State } from '../../types/state';


export const getReviews = (state: State): Comments => state[NameSpace.ReviewsData].reviews;
export const getIsReviewsLoading = (state: State): boolean => state[NameSpace.ReviewsData].isReviewsLoading;
export const getIsReviewsStatusSubmitting = (state: State): boolean => state[NameSpace.ReviewsData].isReviewsStatusSubmitting;
export const getReviewsHasError = (state: State): LoadingStatus => state[NameSpace.ReviewsData].reviewsStatus;
export const getHasError = (state: State): boolean => state[NameSpace.ReviewsData].hasError;
