import { Box, Typography } from "@mui/material";

import React from "react";
import loadingGIF from "../../assets/bg/loading.gif";

const LoadingScreen = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F7F7F9",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow:'hidden'
      }}
    >
      <img
        style={{ maxWidth: "100%", height: "auto" }}
        src={loadingGIF}
        alt="Carregando..."
      />
      <Typography
        variant="h5"
        sx={{
          fontStretch: "expanded",
          fontOpticalSizing: "-moz-initial",
          fontWeight: "bold",
          animation: "color-animation 4s ease-in infinite",
          "@keyframes color-animation" :{
            '0%':{color:"#3D8DAE"},
            '30%':{color: "#f15453"},
            '60%':{color: "#F9c42a"}
          },
          textTransform:'uppercase'
        }}
      >
        {" "}
        Carregando...
      </Typography>
    </Box>
  );
};

export default LoadingScreen;
