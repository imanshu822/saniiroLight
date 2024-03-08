import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NavLight from "../../../Navbar/NavLight";
// import TickMark from "../assets/TickMark.svg";
import Button from "../../../utils/Button";
import dotedSmImg from "../../../assets/Group 62557.png";
import dotedMdImg from "../../../assets/Group 62562.png";
import mediaImg from "../../../assets/image 124.png";

const BillingBanner = () => {
  return (
    <Stack
      height={{
        xs: "100%",
        lg: "120vh",
      }}
      position={"relative"}
      bgcolor={"#052973"}
      className="textured-background"
    >
      <NavLight />
      <Stack
        margin={"0px auto"}
        maxWidth={"1200px"}
        position={"relative"}
        zIndex={12}
      >
        <Stack
          margin={"0 auto"}
          width={{
            xs: "90%",
            lg: "95%",
            xl: "100%",
          }}
        >
          {" "}
          {/* Add padding for inner content */}
          <Stack>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "8px",
                  lg: "12px",
                  xl: "18px",
                },
                fontWeight: 700,
                lineHeight: "10px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "white",
              }}
            >
              Features {`>`} SalesForseAutomation {`>`}{" "}
              <span style={{ fontWeight: "bold" }}>LEAD MANAGEMENT</span>
            </Typography>
          </Stack>
          <Stack
            color={"white"}
            margin={"0px auto"}
            width={"100%"}
            position={"relative"}
          >
            <Stack
              marginTop={{
                xs: "2rem",
                lg: "3rem",
                xl: "4rem",
              }}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <Typography
                width={"50%"}
                textAlign={"right"}
                textTransform={"uppercase"}
                fontSize={"calc(6vw + 10px)"}
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
                fontSize={"calc(3vw + 10px)"}
                letterSpacing={1}
                fontWeight={"bold"}
                color={"white"}
                lineHeight={1}
                textAlign={"left"}
              >
                Software Management
              </Typography>
            </Stack>

            <Stack marginTop={"1rem"}>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "calc(0.8vw + 0.6rem)", // Responsive font size
                  fontWeight: 400,
                  lineHeight: "1.2",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#B0B0B0",
                  width: "90%",
                  margin: "0px auto",
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
                alignSelf={"center"}
                sx={{
                  width: "80%",
                  padding: "0.5rem 1rem",
                  marginTop: "2rem",
                  backgroundColor: "#F15B25",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "calc(0.6vw + 0.5rem)",
                    fontWeight: 600,
                    lineHeight: "1.2",
                    letterSpacing: "0em",
                    padding: "0.5rem 1rem",
                    textAlign: "center",
                  }}
                >
                  Learn More
                </Typography>
              </Box>
            </Stack>
          </Stack>{" "}
          <Box
            display={{
              xs: "none",
              lg: "block",
            }}
            position={"absolute"}
            bottom={{
              lg: "-97%",
              xl: "-56%",
            }}
            left={{
              lg: "15%",
              xl: "11%",
            }}
            width={"10%"}
          >
            <img width={"100%"} src={dotedSmImg} alt="icon" />
          </Box>
          <Box
            display={{
              xs: "none",
              lg: "block",
            }}
            zIndex={1}
            position={"absolute"}
            bottom={{
              lg: "-185%",
              xl: "-164%",
            }}
            right={{
              lg: "13%",
              xl: "5%",
            }}
            width={"15%"}
          >
            <img width={"100%"} src={dotedMdImg} alt="icon" />
          </Box>
          <Box
            display={{
              xs: "none",
              lg: "block",
            }}
            zIndex={2}
            position={"absolute"}
            bottom={{
              lg: "-166%",
              xl: "-138%",
            }}
            left={{
              lg: "20%",
              xl: "16%",
            }}
            width={{
              lg: "60%",
              xl: "70%",
            }}
          >
            <img width={"100%"} src={mediaImg} alt="media player" />
          </Box>
          <Box
            display={{
              xs: "block",
              lg: "none",
            }}
            width={{
              xs: "100%",
              md: "70%",
            }}
            pt={{
              xs: "2rem",
              md: "2rem",
            }}
            margin={"0 auto 2rem"}
          >
            <img width={"100%"} src={mediaImg} alt="media player" />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BillingBanner;
