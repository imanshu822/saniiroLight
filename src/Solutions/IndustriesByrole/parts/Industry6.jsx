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
    <Stack>
      <Stack>
        <Typography
          mb={"20px"}
          sx={{
            fontFamily: "Work Sans",
            fontSize: "35px",
            fontWeight: 700,
            lineHeight: "37px",
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          Our customers love us
        </Typography>
        <Stack alignItems={"center"} margin={"0px auto"}>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            {isVideoPlaying ? (
              <ReactPlayer
                url="https://www.example.com/your-video-url.mp4" // Replace with your video URL
                controls
                width="1024px"
                height="537px"
              />
            ) : (
              <Stack alignItems={"center"}>
                <img
                  src={handShack}
                  alt="Thumbnail"
                  style={{
                    width: "1024px",
                    height: "537px",
                    objectFit: "cover",
                  }}
                />
                <Box
                  onClick={playVideo}
                  position={"absolute"}
                  width={"150px"}
                  height={"150px"}
                  top={"50%"}
                  left={"50%"}
                  bgcolor={"#D9D9D9"}
                  borderRadius={"50%"}
                  border={"8px solid #FB5555"}
                  sx={{ transform: "translate(-50%, -50%)", cursor: "pointer" }}
                >
                  <img
                    src={Polygon}
                    alt=""
                    style={{ position: "absolute", top: "25%", left: "38%" }}
                  />
                </Box>
              </Stack>
            )}
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Industry6;
