import { Stack, Typography } from "@mui/material";
import React from "react";
import BgSvg01 from "../../assets/BgSvg01.jpeg";
import NavLight from "../../Navbar/NavLight";
import "./Solution.css";
const Industries = () => {
  return (
    <Stack bgcolor={"#052973"} className="textured-background">
      <NavLight />
      <Stack
        pt={{
          xs: "50px",
          lg: "100px",
        }}
        gap={2}
        direction={{
          xs: "column",
          lg: "row",
        }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          fontFamily={"monospace"}
          textTransform={"uppercase"}
          fontSize={{
            xs: "55px",
            md: "60px",
            lg: "75px",
          }}
          letterSpacing={1}
          fontWeight={"bold"}
          color={"transparent"}
          lineHeight={1}
          className="text-stroke"
        >
          SANIIRO
        </Typography>
        <Typography
          textTransform={"uppercase"}
          p={"0px 20px"}
          fontSize={{
            xs: "55px",
            md: "60px",
            lg: "75px",
          }}
          color={"white"}
          fontWeight={900}
          lineHeight={0.9}
          textAlign={"center"}
          letterSpacing={"0.05em"}
        >
          CRM USE CASES
        </Typography>
      </Stack>
      <Typography
        color={"white"}
        fontSize={{
          xs: "14px",
          md: "16px",
          lg: "18px",
        }}
        p={{
          xs: "30px",
          lg: "40px 100px 85px 100px",
        }}
        textAlign={"center"}
      >
        Do you need a widget that geolocates your customers on a map? Or a
        completely automated lead follow-up or quoting process? Our solution
        architects love customizing Zoho CRM for unique business scenarios and
        use cases. Learn about the solutions we implemented for real Zoho
        customers with special requirements.
      </Typography>
    </Stack>
  );
};

export default Industries;
