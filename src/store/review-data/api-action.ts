import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Review, ReviewData, Reviews } from '../../types/review';
import { AppDispatch } from '../../types/state';
import { State } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';

export const fetchReviewsAction = createAsyncThunk<Reviews, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${NameSpace.ReviewsData}/fetchReviews`,
  async (id, { extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
    return data;
  });


export const postReviewAction = createAsyncThunk<Review, ReviewData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.ReviewsData}/postReview`,
  async ({ comment, rating, offerId }, { extra: api }) => {
    const { data } = await api.post<Review>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    return data;
  }
);
