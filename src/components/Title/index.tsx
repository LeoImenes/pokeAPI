import { Typography } from "@mui/material";
import React from "react";

export const Title = ({ children }: any) => {
  return (
    <Typography
    variant="h5"
      sx={{
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        textShadow: "#000  0.1em 0.1em 0.2em" 
        // padding: 1,
        // marginTop: 2,
       

      }}
      color={"#ffffff"}
    >
      {children}
    </Typography>
  );
};
