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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ItemPageComponent = ({
  subTitle,
  title,
  price,
  image,
  itemId,
  gender,
  onDelete,
  onEdit,
  canEdit,
  onCart,
  canDelete,
}) => {
  const productDetailURL = `${ROUTES.DETAILPAGE}/${itemId}/${gender}`;

  const handleDeleteBtnClick = () => {
    onDelete(itemId);
  };
  const handleEditBtnClick = () => {
    onEdit(itemId, gender);
  };
  const handleCartBtnClick = () => {
    onCart(itemId);
  };

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
          <Typography>${price}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" color="primary" onClick={handleCartBtnClick}>
            <ShoppingCartIcon />
          </Button>

          {canEdit ? (
            <Button variant="text" color="primary" onClick={handleEditBtnClick}>
              <EditIcon />
            </Button>
          ) : (
            ""
          )}
          {canDelete ? (
            <Button
              variant="text"
              color="primary"
              onClick={handleDeleteBtnClick}
            >
              <DeleteIcon />
            </Button>
          ) : (
            ""
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default ItemPageComponent;
