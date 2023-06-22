import { Box, Grid } from "@mui/material";
import MainImageComponent from "../components/homePage/MainImageComponet";
import CategoriesComponent from "../components/homePage/CategoriesComponent";
import SliderComponent from "../components/Sliders/SliderComponent";
import sliderItems from "../components/Sliders/slider.json";
import Typography from "@mui/material/Typography";
import InformativeLogosData from "../initialData/LogosData.json";

const HomePage = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "blue",
        marginTop: 5,
        width: "100%",
      }}
    >
      <Grid container sx={{ border: 3 }}>
        {/* Main Image */}
        <Grid item xs={12}>
          <MainImageComponent
            imageUrl={
              "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1500/v1/i/775038a2_0c17.jpg"
            }
          />
        </Grid>
        {/* CategoriesComponent Grid */}
        <CategoriesComponent />
      </Grid>
      {/* Slider */}
      <SliderComponent slides={sliderItems} />
      {/* Informative Logos */}
      <Grid container spacing={{ xs: 4, md: 3 }} sx={{ marginTop: 10 }}>
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
