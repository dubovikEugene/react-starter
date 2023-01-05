import React from "react";
import { Alert } from "react-bootstrap";

const errorView = () => {
  return (
    <Alert variant="danger" className="mx-auto justify-content-center mt-5">
      <h3>Sorry, this page is not availabale</h3>
    </Alert>
  );
};
const ErrorPage = () => {
  return errorView();
};

export default ErrorPage;
