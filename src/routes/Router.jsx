import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductApparelPage from "../pages/ProductApparelPage";
import ROUTES from "./ROUTES";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.Apparel} element={<ProductApparelPage />} />
    </Routes>
  );
};

export default Router;
