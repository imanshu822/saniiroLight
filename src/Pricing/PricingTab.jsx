import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import PriceCardSection from "./PriceCardSection";
import SaveUpTo from "./SaveUpTo";

const PricingTab = () => {
  const [plan, setPlan] = useState("monthly");

  const handlePlan = (selectedPlan) => {
    setPlan(selectedPlan);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            zIndex: "1",
            position: "absolute",
            translateY: "-25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack
              sx={{
                background: "#34A853",
                borderRadius: "8px",
                boxShadow: "3px 4px 4.300000190734863px 0px #00000040",
              }}
              direction="row"
              spacing={4}
              p={"4px 6px"}
            >
              <Box>
                <Typography
                  sx={{
                    padding: "13px 42px",
                    borderRadius: "5px",
                    background: plan === "monthly" ? "#FFFFFF" : "none",
                    opacity: plan === "monthly" ? 0.7 : 1,
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "16px",
                    textAlign: "center",
                    color: plan == "monthly" ? "#000000" : "#FFFFFF",
                    cursor: "pointer",
                  }}
                  onClick={() => handlePlan("monthly")}
                >
                  Monthly
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    padding: "13px 42px",
                    borderRadius: "5px",
                    background: plan === "yearly" ? "#FFFFFF" : "none",
                    opacity: plan === "yearly" ? 0.7 : 1,
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: plan === "yearly" ? "#000000" : "#FFFFFF",
                    cursor: "pointer",
                  }}
                  onClick={() => handlePlan("yearly")}
                >
                  Yearly
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
      <SaveUpTo />
      <PriceCardSection plan={plan} />
    </>
  );
};

export default PricingTab;
