import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Collapse from "react-bootstrap/Collapse";
import Alert from "react-bootstrap/Alert";
import useFetch from "../hooks/useFetch.hook";
import FullRecipe from "./FullRecipe/FullRecipe";
import { IRecipeList } from "../types/IRecipeList";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";
import axios from "axios";

const RECIPE_LIST_URL = "base.json";

const RecipeList = () => {
  const recipes: IRecipeList = useSelector((state: State) => state.recipeList);
  const dispatch = useDispatch();
  const { setRecipes } = bindActionCreators(actionCreators, dispatch);

  // const { data, loading, error } = useFetch<IRecipeList>(RECIPE_LIST_URL);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const fetchRecipeList = async () => {
    console.log(`new request in recipe list`);
    await axios
      .get(`https://api.workstmt.com/!yauheni/${RECIPE_LIST_URL}`)
      .then((response) => {
        setRecipes(response.data.recipes);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRecipeList();
  }, []);

  const toggleState = (id: string) => {
    setOpen(!open);
    setActive(active == id ? "" : id);
  };

  // if (loading)
  //   return (
  //     <Spinner
  //       animation="border"
  //       variant="success"
  //       className="mx-auto justify-content-center mt-5"
  //     />
  //   );
  // if (error)
  //   return (
  //     <Alert variant="danger" className="mx-auto justify-content-center mt-5">
  //       <h3>Ooops! Something went wrong</h3>
  //       <p>{error?.message}. </p>
  //       <p>{error.response?.data}</p>
  //     </Alert>
  //   );

  return (
    <>
      <ListGroup className="w-100 mx-auto justify-content-center mt-4">
        {recipes.recipes.map((recipe) => (
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
