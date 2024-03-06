import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NavLight from "../../../Navbar/NavLight";
// import TickMark from "../assets/TickMark.svg";
// import Button from "../../../utils/Button";
import dotedSmImg from "../../../assets/Group 62557.png";
import dotedMdImg from "../../../assets/Group 62562.png";
import mediaImg from "../../../assets/image 124.png";
const BillingBanner = () => {
  return (
    <Stack
      height={"782px"}
      position={"relative"}
      bgcolor={"#052973"}
      className="textured-background"
    >
      <NavLight />
      <Stack margin={"0px auto"}>
        <Stack width={"100%"}>
          <Stack marginTop={"40px"} sx={{ width: "360px", height: "10px" }}>
            <Typography
              sx={[
                {
                  fontFamily: "Work Sans",
                  fontSize: "12px",
                  fontWeight: 700,
                  lineHeight: "10px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "white",
                },
              ]}
            >
              Features {`>`} SalesForseAutomation {`>`}{" "}
              <span style={{ fontWeight: "bold" }}>LEAD MANAGEMENT</span>
            </Typography>
          </Stack>
          <Stack
            color={"white"}
            margin={"0px auto"}
            width={"1077px"}
            position={"relative"}
          >
            <Stack
              marginTop={"65px"}
              direction={"row"}
              justifyContent={"center"}
              gap={1}
            >
              <Typography
                width={"50%"}
                textAlign={"right"}
                textTransform={"uppercase"}
                fontSize={"120px"}
                letterSpacing={1}
                fontWeight={"bold"}
                color={"transparent"}
                lineHeight={1}
                className="text-stroke"
              >
                Billing
              </Typography>
              <Typography
                width={"50%"}
                textTransform={"uppercase"}
                fontSize={"60px"}
                letterSpacing={1}
                fontWeight={"bold"}
                color={"white"}
                lineHeight={1}
                textAlign={"left"}
              >
                Software Management
              </Typography>
            </Stack>

            <Stack marginTop={"17px"}>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "21px",
                  fontWeight: 400,
                  lineHeight: "25px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#B0B0B0",
                }}
              >
                Billing Software, integrated with inventory management software
                and CRM, is purpose-built to efficiently manage time tracking,
                billing, and invoicing for services and products, providing
                business owners with a comprehensive solution to effortlessly
                monitor multiple invoices and accounts with just a few clicks,
                making it ideal for managing chains of stores and multiple
                company billing systems, while also offering a recurring service
                and rental business billing solution.
              </Typography>
            </Stack>
            <Stack margin={"0px auto"}>
              <Box
                sx={{
                  width: "141px",
                  height: "33px",
                  padding: "4px 20px 4px 20px",
                  marginTop: "20px",
                  backgroundColor: "#F15B25",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "25px",
                    letterSpacing: "0em",
                    padding: "4px 20px 4px 20px",
                    textAlign: "left",
                  }}
                >
                  Learn More
                </Typography>
              </Box>
            </Stack>
            <Box position={"absolute"} bottom={"-25%"} left={"100px"}>
              <img
                width={"106px"}
                height={"99px"}
                src={dotedSmImg}
                alt="icon"
              />
            </Box>
            <Box
              zIndex={1}
              position={"absolute"}
              bottom={"-120.5%"}
              right={"5%"}
            >
              <img
                width={"223px"}
                height={"209px"}
                src={dotedMdImg}
                alt="icon"
              />
            </Box>
            <Box
              zIndex={2}
              position={"absolute"}
              bottom={"-105.5%"}
              left={"14%"}
            >
              <img
                width={"792px"}
                height={"371px"}
                src={mediaImg}
                alt="media player"
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BillingBanner;
