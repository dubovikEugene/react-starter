import React, { useEffect, useMemo, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Collapse from "react-bootstrap/Collapse";
import Alert from "react-bootstrap/Alert";
import FullRecipe from "./FullRecipe/FullRecipe";
import { useGetAllRecipesMutation } from "../services/RecipeService";
import PaginationComponent from "./UI/PaginationComponent";
import AmoutnRecipesFilter from "./AmountRecipesFilter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { removeRecipes, setRecipes } from "../redux/recipeListSlice";
import styled from "styled-components";

const Btn = styled.button`
  margin: 0.5rem;
  background-color: #0d6efd;
  border: 1px solid rgba(27, 31, 35, 0.2);
  color: #fff;
  width: 30%;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 5px;
  &:hover {
    background-color: #0d65eb;
  }
`;

const RecipeList: React.FC = () => {
  const [getAllRecipes, { isLoading, isError }] = useGetAllRecipesMutation();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const recipeList = useSelector((state: RootState) => {
    return state.recipes;
  });

  const fetchREcipes = () => {
    getAllRecipes()
      .unwrap()
      .then((resp) => {
        console.log(resp);
        dispatch(setRecipes(resp));
      });
  };

  useEffect(() => {
    if (recipeList.recipes.length < 1) {
      fetchREcipes();
    }
  }, []);

  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [numberElems, setNumberElems] = useState(3);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(numberElems);
  const [arrayForRender, setArrayForRender] = useState(
    recipeList.recipes.slice(0, 3)
  );

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

  const filterHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberElems(Number(e.target.value));
  };

  const totalPages = Math.ceil(recipeList.recipes.length / numberElems);

  const indexHelper = () => {
    if (page === 1) {
      setFirstIndex(0);
      setLastIndex(numberElems);
    } else if (page === 2) {
      setFirstIndex(numberElems);
      setLastIndex(numberElems * 2);
    } else {
      setFirstIndex(page * numberElems - numberElems);
      setLastIndex(numberElems * page);
    }
  };

  useEffect(() => {
    indexHelper();
    let array = recipeList.recipes.slice(firstIndex, lastIndex);
    console.log(array);
    if (array.length === 0) {
      setPage(1);
      setArrayForRender(recipeList.recipes.slice(0, numberElems));
    } else {
      setArrayForRender(array);
    }
  }, [page, numberElems, lastIndex, firstIndex, recipeList]);

  const reserAddedRecipes = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeRecipes());
    fetchREcipes();
  };

  const recipesView = () => {
    return (
      <div className="d-flex flex-column align-aitems-center mb-5 mt-5">
        <h1 className="mt-5 text-center">Recipe List</h1>
        <AmoutnRecipesFilter
          onChange={filterHandler}
          options={recipeFilterOptions}
        />
        <Btn onClick={(e) => reserAddedRecipes(e)}>Reset added recipes</Btn>
        <ListGroup className="w-100 mx-auto justify-content-center mt-4">
          {arrayForRender.map((recipe, index) => (
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
          totalPages={totalPages}
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
