import { Box, Stack, Typography, colors } from "@mui/material";
import React from "react";
import OfficeImg from "../../../assets/icons/image120.png";

const FeaturesGlance = () => {
  return (
    <Stack marginTop={"60px"} marginBottom={"60px"}>
      <Stack gap={4} margin={"0 auto"} width={"1240px"}>
        <Stack>
          <Stack>
            <Typography
              fontSize={"30px"}
              sx={{
                fontFamily: "Work Sans",
                fontSize: "30px",
                fontWeight: 600,
                lineHeight: "28px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              Billing Management Software
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "25px",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0em",
                textAlign: "center",
                opacity: "80%",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Features at a glance
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Stack direction={"row"}>
            <img
              src={OfficeImg}
              alt="Best in class Accounting & Billing Software"
              width={"560px"}
              height={"400px"}
            />

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
                  // Specify the color here
                }}
              >
                Best in class{" "}
                <span style={{ color: "#F15B25" }}>Accounting</span> &
                <span style={{ color: "#F15B25" }}> Billing Software</span>
              </Typography>
              <Stack gap={2} width={"533px"} height={"231px"} margin={"0 auto"}>
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
                  At Saniiro Technologies Private Limited we provide the best in
                  class accounting and billing software, which along with the
                  various applications will aid you to get a better
                  understanding of what your company needs.
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
                  We customize our services according the needs of every client.
                  Our GST accounting software helps you to get a more
                  comprehensive overview of what your books should look like to
                  include GST.
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
                  We also have the best ecommerce development tools in the
                  market which comes at an affordable price. Saniiro also
                  provide an ecommerce website builder which helps to get an
                  appealing website for your clients.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
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
              <Stack gap={2} width={"533px"} height={"231px"} margin={"0 auto"}>
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
        <Stack>
          <Stack direction={"row"}>
            <img
              src={OfficeImg}
              alt="Best in class Accounting & Billing Software"
              width={"560px"}
              height={"400px"}
            />
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
                Best in class{" "}
                <span style={{ color: "#F15B25" }}>Inventory Management</span>
              </Typography>
              <Stack gap={2} width={"533px"} height={"231px"} margin={"0 auto"}>
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
                  We also provide inventory management software which would let
                  you keep track of your orders, inventory levels, sales and
                  deliveries. This software takes in a range of data before
                  presenting you with the entire picture of what your books
                  would look like.
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
                  It is our bet that you would not find a better inventory
                  management system at the prices we offer. However, inventory
                  management is not the only management software we provide, as
                  the task management software would keep track of tracking,
                  testing, planning and reporting, which would speed up your
                  company achieving the goals you set.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FeaturesGlance;
