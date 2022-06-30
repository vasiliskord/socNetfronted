import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";
import { Container, Text, Button } from "@mantine/core";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";


function PostItem({ post}) {

  const navigate = useNavigate();


  const handleClick = ()=>{
    navigate(`/post/${post._id}`)
    
  }

  return (
    <Container
      onClick={handleClick}
      display="flex"
      justifyContent="center"
      style={{
        cursor:"pointer",
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
        <Text size="xs">{new Date(post.createdAt).toLocaleDateString("en-US")}</Text>
      </Container>
      <Text
        style={{ fontSize: "x-large", fontWeight: "600", marginBottom: "10px" }}
      >
        {post.title}
      </Text>
      <Text style={{display:"inline-block",maxWidth:"50ch",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{post.content}</Text>
    </Container>
  );
}

export default PostItem;
