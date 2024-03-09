import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import BookImg from "../../../assets/noun-pos-payment-311044 1.png";
const GlassCard = () => {
  return (
    <Stack
      width={{
        xs: "125.5px",
        md: "229px",
      }}
      height={{
        xs: "140px",
        md: "216px",
      }}
      gap={2}
      alignItems={"center"}
      justifyContent={"center"}
      padding={"5px 5px"}
      background={"#FFFFFF33"}
      border={"1.19px solid #FFFFFF"}
      borderRadius={"10px"}
    >
      <Box
        component="img"
        width={"54px "}
        height={"54px"}
        alt="Book Image"
        src={BookImg}
      />
      <Typography
        sx={{
          width: "130px",
          height: "36px",
          fontFamily: "Work Sans",
          fontSize: {
            xs: "14px",
            md: "16px",
          },
          fontWeight: 600,
          lineHeight: "18px",
          letterSpacing: "0em",
          textAlign: "center",
        }}
      >
        Third-party integrations
      </Typography>
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontSize: {
            xs: "10px",
            md: "12px",
          },
          fontWeight: 500,
          lineHeight: "13px",
          letterSpacing: "0em",
          textAlign: "center",
          textTransform: "capitalize",
        }}
      >
        And APIs to improve productivity
      </Typography>
    </Stack>
  );
};

export default GlassCard;
