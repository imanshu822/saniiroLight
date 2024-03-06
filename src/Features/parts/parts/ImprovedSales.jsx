import React from "react";
import rocketImg from "../../../assets/icons/image 135.png";
import { Stack, Typography } from "@mui/material";
import Button from "../../../utils/Button";
import Footer from "../../../utils/Footer";
const ImprovedSales = () => {
  return (
    <Stack>
      <Stack
        margin={"0 auto 80px"}
        width={"1025px"}
        height={"300px"}
        direction={"row"}
        gap={10}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <img
          src={rocketImg}
          alt="Rocket image"
          width={"460px"}
          height={"246px"}
        />
        <Stack gap={4}>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "45px",
              fontWeight: 600,
              lineHeight: "45px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Improved Sales. Lasting Relationships. Faster Growth.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "27px",
              letterSpacing: "0em",
              textAlign: "left",
              opacity: "60px",
            }}
          >
            15-day free trial. No credit card required.
          </Typography>
          <Stack>
            <Stack direction={"row"} gap={2}>
              <Button
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "Work Sans",
                  p: 1.5,
                }}
              >
                SIGN UP FOR FREE
              </Button>
              <Button
                sx={{
                  bgcolor: "white",
                  color: "black",
                  border: "1px solid black",
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "Work Sans",
                  p: "0 20px",
                }}
              >
                REQUEST DEMO
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImprovedSales;
