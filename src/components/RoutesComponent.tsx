import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import CreateRecipePage from "./CreateRecipePage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import RecipeList from "./RecipeList";
import RegisterPage from "./RegisterPage";

const RoutesComponent = () => {
  const userKey = useAppSelector((state) => {
    return state.auth.user.details.userKey;
  });
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route element={<ProtectedRoute userKey={userKey} />}>
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/create_recipe" element={<CreateRecipePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default RoutesComponent;
