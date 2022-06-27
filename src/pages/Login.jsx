import React from "react";
import { Center, Text, TextInput, Container, Button } from "@mantine/core";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { login, reset } from "../features/auth/authSlice";
import { useForm } from "@mantine/form";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Center mt={40}>
        <Text style={{ fontWeight: "700", fontSize: "x-large" }}>Login</Text>
      </Center>
      <form onSubmit={onSubmit}>
        <Container style={{ width: "20%" }} mt={50}>
          <TextInput
            onChange={onChange}
            name="email"
            id="email"
            value={email}
            size="sm"
            placeholder="Your email"
            styles={{
              input: { backgroundColor: "white", border: "1px solid black" },
            }}
            label="Email"
            required
          ></TextInput>
        </Container>
        <Container style={{ width: "20%" }} mt={10}>
          <TextInput
            onChange={onChange}
            name="password"
            id="password"
            value={password}
            size="sm"
            placeholder="Your password"
            styles={{
              input: { backgroundColor: "white", border: "1px solid black" },
            }}
            label="Password"
            required
          ></TextInput>
        </Container>
        <Center mt={20}>
          <Button type="submit">Login</Button>
        </Center>
      </form>
    </>
  );
}

export default Login;
