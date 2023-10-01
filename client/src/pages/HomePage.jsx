import { Box, CircularProgress, Grid } from "@mui/material";
import MainImageComponent from "../components/HomePage/MainImageComponent";
import ProductBtnComponent from "../components/HomePage/ProductBtnComponent";

import Typography from "@mui/material/Typography";
import InformativeLogosData from "../initialData/LogosData.json";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [itemsArr, setItemsArr] = useState(null);
  const isMen = useSelector((bigPie) => bigPie.genderSlice.isMen);

  useEffect(() => {
    const categoryEndpoint = isMen ? "/CategoriesMen" : "/CategoriesWomen";
    axios
      .get(categoryEndpoint)
      .then(({ data }) => {
        setItemsArr(data);
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  }, [isMen]);

  if (!itemsArr) {
    return <CircularProgress />;
  }
  return (
    <Box
      sx={{
        // backgroundColor: "blue",
        marginTop: 5,
        // width: "100%",
      }}
    >
      <Grid container>
        {/* Main Image */}
        <Grid item xs={12}>
          <MainImageComponent
            imageUrl={
              "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/775038a2_0c17.jpg"
            }
          />
        </Grid>
      </Grid>

      {/* ProductBtnComponent Grid */}
      <Grid container sx={{ marginTop: 8, marginBottom: 8 }}>
        {itemsArr.map((item) => (
          <Grid item xs={3} md={3} key={item._id}>
            <ProductBtnComponent
              URL={item.image.url}
              button={item.button}
              categoryRoute={item.categoryRoute}
            />
          </Grid>
        ))}
      </Grid>

      {/* Informative Logos */}
      <Grid container spacing={{ xs: 4, md: 3 }} sx={{ marginTop: 30 }}>
        {InformativeLogosData.map((logo) => (
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            key={logo.imgLink}
          >
            <img src={logo.imgLink} alt="" />
            <Typography variant="p" color="initial" fontWeight="bold">
              {logo.title}
            </Typography>
            <Typography variant="p" color="initial">
              {logo.subTitle}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
