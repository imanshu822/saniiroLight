import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import InspireImg from "./assets/Group80.png";

const IMAGE_WIDTH = "508px";
const IMAGE_HEIGHT = "156.37px";
const TEXT_WIDTH = "508px";

const Inspire = () => {
  return (
    <Stack
      sx={{
        margin: "auto",
        width: "1240px",
      }}
    >
      <Stack
        direction="column"
        alignItems="start"
        spacing={2}
        sx={{
          marginTop: "100px",

          marginBottom: "40px",
        }}
      >
        <Image
          src={InspireImg}
          alt="Inspire"
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
        />
        <Typography sx={{ width: TEXT_WIDTH }}>
          Inspire is our Partner conference designed to empower Saniiro Partners
          and celebrate their journeys with us. It serves as a knowledge-sharing
          platform for global partners, industry leaders, and Saniiro experts.
        </Typography>
      </Stack>
    </Stack>
  );
};

// Reusable Image component
const Image = ({ src, alt, width, height }) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    sx={{
      width: width,
      height: height,
    }}
  />
);

export default Inspire;
