import { Stack, Typography } from "@mui/material";
import React from "react";

const FeatureCard = (props) => {
  return (
    <Stack>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          width: {
            xs: "104px",
            smm: "208.76px",
          },
          height: {
            xs: "104px",
            smm: "208.76px",
          },
          padding: {
            xs: "9.54px 4.77px 9.54px 4.77px",
            smm: "19.09px 9.54px 19.09px 9.54px",
          },
          borderRadius: {
            xs: "4.77px",
            smm: "9.54px",
          },

          border: "1.19px",
          gap: {
            xs: "9.54px",
            smm: "17.89px",
          },
          background: "#FFFFFFE5",
        }}
      >
        <Stack
          width={{
            xs: "57px",
            smm: "114px",
          }}
          height={{
            xs: "54.5px",
            smm: "109px",
          }}
        >
          <img
            src={props.billingCardData.logo}
            alt="logo"
            width={"100%"}
            height={"100%"}
          />
        </Stack>

        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: {
              xs: "8px",
              smm: "16px",
            },
            fontWeight: 600,
            lineHeight: {
              xs: "9px",
              smm: "18px",
            },
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
