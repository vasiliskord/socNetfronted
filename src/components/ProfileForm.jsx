import React from 'react'
import {
  Container,
  Text,
  Textarea,
  TextInput,
  Button,
  Center,
} from "@mantine/core";
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import {follow} from '../features/follow/followSlice'
import { useNavigate } from 'react-router-dom'

function ProfileForm({user}) {
    const [profileData, setProfileData] = useState({
        follower_count:0,
        follwing: [""],
        followers: [""],
    })

    const {follower,following} = useSelector((state) => state.follow);
    const { follower_count, follwing, followers } = profileData;
    const { user: loggedInUser } = useSelector((state) => state.auth)
    const dispatch = useDispatch((state)=>state.follow);
    const navigate = useNavigate()

    useEffect(() => {
        if (!loggedInUser) {
            navigate("/login");
        }
    }, [dispatch, loggedInUser]);

    const onClick = () => {
        console.log(follower_count)
        dispatch(follow({follower_count,follwing,followers,userId:user.id}))
        setProfileData({
            follower_count:0,
            name: "",
            follwing: [""],
            followers: [""],
        })
    }


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
      <Center>
        <Button onClick={onClick}>Follow</Button>
      </Center>
    </>
  );
}

export default ProfileForm