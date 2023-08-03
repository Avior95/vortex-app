import { Box, Button } from "@mui/material";
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

const CartItemComponent = ({ item, addToCart, removeFromCart }) => {
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
            // onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            sx={{ bgcolor: "#262626" }}
            size="small"
            disableElevation
            variant="contained"
            // onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img
        style={imageStyle}
        src={
          "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1700/v1/i/c5382c5b_de85.png"
        }
        alt={item.title}
      />
      <DeleteOutlineIcon />
    </Box>
  );
};

export default CartItemComponent;
