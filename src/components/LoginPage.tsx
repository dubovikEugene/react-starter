import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthRequest } from "../models/request/AuthRequest";
import { AuthResponse } from "../models/response/AuthResponse";
import { useLoginUserMutation } from "../services/AuthService";
import Button from "./UI/Button";
import CreateOrLoginComponent from "./UI/CreateOrLoginComponent";
import Form from "./UI/Form";
import Input from "./UI/Input";

const Container = styled.div`
  margin-top: 5rem;
  max-width: 20rem;
  width: 100%;
  height: auto;
  margin: 7rem auto;
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("Email cant't be empty");
  const [passwordError, setPasswordError] = useState(
    "Password cant't be empty"
  );
  const [formIsValid, setFormIsValid] = useState(false);
  const [dirtyEmail, setDirtyEmail] = useState(false);
  const [dirtyPassword, setDirtyPassword] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  }, [emailError, passwordError]);

  const request: AuthRequest = {
    action: "",
    email: "",
    password: "",
  };

  const [loginUser, { data, isLoading, error }] = useLoginUserMutation();

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError("Incorrect email");
    } else {
      setEmailError("");
    }
    if (!e.target.value) {
      setEmailError("Email cant't be empty");
    }
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 32) {
      setPasswordError(
        "Password can't be less than 4 characters or more than 32 characters"
      );
      if (e.target.value.length === 0) {
        setPasswordError("Password cant't be empty");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setDirtyEmail(true);
        break;
      case "password":
        setDirtyPassword(true);
        break;
    }
  };

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("click");
    request.action = "signin";
    request.email = email;
    request.password = password;
    console.log(request);
    // const response = await loginUser(request);
    // console.log(response);
    const login = async () => {
      await fetch(`https://ustka.travel/api/signform.php`, {
        method: "POST",
        body: JSON.stringify(request),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    login();
  };

  const errorRender = (error: string) => {
    return <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>;
  };

  return (
    <Container>
      <Form titleText="Login here">
        {dirtyEmail && emailError && errorRender(emailError)}
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={emailHandler}
          onBlur={blurHandler}
          id="email"
          labelText="Email"
        />
        {dirtyPassword && passwordError && errorRender(passwordError)}
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={passwordHandler}
          onBlur={blurHandler}
          id="password"
          labelText="Password"
        />
        <Button disabled={!formIsValid} onClick={handleLogin}>
          Login
        </Button>
      </Form>
      <CreateOrLoginComponent
        message="Don't have account?"
        linkName=" Create account"
        linkTo="/register"
      />
    </Container>
  );
};

export default LoginPage;
