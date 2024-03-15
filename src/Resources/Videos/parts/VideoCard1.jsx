import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import img from "../../../assets/Rectangle 4301.png";
const VideoCard1 = ({ img, title, duration, discription }) => {
  return (
    <Stack
      width={{
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "90%",
      }}
      height={"90px"}
      margin={"0px auto"}
    >
      <Stack direction={"row"} gap={2}>
        <Box
          component="img"
          width={"180px"}
          height={"90px"}
          src={img}
          alt="video thumbnail"
        />
        <Stack direction={"column"} gap={2} marginTop={"4px"}>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "17px",
              fontWeight: 600,
              lineHeight: "18px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "11px",
              fontWeight: 400,
              lineHeight: "16px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            {discription.slice(0, 70)}...
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VideoCard1;
