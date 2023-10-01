import { Box, Button, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const cartItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontFamily: "Arial, Helvetica, sans-serif",
  borderBottom: "1px solid lightblue",
  paddingBottom: "20px",
};

const informationStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const buttonsStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#f2f2f2",
  borderRadius: "5px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
};
const imageStyle = {
  maxWidth: "80px",
  height: "50%",
  objectFit: "cover",
  marginLeft: "40px",
};

const CartItemComponent = ({ item, onDeleteFromCart }) => {
  return (
    <Box style={cartItemStyle}>
      <div>
        <h4>{item.title}</h4>
        <div style={informationStyle}>
          <h5>Price: ${item.price}</h5>
          <h5>Total: ${(item.amount * item.price).toFixed(2)}</h5>
        </div>
        <div style={buttonsStyle}>
          <Button
            sx={{ bgcolor: "#262626" }}
            size="small"
            disableElevation
            variant="contained"
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            sx={{ bgcolor: "#262626" }}
            size="small"
            disableElevation
            variant="contained"
          >
            +
          </Button>
          <IconButton onClick={() => onDeleteFromCart(item._id)}>
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      </div>
      <img style={imageStyle} src={item.image.url} alt={item.title} />
      <DeleteOutlineIcon />
    </Box>
  );
};

export default CartItemComponent;
