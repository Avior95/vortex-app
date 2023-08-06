import { Box, Grid } from "@mui/material";
import ItemPageComponent from "../components/ItemPage/ItemPageComponent";
import ApparelItems from "../initialData/ApparelPage.json";

const itemsPage = () => {
  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center">
        {ApparelItems.map((item) => (
          <Grid item xs={11} sm={4} md={2} key={item.id}>
            <ItemPageComponent {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default itemsPage;
