import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  userKey: string;
}

const ProtectedRoute = ({ userKey }: Props) => {
  if (!userKey) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
