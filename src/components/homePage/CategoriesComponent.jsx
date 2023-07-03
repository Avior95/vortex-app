import { CardMedia, Button, Box } from "@mui/material";

const CategoriesComponent = ({ URL, categoryBtnText }) => {
  return (
    <Box sx={{ display: "grid", placeItems: "center" }}>
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          height: "100%",
          gridColumn: "1 / -1",
          gridRow: "1 / -1",
        }}
        image={URL}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          gridColumn: "1 / -1",
          gridRow: "1 / -1",
        }}
      >
        {categoryBtnText}
      </Button>
    </Box>
  );
};

export default CategoriesComponent;
