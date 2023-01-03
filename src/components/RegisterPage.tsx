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
  const email = useInput({
    initialValue: "",
    validations: { isEmail: true, isEmpty: true },
  });
  const password = useInput({
    initialValue: "",
    validations: { minLength: 4, maxLength: 32, isEmpty: true },
  });
  const userName = useInput({ initialValue: "", validations: {} });

  const isAllInputValid = () => {
    return (
      email.valid.isValidInput ||
      password.valid.isValidInput ||
      userName.valid.isValidInput
    );
  };

  const handleRegister = (e: React.MouseEvent) => {
    console.log("click");
  };

  const errorMessageDiv = (error: string) => {
    return <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>;
  };
  const emailErrorsRender = () => {
    return email.isDirty && email.valid.isEmpty ? (
      errorMessageDiv("Email can't be empty")
    ) : email.isDirty && email.valid.emailError ? (
      errorMessageDiv(email.valid.emailError)
    ) : (
      <></>
    );
  };
  const passwordErrorsRender = () => {
    if (password.isDirty) {
      if (password.valid.isEmpty) {
        return errorMessageDiv("Password can't be empty");
      }
      if (password.valid.minLengthError) {
        return errorMessageDiv("Password" + password.valid.minLengthError);
      }
      if (password.valid.maxLengthError) {
        return errorMessageDiv("Password" + password.valid.maxLengthError);
      }
    }
  };

  return (
    <Container>
      <Form titleText="Register here">
        {emailErrorsRender()}
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          id="email"
          labelText="Email"
        />
        <Input
          type="text"
          name="user_name"
          placeholder="User name"
          value={userName.value}
          onChange={userName.onChange}
          onBlur={userName.onBlur}
          id="user_name"
          labelText="User name"
        />
        {passwordErrorsRender()}
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
          id="password"
          labelText="Password"
        />

        <Button disabled={!isAllInputValid()} onClick={handleRegister}>
          Register
        </Button>
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
