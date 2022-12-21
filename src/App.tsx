import React from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column align-aitems-center mb-5">
        <h1 className="mt-5 text-center">Recipe List</h1>

        <RecipeList></RecipeList>
      </div>
    </div>
  );
}

export default App;
