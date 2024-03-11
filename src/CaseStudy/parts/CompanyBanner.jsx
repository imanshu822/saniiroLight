import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import frameImg from "../assets/Frame62700.png";
import BrandImg from "../assets/Group 62912.png";
import FedXImg from "../assets/image 167.png";
import ProfileImg from "../assets/Group 62904.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const CompanyBanner = () => {
  return (
    <>
      {/* desktop view   */}
      <Stack
        height={"440px"}
        display={{
          xs: "none",
          xl: "flex",
        }}
        border={"1px solid black"}
      >
        <Stack position={"relative"}>
          <Box
            component="img"
            sx={{
              margin: "52px auto",
              height: "330px",
              width: "1200px",
            }}
            alt="Frame "
            src={frameImg}
          />
          <Box
            position={"absolute"}
            component="img"
            sx={{
              top: "82px",
              left: "166px",
              width: "492px",
              height: "284px",
            }}
            alt="Frame "
            src={BrandImg}
          />
          <Stack
            position={"absolute"}
            alignItems={"center"}
            top={"-84px"}
            right={"187px"}
            sx={{
              width: "444.3px",
              height: "400.3px",
              borderRadius: "6.98px",
              border: "1px",
              backgroundColor: "#F0F8FE",
              border: "1px solid #FFFFFF",
            }}
          >
            <Box
              component="img"
              alt="Frame "
              sx={{
                marginTop: "30px",
                marginBottom: "30px",
                width: "112px",
                height: "32.71px",
              }}
              src={FedXImg}
            />
            <Stack alignItems={"center"}>
              <Box
                component="img"
                sx={{
                  width: "58.84px",
                  height: "58.84px",
                  borderRadius: "50%",
                  // border: "2px solid black",
                }}
                alt="Frame "
                src={ProfileImg}
              />
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "18px",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                }}
              >
                David Fauser,
              </Typography>
              <Typography
                sx={{
                  marginTop: "6px",
                  fontFamily: "Work Sans",
                  fontSize: "10px",
                  fontWeight: 400,
                  lineHeight: "10px",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                  opacity: "60%",
                }}
              >
                Director of Sales, CIMCO Refrigeration
              </Typography>

              <Typography
                sx={{
                  padding: "22px 42px",
                  fontFamily: "Work Sans",
                  fontSize: "24px",
                  fontWeight: 400,
                  lineHeight: "29px",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                }}
              >
                Zoho CRM Plus Helps Agoda’s Strategic Partnerships Team Manage
                Workflows And Communicate With Partners
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "14px",
                    letterSpacing: "-0.02em",
                    textAlign: "center",
                    color: "#006FCE",
                  }}
                >
                  Read full story
                  <ArrowRightAltIcon
                    sx={{
                      fontSize: "14px",
                      marginLeft: "5px",
                    }}
                  />
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* mobile view  */}
      <Stack
        mt={4}
        display={{
          xs: "flex",
          xl: "none",
        }}
      >
        <Stack
          margin={"0 auto"}
          width={"90%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
          direction={{
            sx: "column",
            md: "row",
          }}
        >
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            width={{
              xs: "100%",
              md: "50%",
            }}
          >
            <Box
              mt={2}
              component="img"
              sx={{
                top: "0",
                left: "0x",
                width: "70%",
                height: "70%",
              }}
              alt="Frame "
              src={BrandImg}
            />
          </Stack>
          <Stack
            alignItems={"center"}
            sx={{
              width: {
                xs: "95%",
                md: "50%",
              },
              height: "400.3px",
              borderRadius: "6.98px",
              border: "1px",
              backgroundColor: "#F0F8FE",
              border: "1px solid #FFFFFF",
            }}
          >
            <Box
              component="img"
              alt="Frame "
              sx={{
                marginTop: "30px",
                marginBottom: "30px",
                width: "112px",
                height: "32.71px",
              }}
              src={FedXImg}
            />
            <Stack alignItems={"center"}>
              <Box
                component="img"
                sx={{
                  width: "58.84px",
                  height: "58.84px",
                  borderRadius: "50%",
                  // border: "2px solid black",
                }}
                alt="Frame "
                src={ProfileImg}
              />
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "18px",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                }}
              >
                David Fauser,
              </Typography>
              <Typography
                sx={{
                  marginTop: "6px",
                  fontFamily: "Work Sans",
                  fontSize: "10px",
                  fontWeight: 400,
                  lineHeight: "10px",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                  opacity: "60%",
                }}
              >
                Director of Sales, CIMCO Refrigeration
              </Typography>

              <Typography
                sx={{
                  padding: "22px 42px",
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                    md: "16px",
                    lg: "24px",
                  },
                  fontWeight: 400,
                  lineHeight: "29px",
                  letterSpacing: "-0.02em",
                  textAlign: "center",
                }}
              >
                Zoho CRM Plus Helps Agoda’s Strategic Partnerships Team Manage
                Workflows And Communicate With Partners
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "14px",
                    letterSpacing: "-0.02em",
                    textAlign: "center",
                    color: "#006FCE",
                  }}
                >
                  Read full story
                  <ArrowRightAltIcon
                    sx={{
                      fontSize: "14px",
                      marginLeft: "5px",
                    }}
                  />
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CompanyBanner;
