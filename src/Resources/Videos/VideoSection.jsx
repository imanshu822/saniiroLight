import { Stack, Typography } from "@mui/material";
import React from "react";
import BgSvg01 from "../../assets/BgSvg01.jpeg";
// import contactCTA from "../../assets/ContactCTA.svg";
import NavLight from "../../Navbar/NavLight";
import "../../Solutions/IndustriesByusecases/Solution.css"
const VideoSection = () => {
  
  return (
    <Stack bgcolor={"#052973"} className="textured-background">
      <NavLight />
      <Stack
        p={"100px 0px 0 0"}
        gap={2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          textTransform={"uppercase"}
          fontSize={"75px"}
          letterSpacing={1}
          fontWeight={"bold"}
          color={"white"}
          lineHeight={1}
        >
          VIDEOS
        </Typography>
      </Stack>
      <Typography
        color={"white"}
        fontSize={"18px"}
        p={"40px 200px 100px 200px"}
        textAlign={"center"}
      >
        Watch comprehensive videos to help you get started with Zoho CRM,
        understand the terminology, and learn how to use various features.
      </Typography>
    </Stack>
  );
};

export default VideoSection;
