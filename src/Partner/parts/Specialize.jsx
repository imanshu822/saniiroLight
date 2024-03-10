import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Specialize = () => {
  return (
    <Stack
      sx={{
        width: "90%",
        marginTop: {
          xs: "30px",
          lg: "90px",
        },
        margin: " 0 auto",
      }}
    >
      <Typography
        sx={{
          textAlign: {
            xs: "center",
            lg: "left",
          },
          fontFamily: "Work Sans",
          fontSize: {
            xs: "24px",
            sm: "30px",
            md: "35px",
            lg: "40px",
          },
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
          fontSize: {
            xs: "12px",
            sm: "14px",
            md: "16px",
            lg: "18px",
          },
          width: {
            xs: "95%",
            lg: "900px",
          },
          fontWeight: 400,
          lineHeight: "27px",
          letterSpacing: "0em",
          textAlign: {
            xs: "center",
            lg: "left",
          },
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
