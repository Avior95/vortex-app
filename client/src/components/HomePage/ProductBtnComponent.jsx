import { CardMedia, Box } from "@mui/material";
import MinorButtonComponent from "../Button/MinorButtonComponent";
import { useNavigate } from "react-router-dom";
import Router from "../../routes/ROUTES";
import ROUTES from "../../routes/ROUTES";

const ProductBtnComponent = ({ URL, button }) => {
  const navigate = useNavigate();

  const handleProductBtnClick = () => {
    navigate(ROUTES.ITEMPAGE);
  };

  return (
    <Box sx={{ display: "grid", placeItems: "center" }}>
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          height: "100%",
          gridColumn: "1 / -1",
          gridRow: "1 / -1",
        }}
        image={URL}
      />

      <MinorButtonComponent
        homePageProductClick={handleProductBtnClick}
        text={button}
      />
    </Box>
  );
};

export default ProductBtnComponent;
