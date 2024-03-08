import React from "react";
import { Stack, Typography } from "@mui/material"; // Ensure correct import for Typography and Stack
import FeatureCard from "./FeatureCard";
import BillingCardData from "./BillingCardData";

const BillingFeatures = () => {
  return (
    <Stack sx={{ backgroundColor: "#35373E", height: "100%" }}>
      <Stack
        sx={{
          width: {
            xs: "90%",
            xl: "80%",
          },
          height: "100%",
          margin: {
            xs: "20px auto",
            lg: "262px auto",
          },
        }}
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
              color: "#F15B25",
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
            marginTop={{
              xs: "20px",
              lg: "65px",
            }}
            width={"100%"}
            height={"100%"}
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
