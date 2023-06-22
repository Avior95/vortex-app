import { CardMedia, Button, Box, Grid } from "@mui/material";
import MenCategories from "../../initialData/MenCategories.json";

const CategoriesComponent = () => {
  return (
    <Grid item xs={3} sx={{ marginTop: 10 }}>
      {MenCategories.map((category) => (
        <Box key={category.img}>
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              height: 0,
              paddingTop: "100%",
            }}
            image={category.img}
          />
          <Button
            sx={{
              width: "50%",
              marginTop: 2,
            }}
            variant="contained"
            color="primary"
          >
            {category.Button}
          </Button>
        </Box>
      ))}
    </Grid>
  );
};

export default CategoriesComponent;
