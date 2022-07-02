import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Container,Text,Textarea,TextInput,Button,Center} from "@mantine/core";


function Profile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [dispatch, user]);

  return (
    <>
        <Container
        display="flex"
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
        {user && (
            <>
            <Text style={{ fontSize: "large", fontWeight: "700" }}>
                {user.name}
            </Text>
            </>
        )}
      </Container>
    </>
  );
}

export default Profile;
