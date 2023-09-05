import { Box, CircularProgress, Grid } from "@mui/material";
import ItemPageComponent from "../../components/ItemPage/ItemPageComponent";
// import ApparelItems from "../initialData/ApparelPage.json";
import axios from "axios";
import { useEffect, useState } from "react";

const WomenShoes = () => {
  const [itemsArr, setItemsArr] = useState(null);

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
                productId={item._id}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WomenShoes;
