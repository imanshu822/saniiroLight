import { Stack, Typography } from "@mui/material";
import React from "react";
import NavLight from "../../Navbar/NavLight";
import "../../Solutions/IndustriesByusecases/Solution.css";
import TickMark from "../../assets/TickMark.svg";

const CaseStudyBanner = () => {
  return (
    <>
      {/* desktop view  */}

      <Stack
        display={{
          xs: "none",
          lg: "block",
        }}
        bgcolor={"#052973"}
        className="textured-background"
      >
        <NavLight />
        <Stack gap={4} pb={14}>
          <Stack
            p={"50px 0px 0 0"}
            gap={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack direction={"row"}>
              <Typography
                textTransform={"uppercase"}
                fontSize={"75px"}
                letterSpacing={1}
                fontWeight={"bold"}
                lineHeight={1}
                color={"#4DB267"}
              >
                Trusted by Over
              </Typography>
              <Typography
                textTransform={"uppercase"}
                fontSize={"75px"}
                letterSpacing={1}
                fontWeight={"bold"}
                color={"transparent"}
                lineHeight={1}
                className="text-stroke"
              >
                {" "}
                250,000+
              </Typography>
            </Stack>
            <Typography
              textTransform={"uppercase"}
              fontSize={"75px"}
              letterSpacing={1}
              fontWeight={"bold"}
              color={"white"}
              lineHeight={1}
            >
              Businesses Worldwide
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* mobile view and desktop both */}
      <Stack
        display={{
          xs: "block",
          lg: "none",
        }}
        bgcolor={"#052973"}
        className="textured-background"
      >
        <NavLight />
        <Stack pb={14}>
          <Stack
            p={"50px 0px 0 0"}
            gap={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack direction={"row"} margin={"0 auto"}>
              <Typography
                textAlign={"center"}
                textTransform={"uppercase"}
                fontSize={{
                  xs: "30px",
                  sm: "40px",
                  md: "50px",
                  lg: "60px",
                  xl: "75%",
                }}
                letterSpacing={1}
                fontWeight={"bold"}
                lineHeight={1}
                color={"#4DB267"}
              >
                Trusted by Over{" "}
                <span style={{ color: "transparent" }} className="text-stroke">
                  250,000+
                </span>
              </Typography>
            </Stack>
            <Typography
              textAlign={"center"}
              textTransform={"uppercase"}
              fontSize={{
                xs: "30px",
                sm: "40px",
                md: "50px",
                lg: "60px",
                xl: "75%",
              }}
              letterSpacing={1}
              fontWeight={"bold"}
              color={"white"}
              lineHeight={1}
            >
              Businesses Worldwide
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CaseStudyBanner;
