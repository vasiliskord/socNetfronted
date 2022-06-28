import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Center, Container, Text } from "@mantine/core";

function PostId({post}) {


  return (
    <Container
      display="flex"
      justifyContent="center"
      style={{
        borderRadius: "10px",
        maxWidth: "900",
        backgroundColor: "white",
        maxHeight: "100%",
        marginTop: "10px",
        marginBottom: "10px",
        height: "100%",
        padding: "20px",
        boxShadow:
          " rgba(0, 0, 0, 0.25) 10px 4px 8px, rgba(0, 0, 0, 0.22) 0px 0px 40px",
      }}
    >
      <Container style={{ padding: 0 }}>
        <Text size="xs">
          {new Date(post.createdAt).toLocaleDateString("en-US")}
        </Text>
      </Container>
      <Text
        style={{ fontSize: "x-large", fontWeight: "600", marginBottom: "10px" }}
      >
        {post.title}
      </Text>
      <Text>{post.content}</Text>
    </Container>
  );
}

export default PostId;
