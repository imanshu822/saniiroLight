import { Stack, Typography } from "@mui/material";
import frame from "../../assets/Frame.png";
import React from "react";

const HnTBanner = () => {
  return (
    <>
      <Stack maxWidth={"1420px"} margin={"0 auto"}>
        <Stack width={"98%"} height={"630px"} margin={"80px 10px"}>
          <Stack position={"relative"}>
            <img src={frame} alt="frame" />
            <Stack
              position={"absolute"}
              width={"840px"}
              height={"375px"}
              top={"87px"}
              left={"19.8%"}
              backgroundColor={"#fff"}
              border={"1px solid #FEDFD4"}
              borderRadius={"10px"}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "40px",
                  fontWeight: 600,
                  lineHeight: "43px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  margin: "40px auto",
                  width: "70%",
                }}
              >
                Virtual training - Saniiro CRM for Sales reps
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "27px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  margin: "0px auto",
                  width: "85%",
                }}
              >
                The virtual training for Zoho CRM sales reps will feature
                instructor-led sessions online, where you can see and interact
                with our expert trainers remotely. The course is aimed at
                helping Sales reps use their Zoho CRM tools effectively to
                engage better with prospects and increase productivity. Select a
                schedule that is most convenient for you.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        width={"100%"}
        height={"400px"}
        backgroundColor={"#8AA3FF"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "43px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Looking for Online Training?
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "27px",
            letterSpacing: "0em",
            textAlign: "center",
            width: "60%",
            margin: "20px auto",
            color: "#fff",
          }}
        >
          Through online training, we aim to offer a completely personalized
          training package tailored exclusively to meet the trainees' business
          requirements. The online training program will be custom-made for your
          business.
        </Typography>
      </Stack>
    </>
  );
};

export default HnTBanner;
