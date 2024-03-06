import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Specialize = () => {
  return (
    <Stack
      sx={{
        height: "160px",
        width: "909px",
        marginTop: "90px",
        margin: "auto",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontSize: "40px",
          fontWeight: 600,
          lineHeight: "43px",
          letterSpacing: "0em",
          color: "#052973",
        }}
      >
        Specialize according to your strengths
      </Typography>
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "27px",
          letterSpacing: "0em",
          textAlign: "left",
        }}
      >
        Based on your specialization, you can build Zoho capabilities for a
        specific category, or develop resources for products across our suite.
        Our Partner Program supports specialization in the following areas:
      </Typography>
    </Stack>
  );
};

export default Specialize;
