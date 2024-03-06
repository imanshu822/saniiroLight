import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import img from "../../assets/Img.png";
import { Box, Stack, Typography } from "@mui/material";
const ProductSlider = () => {
  const features = [
    {
      src: logo1,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo2,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo3,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo1,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo2,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo3,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo1,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo2,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",
      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
    {
      src: logo3,
      title:
        "Saniiro Business Cloud People, delivers amazing workforce experiences, so that customers can become great employer brands, increasing engagement, performance, and retention, while making it easier to acquire top talent.",

      Name: "Chester Hull",
      designation: "Founder/CEO at Prosound.",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
  return (
    <Box width="100%">
      <Carousel
        responsive={responsive}
        autoPlay
        showDots
        infinite
        autoPlaySpeed={1500}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      >
        {features.map((d, index) => (
          // <Box key={index}>
          //   <img
          //     src={d.src}
          //     alt={`Logo ${index + 1}`}
          //     style={{ width: "120px", height: "50px" }}
          //   />
          // </Box>
          <Stack alignItems={"center"} padding={"20px 20px 60px 20px"}>
            <Stack
              bgcolor={"white"}
              width={{
                xs: "80%",
                md: "70%",
                lg: "50%",
              }}
              boxShadow={"1px 2px 6px 4px lightgray"}
              gap={3}
              direction={"row"}
              p={"20px 20px"}
            >
              <Stack gap={2} position={"relative"}>
                <img
                  src={d.src}
                  alt={`Logo ${index + 1}`}
                  style={{ width: "120px", height: "50px", padding: "0 10px" }}
                />

                <Typography
                  width={{
                    xs: "80%",
                    md: "90%",
                    lg: "80%",
                  }}
                  marginLeft={"20px"}
                >
                  {d.title}
                </Typography>
                <Stack direction={"row"} gap={2} alignItems={"center"}>
                  <Stack
                    sx={{
                      width: {
                        xs: "75px",

                        lg: "100px",
                      },
                      height: {
                        xs: "75px",

                        lg: "100px",
                      },
                    }}
                  >
                    <img src={img} width={"100%"} height={"100%"} alt="" />
                  </Stack>
                  <Stack justifyContent={"center"}>
                    <Typography
                      fontWeight={"bold"}
                      color={"grey"}
                      fontSize={{
                        xs: "15px",
                        md: "20px",
                      }}
                    >
                      {d.Name}
                    </Typography>
                    <Typography
                      fontSize={{
                        xs: "15px",
                        md: "20px",
                      }}
                    >
                      {d.designation}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography
                  display={{
                    xs: "none",
                    md: "block",
                  }}
                  position={"absolute"}
                  right={{
                    xs: "20px",
                    md: "10px",
                    lg: "20px",
                  }}
                  top={-15}
                  color={"#248F41"}
                  fontSize={{
                    xs: "140px",
                    md: "180px",
                    lg: "220px",
                  }}
                  lineHeight={0.9}
                >
                  “
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Carousel>
    </Box>
  );
};

export default ProductSlider;
