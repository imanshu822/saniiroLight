import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import leftArrow from "../../../assets/icons/Frame 62667.png";
import rightArrow from "../../../assets/icons/Frame 62666.png";
import FrameImg1 from "../../../assets/icons/Frame 62670.png";
import FrameImg2 from "../../../assets/icons/Frame 62671.png";
import FrameImg3 from "../../../assets/icons/Frame 62672.png";
const Industry4 = () => {
  return (
    <Stack
      width={"1240px"}
      height={"700px"}
      margin={"0px auto"}
      position={"relative"}
    >
      <Stack
        sx={{
          position: "absolute",
          top: "0px",
          zIndex: -1,
          right: "0px",
        }}
      >
        <img
          width={"700px"}
          height={"100%"}
          src={FrameImg1}
          alt="Frame 62665"
        />
      </Stack>
      <Stack
        sx={{
          position: "absolute",
          bottom: "0px",
          zIndex: -1,
          left: "0px",
        }}
      >
        <img width={"70%"} height={"70%"} src={FrameImg2} alt="Frame 62665" />
      </Stack>
      <Stack
        sx={{
          position: "absolute",
          bottom: "0px",
          zIndex: -2,
          right: "0px",
        }}
      >
        <img
          width={"400px"}
          height={"110px"}
          src={FrameImg3}
          alt="Frame 62665"
        />
      </Stack>
      <Stack
        width={"50%"}
        height={"80%"}
        sx={{
          backgroundColor: "#34A853",
        }}
      >
        <Typography
          sx={{
            padding: "20px 10px",
            fontFamily: "Work Sans",
            fontSize: "35px",
            fontWeight: 700,
            lineHeight: "37px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#ffffff",
          }}
        >
          Based on our findings, here's what sales teams want from their CRM
        </Typography>
        <Stack
          position={"absolute"}
          bottom={"100px"}
          width={"1157px"}
          height={"465px"}
          // border={"1px solid red"}
          right={"-10px"}
          borderRadius={"10px"}
          backgroundColor={"#ffffff"}
          boxShadow={"2.5px 3.7px 14.7px 0px #00000040"}
        >
          <Stack
            position={"absolute"}
            sx={{
              fontFamily: "Xanh Mono",
              fontSize: "207px",
              fontWeight: 400,
              lineHeight: "277px",
              letterSpacing: "-0.05em",
              textAlign: "left",
              color: "#248F41",
            }}
          >
            "
          </Stack>

          <Stack width={"970px"} margin={"50px auto 10px"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "25px",
                fontWeight: 500,
                lineHeight: "34px",
                letterSpacing: "0em",
                textAlign: "left",
                paddingTop: "30px",
              }}
            >
              I might irritate the customer as they are not at the tipping point
              and they are busy with other projects and do not want to exchange
              pleasantries, so they would actively avoid phone calls. It would
              have been more effective to fill in the time by perhaps emailing
              some white papers relevant to their industry to keep the
              communication open. A CRM should help me do that.
            </Typography>
            <Stack
              margin={"90px auto 30px"}
              sx={{
                width: "115px",
                height: "4px",
                top: "4725px",
                left: "696px",
                borderRadius: "7.47px",
                opacity: 0.8,
                backgroundColor: "#000000",
              }}
            ></Stack>
            <Stack
              margin={"-10px auto 10px"}
              alignItems={"center"}
              direction={"row"}
              justifyContent={"space-between"}
              width={"70%"}
              // margin={"0px auto"}
            >
              <Stack direction={"row"}>
                <Box
                  component="img"
                  sx={{
                    width: "45px",
                    height: "45px",
                    padding: "10px",
                    borderRadius: "51px",
                    gap: "10px",
                    opacity: 0.8,
                    "&:hover": {
                      opacity: 1,
                      cursor: "pointer",
                    },
                  }}
                  src={leftArrow}
                />
              </Stack>
              <Stack>
                {" "}
                <Stack
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "28px",
                    fontWeight: 700,
                    lineHeight: "38px",
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  Soya Somanathan
                </Stack>
                <Stack
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "19px",
                    fontWeight: 500,
                    lineHeight: "25px",
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  Account Manager, Ayan Tech Solutions
                </Stack>
              </Stack>

              <Stack>
                {" "}
                <Box
                  component="img"
                  sx={{
                    width: "45px",
                    height: "45px",
                    padding: "10px",
                    borderRadius: "51px",
                    gap: "10px",
                    opacity: 0.8,
                    "&:hover": {
                      opacity: 1,
                      cursor: "pointer",
                    },
                  }}
                  alt="rightArrow"
                  src={rightArrow}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Industry4;
