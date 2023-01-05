import React from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeList from "./components/RecipeList";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/recipes" element={<RecipeList />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
