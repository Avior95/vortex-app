import {
  Card,
  CardActionArea,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import ROUTES from "../../routes/ROUTES";
import { Link } from "react-router-dom";

const ItemPageComponent = ({ subTitle, title, price, image, productId }) => {
  const productDetailURL = `${ROUTES.DETAILPAGE}/${productId}`;

  return (
    <Box>
      <Card square raised>
        <Link
          to={productDetailURL}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardActionArea>
            <CardMedia component="img" image={image} />
          </CardActionArea>
        </Link>
        <CardHeader
          title={
            <Typography variant="h6" sx={{ fontSize: "1rem" }}>
              {title}
            </Typography>
          }
          subheader={subTitle}
        ></CardHeader>
        <CardContent>
          <Typography>{price}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" color="primary">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ItemPageComponent;
