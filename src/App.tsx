import React from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeList from "./components/RecipeList";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { RootState } from "./redux/store";
import ErrorPage from "./components/ErrorPage";
import { useSelector } from "react-redux";

function App() {
  const userKey = useSelector((state: RootState) => {
    return state.auth.user.details.userKey;
  });

  return (
    <>
      <NavBar />

      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route element={<ProtectedRoute userKey={userKey} />}>
            <Route path="/recipes" element={<RecipeList />} />
          </Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
