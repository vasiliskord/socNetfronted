import React from "react";
import {
  Center,
  Container,
  Text,
  Textarea,
  TextInput,
  Button,
} from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPost, reset } from "../features/posts/postSlice";
import { toast } from "react-toastify";

function CreatePost() {
  const [postData, setPostData] = useState({
    title: "",
    content: "",
  });

  const { user } = useSelector((state) => state.auth);

  const { posts, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.posts
  );

  const { title, content } = postData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) {
        toast.error(message);
        navigate("/login")
    }
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch, user]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ title, content }));
    setPostData({
      title: "",
      content: "",
    });
    navigate("/");
  };

  const onChange = (e) => {
    setPostData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Container
        display="flex"
        justifyContent="center"
        style={{
          borderRadius: "10px",
          maxWidth: "900",
          backgroundColor: "white",
          marginTop: "50px",
          height: "100%",
          padding: "20px",
          boxShadow:
            " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 0px 40px",
        }}
      >
        <form onSubmit={onSubmit}>
          <Center>
            <Text style={{ fontSize: "x-large", fontWeight: "700" }}>
              Create a Post
            </Text>
          </Center>
          <TextInput
            name="title"
            type="title"
            value={title}
            label="Title"
            placeholder="Title"
            required
            onChange={onChange}
          />
          <Textarea
            name="content"
            type="content"
            value={content}
            label="Description"
            placeholder="Description"
            required
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
    </>
  );
}

export default CreatePost;
