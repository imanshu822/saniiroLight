import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NavLight from "../../Navbar/NavLight";
import "../../Solutions/IndustriesByusecases/Solution.css";
import ResourceGallery from "./ResourceGallery";
const ResourceBanner = () => {
  return (
    <Stack bgcolor={"#052973"} className="textured-background" height={"100%"}>
      <NavLight />
      <Stack gap={4} pb={10} margin={"0 auto"}>
        <Stack
          pt={{
            xs: "20px",
            sm: "20px",
            md: "20px",
            lg: "40px",
          }}
          width={"95%"}
          m={"0 auto"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            fontFamily={{
              xs: "monospace",
              md: "sans-serif",
            }}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontSize={{
              xs: "30px",
              sm: "40px",
              md: "55px",
              lg: "62px",
            }}
            letterSpacing={{
              xs: 0.5,
              md: 1,
            }}
            fontWeight={"bold"}
            color={"transparent"}
            lineHeight={1}
            className="text-stroke"
          >
            Hi, how can we help?
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
                lg: "24px",
              },
              fontWeight: 600,
              lineHeight: "22px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Get answers and explore new ways to use Zoho CRM
          </Typography>
          {/* <Box
            sx={{
              backbroundColor: "white",
            }}
            margin={"0 auto"}
          >
            <input
              style={{
                width: "550px",
                height: "40px",
                borderRadius: "51px",
                margin: "5px auto",
                padding: "0 20px",
              }}
              placeholder="What are you looking for?"
              type="text"
            />
          </Box> */}
        </Stack>
      </Stack>
      <ResourceGallery />
    </Stack>
  );
};

export default ResourceBanner;

{
  /* <Stack width={"1200px"}>
  <Typography
    sx={{
      marginLeft: "10%",
      width: "20%",
      fontFamily: "Work Sans",
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "21px",
      letterSpacing: "-0.02em",
      textAlign: "left",
      color: "#fff",
      opacity: 0.8,
    }}
  >
    Looking for a demo, or have questions about our products and pricing?
  </Typography>
</Stack>; */
}
