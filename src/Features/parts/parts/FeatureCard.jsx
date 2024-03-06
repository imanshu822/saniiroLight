import { Stack, Typography } from "@mui/material";
import React from "react";

const FeatureCard = (props) => {
  return (
    <Stack>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          width: "221.77px",
          height: "208.76px",
          padding: "19.09px 9.54px 19.09px 9.54px",
          borderRadius: "9.54px",
          border: "1.19px",
          gap: "17.89px",
          background: "#FFFFFFE5",
        }}
      >
        <img
          src={props.billingCardData.logo}
          alt="logo"
          width={"114px"}
          height={"109px"}
        />
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "18px",
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          {props.billingCardData.title}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FeatureCard;
