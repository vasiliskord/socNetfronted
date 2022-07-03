import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import followService from "./followService"
const user = JSON.parse(localStorage.getItem("user"))

const initialState ={
    following: [],
    followers: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
}

//follow user 
export const follow = createAsyncThunk(
    "follow/follow",
    async (userData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await followService.follow(userData,token);
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
)

export const followSlice = createSlice({
    name: "follow",
    initialState,
    reducers: {
        reset:(state)=>{
            state.following = []
            state.followers = []

        }
    },
    extraReducers:(builder)=> {
        builder 
        .addCase(follow.pending, (state, action) => {
            state.isLoading = true
        }
        )
        .addCase(follow.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
            state.following = action.payload.following
            state.followers = action.payload.followers
        }
        )
        .addCase(follow.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        }
        )
    }
})

export const {reset} = followSlice.actions
export default followSlice.reducer

