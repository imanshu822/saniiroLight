import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FramImg from "../../assets/Frame62700.png";
import { Link } from "react-router-dom";
const UpdatesBanner = () => {
  return (
    <Stack marginTop={"40px"} alignItems={"center"} position={"relative"}>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          component="img"
          width={"1420px"}
          height={"211px"}
          alt="The house from the offer."
          src={FramImg}
        ></Box>
      </Stack>
      <Stack marginTop={"40px"} position={"absolute"} gap={1}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "50px",
            fontWeight: 600,
            lineHeight: "50px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#4DB267",
            textTransform: "uppercase",
          }}
        >
          New Updates
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "50px",
            fontWeight: 600,
            lineHeight: "53px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#052973",
          }}
        >
          Saniiro
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "27px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#000000",
          }}
        >
          Familiarise yourselves with CRM terminology via these one-minute
          conceptual videos.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default UpdatesBanner;
