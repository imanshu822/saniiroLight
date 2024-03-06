import React from "react";
// import backGroundImg from "../../../assets/icons/mesh-3441.png";
import { Box, Stack, Typography } from "@mui/material";
import GlassCard from "./GlassCard";
import googleMicImg from "../../../assets/icons/googleMic.png";
import googleImgImg from "../../../assets/icons/googleImg.png";
import searcgImg from "../../../assets/icons/search.png";
import "./Industry5.css";

const Industry5 = () => {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      margin={"0px auto"}
      backgroundColor={"#052973"}
      className="textured-backgroundd"
    >
      <Stack
        width={"780px"}
        height={"1150px"}
        margin={"60px auto 17px"}
        color={"white"}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "35px",
            fontWeight: 700,
            lineHeight: "37px",
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          Integrates with the apps you use everyday
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "21px",
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          Zoho CRM makes it easy for you to have a connected working environment
          by integrating with more than 100 popular business apps that you use
          everyday.
        </Typography>
        <Stack position={"relative"}>
          <Box
            component="img"
            position={"absolute"}
            width={"27px"}
            height={"27px"}
            top={36}
            left={20}
            zIndex={1}
            src={searcgImg}
          />
          <Box
            component="img"
            position={"absolute"}
            width={"55px"}
            height={"34px"}
            top={32}
            right={80}
            zIndex={1}
            src={googleMicImg}
          />
          <Box
            component="img"
            position={"absolute"}
            width={"40px"}
            height={"40px"}
            top={30}
            right={35}
            zIndex={1}
            src={googleImgImg}
          />
          <input
            placeholder="Integrates with the apps you use everyday"
            type="text"
            style={{
              width: "88%",
              height: "40px",
              padding: "10px 55px",
              borderRadius: "51px",
              fontFamily: "Work Sans",
              fontSize: "18px",
              opacity: 0.8,
              border: "none",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              margin: "20px 0",
            }}
          />
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={"28px"}
          marginTop={"40px"}
        >
          <GlassCard />
          <GlassCard />
          <GlassCard />
          <GlassCard />
          <GlassCard />
          <GlassCard />
          <GlassCard />
          <GlassCard />
          <GlassCard />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Industry5;
