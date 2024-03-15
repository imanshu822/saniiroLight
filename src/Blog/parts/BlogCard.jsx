import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const BlogCard = ({ blog }) => {
  const {
    id,
    title,
    disc,
    postDate,
    postedBy,
    company,
    timeToReadInMin,
    imgUrl,
  } = blog;
  return (
    <Stack
      backgroundColor={"#FFFFFF"}
      m={"0 auto"}
      sx={{
        width: {
          xs: "95%",
          md: "344px",
          lg: "384px",
        },
        height: {
          xs: "100%",
          md: "380px",
          lg: "416px",
        },
        objectFit: "cover",
        borderLeft: "1px solid rgba(0, 0, 0, 0.3)",
        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
        borderRadius: "8px",
      }}
    >
      <Box
        component="img"
        sx={{
          height: {
            xs: "50%",
            lg: "50%",
          },
          width: {
            xs: "100%",
            lg: "100%",
          },
        }}
        alt="Blog Image"
        src={imgUrl} // Use the imgUrl directly as it already contains the correct path
      />
      <Stack>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "19px",
            fontWeight: 700,
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "left",
            margin: "20px 32px 10px 16px",
          }}
        >
          {id}. {title}
        </Typography>
        <Typography
          sx={{
            margin: "0px 32px 10px 16px",
            fontFamily: "Work Sans",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "16px",
            letterSpacing: "0em",
            textAlign: "left",
            opacity: "70%",
          }}
        >
          {disc.length > 100 ? `${disc.substring(0, 100)}...` : disc}
        </Typography>
      </Stack>
      <Box width={"100%"}>
        <Stack justifyContent={"space-between"} direction={"row"}>
          <Typography
            padding={"12px 0px 12px 16px"}
            sx={{
              width: "50%",
              fontFamily: "Work Sans",
              fontSize: "10px",
              fontWeight: 500,
              lineHeight: "14px",
              letterSpacing: "0em",
              opacity: "60%",
              borderRight: "1px solid rgba(0, 0, 0, 0.3)",
              borderTop: "1px solid rgba(0, 0, 0, 0.3)",
              borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
            }}
          >
            Posted On {postDate}
          </Typography>
          <Typography
            padding={"12px 0px 12px 16px"}
            sx={{
              width: "50%",
              fontFamily: "Work Sans",
              fontSize: "10px",
              fontWeight: 500,
              lineHeight: "14px",
              letterSpacing: "0em",
              opacity: "60%",
              borderTop: "1px solid rgba(0, 0, 0, 0.3)",
              borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
            }}
          >
            By {postedBy}
          </Typography>
        </Stack>
        <Stack
          width={"88%"}
          direction={"row"}
          justifyContent={"space-between"}
          margin={"7px 0px"}
          alignItems={"center"}
          paddingTop={"10px"}
          paddingBottom={"10px"}
          paddingLeft={"16px"}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "10px",
              fontWeight: 500,
              lineHeight: "14px",
              letterSpacing: "0em",
              opacity: "60%",
            }}
          >
            {company}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "10px",
              fontWeight: 500,
              lineHeight: "14px",
              letterSpacing: "0em",
              opacity: "60%",
            }}
          >
            {timeToReadInMin} Mins Read
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default BlogCard;
