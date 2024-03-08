import { Box, Stack, Typography, colors } from "@mui/material";
import React from "react";
import OfficeImg from "../../../assets/icons/image120.png";
import Carousel from "react-multi-carousel";

const features = [
  {
    src: OfficeImg,
    titleBlack1: "Best in class",
    titleRed1: "Accounting",
    titleBlack2: "&",
    titleRed2: "Billing Software",
    para1:
      "At Saniiro Technologies Private Limited we provide the best in class accounting and billing software, which along with the various applications will aid you to get a better understanding of what your company needs.",
    para2:
      "We customize our services according the needs of every client. Our GST accounting software helps you to get a more comprehensive overview of what your books should look like to include GST.",
    para3:
      "We also have the best ecommerce development tools in the market which comes at an affordable price. Saniiro also provide an ecommerce website builder which helps to get an appealing website for your clients.",
  },
  {
    src: OfficeImg,
    titleBlack1: "The Global reach of the",
    titleRed1: "Financial Management",
    titleBlack2: "",
    titleRed2: "",
    para1:
      "We offer a range of financial management systems to help you get a better grip on your books. One of our most popular financial tracking software is our quotation management software which lets you create, track and submit quotes and invoices with ease.",
    para2:
      "Saniiro kept its user interface very user friendly which allows anyone to use it without having any trouble. We also provide the best CMS software as well, which lets you seamlessly manage your web content to your liking.",
    para3:
      "Our CMS system takes into consideration a lot of factors before showing you how to best manage your content.",
  },
  {
    src: OfficeImg,
    titleBlack1: "Best in class",
    titleRed1: "Inventory Management",
    titleBlack2: "",
    titleRed2: "",
    para1:
      "We also provide inventory management software which would let you keep track of your orders, inventory levels, sales and deliveries. This software takes in a range of data before presenting you with the entire picture of what your books would look like.",
    para2:
      "It is our bet that you would not find a better inventory management system at the prices we offer. However, inventory management is not the only management software we provide, as the task management software would keep track of tracking, testing, planning and reporting, which would speed up your company achieving the goals you set.",
    para3: "",
  },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const FeaturesGlance = () => {
  return (
    <>
      {/* Desktop view of FeaturesGlance  */}
      <Stack
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
        }}
        margin={"60px auto"}
      >
        <Stack gap={4} margin={"0 auto"} maxWidth={"1000px"}>
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
                    At Saniiro Technologies Private Limited we provide the best
                    in class accounting and billing software, which along with
                    the various applications will aid you to get a better
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
                    We customize our services according the needs of every
                    client. Our GST accounting software helps you to get a more
                    comprehensive overview of what your books should look like
                    to include GST.
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
                    We also provide inventory management software which would
                    let you keep track of your orders, inventory levels, sales
                    and deliveries. This software takes in a range of data
                    before presenting you with the entire picture of what your
                    books would look like.
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
                    management is not the only management software we provide,
                    as the task management software would keep track of
                    tracking, testing, planning and reporting, which would speed
                    up your company achieving the goals you set.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {/* Mobile view of FeaturesGlance  */}

      <Stack
        sx={{
          display: {
            xs: "block",
            lg: "none",
          },
        }}
      >
        <Stack marginTop={"30px"}>
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
        <Box width="100%">
          <Stack margin={"19px auto "} width={"90%"}>
            <Carousel
              responsive={responsive}
              autoPlay
              showDots
              infinite
              autoPlaySpeed={5000}
              removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            >
              {features.map((d, index) => (
                <Stack key={index} gap={2} alignItems={"center"}>
                  <img
                    width={"80%"}
                    height={"80%"}
                    src={d.src}
                    alt={`billingImg ${index}`}
                  />
                  <Typography
                    fontFamily={"Work Sans"}
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: {
                        xs: "25px",
                        md: "35px",
                      },
                      fontWeight: 600,
                      lineHeight: "39px",
                      letterSpacing: "0em",
                      textAlign: "center",
                    }}
                  >
                    {d.titleBlack1}{" "}
                    <span style={{ color: "#F15B25" }}>{d.titleRed1}</span>{" "}
                    {d.titleBlack2}{" "}
                    <span style={{ color: "#F15B25" }}>{d.titleRed2}</span>
                  </Typography>
                  <Typography
                    fontFamily={"Work Sans"}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {d.para1}
                  </Typography>
                  <Typography
                    fontFamily={"Work Sans"}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {d.para2}
                  </Typography>
                  <Typography
                    fontFamily={"Work Sans"}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {d.para3}
                  </Typography>
                  <Stack
                    sx={{
                      marginBottom: "25px",
                    }}
                  ></Stack>
                </Stack>
              ))}
            </Carousel>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default FeaturesGlance;
