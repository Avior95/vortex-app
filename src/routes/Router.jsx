import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductApparelPage from "../pages/ProductApparelPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import ROUTES from "./ROUTES";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTES.SIGNIN} element={<SignInPage />} />
      <Route path={ROUTES.Apparel} element={<ProductApparelPage />} />
    </Routes>
  );
};

export default Router;
