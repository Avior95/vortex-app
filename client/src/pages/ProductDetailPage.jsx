import Grid from "@mui/material/Grid";
import { CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetailPage = () => {
  const [itemsArr, setItemsArr] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get("/men/men/" + productId)
      .then(({ data }) => {
        setItemsArr(data);
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  }, [productId]);

  useEffect(() => {
    axios
      .get("/women/women/" + productId)
      .then(({ data }) => {
        setItemsArr(data);
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  }, [productId]);

  if (!itemsArr) {
    return <CircularProgress />;
  }

  const containerStyle = {
    backgroundColor: "#F9F5EB",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "1000px",
    height: "600px",
    border: "2px solid #000",
    borderRadius: "25px",
    position: "relative",
  };

  const gridItemStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "25px",
  };

  const rightSideStyle = {
    backgroundColor: "#F9F5EB",
    padding: "16px",
    borderRadius: "25px",
    height: "100%",
  };

  const keyValueStyle = {
    fontWeight: "bold",
    margin: "0",
  };

  return (
    <div
      style={{
        backgroundColor: "#F9F5EB",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" align="center">
        Product Page
      </Typography>

      <div style={containerStyle}>
        <Grid container style={{ width: "100%", height: "100%" }}>
          <Grid item xs={6} style={gridItemStyle}>
            <div
              style={{
                height: "100%",
              }}
            >
              <img
                src={itemsArr.image.url}
                alt={itemsArr.image.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "25px",
                }}
              />
            </div>
          </Grid>
          <Grid item xs={6} style={rightSideStyle}>
            <div
              style={{
                padding: "16px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <p style={keyValueStyle}>Title:</p>
                <p>{itemsArr.title}</p>
              </div>
              <div>
                <p style={keyValueStyle}>Color:</p>
                <p style={{ whiteSpace: "pre-line" }}>{itemsArr.subTitle}</p>
              </div>
              <div>
                <p style={keyValueStyle}>Category:</p>
                <p>{itemsArr.category}</p>
              </div>
              <div>
                <p style={keyValueStyle}>Price:</p>
                <p>${itemsArr.price}</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProductDetailPage;
