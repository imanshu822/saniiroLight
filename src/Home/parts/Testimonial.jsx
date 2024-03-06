// import { Stack } from '@mui/material'
// import React from 'react'
// import testi from "../../assets/testi.svg"
// const Testimonial = () => {
//   return (
//     <Stack alignItems={"center"}>
//       <Stack width={"90%"} direction={"row"} justifyContent={"center"} gap={3}>
//         <Stack width={"50%"}>
//           <img src={testi} style={{height:"500px", width:"500px"}}/>
//         </Stack>
//         <Stack width={"50%"}></Stack>
//       </Stack>
//     </Stack>
//   );
// }

// export default Testimonial

import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import testi from "../../assets/testi.svg";
import team1 from "../../assets/team1.svg";
import team2 from "../../assets/team2.svg";
import Imgteam1 from "../../assets/ImgTeam1.svg";
import Imgteam2 from "../../assets/ImgTeam2.svg";
import Polygon from "../../assets/Polygon.svg";
const Testimonial = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };
  const list = [
    {
      icon: team1,
      Imgsrc: Imgteam1,
    },
    {
      icon: team2,
      Imgsrc: Imgteam2,
    },
    {
      icon: team2,
      Imgsrc: Imgteam2,
    },
    {
      icon: team1,
      Imgsrc: Imgteam1,
    },
  ];

  return (
    <Stack alignItems={"center"}>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          width: {
            xs: "100%",
            md: "80%",
          },
        }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        p={"50px 0"}
      >
        <Stack
          sx={{
            width: {
              xs: "100%",
              md: "50%",
            },
          }}
          alignItems={"center"}
        >
          <Stack
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              width: {
                xs: "90%",
                md: "90%",
              },
              height: {
                xs: "95%",
                md: "90%",
              },
            }}
          >
            {isVideoPlaying ? (
              <ReactPlayer
                url="https://www.youtube.com/watch?v=SlhESAKF1Tk" // Replace with your video URL
                controls
                width={"100%"}
                height={"100%"}
              />
            ) : (
              <Stack alignItems={"center"}>
                <img
                  src={testi}
                  alt="Thumbnail"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  onClick={playVideo}
                  position={"absolute"}
                  sx={{
                    width: {
                      xs: "100px",
                      xl: "200px",
                    },
                    height: {
                      xs: "100px",
                      xl: "200px",
                    },

                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    cursor: "pointer",
                  }}
                  top={"50%"}
                  left={"50%"}
                  bgcolor={"#D9D9D9"}
                  borderRadius={"50%"}
                  border={"8px solid #FB5555"}
                >
                  <img
                    src={Polygon}
                    alt=""
                    style={{ position: "absolute", top: "12%", left: "33%" }}
                  />
                </Box>
              </Stack>
            )}
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          width={"50%"}
          sx={{
            width: {
              xs: "100%",
              md: "50%",
            },
          }}
          gap={2}
          justifyContent={"center"}
        >
          {list.map((d) => (
            <Stack
              border={"1px solid #E8E8E8"}
              borderRadius={1}
              sx={{
                width: {
                  xs: "42%",
                  md: "42%",
                },
              }}
              width={"42%"}
              alignItems={"center"}
              p={"20px 0"}
            >
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                direction={"row"}
                gap={2}
                sx={{}}
              >
                <Stack
                  marginLeft={"10px"}
                  sx={{
                    width: {
                      xs: "80%",
                      md: "90%",
                    },
                    height: {
                      xs: "80%",
                      md: "90%",
                    },
                  }}
                >
                  <img
                    src={d.icon}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Stack>
                <Typography
                  display={"flex"}
                  alignItems={"center"}
                  color={"black"}
                  fontSize={"25px"}
                  fontWeight={"bold"}
                  sx={{
                    fontSize: {
                      xs: "16px",
                      md: "20px",
                      xl: "25px",
                    },
                  }}
                >
                  1.5M+
                </Typography>
              </Stack>
              <Typography
                justifyContent={"center"}
                display={"flex"}
                color={"lightgray"}
              >
                Clients served
              </Typography>
              <Stack
                sx={{
                  width: {
                    xs: "95%",

                    xl: "250px",
                  },
                  height: {
                    xs: "95%",

                    xl: "150px",
                  },
                }}
              >
                <img
                  src={d.Imgsrc}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Testimonial;
