import React from "react";
import { getCommentsByPostId } from "../features/comments/commentSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  Container,
  Text,
  Textarea,
  TextInput,
  Button,
  Center,
} from "@mantine/core";
import GetComment from "./GetComment";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

function CommentItem({post}) {
  const { comment, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.comments
  );
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getCommentsByPostId(post._id));
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

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
      ></Container>
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
        {comment.length > 0 ? (
          <>
            <Container>
              {comment.map((comment) => {
                return <GetComment key={comment._id} comment={comment} />;
              })}
            </Container>
          </>
        ) : (
          <Container>
            {" "}
            <Text>There are no comments</Text>
          </Container>
        )}
      </Container>
    </>
  );
}

export default CommentItem;
