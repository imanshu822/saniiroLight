import { Box, Stack, Typography } from "@mui/material";
import React from "react";
// import ContactCTA from "../assets/ContactCTA.svg";
import NavLight from "../Navbar/NavLight";
import TickMark from "../assets/TickMark.svg";
import Button from "../utils/Button";
const Featured = () => {
  const lists = [
    {
      title: "AI",
      description: "No credit card required",
    },
    {
      title: "Journey Orchestration",
      description: "Straightforward pricing, no lock-ins",
    },
    {
      title: "BI",
      description: "50% faster implementation",
    },
    {
      title: "Remote Work",
      description: "Better adoption, easier training",
    },
  ];
  return (
    <>
      <Stack
        height={"auto"}
        position={"relative"}
        bgcolor={"#052973"}
        className="textured-background"
        // sx={{
        //   backgroundImage: `url(${ContactCTA})`,
        //   backgroundSize: "auto",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <NavLight />
        <Stack>
          <Stack width={"42%"} p={"40px 0px 40px 100px"} gap={2}>
            <Typography
              textTransform={"uppercase"}
              fontSize={"70px"}
              letterSpacing={1}
              fontWeight={"bold"}
              color={"transparent"}
              lineHeight={1}
              className="text-stroke"
            >
              FEATURES
            </Typography>
            <Typography
              textTransform={"uppercase"}
              fontSize={"60px"}
              color={"white"}
              fontWeight={900}
              lineHeight={1}
              letterSpacing={"0.05em"}
            >
              THAT MAKE SELLING EASIER
            </Typography>

            <Typography fontSize={"26px"} color={"white"}>
              Zoho CRM offers everything you need to increase leads, accelerate
              sales,and measure sales performance.
            </Typography>
            <Stack direction={"row"} flexWrap={"wrap"}>
              {lists.map((d) => (
                <Stack direction={"row"} gap={1} width={"250px"}>
                  <Stack pt={0.7}>
                    <img src={TickMark} alt="" />
                  </Stack>
                  <Stack>
                    <Typography
                      fontSize={"20px"}
                      fontWeight={"bold"}
                      color={"white"}
                    >
                      {d.title}
                    </Typography>
                    <Typography fontSize={"13px"} color={"grey"}>
                      {d.description}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
            <Button
              sx={{
                width: "200px",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily: "Work Sans",
                p: 1.5,
              }}
            >
              Request Demo
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Featured;
