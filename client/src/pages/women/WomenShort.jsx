import { Box, CircularProgress, Grid } from "@mui/material";
import ItemPageComponent from "../../components/ItemPage/ItemPageComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const WomenShort = () => {
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
  const handleDeleteFromInitialItemsArr = async (id) => {
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

  if (!itemsArr) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center">
        {itemsArr.map((item) => (
          <Grid item xs={11} sm={4} md={2} key={item._id}>
            {item.category === "Short" && (
              <ItemPageComponent
                price={item.price}
                title={item.title}
                subTitle={item.subTitle}
                image={item.image.url}
                itemId={item._id}
                gender={item.gender}
                canEdit={payload && payload.isAdmin}
                canDelete={payload && payload.isAdmin}
                onDelete={handleDeleteFromInitialItemsArr}
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

export default WomenShort;
