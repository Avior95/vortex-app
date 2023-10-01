import { Box, CircularProgress, Grid } from "@mui/material";
import ItemPageComponent from "../../components/ItemPage/ItemPageComponent";
// import ApparelItems from "../initialData/ApparelPage.json";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const WomenShoes = () => {
  const [itemsArr, setItemsArr] = useState(null);
  const navigate = useNavigate();
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);

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

  if (!itemsArr) {
    return <CircularProgress />;
  }
  const handleDeleteFromInitialCardsArr = async (id) => {
    try {
      await axios.delete("/women/" + id);
      setItemsArr((newItemsArr) =>
        newItemsArr.filter((item) => item._id !== id)
      );
    } catch (err) {
      console.log("error when deleting", err.response.data);
    }
  };
  const handleCart = async (id, gender) => {
    try {
      await axios.patch(`/${gender}/` + id).then(({ data }) => {});
    } catch (err) {
      console.log("error when add to cart", err.response.data);
    }
  };
  const handleEditFromInitialItemsArr = (id, gender) => {
    navigate(`/edit/${id}/${gender}`);
  };

  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center">
        {itemsArr.map((item) => (
          <Grid item xs={11} sm={4} md={2} key={item._id}>
            {item.category === "Shoes" && (
              <ItemPageComponent
                price={item.price}
                title={item.title}
                subTitle={item.subTitle}
                image={item.image.url}
                itemId={item._id}
                gender={item.gender}
                canEdit={payload && payload.isAdmin}
                canDelete={payload && payload.isAdmin}
                onDelete={handleDeleteFromInitialCardsArr}
                onEdit={handleEditFromInitialItemsArr}
                onCart={handleCart}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WomenShoes;
