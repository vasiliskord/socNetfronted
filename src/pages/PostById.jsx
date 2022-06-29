import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useGetPost from '../components/useGetPost'
import {Container,Text} from "@mantine/core"
import { useEffect } from 'react';


function PostById() {
    //get post id from url
    const { id } = useParams();
    //get post from store
    const { status, data } = useGetPost(id);

  return (
    <>
      {data&&<GetPost post={data}/>}
    </>
  )
}

function GetPost({post}){
  return (
    <>
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
          style={{
            fontSize: "x-large",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          {post.title}
        </Text>
        <Text
          
        >
          {post.content}
        </Text>
      </Container>
    </>
  );
}

export default PostById