import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const BillingSteps = () => {
  return (
    <>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        maxWidth={"1280px"}
        margin={"0 auto"}
        textTransform={"capitalize"}
      >
        <Stack
          alignItems={{
            xs: "center",
            xl: "start",
          }}
          width={"100%"}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: {
                xs: "35px",
                lg: "45px",
              },
              fontWeight: 700,
              lineHeight: "42px",
              letterSpacing: "0em",

              color: "#052973",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Steps how to use
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"10px"}
        >
          <Stack
            width={{
              xs: "16rem",
              lg: "404px",
            }}
            height={{
              xs: "16rem",

              lg: "394px",
            }}
            borderRadius={"8px"}
            border={" 1px solid #DFDFDF"}
            color={"#FAFAFA"}
            gap={1}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "25px",
                  lg: "35px",
                },
                fontWeight: 600,
                lineHeight: "41px",
                letterSpacing: "0em",
                textAlign: "right",
                padding: "20px 20px 0px 0px",
                color: "#7CB342",
                opacity: 0.5,
              }}
            >
              01
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "9px",
                fontWeight: 600,
                lineHeight: "10px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#7CB342",
                paddingLeft: "20px",
              }}
            >
              Step One
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "25px",
                  lg: "35px",
                },
                fontWeight: 600,
                lineHeight: "41px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#7CB342",
                marginLeft: "20px",
              }}
            >
              Step One
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "12px",
                  lg: "16px",
                },
                fontWeight: 500,
                lineHeight: "19px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#3C3C3C",
                marginLeft: "20px",
              }}
            >
              We love what we do and it shows in the solutions we productions.
            </Typography>
          </Stack>
          <Stack
            width={{
              xs: "16rem",
              lg: "404px",
            }}
            height={{
              xs: "16rem",

              lg: "394px",
            }}
            borderRadius={"8px"}
            border={" 1px solid #DFDFDF"}
            color={"#FAFAFA"}
            gap={1}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "25px",
                  lg: "35px",
                },
                fontWeight: 600,
                lineHeight: "41px",
                letterSpacing: "0em",
                textAlign: "right",
                padding: "20px 20px 0px 0px",
                color: "#FFB300",
                opacity: 0.5,
              }}
            >
              02
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "9px",
                fontWeight: 600,
                lineHeight: "10px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#FFB300",
                paddingLeft: "20px",
              }}
            >
              Step Two
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "25px",
                  lg: "35px",
                },
                fontWeight: 600,
                lineHeight: "41px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#FFB300",
                marginLeft: "20px",
              }}
            >
              Timely Delivery
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "12px",
                  lg: "16px",
                },
                fontWeight: 500,
                lineHeight: "19px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#3C3C3C",
                marginLeft: "20px",
              }}
            >
              Ready to deploy, flexible and boutique style web-based business
              process improvement solutions to help businesses scale seamlessly.
            </Typography>
          </Stack>
          <Stack
            width={{
              xs: "16rem",
              lg: "404px",
            }}
            height={{
              xs: "16rem",

              lg: "394px",
            }}
            borderRadius={"8px"}
            border={" 1px solid #DFDFDF"}
            color={"#FAFAFA"}
            gap={1}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "25px",
                  lg: "35px",
                },
                fontWeight: 600,
                lineHeight: "41px",
                letterSpacing: "0em",
                textAlign: "right",
                padding: "20px 20px 0px 0px",
                color: "#00ACC1",
                opacity: 0.5,
              }}
            >
              03
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "9px",
                fontWeight: 600,
                lineHeight: "10px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#00ACC1",
                paddingLeft: "20px",
              }}
            >
              Step Three
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "25px",
                  lg: "35px",
                },
                fontWeight: 600,
                lineHeight: "41px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#00ACC1",
                marginLeft: "20px",
              }}
            >
              Timely Delivery
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "12px",
                  lg: "16px",
                },
                fontWeight: 500,
                lineHeight: "19px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#3C3C3C",
                marginLeft: "20px",
              }}
            >
              Reduced integration time and IT expenditures.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default BillingSteps;
