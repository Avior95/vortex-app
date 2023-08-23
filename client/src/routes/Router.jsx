import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AboutPage from "../pages/AboutPage";
import ROUTES from "./ROUTES";
// Men's
import MenPants from "../pages/men/MenPants";
import MenShoes from "../pages/men/MenShoes";
import MenShort from "../pages/men/MenShort";
import MenTees from "../pages/men/MenTees";
// Women's
import WomenPants from "../pages/women/WomenPants";
import WomenShoes from "../pages/women/WomenShoes";
import WomenShort from "../pages/women/WomenShort";
import WomenTees from "../pages/women/WomenTees";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      {/* Men's */}
      <Route path={ROUTES.MEN_PANTS} element={<MenPants />} />
      <Route path={ROUTES.MEN_SHOES} element={<MenShoes />} />
      <Route path={ROUTES.MEN_SHORTS} element={<MenShort />} />
      <Route path={ROUTES.MEN_TEES} element={<MenTees />} />
      {/* Women's */}
      <Route path={ROUTES.WOMEN_PANTS} element={<WomenPants />} />
      <Route path={ROUTES.WOMEN_SHOES} element={<WomenShoes />} />
      <Route path={ROUTES.WOMEN_SHORTS} element={<WomenShort />} />
      <Route path={ROUTES.WOMEN_TEES} element={<WomenTees />} />
    </Routes>
  );
};

export default Router;
