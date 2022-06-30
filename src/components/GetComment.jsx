import React from "react";
import { Container, Text, Button } from "@mantine/core";

function GetComment({ comment }) {
  return (
    <Container
      display="flex"
      justifyContent="center"
      style={{
        cursor: "pointer",
        borderRadius: "10px",
        maxWidth: "900",
        backgroundColor: "gray",
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
          {new Date(comment.createdAt).toLocaleDateString("en-US")}
        </Text>
      </Container>
      <Text
        style={{  marginBottom: "10px" }}
      >
        {comment.value}
      </Text>
    </Container>
  );
}

export default GetComment;
