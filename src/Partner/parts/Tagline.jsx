import { Stack, Box, Typography } from "@mui/material";
import React from "react";

const Tagline = () => {
  return (
    <Stack
      pt={2}
      backgroundColor={{
        xs: "#FFDBC0",
        md: "white",
      }}
      sx={{
        display: "flex",
        marginTop: {
          xs: "14px",
          sm: "24px",
          md: "34px",
          lg: "44px",
        },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box width={{ xs: "95%", lg: "98%" }}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: {
              xs: "24px",
              sm: "30px",
              md: "35px",
              lg: "45px",
            },
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
