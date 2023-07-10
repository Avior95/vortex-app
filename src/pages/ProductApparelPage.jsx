import { Grid } from "@mui/material";
import CardApparelComponent from "../components/ProductApparelPage/CardApparelComponent";
import ApparelItems from "../initialData/ApparelPage.json";

const ProductApparelPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      {ApparelItems.map((item) => (
        <Grid item xs={11} sm={4} md={2} key={item.id}>
          <CardApparelComponent {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductApparelPage;
