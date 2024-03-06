import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import { Box, Stack } from "@mui/material";
const SliderIndustry = () => {
  const features = [
    {
      src: logo1,
    },
    {
      src: logo2,
    },
    {
      src: logo3,
    },
    {
      src: logo1,
    },
    {
      src: logo2,
    },
    {
      src: logo3,
    },
    {
      src: logo1,
    },
    {
      src: logo2,
    },
    {
      src: logo3,
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Stack pl={5}>
      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        autoPlaySpeed={1500}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      >
        {features.map((d, index) => (
          <Box key={index}>
            <img
              src={d.src}
              alt={`Logo ${index + 1}`}
              style={{ width: "120px", height: "50px" }}
            />
          </Box>
        ))}
      </Carousel>
    </Stack>
  );
};

export default SliderIndustry;
