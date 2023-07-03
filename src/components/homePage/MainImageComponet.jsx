import React from "react";
import { Box } from "@mui/material";
import MainButtonComponent from "../Button/MainButtonCompoent";

const MainImageComponent = ({ imageUrl }) => {
  return (
    <Box
    // sx={{
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   position: "relative",
    //   width: "100%",
    // }}
    >
      <img src={imageUrl} alt="Responsive" style={{ width: "100%" }} />

      {/* <Box
        sx={{
          position: "absolute",
          textAlign: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1
          style={{
            color: "rgb(255, 255, 255)",
            letterSpacing: "0.01em",
            textAlign: "center",
            fontSize: "3rem",
            fontFamily: "sans-serif",
            // marginTop: "50px",
          }}
        >
          Destination Summer
        </h1>
        <h2
          style={{
            color: "rgb(255, 255, 255)",
            letterSpacing: "0.01em",
            textAlign: "center",
            fontSize: "100%",
            fontFamily: "sans-serif",
          }}
        >
          Discover new essential styles for creating iconic vacation looks.
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MainButtonComponent text={"SHOP MAN"} />
          <MainButtonComponent text={"SHOP WOMAN"} />
        </div>
      </Box> */}
    </Box>
  );
};

export default MainImageComponent;
