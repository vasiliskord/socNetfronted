import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";
import { Container, Text, Button } from "@mantine/core";

function PostItem({ post }) {
  return (
    <Container
      display="flex"
      justifyContent="center"
      style={{
        borderRadius: "10px",
        maxWidth: "900",
        backgroundColor: "white",
        marginTop: "10px",
        marginBottom: "10px",
        height: "100%",
        padding: "20px",
        boxShadow:
          " rgba(0, 0, 0, 0.25) 10px 4px 8px, rgba(0, 0, 0, 0.22) 0px 0px 40px",
      }}
    >
      <Container style={{ padding: 0 }}>
        <Text size="xs">{new Date(post.createdAt).toLocaleDateString("en-US")}</Text>
      </Container>
      <Text
        style={{ fontSize: "x-large", fontWeight: "600", marginBottom: "10px" }}
      >
        {post.title}
      </Text>
      <Text style={{maxWidth:"13ch"}}>{post.content}</Text>
    </Container>
  );
}

export default PostItem;
