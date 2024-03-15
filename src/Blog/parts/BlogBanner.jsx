import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FramImg from "../assets/Frame62700.png";
import { Link } from "react-router-dom";
const BlogBanner = (props) => {
  console.log(props);
  return (
    <Stack
      mt={{
        lg: "40px",
        md: "40px",
        sm: "20px",
        xs: "10px",
      }}
      alignItems={"center"}
      position={"relative"}
    >
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          component="img"
          width={{
            lg: "1036px",
            md: "90%",
            sm: "100%",
            xs: "100%",
          }}
          height={"211px"}
          alt="The house from the offer."
          src={FramImg}
        ></Box>
      </Stack>
      <Stack
        alignSelf={"center"}
        width={{
          lg: "70%",
          md: "90%",
          sm: "95%",
          xs: "95%",
        }}
        mt={{
          lg: "40px",
          md: "40px",
          sm: "40px",
          xs: "40px",
        }}
        position={"absolute"}
      >
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
            width: "100%",
            fontFamily: "Work Sans",
            fontSize: {
              lg: "50px",
              md: "40px",
              sm: "30px",
              xs: "20px",
            },
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
          display={{
            lg: "flex",
            md: "flex",
            xs: "none",
          }}
          width={{
            lg: "1036px",
            md: "90%",
            xs: "95%",
          }}
          sx={{
            marginTop: "34px",
            paddingBottom: "20px",
            borderBottom: "1px solid #E0E0E0",
          }}
          direction={"row"}
          justifyContent={"flex-start"}
        >
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
        </Stack>
      ) : (
        <Box
          margin={{
            lg: "30px",

            xs: "10px",
          }}
          width={"80%"}
          height={{
            lg: "90px",
            md: "50px",
            sm: "20px",
            xs: "10px",
          }}
          sx={{
            backgroundColor: "#D9D9D9",
          }}
        />
      )}
    </Stack>
  );
};

export default BlogBanner;
