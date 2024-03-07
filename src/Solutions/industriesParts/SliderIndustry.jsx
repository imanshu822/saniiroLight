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
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    bigMobile: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Stack
      width={{
        xs: "280px",
        sm: "360px",
        md: "700px",
        lg: "1000px",
      }}
    >
      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        autoPlaySpeed={1500}
        removeArrowOnDeviceType={["desktop", "tablet", "bigMobile", "mobile"]}
      >
        {features.map((d, index) => (
          <Box key={index}>
            <Stack
              width={{
                xs: "50px",
                sm: "80px",
                md: "100px",
                lg: "120px",
              }}
              height={"50px"}
            >
              <img
                src={d.src}
                alt={`Logo ${index + 1}`}
                width={"100%"}
                height={"100%"}
                style={{ width: "120px", height: "50px" }}
              />
            </Stack>
          </Box>
        ))}
      </Carousel>
    </Stack>
  );
};

export default SliderIndustry;
