import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const FeaturesCard = (props) => {
  console.log(props);
  return (
    <Stack width={"221px"} height={"165px"}>
      <Box
        paddingTop={"20px"}
        component="img"
        sx={{
          height: "46px",
          width: "46px",
          margin: "auto auto",
        }}
        alt="Image"
        src={props.features.img}
      />
      <Box marginTop={"15px"}>
        <Typography
          sx={{
            paddingBottom: "15px",
            paddingTop: "20px",
            fontFamily: "Work Sans",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "21px",
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          {props.features.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "12px",
            fontWeight: 300,
            lineHeight: "17px",
            letterSpacing: "0.03em",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          {props.features.description}
        </Typography>
      </Box>
    </Stack>
  );
};

export default FeaturesCard;
