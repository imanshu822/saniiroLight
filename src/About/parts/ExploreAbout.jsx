import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import down from "../../assets/down.svg";
import ReactPlayer from "react-player";
import Polygon from "../../assets/Polygon.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ExploreAbout = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  const lists = [
    {
      title: "Why do customers like Saniiro?",
      description:
        "We love what we do and it shows in the solutions we produce.",
    },
    {
      title: "Why do customers like Saniiro?",
      description:
        "We love what we do and it shows in the solutions we produce.",
    },
    {
      title: "Why do customers like Saniiro?",
      description:
        "Offer standard, office-based support, available 24x7; that said, we are a no-nonsense team and will always respond promptly when you need us.",
    },
    {
      title: "Why do customers like Saniiro?",
      description:
        "We love what we do and it shows in the solutions we produce.",
    },
    {
      title: "Why do customers like Saniiro?",
      description:
        "We love what we do and it shows in the solutions we produce.",
    },
    {
      title: "Why do customers like Saniiro?",
      description:
        "Offer standard, office-based support, available 24x7; that said, we are a no-nonsense team and will always respond promptly when you need us.",
    },
    {
      title: "Why do customers like Saniiro?",
      description:
        "We love what we do and it shows in the solutions we produce.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const carouselContainerStyle = {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "0 10px",
  };
  return (
    <>
      <Stack
        display={{ xs: "none", lg: "flex" }}
        bgcolor={"#052973"}
        mt={2}
        alignItems={"center"}
        p={"60px 0"}
        gap={8}
      >
        <Stack
          width={"90%"}
          direction={"row"}
          flexWrap={"wrap"}
          gap={2}
          justifyContent={"center"}
        >
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"#000000"}
            width={"30%"}
            height={"432px"}
            textAlign={"center"}
            borderRadius={1}
          >
            <Typography fontWeight={"bold"} fontSize={"40px"} color={"white"}>
              Why do customers like Saniiro?
            </Typography>
          </Stack>
          {lists.map((d, index) => (
            <Stack
              key={index}
              justifyContent={"center"}
              alignItems={"center"}
              bgcolor={"white"}
              width={"30%"}
              height={"432px"}
              textAlign={"center"}
              borderRadius={1}
            >
              <Typography fontWeight={"bold"} fontSize={"40px"} color={"black"}>
                {d.title}
              </Typography>
            </Stack>
          ))}
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={"#38548f"}
            width={"30%"}
            height={"432px"}
            textAlign={"center"}
            borderRadius={1}
          >
            <Typography fontWeight={"bold"} fontSize={"40px"} color={"white"}>
              Why do customers like Saniiro?
            </Typography>
          </Stack>
        </Stack>
        <Stack alignItems={"center"}>
          <Stack
            bgcolor={"black"}
            width={"84%"}
            borderRadius={1}
            direction={"row"}
          >
            <Stack
              width={"70%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                color={"white"}
                fontSize={"30px"}
                fontWeight={500}
                textAlign={"center"}
              >
                Saniiro Business Cloud People, delivers amazing workforce
                experiences, so that customers can become great employer brands,
              </Typography>
            </Stack>
            <Stack width={"30%"}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {isVideoPlaying ? (
                  <ReactPlayer
                    url="https://www.example.com/your-video-url.mp4"
                    controls
                    width="100%"
                    height="350px"
                  />
                ) : (
                  <Stack alignItems={"center"}>
                    <img
                      src={down}
                      alt="Thumbnail"
                      style={{
                        width: "350px",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      onClick={playVideo}
                      position={"absolute"}
                      width={"50px"}
                      height={"50px"}
                      top={"50%"}
                      left={"50%"}
                      bgcolor={"#D9D9D9"}
                      borderRadius={"50%"}
                      border={"2px solid #FB5555"}
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
                          left: "30%",
                          width: "25px",
                          height: "25px",
                        }}
                      />
                    </Box>
                  </Stack>
                )}
              </div>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        display={{ xs: "block", lg: "none" }}
        bgcolor={"#052973"}
        mt={2}
        alignItems={"center"}
        p={"60px 0"}
        gap={8}
      >
        <Stack
          width={"90%"}
          gap={2}
          justifyContent={"center"}
          style={carouselContainerStyle}
        >
          <Carousel
            responsive={responsive}
            autoPlay
            showDots
            infinite
            autoPlaySpeed={5000}
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              bgcolor={"black"}
              color={"white"}
              height={"352px"}
              textAlign={"center"}
              borderRadius={1}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={{ xs: "30px", md: "40px" }}
                color={"white"}
              >
                Why do customers like Saniiro?
              </Typography>
            </Stack>
            {lists.map((d, index) => (
              <Stack
                key={index}
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={"white"}
                height={"352px"}
                textAlign={"center"}
                borderRadius={1}
              >
                <Typography
                  fontWeight={"bold"}
                  fontSize={{ xs: "30px", md: "40px" }}
                  color={"black"}
                >
                  {d.title}
                </Typography>
              </Stack>
            ))}
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              bgcolor={"black"}
              color={"white"}
              height={"352px"}
              textAlign={"center"}
              borderRadius={1}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={{ xs: "30px", md: "40px" }}
                color={"white"}
              >
                Why do customers like Saniiro?
              </Typography>
            </Stack>
          </Carousel>

          <Stack alignItems={"center"}>
            <Stack
              bgcolor={"black"}
              width={{ xs: "90%", md: "84%" }}
              borderRadius={1}
              direction={"column"}
              alignItems={"center"}
              gap={2}
            >
              <Stack
                marginTop={"20px"}
                width={"90%"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography
                  color={"white"}
                  fontSize={{ xs: "24px", md: "30px" }}
                  fontWeight={500}
                  textAlign={"center"}
                >
                  Saniiro Business Cloud People, delivers amazing workforce
                  experiences, so that customers can become great employer
                  brands,
                </Typography>
              </Stack>
              <Stack width={"100%"}>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {isVideoPlaying ? (
                    <ReactPlayer
                      url="https://www.example.com/your-video-url.mp4"
                      controls
                      width="100%"
                      height="350px"
                    />
                  ) : (
                    <Stack
                      alignItems={"center"}
                      justifyContent={"center"}
                      margin={"0 auto"}
                    >
                      <img
                        src={down}
                        alt="Thumbnail"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      <Box
                        onClick={playVideo}
                        position={"absolute"}
                        width={"10%"}
                        height={"10%"}
                        top={"50%"}
                        left={"50%"}
                        bgcolor={"#D9D9D9"}
                        borderRadius={"50%"}
                        border={"2px solid #FB5555"}
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
                            top: "13%",
                            left: "20%",
                            width: "25px",
                            height: "25px",
                          }}
                        />
                      </Box>
                    </Stack>
                  )}
                </div>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ExploreAbout;
