import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FedXImg from "./../../assets/image 168.png";
import arrowImg from "./../../assets/icons/Arrow 4.png";

const CaseStudtyCard1 = () => {
  return (
    <>
      <Stack
        margin={"0px auto"}
        backgroundColor={"white"}
        zIndex={1}
        border={"1px solid  #F15B25"}
        borderRadius={"10px"}
        height={"525px"}
        width={{
          xs: "95%",
          md: "340px",
        }}
      >
        <Stack padding={"45px 20px"} gap={2}>
          <Box
            component="img"
            width={"113px"}
            height={"33px"}
            alt="FedXImgs"
            src={FedXImg}
          />
          <Stack gap={"4px"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "left",
                opacity: "0.6",
              }}
            >
              Industry type
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "17px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Real Estate
            </Typography>
          </Stack>
          <Stack gap={"4px"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "left",
                opacity: "0.6",
              }}
            >
              Employees
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "17px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              1000-5000 employees
            </Typography>
          </Stack>
          <Stack gap={"4px"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "left",
                opacity: "0.6",
              }}
            >
              {" "}
              Type of business
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "17px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Privately held
            </Typography>
          </Stack>
        </Stack>
        <Box
          width={"88%"}
          height={"2px"}
          backgroundColor={"gray"}
          margin={"0px auto"}
        />
        <Stack
          padding={"20px 20px"}
          // borderBottom={"1px solid gray"}
          gap={2}
          sx={{
            fontFamily: "Work Sans",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "13px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "13px",
              letterSpacing: "0em",
              textAlign: "left",
              opacity: "0.6",
            }}
          >
            Features that helped us
          </Typography>
          <Stack
            direction={"rows"}
            flexWrap={"wrap"}
            gap={1}
            justifyContent={{
              xs: "flex-start",
              sm: "center",
              lg: "flex-start",
            }}
          >
            <Stack
              sx={{
                width: "110px",
                height: "23px",
                padding: {
                  xs: "2.5px 0px",
                  md: "2.5px 4px",
                },
                borderRadius: "4px",
                backgroundColor: "#FFDEC2",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "12px",
                    md: "14px",
                  },

                  fontWeight: 500,
                  lineHeight: "15px",
                  letterSpacing: "-0.02em",
                  textAlign: "left",
                }}
              >
                {" "}
                Privately held
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: "110px",
                height: "23px",
                padding: {
                  xs: "2.5px 0px",
                  md: "2.5px 4px",
                },
                borderRadius: "4px",
                backgroundColor: "#FFDEC2",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "12px",
                    md: "14px",
                  },

                  fontWeight: 500,
                  lineHeight: "15px",
                  letterSpacing: "-0.02em",
                  textAlign: "left",
                }}
              >
                {" "}
                Privately held
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: "110px",
                height: "23px",
                padding: {
                  xs: "2.5px 0px",
                  md: "2.5px 4px",
                },
                borderRadius: "4px",
                backgroundColor: "#FFDEC2",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "12px",
                    md: "14px",
                  },

                  fontWeight: 500,
                  lineHeight: "15px",
                  letterSpacing: "-0.02em",
                  textAlign: "left",
                }}
              >
                {" "}
                Privately held
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: "110px",
                height: "23px",
                padding: {
                  xs: "2.5px 0px",
                  md: "2.5px 4px",
                },
                borderRadius: "4px",
                backgroundColor: "#FFDEC2",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "12px",
                    md: "14px",
                  },

                  fontWeight: 500,
                  lineHeight: "15px",
                  letterSpacing: "-0.02em",
                  textAlign: "left",
                }}
              >
                {" "}
                Privately held
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: "110px",
                height: "23px",
                padding: {
                  xs: "2.5px 0px",
                  md: "2.5px 4px",
                },
                borderRadius: "4px",
                backgroundColor: "#FFDEC2",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "12px",
                    md: "14px",
                  },

                  fontWeight: 500,
                  lineHeight: "15px",
                  letterSpacing: "-0.02em",
                  textAlign: "left",
                }}
              >
                {" "}
                Privately held
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: "110px",
                height: "23px",
                padding: {
                  xs: "2.5px 0px",
                  md: "2.5px 4px",
                },
                borderRadius: "4px",
                backgroundColor: "#FFDEC2",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "12px",
                    md: "14px",
                  },

                  fontWeight: 500,
                  lineHeight: "15px",
                  letterSpacing: "-0.02em",
                  textAlign: "left",
                }}
              >
                {" "}
                Privately held
              </Typography>
            </Stack>
          </Stack>

          <Stack
            margin={"20px auto 0px"}
            direction={"row"}
            sx={{
              width: {
                xs: "100%",
                md: "266px",
              },
              height: "46px",
              padding: "14px, 20px, 14px, 20px",
              borderRadius: "4px",
              gap: {
                xs: "10px",
                md: "22px",
              },
              backgroundColor: "#052973",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              width={"10px"}
              height={"20px"}
              src={arrowImg}
              alt="downward arrow"
            />
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "14px",
                  md: "18px",
                },
                fontWeight: 600,
                lineHeight: "18px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "white",
              }}
            >
              Dowenload Case Study
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CaseStudtyCard1;
