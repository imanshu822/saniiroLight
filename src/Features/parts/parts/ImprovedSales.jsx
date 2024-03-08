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
        maxWidth={"1080px"}
        height={{
          xs: "100%",
          lg: "300px",
        }}
        direction={{
          xs: "column",
          lg: "row",
        }}
        gap={{
          xs: 4,
          lg: 10,
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          width={{
            xs: "95%",
            sm: "80%",
            md: "60%",
            lg: "60%",
          }}
          height={{
            xs: "180px",
            lg: "246px",
          }}
        >
          <img
            src={rocketImg}
            alt="Rocket image"
            width={"100%"}
            height={"100%"}
          />
        </Stack>
        <Stack
          gap={4}
          width={{
            xs: "95%",
            sm: "80%",
            md: "60%",
            lg: "60%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: {
                xs: "30px",
                sm: "35px",
                md: "40px",
                lg: "45px",
              },
              fontWeight: 600,
              lineHeight: "45px",
              letterSpacing: "0em",
              textAlign: {
                xs: "center",
                lg: "left",
              },
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
              textAlign: {
                xs: "center",
                lg: "left",
              },
              opacity: "60px",
            }}
          >
            15-day free trial. No credit card required.
          </Typography>
          <Stack>
            <Stack
              direction={{
                xs: "column",
                lg: "row",
              }}
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
            >
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
                  p: 1.5,
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
