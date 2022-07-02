import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { createComment, reset } from "../features/comments/commentSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Container,
  Text,
  Textarea,
  TextInput,
  Button,
  Center,
} from "@mantine/core";

function CommentForm({ post }) {
  const [commentData, setCommentData] = useState({
    value: "",
  });

  const { user } = useSelector((state) => state.auth);

  const { comments, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.comments
  );

  const { value } = commentData;
  const dispatch = useDispatch((state)=>state.comments);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      toast.error(message);
      navigate("/login");
    }
    if (isError) {
      toast.error(message);
    }
  }, [isError, isSuccess, message, navigate, dispatch, user]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment({value,postId:post._id}));
    setCommentData({
      value: "",
    });
  };

  const onChange = (e) => {
    setCommentData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Container mt={50}>
        <Center>
          <Text style={{ fontSize: "large", fontWeight: "700" }}>
            Comment Section
          </Text>
        </Center>
        <Container mt={30}>
          <form onSubmit={onSubmit}>
            <Textarea
              name="value"
              type="value"
              value={value}
              placeholder="comment"
              onChange={onChange}
            />
            <Container
              display="flex"
              justifyContent="center"
              mt={20}
              style={{ maxWidth: "100px" }}
            >
              <Button type="submit">Submit</Button>
            </Container>
          </form>
        </Container>
      </Container>
    </>
  );
}

export default CommentForm;
