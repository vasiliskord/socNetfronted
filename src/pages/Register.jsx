import { useState, useEffect } from "react";
import { Center, Text, TextInput, Container, Button } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { registerUser, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isLoading, isSuccess, message } = useSelector(
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

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(registerUser(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Center mt={40}>
        <Text style={{ fontWeight: "700", fontSize: "x-large" }}>Register</Text>
      </Center>
      <form onSubmit={onSubmit}>
        <Container style={{ width: "20%" }} mt={50}>
          <TextInput
            onChange={onChange}
            name="name"
            value={name}
            id="name"
            size="sm"
            placeholder="Your name"
            styles={{
              input: { backgroundColor: "white", border: "1px solid black" },
            }}
            label="Username"
            required
          ></TextInput>
        </Container>
        <Container style={{ width: "20%" }} mt={10}>
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
        <Container style={{ width: "20%" }} mt={10}>
          <TextInput
            onChange={onChange}
            name="password2"
            id="password2"
            value={password2}
            size="sm"
            placeholder="Confirm password"
            styles={{
              input: { backgroundColor: "white", border: "1px solid black" },
            }}
            label="Confirm password"
            required
          ></TextInput>
        </Container>
        <Center mt={20}>
          <Button type="submit">Submit</Button>
        </Center>
      </form>
    </>
  );
}

export default Register;
