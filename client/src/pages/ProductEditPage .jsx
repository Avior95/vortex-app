import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const ProductEditPage = () => {
  const { productId, gender } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    image: {
      url: "",
      alt: "",
    },
    subTitle: "",
  });

  useEffect(() => {
    axios
      .get(`/${gender}/${gender}/` + productId)
      .then(({ data }) => {
        if (data) {
          setFormData({
            title: data.title || "",
            category: data.category || "",
            price: data.price || "",
            image: {
              url: data.image ? data.image.url : "",
              alt: data.image ? data.image.alt : "",
            },
            subTitle: data.subTitle || "",
          });
        }
      })
      .catch((err) => {
        console.log("Error fetching product data", err);
      });
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    const formDataWithoutIdsAndCreatedAt = { ...formData };
    delete formDataWithoutIdsAndCreatedAt._id;
    delete formDataWithoutIdsAndCreatedAt.image._id;
    delete formDataWithoutIdsAndCreatedAt.createdAt;
    delete formDataWithoutIdsAndCreatedAt.user_id;
    axios
      .put(`/${gender}/` + productId, formData)
      .then(() => {
        navigate("/product-detail/" + productId);
      })
      .catch((err) => {
        console.log("Error editing product", err.response.data);
      });
  };

  const styles = {
    root: {
      backgroundColor: "#F9F5EB",
      padding: "10px",
    },
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
    },
    input: {
      background: "white",
    },
    button: {
      textAlign: "left",
      marginTop: "20px",
    },
  };
  if (!formData) {
    return <CircularProgress />;
  }

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <Typography variant="h4" align="center">
          Edit Product
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              style={styles.input}
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              style={styles.input}
              fullWidth
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              style={styles.input}
              fullWidth
              label="Price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              style={styles.input}
              fullWidth
              label="Image"
              name="image"
              value={formData.image.url}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={styles.input}
              fullWidth
              label="Alt"
              name="alt"
              value={formData.image.alt}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              style={styles.input}
              label="SubTitle"
              name="subTitle"
              value={formData.subTitle}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <div style={styles.button}>
          <Button
            onClick={handleEditClick}
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "#ffdecb",
              color: "black",
              fontWeight: "bold",
              boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.4)",
              cursor: "pointer",
              border: "2px solid black",
              width: "100px",
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductEditPage;
