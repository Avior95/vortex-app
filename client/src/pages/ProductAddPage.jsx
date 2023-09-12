import React, { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const ProductAddPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    category: "",
    gender: "men",
    price: "",
    image: {
      url: "",
      alt: "",
    },
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddClick = async () => {
    try {
      const genderEndpoint = formData.gender === "men" ? "/men" : "/women";
      await axios.post(`${genderEndpoint}`, formData);
      navigate("/");
    } catch (error) {
      console.error("Error adding product:", error.response.data);
    }
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
        <Typography variant="h1" align="center">
          Add Product
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
              label="SubTitle"
              name="subTitle"
              value={formData.subTitle}
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
              label="Gender"
              name="gender"
              value={formData.gender}
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
        </Grid>

        <div style={styles.button}>
          <Button
            onClick={handleAddClick}
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
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductAddPage;
