import axios from "axios";
// 62bb1c185bc8edee39332439/comments/


const API_URL = `/api/posts/`;


//get all comments
const getComments = async (postId) => {
    const response = await axios.get(API_URL+postId+"/comments");
    return response.data;
}

//get all comments from post by postId
const getCommentsByPostId = async (postId) => {
    const response = await axios.get(API_URL+postId+"/comments");
    return response.data;
}

//create comment

const createComment = async ( commentData, token) => {
  const response = await axios.post(API_URL , commentData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}


//get comment by id
const getCommentById = async (commentId) => {
  const response = await axios.get(API_URL + commentId);
  return response.data;
}


//create reply comment to comment (commentId)
const createReplyComment = async (commentId, replyCommentData, token) => {
  const response = await axios.post(API_URL + commentId+"/reply", replyCommentData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}


//get reply comments by commentId
const getReplyComments = async (commentId) => {
  const response = await axios.get(API_URL + commentId+"/reply");
  return response.data;
}

const commentService = {
  getCommentsByPostId,
  createComment,
  getCommentById,
  createReplyComment,
  getReplyComments,
  getComments,
};
export default commentService;