import { Box, Button } from "@mui/material";

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
};
const imageStyle = {
  maxWidth: "80px",
  objectFit: "cover",
  marginLeft: "40px",
};

const CartItemComponent = ({ item, addToCart, removeFromCart }) => {
  return (
    <Box style={cartItemStyle}>
      <div>
        <h3>{item.title}</h3>
        <div style={informationStyle}>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div style={buttonsStyle}>
          <Button
            size="small"
            disableElevation
            variant="contained"
            // onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            // onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      {/* Fix the img prop bug */}
      <img
        style={imageStyle}
        src={
          "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1700/v1/i/c5382c5b_de85.png"
        }
        alt={item.title}
      />
    </Box>
  );
};

export default CartItemComponent;
