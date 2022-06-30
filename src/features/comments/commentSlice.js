import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "./commentService";

const initialState = {
  comments: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//get post id

//create comment to post
export const createComment = createAsyncThunk(
  "post/createComment",
  async (commentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await commentService.createComment(commentData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//get comment by id
export const getCommentById = createAsyncThunk(
  "post/getCommentById",
  async (commentId, thunkAPI) => {
    try {
      return await commentService.getCommentById(commentId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//create reply comment to comment
export const createReplyComment = createAsyncThunk(
  "post/createReplyComment",
  async (replyCommentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await commentService.createReplyComment(replyCommentData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//get reply comments by commentId
export const getReplyComments = createAsyncThunk(
  "post/getReplyComments",
  async (commentId, thunkAPI) => {
    try {
      return await commentService.getReplyComments(commentId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);




export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.comments.push(action.payload);
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Comment created successfully";
        
      })
      .addCase(createComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCommentById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCommentById.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getCommentById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createReplyComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createReplyComment.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) => {
          if (post._id === action.payload.postId) {
            post.comments = post.comments.map((comment) => {
              if (comment._id === action.payload.commentId) {
                comment.replies.push(action.payload.reply);
              }
              return comment;
            });
          }
          return post;
        });
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Reply created successfully";
      })
      .addCase(createReplyComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getReplyComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReplyComments.fulfilled, (state, action) => {
        state.replies = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getReplyComments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default commentSlice.reducer;
export const { reset } = commentSlice.actions;
