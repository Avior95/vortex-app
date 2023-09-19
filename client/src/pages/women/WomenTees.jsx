import { Box, CircularProgress, Grid } from "@mui/material";
import ItemPageComponent from "../../components/ItemPage/ItemPageComponent";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WomenTees = () => {
  const [itemsArr, setItemsArr] = useState(null);
  const navigate = useNavigate();

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
            {item.category === "Tees" && (
              <ItemPageComponent
                price={item.price}
                title={item.title}
                subTitle={item.subTitle}
                image={item.image.url}
                itemId={item._id}
                gender={item.gender}
                onDelete={handleDeleteFromInitialCardsArr}
                onEdit={handleEditFromInitialItemsArr}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WomenTees;
