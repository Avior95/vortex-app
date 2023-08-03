import { Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CartItemComponent from "./CartItemComponent";

const cartItems = [
  {
    id: 1,
    URL: "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1700/v1/i/c5382c5b_de85.png",
    title: "The Linen Short-Sleeve Standard Fit Shirt",
    itemColor: "Brazilian Sand",
    price: "28",
  },
  {
    id: 2,
    URL: "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1700/v1/i/c5382c5b_de85.png",
    title: "The Linen Short-Sleeve Standard Fit Shirt",
    itemColor: "Brazilian Sand",
    price: "28",
  },
];
const CartItemsComponent = ({ closeBtn, addToCart, removeFromCart }) => {
  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  // All the CRUD activities related to the shopping cart will take place here.
  return (
    <Drawer open={true} anchor="right" PaperProps={{ sx: { width: 300 } }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <IconButton onClick={closeBtn}>
          <CloseIcon />
        </IconButton>
      </div>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItemComponent
          key={item.id}
          item={item}
          // addToCart={addToCart}
          // removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Drawer>
  );
};

export default CartItemsComponent;
