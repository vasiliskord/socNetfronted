import { useState, useEffect } from "react";
import { Center, Text, TextInput, Container, Button } from "@mantine/core";

function Register() {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    password2:""
  }) 
  const {name,email,password,password2} = formData

  const onChange = (e)=>{
    setFormData((state)=>({
      ...state,[e.target.name]:e.target.value
    }))
  }

  const onSubmit=(e)=>{
    e.preventDefault()
  }


  return (
    <>
      <Center mt={40}>
        <Text style={{ fontWeight: "700", fontSize: "x-large" }}>Register</Text>
      </Center>
      <Container style={{ width: "20%" }}>
        <TextInput
          onChange={onChange}
          name="name"
          value={name}
          id="name"
          size="sm"
          placeholder="Your name"
          styles={{
            input: { backgroundColor: "#636363", border: "1px solid black" },
          }}
          label="Username"
          required
        ></TextInput>
      </Container>
      <Container style={{ width: "20%" }}>
        <TextInput
          onChange={onChange}
          name="email"
          id="email"
          value={email}
          size="sm"
          placeholder="Your email"
          styles={{
            input: { backgroundColor: "#636363", border: "1px solid black" },
          }}
          label="Email"
          required
        ></TextInput>
      </Container>
      <Container style={{ width: "20%" }}>
        <TextInput
          onChange={onChange}
          name="password"
          id="password"
          value={password}
          size="sm"
          placeholder="Your password"
          styles={{
            input: { backgroundColor: "#636363", border: "1px solid black" },
          }}
          label="Password"
          required
        ></TextInput>
      </Container>
      <Container style={{ width: "20%" }}>
        <TextInput
          onChange={onChange}
          name="password2"
          id="password2"
          value={password2}
          size="sm"
          placeholder="Confirm password"
          styles={{
            input: { backgroundColor: "#636363", border: "1px solid black" },
          }}
          label="Confirm password"
          required
        ></TextInput>
      </Container>
      <Container>
        <Button onSubmit={onSubmit}>Submit</Button>
      </Container>
    </>
  );
}

export default Register;
