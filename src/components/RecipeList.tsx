import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Collapse from "react-bootstrap/Collapse";
import Alert from "react-bootstrap/Alert";
import useFetch from "../hooks/useFetch.hook";
import FullRecipe from "./FullRecipe/FullRecipe";

interface IRecipeList {
  recipes: {
    id: string;
    name: string;
  }[];
}

const RECIPE_LIST_URL = "recipes";

const RecipeList = () => {
  const { data, loading, error } = useFetch<IRecipeList>(RECIPE_LIST_URL);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const toggleState = (id: string) => {
    setOpen(!open);
    setActive(active == id ? "" : id);
  };

  if (loading)
    return (
      <Spinner
        animation="border"
        variant="success"
        className="mx-auto justify-content-center mt-5"
      />
    );
  if (error)
    return (
      <Alert variant="danger" className="mx-auto justify-content-center mt-5">
        <h3>Ooops! Something went wrong</h3>
        <p>{error.message}. </p>
        <p>{error.response.data}</p>
      </Alert>
    );

  return (
    <>
      <ListGroup className="w-100 mx-auto justify-content-center mt-4">
        {data?.recipes.map((recipe) => (
          <div key={recipe.id}>
            <ListGroup.Item
              role="button"
              className={`p-3 ${active == recipe.id && "active"}`}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              onClick={() => {
                toggleState(recipe.id);
              }}
            >
              <div className="text-center">{recipe.name}</div>
            </ListGroup.Item>
            <div style={{ minHeight: "0px", marginTop: "5px" }}>
              <Collapse in={active == recipe.id} dimension="width">
                <div id="example-collapse-text">
                  <FullRecipe id={recipe.id} />
                  {/* maybe id={active} */}
                </div>
              </Collapse>
            </div>
          </div>
        ))}
      </ListGroup>
    </>
  );
};

export default RecipeList;
