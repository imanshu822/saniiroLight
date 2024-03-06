import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NavLight from "../../Navbar/NavLight";
import "../../Solutions/IndustriesByusecases/Solution.css";
import ResourceGallery from "./ResourceGallery";
const ResourceBanner = () => {
  return (
    <Stack
      bgcolor={"#052973"}
      className="textured-background"
      height={"1800px"}
    >
      <NavLight />
      <Stack gap={4} pb={10} margin={"0 auto"}>
        <Stack
          p={"50px 0px 0 0"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            textTransform={"uppercase"}
            fontSize={"62px"}
            letterSpacing={1}
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
              fontSize: "22px",
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
