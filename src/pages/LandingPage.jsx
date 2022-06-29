import React from "react";
import { Center, Container, Text, Button } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import PostItem from "../components/PostItem";
import { getPosts, reset } from "../features/posts/postSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

function LandingPage() {
  const { posts, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.posts
  );
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getPosts());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  const onClick = () => {
    if (user) {
      navigate("/createpost");
    } else {
      toast.error("You must be logged in to create a post");
    }
  };

  return (
    <>
      <Container
        display="flex"
        justifyContent="center"
        style={{
          borderRadius: "10px",
          width: "fit-content",
          backgroundColor: "white",
          marginTop: "50px",
          height: "100%",
          padding: "20px",
          paddingBottom: "0px",
        }}
      >
        <Button onClick={onClick}>
          <Center>Submit a post</Center>
        </Button>
      </Container>
      <Container
        display="flex"
        justifyContent="center"
        style={{
          borderRadius: "10px",
          maxWidth: "900",
          backgroundColor: "white",
          marginTop: "20px",
          marginBottom: "50px",
          height: "100%",
          padding: "20px",
          boxShadow:
            " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 0px 40px",
        }}
      >
        {posts.length > 0 ? (
          <>
            <Container>
              {posts.map((post) => {
                return <PostItem key={post._id}   post={post} />;
              })}
            </Container>
          </>
        ) : (
          <Container>
            {" "}
            <Text>There are no posts</Text>
          </Container>
        )}
      </Container>
    </>
  );
}

export default LandingPage;
