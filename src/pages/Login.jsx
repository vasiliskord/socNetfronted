import React from 'react'
import { Center, Text, TextInput, Container, Button } from "@mantine/core";
import {useState,useEffect} from "react"

function Login() {
  const [data,setData]=useState({
    email:"",
    password:""
  })

  const {email,password} = data

  const onChange = (e)=>(
    setData((state)=>({
      ...data,[e.target.name]:e.target.value
    }))
  )

  const onSubmit =(e)=>{
    e.preventDefault()
  }

  return (
    <>
      <Center mt={40}>
        <Text style={{ fontWeight: "700", fontSize: "x-large" }}>Login</Text>
      </Center>
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
        <Button onSubmit={onSubmit}>Login</Button>
      </Center>
    </>
  );
}

export default Login