import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { follow } from "../features/auth/authSlice";
import ProfileForm from "../components/ProfileForm";
import {
  Container,
  Text,
  Textarea,
  TextInput,
  Button,
  Center,
} from "@mantine/core";
import useGetUser from "../components/useGetUser";
import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();
  const { status, data } = useGetUser(id);

  return(
    <>
    {data&&<ProfileById user={data}/>}
    </>
  )
}

function ProfileById({ user }) {
  return (
    <>
      <ProfileForm user={user} />
    </>
  );
}

export default Profile;
