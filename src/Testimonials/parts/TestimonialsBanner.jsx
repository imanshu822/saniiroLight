import { Stack, Typography } from "@mui/material";
import React from "react";
import bannerImg from "../../assets/testmonialsTower.png";

const TestimonialsBanner = () => {
  return (
    <Stack width={"100%"}>
      <Stack
        margin={"0 auto"}
        width={{
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
        }}
        height={{
          xs: "600px",
          md: "729px",
        }}
        sx={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "center center",
        }}
      >
        <Stack maxWidth={"1420px"} textAlign={"center"}>
          <Typography
            width={{
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "60%",
              xl: "60%",
            }}
            margin={{
              xs: "30px auto 0px",
              sm: "35px auto 0px",
              md: "50px auto 0px",
              lg: "70px auto 10px",
            }}
            sx={{
              fontFamily: "Work Sans",
              fontWeight: 700,
              fontSize: {
                xs: "27px",
                sm: "30px",
                md: "35px",
                lg: "40px",
              },
              lineHeight: {
                xs: "35px",
                md: "40px",
                lg: "50px",
              },

              textTransform: "uppercase",
              color: "#34A853",
            }}
          >
            Customer Testimonials
          </Typography>
          <Typography
            width={{
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "60%",
              xl: "60%",
            }}
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
            width={{
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "60%",
              xl: "60%",
            }}
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
