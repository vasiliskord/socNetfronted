import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice"
import postReducer from "../features/posts/postSlice"
import commentReducer from "../features/comments/commentSlice"
import followReducer from "../features/follow/followSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    comments: commentReducer,
    follow: followReducer
  },
});
