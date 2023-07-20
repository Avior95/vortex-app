import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ItemsPage from "../pages/ItemsPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import ROUTES from "./ROUTES";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
      <Route path={ROUTES.ITEMPAGE} element={<ItemsPage />} />
    </Routes>
  );
};

export default Router;
