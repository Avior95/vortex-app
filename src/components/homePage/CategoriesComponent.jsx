import { CardMedia, Button, Box } from "@mui/material";
// import MenCategoriesComponent from "// src/initialData/MenCategoriesComponent.json";

const CategoriesComponent = () => {
  return (
    // <Card
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     // maxWidth: 300,
    //     boxShadow: 2,
    //     bgcolor: "yellow",
    //   }}
    // >
    // {MenCategoriesComponent.map((categorie)=>(
    <Box>
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          height: 0,
          paddingTop: "100%",
          // bgcolor: "red",
          // 1:1 aspect ratio (adjust as needed)
        }}
        image="path/to/your/image.jpg "
      />
      <Button
        sx={{
          width: "50%",
          marginTop: 2,
        }}
        variant="contained"
        color="primary"
      >
        Button
      </Button>
      {/* // </Card> */}
    </Box>
  );
};

export default CategoriesComponent;
