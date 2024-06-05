import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CommentData, Comments, Comment } from '../../types/comment';
import { AppDispatch } from '../../types/state';
import { State } from '../../types/state';
import { APIRoute, NameSpace } from '../../const';

export const fetchReviewsAction = createAsyncThunk<Comments, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(`${NameSpace.ReviewsData}/fetchReviews`,
  async (id, { extra: api }) => {
    const { data } = await api.get<Comments>(`${APIRoute.Comments}/${id}`);
    return data;
  });


export const postReviewAction = createAsyncThunk<Comment, CommentData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  `${NameSpace.ReviewsData}/postReview`,
  async ({ comment, rating, offerId }, { extra: api }) => {
    const { data } = await api.post<Comment>(`${APIRoute.Comments}/${offerId}`, {
      comment,
      rating,
    });
    return data;
  }
);
