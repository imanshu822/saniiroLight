import { Stack, Typography } from "@mui/material";
import React from "react";
import NavLight from "../Navbar/NavLight";
import "../Solutions/IndustriesByusecases/Solution.css";
import TickMark from "../assets/TickMark.svg";

const PRicingBAnner = () => {
  const lists = [
    {
      title: "FREE TRIAL",
      description: "No credit card required",
    },
    {
      title: "Flexible contracts",
      description: "Straightforward pricing, no lock-ins",
    },
    {
      title: "Minimal learning curve",
      description: "50% faster implementation",
    },
    {
      title: "Intuitive UX",
      description: "Better adoption, easier training",
    },
  ];
  return (
    <Stack bgcolor={"#052973"} className="textured-background">
      <NavLight />
      <Stack gap={4} pb={10}>
        <Stack
          p={"50px 0px 0 0"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            textTransform={"uppercase"}
            fontSize={"75px"}
            letterSpacing={1}
            fontWeight={"bold"}
            color={"transparent"}
            lineHeight={1}
            className="text-stroke"
          >
            Sensational software,
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={"75px"}
            letterSpacing={1}
            fontWeight={"bold"}
            color={"white"}
            lineHeight={1}
          >
            Sensible price
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={"70px"}
        >
          {lists.map((d) => (
            <Stack direction={"row"} gap={1}>
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
      </Stack>
    </Stack>
  );
};

export default PRicingBAnner;
