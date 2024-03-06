import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const SaveUpTo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          zIndex: "1",
          position: "absolute",
          marginTop: "95px",
          marginLeft: "340px",
        }}
      >
        <Typography
          sx={{
            padding: "20px",
            fontFamily: "Work Sans",
            fontSize: "10px",
            fontWeight: "bold",
            lineHeight: "10px",
            letterSpacing: "0em",
            textAlign: "center",
            textTransform: "uppercase",
            color: "#F15B25",
          }}
        >
          Save up to 34%
        </Typography>
      </Box>
    </Box>
  );
};

export default SaveUpTo;
