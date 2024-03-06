import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FramImg from "../../../assets/Frame62700.png";
import { Link } from "react-router-dom";
const BlogBanner = (props) => {
  console.log(props);
  return (
    <Stack marginTop={"40px"} alignItems={"center"} position={"relative"}>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          component="img"
          width={"1036px"}
          height={"211px"}
          alt="The house from the offer."
          src={FramImg}
        ></Box>
      </Stack>
      <Stack marginTop={"46px"} position={"absolute"}>
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
          Conceptual Learning Series
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
      </Stack>
    </Stack>
  );
};

export default BlogBanner;
