import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FramImg from "../assets/Frame62700.png";
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
          Blog
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
          Creating a Beeworthy Experience
        </Typography>
      </Stack>
      {props.GrayBanner === false ? (
        <Stack
          width={"1140px"}
          sx={{
            marginTop: "34px",
            paddingBottom: "20px",
            borderBottom: "1px solid #E0E0E0",
          }}
          direction={"row"}
          justifyContent={"start"}
        >
          <Link to={"/BlogContent"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "25px",
                fontWeight: 700,
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              LATEST POSTS
            </Typography>
          </Link>
        </Stack>
      ) : (
        <Box
          margin={"40px auto"}
          width={"80%"}
          height={"100px"}
          sx={{
            backgroundColor: "#D9D9D9",
          }}
        />
      )}
    </Stack>
  );
};

export default BlogBanner;
