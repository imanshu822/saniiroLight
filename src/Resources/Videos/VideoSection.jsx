import { Stack, Typography } from "@mui/material";
import React from "react";
import BgSvg01 from "../../assets/BgSvg01.jpeg";
// import contactCTA from "../../assets/ContactCTA.svg";
import NavLight from "../../Navbar/NavLight";
import "../../Solutions/IndustriesByusecases/Solution.css";
const VideoSection = () => {
  return (
    <Stack bgcolor={"#052973"} className="textured-background">
      <NavLight />
      <Stack
        pb={{
          lg: 10,
          xs: 5,
        }}
        pt={{
          lg: 10,
          xs: 5,
        }}
        alignItems={"center"}
        justifyContent={"center"}
        gap={{
          lg: 2,
          md: 2,
          xs: 1,
        }}
      >
        <Typography
          textTransform={"uppercase"}
          fontSize={{
            lg: "75px",
            md: "60px",
            sm: "50px",
            xs: "40px",
          }}
          letterSpacing={1}
          fontWeight={"bold"}
          color={"white"}
          lineHeight={1}
        >
          VIDEOS
        </Typography>
        <Typography
          color={"white"}
          fontSize={"18px"}
          margin={"0 auto"}
          width={"80%"}
          textAlign={"center"}
        >
          Watch comprehensive videos to help you get started with Zoho CRM,
          understand the terminology, and learn how to use various features.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default VideoSection;
