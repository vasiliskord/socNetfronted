import axios from "axios"
const API_URL="/api/posts/"

//create post
const createPost = async (postData,token) => {
    const response = await axios.post(API_URL, postData, {
        headers: {
        Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

//get all posts
const getPosts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

//edit post
const editPost = async (postId,postData,token) => {
    const response = await axios.put(API_URL+postId, postData, {
        headers: {
        Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

//delete post
const deletePost = async (postId,token) => {
    const response = await axios.delete(API_URL+postId, {
        headers: {
        Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

const postService = { createPost, getPosts, editPost, deletePost };
export default postService;
