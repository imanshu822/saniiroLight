import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Progressbar from "./ProgreeBar";
import handShack from "../../../assets/icons/handShack.png";
import Polygon from "../../../assets/Polygon.svg";
import ReactPlayer from "react-player";

const Industry3 = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };
  return (
    <Stack gap={5}>
      <Stack alignItems={"center"}>
        <Typography
          fontSize={"35px"}
          fontWeight={"bold"}
          width={"30%"}
          textAlign={"center"}
        >
          {" "}
          Zoho CRM is the best CRM for sales reps
        </Typography>
        <Typography width={"70%"} textAlign={"center"}>
          Zoho CRM can dramatically enhance your customer communication, improve
          the productivity of your sales reps and increase your organization
          sales.
        </Typography>
      </Stack>
      <Stack justifyContent={"center"} position={"relative"}>
        <Stack bgcolor={"#35373E"} height={"700px"} gap={2}>
          <Typography
            marginTop={"50px"}
            color={"white"}
            fontSize={"35px"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Sales readiness and priority
          </Typography>
          <Stack direction={"row"} justifyContent={"center"} gap={5}>
            <Stack width={"40%"}>
              <Stack
                width={"100%"}
                borderRight={"1px solid lightgrey"}
                borderBottom={"1px solid lightgrey"}
                p={2}
                gap={2}
              >
                <Typography
                  color={"white"}
                  fontWeight={"bold"}
                  fontSize={"25px"}
                >
                  ARE YOU STILL COLD-CALLING?
                </Typography>
                <Typography color={"#ffffff"} fontSize={"14px"}>
                  When you hand your reps a list of leads to follow-up, where
                  exactly do they start? Cold-calling them right away may seem
                  like the best option, but it certainly isn't the most
                  efficient way to sell, especially given that 50% of a sales
                  rep's time is wasted on leads that don't convert.
                </Typography>
              </Stack>
              <Stack
                width={"100%"}
                borderRight={"1px solid lightgrey"}
                p={2}
                gap={2}
              >
                <Typography
                  color={"#FFC849"}
                  fontWeight={"bold"}
                  fontSize={"25px"}
                >
                  ARE YOU STILL COLD-CALLING?
                </Typography>
                <Typography color={"#ffffff"} fontSize={"14px"}>
                  When you hand your reps a list of leads to follow-up, where
                  exactly do they start? Cold-calling them right away may seem
                  like the best option, but it certainly isn't the most
                  efficient way to sell, especially given that 50% of a sales
                  rep's time is wasted on leads that don't convert.
                </Typography>
              </Stack>
            </Stack>
            <Stack width={"17%"} marginLeft={"40px"} marginTop={"20px"}>
              <Progressbar />
              <Typography
                textAlign={"center"}
                color={"white"}
                fontWeight={"bold"}
                fontSize={"25px"}
              >
                Sales reps can spend up to 40% of their time looking for
                somebody to call.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack margin={"0px auto"}>
          <Stack
            width={"886px"}
            height={"415px"}
            position={"absolute"}
            left={"20%"}
            top={"550px"}
          >
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
                    width={"886px"}
                    height={"415px"}
                  />
                ) : (
                  <Stack alignItems={"center"}>
                    <img
                      src={handShack}
                      alt="Thumbnail"
                      width={"886px"}
                      height={"415px"}
                      style={{
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
                      sx={{
                        transform: "translate(-50%, -50%)",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={Polygon}
                        alt=""
                        style={{
                          position: "absolute",
                          top: "25%",
                          left: "38%",
                        }}
                      />
                    </Box>
                  </Stack>
                )}
              </div>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          bgcolor={"#052973"}
          height={"700px"}
          gap={2}
          paddingTop={"350px"}
        >
          <Typography
            marginTop={"50px"}
            color={"white"}
            fontSize={"35px"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Sales readiness and priority
          </Typography>
          <Stack direction={"row"} justifyContent={"center"} gap={5}>
            <Stack width={"40%"}>
              <Stack
                width={"100%"}
                borderRight={"1px solid lightgrey"}
                borderBottom={"1px solid lightgrey"}
                p={2}
                gap={2}
              >
                <Typography
                  color={"white"}
                  fontWeight={"bold"}
                  fontSize={"25px"}
                >
                  ARE YOU STILL COLD-CALLING?
                </Typography>
                <Typography color={"#ffffff"} fontSize={"14px"}>
                  When you hand your reps a list of leads to follow-up, where
                  exactly do they start? Cold-calling them right away may seem
                  like the best option, but it certainly isn't the most
                  efficient way to sell, especially given that 50% of a sales
                  rep's time is wasted on leads that don't convert.
                </Typography>
              </Stack>
              <Stack
                width={"100%"}
                borderRight={"1px solid lightgrey"}
                p={2}
                gap={2}
              >
                <Typography
                  color={"#FFC849"}
                  fontWeight={"bold"}
                  fontSize={"25px"}
                >
                  ARE YOU STILL COLD-CALLING?
                </Typography>
                <Typography color={"#ffffff"} fontSize={"14px"}>
                  When you hand your reps a list of leads to follow-up, where
                  exactly do they start? Cold-calling them right away may seem
                  like the best option, but it certainly isn't the most
                  efficient way to sell, especially given that 50% of a sales
                  rep's time is wasted on leads that don't convert.
                </Typography>
              </Stack>
            </Stack>
            <Stack width={"17%"} marginLeft={"40px"} marginTop={"20px"}>
              <Progressbar />
              <Typography
                textAlign={"center"}
                color={"white"}
                fontWeight={"bold"}
                fontSize={"25px"}
              >
                Sales reps can spend up to 40% of their time looking for
                somebody to call.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Industry3;
