import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const VideoCard = ({ img, title, description, duration }) => {
  return (
    <Stack
      spacing={2}
      width={{
        lg: "280px",
        md: "330px",
        sm: "330px",
        xs: "300px",
      }}
      borderRadius={"10px"}
      position={"relative"}
    >
      <Stack
        position={"absolute"}
        top={"190px"}
        width={"67px"}
        right={"10px"}
        height={"28px"}
        justifyContent={"center"}
        alignItems={"center"}
        border={"1px solid #ffffff"}
        sx={{
          backgroundColor: "#000000",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#ffffff",
          }}
        >
          {duration}
        </Typography>
      </Stack>
      <Box
        component="img"
        width={{
          lg: "280px",
          md: "330px",
          sm: "330px",
          xs: "300px",
        }}
        height={"210px"}
        src={img}
        alt="video thumbnail"
      />

      <Stack padding={"10px"}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#000000", // Adjust the color as needed
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#333333", // Adjust the color as needed
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default VideoCard;
