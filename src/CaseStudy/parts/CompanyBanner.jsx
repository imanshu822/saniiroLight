import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import frameImg from "../assets/Frame62700.png";
import BrandImg from "../assets/Group 62912.png";
import FedXImg from "../assets/image 167.png";
import ProfileImg from "../assets/Group 62904.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const CompanyBanner = () => {
  return (
    <Stack height={"440px"} border={"1px solid black"}>
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
  );
};

export default CompanyBanner;
