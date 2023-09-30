import { Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CartItemComponent from "./CartItemComponent";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

const CartItemsComponent = ({ closeBtn, addToCart, removeFromCart }) => {
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);
  const [itemsArr, setItemsArr] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    axios
      .get("/men")
      .then(({ data }) => {
        setItemsArr(data);
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/women")
      .then(({ data }) => {
        setItemsArr(data);
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  }, []);

  useEffect(() => {
    // Filter the items based on the condition
    if (itemsArr && payload) {
      const filtered = itemsArr.filter((item) =>
        item.likes.includes(payload._id)
      );
      setFilteredItems(filtered);
    }
  }, [itemsArr, payload]);

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
      {filteredItems.length === 0 ? <p>No items in cart.</p> : null}
      {filteredItems.map((item) => (
        <CartItemComponent
          key={item._id}
          item={item}
          // addToCart={addToCart}
          // removeFromCart={removeFromCart}
        />
      ))}
    </Drawer>
  );
};

export default CartItemsComponent;
