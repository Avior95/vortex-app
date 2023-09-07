import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";

const ProductEditPage = () => {
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

  return (
    <div style={styles.root}>
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ color: "black", marginRight: "10px" }}>
          <ArrowBackIcon />
        </Link>
        <Link to="/" style={{ color: "black", marginLeft: "10px" }}>
          <HomeIcon />
        </Link>
      </div>
      <div style={styles.container}>
        <Typography variant="h4" align="center">
          Edit Product
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth style={styles.input} label="Title" />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth style={styles.input} label="Category" />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth style={styles.input} label="Price" />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth style={styles.input} label="Image URL" />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth style={styles.input} label="Quantity" />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth style={styles.input} label="Description" />
          </Grid>
        </Grid>

        <div style={styles.button}>
          <Button
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
