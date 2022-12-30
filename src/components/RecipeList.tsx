import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Collapse from "react-bootstrap/Collapse";
import Alert from "react-bootstrap/Alert";
import FullRecipe from "./FullRecipe/FullRecipe";
import { useGetAllRecipesQuery } from "../services/RecipeService";

const RecipeList: React.FC = () => {
  const { data: recipes, error, isLoading } = useGetAllRecipesQuery();

  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  const toggleState = (id: string) => {
    setOpen(!open);
    setActive(active === id ? "" : id);
  };

  const loadingView = () => {
    return (
      <Spinner
        animation="border"
        variant="success"
        className="mx-auto justify-content-center mt-5"
      />
    );
  };

  const errorView = () => {
    return (
      <Alert variant="danger" className="mx-auto justify-content-center mt-5">
        <h3>Error loading the recipe list</h3>
      </Alert>
    );
  };

  const recipesView = () => {
    return (
      <ListGroup className="w-100 mx-auto justify-content-center mt-4">
        {recipes?.recipes.map((recipe) => (
          <div key={recipe.id}>
            <ListGroup.Item
              role="button"
              className={`p-3 ${active === recipe.id && "active"}`}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              onClick={() => {
                toggleState(recipe.id);
              }}
            >
              <div className="text-center">{recipe.name}</div>
            </ListGroup.Item>
            <div style={{ minHeight: "0px", marginTop: "5px" }}>
              <Collapse in={active === recipe.id} dimension="width">
                <div id="example-collapse-text">
                  {active === recipe.id && <FullRecipe id={active} />}
                </div>
              </Collapse>
            </div>
          </div>
        ))}
      </ListGroup>
    );
  };

  if (error) return errorView();
  if (isLoading) return loadingView();

  return recipesView();
};

export default RecipeList;
