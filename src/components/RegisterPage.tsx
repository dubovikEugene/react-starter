import React from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useInput } from "../hooks/useInput.hook";
import { AuthRequest } from "../models/request/AuthRequest";
import { setCredentials } from "../redux/authSlice";
import { useAppSelector } from "../redux/store";
import { useRegisterUserMutation } from "../services/AuthService";
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

const RegisterPage = () => {
  const email = useInput({
    initialValue: "",
    validations: { isEmail: true, isEmpty: true },
  });
  const password = useInput({
    initialValue: "",
    validations: { minLength: 6, maxLength: 32, isEmpty: true },
  });
  const userName = useInput({
    initialValue: "",
    validations: { isEmpty: false },
  });

  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = useAppSelector((state) => {
    return state.auth.user.details.userKey;
  });

  const request: AuthRequest = {
    email: "",
    password: "",
    userName: "",
  };

  const isAllInputValid = () => {
    return (
      !email.valid.isValidInput ||
      !password.valid.isValidInput ||
      !userName.valid.isValidInput
    );
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

  const errorMessageHandler = () => {
    if (error) {
      if ("status" in error) {
        if ("data" in error) {
          const errorMsgFromJSON =
            "error" in error ? error.error : JSON.stringify(error.data);
          const messeges = errorMsgFromJSON.split(":");
          const errorMsg = messeges[1].substring(1, messeges[1].length - 2);
          return errorMsg;
        }
      }
    }
    return "";
  };

  const handleRegister = async (e: React.MouseEvent) => {
    request.email = email.value;
    request.password = password.value;
    request.userName = userName.value;
    console.log(request);
    const response = await registerUser(request).unwrap();
    dispatch(setCredentials(response));
    navigate("/recipes");
  };
  const loadingView = () => {
    return (
      <Spinner
        animation="border"
        variant="dark"
        className="mx-auto d-flex justify-content-center mt-2 mb-1"
        size="sm"
      />
    );
  };
  if (userId) {
    return <Navigate to="/recipes" />;
  }

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
        {error && errorMessageDiv(errorMessageHandler())}
        {isLoading ? (
          <Button disabled={isAllInputValid()} onClick={() => {}}>
            {loadingView()}
          </Button>
        ) : (
          <Button disabled={isAllInputValid()} onClick={handleRegister}>
            Register
          </Button>
        )}
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
