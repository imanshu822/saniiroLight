import { Stack, Typography } from "@mui/material";
import React from "react";
import bannerImg from "../../assets/testmonialsTower.png";

const TestimonialsBanner = () => {
  return (
    <Stack width={"100%"}>
      <Stack
        margin={"0 auto"}
        width={"1420px"}
        height={"729px"}
        sx={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack maxWidth={"1420px"} textAlign={"center"}>
          <Typography
            width={"60%"}
            margin={"70px auto 10px"}
            sx={{
              fontFamily: "Work Sans",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "49px",
              textTransform: "uppercase",
              color: "#34A853",
            }}
          >
            Customer Testimonials
          </Typography>
          <Typography
            width={"60%"}
            margin={"0px auto 10px"}
            sx={{
              fontFamily: "Work Sans",
              fontWeight: 600,
              fontSize: "22px",
              lineHeight: "32px",
              color: "#000000",
            }}
          >
            Saniiro CRM is trusted by over 250,000 businesses worldwide.
          </Typography>
          <Typography
            width={"60%"}
            margin={"0px auto 10px"}
            sx={{
              fontFamily: "Work Sans",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "23px",
              color: "#000000",
            }}
          >
            Here's what some of our customers say about our platform.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TestimonialsBanner;
