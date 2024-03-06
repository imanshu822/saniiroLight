import { Stack, Typography } from "@mui/material";
import React from "react";
import DottedMaps from "./DottedMaps";
import ProductSlider from "./ProductSlider";

const OurNetwork = () => {
  return (
    <Stack gap={2}>
      <Typography
        color={"black"}
        fontWeight={"bold"}
        fontSize={{
          xs: "25px",
          md: "25px",
          lg: "30px",
        }}
        textAlign={"center"}
      >
        Saniiro Network
      </Typography>
      <Typography
        color={"grey"}
        margin={"0 auto"}
        width={{
          xs: "90%",
          md: "80%",
        }}
        textAlign={"center"}
      >
        Saniiro Business Cloud People, delivers amazing workforce experiences,
        so that customers can become great employer brands, increasing
        engagement, performance, and retention, while making it easier to
        acquire top talent.
      </Typography>
      <DottedMaps />
    </Stack>
  );
};

export default OurNetwork;
