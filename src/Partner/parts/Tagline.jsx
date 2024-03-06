import { Stack, Box, Typography } from "@mui/material";
import React from "react";

const Tagline = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        marginTop: "44px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "96px",
          width: "608px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "45px",
            fontWeight: 600,
            lineHeight: "48px",
            textAlign: "center",
            color: "#052973",
          }}
        >
          Why Become a Saniiro Consulting Partner?
        </Typography>
      </Box>
    </Stack>
  );
};

export default Tagline;
