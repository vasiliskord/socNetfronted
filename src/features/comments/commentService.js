import axios from "axios";


const API_URL = `/api/posts/62bb1c185bc8edee39332439/comments/`;


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

const commentService = { createComment, getCommentById, createReplyComment, getReplyComments };
export default commentService;