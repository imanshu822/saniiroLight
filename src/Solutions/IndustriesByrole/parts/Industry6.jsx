import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import handShack from "../../../assets/icons/handShack.png";
import Polygon from "../../../assets/Polygon.svg";
const Industry6 = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };
  return (
    <Stack
      width={{
        xs: "90%",
        md: "80%",
      }}
      m={"0 auto"}
    >
      <Stack>
        <Typography
          mb={"20px"}
          sx={{
            fontFamily: "Work Sans",
            fontSize: {
              xs: "20px",
              sm: "25px",
              md: "30px",
            },
            fontWeight: 700,
            lineHeight: "37px",
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          Our customers love us
        </Typography>
        <Stack
          margin={"0 auto"}
          width={"95%"}
          height={{
            xs: "200px",
            sm: "300px",
            md: "500px",
          }}
          border={"2px solid black"}
        >
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=SlhESAKF1Tk"
            width="100%"
            height="100%"
            // controls={true}
            playing
            light={true}
            sx={{ borderRadius: "10px" }}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          ></ReactPlayer>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Industry6;
