import { Stack, Typography } from "@mui/material";
import React from "react";
import FeatureCard from "./FeatureCard";
import BillingCardData from "./BillingCardData";

const BillingFeatures = () => {
  return (
    <Stack backgroundColor={"#35373E"} height={"1500px"}>
      <Stack
        width={"1024px"}
        // border={"1px solid white"}

        margin={"262px auto"}
      >
        <Stack>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "30px",
              fontWeight: 600,
              lineHeight: "28px",
              letterSpacing: "0em",
              textAlign: "center",
              color: " #F15B25",
            }}
          >
            Billing Management Software
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
              marginTop: "13px",
              color: "#FFFFFF",
            }}
          >
            Features at a glance
          </Typography>
          <Stack
            marginTop={"65px"}
            width={"1024px"}
            // border={"1px solid white"}
            direction={"row"}
            gap={"19px"}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            {BillingCardData.map((data) => (
              <FeatureCard key={data.key} billingCardData={data} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BillingFeatures;
