import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import media from "../../../assets/image 124.png";
import OfficeImg from "../../../assets/icons/image 122.png";
const BestFichers = () => {
  return (
    <>
      <Stack
        direction={"column"}
        margin={"0px auto"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack width={"900px"}>
          <Typography
            textAlign={"center"}
            sx={{
              fontFamily: "Work Sans",
              fontSize: "45px",
              fontWeight: 700,
              lineHeight: "42.34px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#052973",
              marginBottom: "50px",
              marginTop: "20px",
            }}
          >
            Best Fichers
          </Typography>
          <Typography
            textAlign={"center"}
            sx={{
              fontFamily: "Work Sans",
              fontSize: "30px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#052973",
              textTransform: "uppercase",
              mb: "20px",
            }}
          >
            Management Software
          </Typography>
          <Typography
            textAlign={"center"}
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
            Billing Software, integrated with inventory management software and
            CRM, is purpose-built to efficiently manage time tracking, billing,
            and invoicing for services and products, providing business owners
            with a comprehensive solution to effortlessly monitor multiple
            invoices and accounts with just a few clicks, making it ideal for
            managing chains of stores and multiple company billing systems,
            while also offering a recurring service and rental business billing
            solution.
          </Typography>
          <Box margin={"30px auto 50px"}>
            <img
              src={media}
              alt="Media Player"
              width={"792px"}
              height={"371px"}
            />
          </Box>
        </Stack>
      </Stack>

      <Stack
        direction={"column"}
        margin={"0px auto"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack width={"900px"}>
          <Typography
            textAlign={"center"}
            sx={{
              fontFamily: "Work Sans",
              fontSize: "45px",
              fontWeight: 700,
              lineHeight: "42.34px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#052973",
              marginBottom: "50px",
              marginTop: "20px",
            }}
          >
            Best Fichers
          </Typography>
          <Typography
            textAlign={"center"}
            sx={{
              fontFamily: "Work Sans",
              fontSize: "30px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#052973",
              textTransform: "uppercase",
              mb: "20px",
            }}
          >
            Management Software
          </Typography>
          <Typography
            textAlign={"center"}
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
            Billing Software, integrated with inventory management software and
            CRM, is purpose-built to efficiently manage time tracking, billing,
            and invoicing for services and products, providing business owners
            with a comprehensive solution to effortlessly monitor multiple
            invoices and accounts with just a few clicks, making it ideal for
            managing chains of stores and multiple company billing systems,
            while also offering a recurring service and rental business billing
            solution.
          </Typography>
          <Box margin={"30px auto 50px"}>
            <img
              src={media}
              alt="Media Player"
              width={"792px"}
              height={"371px"}
            />
          </Box>
        </Stack>
      </Stack>

      <Stack marginTop={"60px"} marginBottom={"60px"}>
        <Stack gap={4} margin={"0 auto"} width={"1240px"}>
          <Stack>
            <Stack direction={"row"}>
              <Stack margin={"0 auto "} gap={3} justifyContent={"center"}>
                <Typography
                  width={"533px"}
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "35px",
                    fontWeight: 600,
                    lineHeight: "35px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  The Global reach of the{" "}
                  <span style={{ color: "#F15B25" }}>Financial Management</span>
                </Typography>
                <Stack
                  gap={2}
                  width={"533px"}
                  height={"231px"}
                  margin={"0 auto"}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "21px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      opacity: "80%",
                    }}
                  >
                    We offer a range of financial management systems to help you
                    get a better grip on your books. One of our most popular
                    financial tracking software is our quotation management
                    software which lets you create, track and submit quotes and
                    invoices with ease.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "21px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      opacity: "80%",
                    }}
                  >
                    Saniiro kept its user interface very user friendly which
                    allows anyone to use it without having any trouble. We also
                    provide the best CMS software as well, which lets you
                    seamlessly manage your web content to your liking.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "21px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      opacity: "80%",
                    }}
                  >
                    Our CMS system takes into consideration a lot of factors
                    before showing you how to best manage your content.
                  </Typography>
                </Stack>
              </Stack>
              <img
                src={OfficeImg}
                alt="Best in class Accounting & Billing Software"
                width={"560px"}
                height={"400px"}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default BestFichers;
