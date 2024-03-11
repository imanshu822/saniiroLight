import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NavLight from "../../Navbar/NavLight";
import "../../Solutions/IndustriesByusecases/Solution.css";
// import TickMark from "../../assets/TickMark.svg";
import profileImg from "./../../assets/Group 62904.png";
const CaseStudyUserBanner = () => {
  return (
    <Stack bgcolor={"#052973"} className="textured-background">
      <NavLight />
      <Stack
        gap={4}
        pb={{
          xs: 7,
          md: 14,
        }}
      >
        <Stack
          margin={{
            xs: "35px auto 0px",
            md: "90px auto 0px",
          }}
          width={{
            xs: "95%",
            lg: "1024px",
          }}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            textTransform={"uppercase"}
            fontSize={{
              xs: "30px",
              md: "40px",
            }}
            letterSpacing={1}
            fontWeight={"bold"}
            color={"white"}
            lineHeight={1}
            textAlign={"center"}
          >
            Brigade Plus transforms sales management and customer journeys with
            Zoho CRM
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: {
                xs: "16px",
                md: "22px",
              },
              fontWeight: 500,
              lineHeight: "32px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "white",
            }}
          >
            "Zoho CRM stands out from its competitors, not only for its
            user-friendly interface, but for its exceptional customer support as
            well. Whether it's through their comprehensive online resources or
            dedicated tech support, Zoho has consistently delivered excellent
            support,"
          </Typography>
          <Box
            width={"83px"}
            height={"83px"}
            component="img"
            alt="ProfileImg"
            src={profileImg}
          />
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "23px",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              textAlign: "center",
              color: "white",
            }}
          >
            David Fauser,
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "13px",
              fontWeight: 400,
              lineHeight: "13px",
              letterSpacing: "-0.02em",
              textAlign: "center",
              color: "white",
            }}
          >
            Director of Sales, CIMCO Refrigeration,
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CaseStudyUserBanner;
