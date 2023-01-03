import React, { useState } from "react";
import styled from "styled-components";
import CreateOrLoginComponent from "./UI/CreateOrLoginComponent";
import Form from "./UI/Form";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { useInput } from "../hooks/useInput.hook";

const Container = styled.div`
  margin-top: 5rem;
  max-width: 20rem;
  width: 100%;
  height: auto;
  margin: 7rem auto;
`;

const RegisterPage = () => {
  const email = useInput({ initialValue: "" });
  const password = useInput({ initialValue: "" });
  const userName = useInput({ initialValue: "" });

  const handleRegister = (e: React.MouseEvent) => {
    console.log("click");
  };

  return (
    <Container>
      <Form titleText="Register here">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
          id="email"
          labelText="Email"
        />
        <Input
          type="text"
          name="user_name"
          placeholder="User name"
          value={userName.value}
          onChange={userName.onChange}
          id="user_name"
          labelText="User name"
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password.value}
          onChange={password.onChange}
          id="password"
          labelText="Password"
        />

        <Button onClick={handleRegister}>Register</Button>
      </Form>
      <CreateOrLoginComponent
        message="Have an account?"
        linkName="Login"
        linkTo="/login"
      />
    </Container>
  );
};

export default RegisterPage;
