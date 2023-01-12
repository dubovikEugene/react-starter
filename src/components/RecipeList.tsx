import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Collapse from "react-bootstrap/Collapse";
import Alert from "react-bootstrap/Alert";
import FullRecipe from "./FullRecipe/FullRecipe";
import { useGetAllRecipesMutation } from "../services/RecipeService";
import PaginationComponent from "./UI/PaginationComponent";
import AmoutnRecipesFilter from "./AmountRecipesFilter";

const RecipeList: React.FC = () => {
  const [getAllRecipes, { data: recipes, isLoading, isError }] =
    useGetAllRecipesMutation();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllRecipes().unwrap();
  }, [page]);

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
        className="mx-auto d-flex justify-content-center mt-5"
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

  const handlePage = (p: number) => {
    setPage(p);
  };

  const recipeFilterOptions = [
    { value: 3, name: 3 },
    { value: 6, name: 6 },
    { value: 10, name: 10 },
  ];

  const recipesView = () => {
    return (
      <div className="d-flex flex-column align-aitems-center mb-5 mt-5">
        <h1 className="mt-5 text-center">Recipe List</h1>
        <AmoutnRecipesFilter
          defaultValue={3}
          options={[
            { value: 3, name: 3 },
            { value: 6, name: 6 },
            { value: 10, name: 10 },
          ]}
        />
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
        <PaginationComponent
          totalPages={10}
          currentPage={page}
          changeCurrentPage={handlePage}
        />
      </div>
    );
  };

  if (isError) return errorView();
  if (isLoading) return loadingView();

  return recipesView();
};

export default RecipeList;
