import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import section31 from "../../assets/section31.svg";
import section32 from "../../assets/section32.svg";
import Button from "../../utils/Button";
import Carousel from "react-multi-carousel";

const features = [
  {
    src: section31,
    title: "Billing",
    disc: "Who said world-class software can only be built in Silicon Valley? Zoho CRM empowers 250,000+ global businesses to deliver fantastic customer experiences and drive remarkable growth.",
    subDisc: "Made right here in India–try the SaaS from Madras!",
    bulltePoints1: "Try the SaaS from Madras",
    bulltePoints2: "India–try the SaaS from Madras.",
    bulltePoints3: "The SaaS from Madra.",
    bulltePoints4: "Made right here in India–try",
  },
  {
    src: section32,
    title: "Billing",
    disc: "Who said world-class software can only be built in Silicon Valley? Zoho CRM empowers 250,000+ global businesses to deliver fantastic customer experiences and drive remarkable growth.",
    subDisc: "Made right here in India–try the SaaS from Madras!",
    bulltePoints1: "Try the SaaS from Madras",
    bulltePoints2: "India–try the SaaS from Madras.",
    bulltePoints3: "The SaaS from Madra.",
    bulltePoints4: "Made right here in India–try",
  },
  {
    src: section31,
    title: "Billing",
    disc: "Who said world-class software can only be built in Silicon Valley? Zoho CRM empowers 250,000+ global businesses to deliver fantastic customer experiences and drive remarkable growth.",
    subDisc: "Made right here in India–try the SaaS from Madras!",
    bulltePoints1: "Try the SaaS from Madras",
    bulltePoints2: "India–try the SaaS from Madras.",
    bulltePoints3: "The SaaS from Madra.",
    bulltePoints4: "Made right here in India–try",
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
const Billing = ({ bgColor }) => {
  return (
    <>
      <Stack
        fontFamily={"Work Sans"}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          gap={6}
          p={"60px 0"}
          sx={{
            backgroundColor: bgColor === true ? "#FFFFFF" : "#FFDBC0",
          }}
        >
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            width={"90%"}
            direction={"row"}
            sx={{
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
            gap={"30px"}
          >
            <Stack
              alignItems={"center"}
              width={"50%"}
              sx={{
                width: {
                  md: "50%",
                  lg: "553px",
                },
                height: {
                  md: "50%",
                  lg: "318px",
                },
              }}
            >
              <img
                src={section31}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Stack gap={2} width={"38%"}>
              <Typography
                color={"#052973"}
                fontSize={"49px"}
                fontWeight={"bold"}
                fontFamily={"Work sans"}
              >
                Billing
              </Typography>
              <Typography fontFamily={"Work Sans"}>
                Who said world-class software can only be built in Silicon
                Valley? Zoho CRM empowers 250,000+ global businesses to deliver
                fantastic customer experiences and drive remarkable growth.
              </Typography>
              <Typography fontFamily={"Work Sans"}>
                Made right here in India–try the SaaS from Madras!
              </Typography>
              <Typography fontFamily={"Work Sans"}>
                - Try the SaaS from Madras <br />- India–try the SaaS from
                Madras. <br /> - The SaaS from Madra. <br /> - Made right here
                in India–try
              </Typography>
              <Button
                type="button"
                fontFamily={"Work Sans"}
                sx={{
                  color: "white",
                  width: "186px",
                  height: "48px",
                  fontSize: "20px",
                  bgcolor: "#052973",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#052973",
                    color: "white",
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Stack>

          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            width={"90%"}
            direction={"row"}
            sx={{
              flexDirection: {
                xs: "column",
                md: "row-reverse",
              },
            }}
            gap={"30px"}
          >
            <Stack
              alignItems={"center"}
              width={"50%"}
              sx={{
                width: {
                  md: "50%",
                  lg: "553px",
                },
                height: {
                  md: "50%",
                  lg: "318px",
                },
              }}
            >
              <img
                src={section32}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Stack gap={2} width={"38%"}>
              <Typography
                color={"#052973"}
                fontSize={"49px"}
                fontWeight={"bold"}
                fontFamily={"Work sans"}
              >
                Billing
              </Typography>
              <Typography fontFamily={"Work Sans"}>
                Who said world-class software can only be built in Silicon
                Valley? Zoho CRM empowers 250,000+ global businesses to deliver
                fantastic customer experiences and drive remarkable growth.
              </Typography>
              <Typography fontFamily={"Work Sans"}>
                Made right here in India–try the SaaS from Madras!
              </Typography>
              <Typography fontFamily={"Work Sans"}>
                - Try the SaaS from Madras <br />- India–try the SaaS from
                Madras. <br /> - The SaaS from Madra. <br /> - Made right here
                in India–try
              </Typography>
              <Button
                type="button"
                fontFamily={"Work Sans"}
                sx={{
                  color: "white",
                  width: "186px",
                  height: "48px",
                  fontSize: "20px",
                  bgcolor: "#052973",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#052973",
                    color: "white",
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            width={"90%"}
            direction={"row"}
            sx={{
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
            gap={"30px"}
          >
            <Stack
              alignItems={"center"}
              width={"50%"}
              sx={{
                width: {
                  md: "50%",
                  lg: "553px",
                },
                height: {
                  md: "50%",
                  lg: "318px",
                },
              }}
            >
              <img
                src={section31}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Stack gap={2} width={"38%"}>
              <Typography
                color={"#052973"}
                fontSize={"49px"}
                fontWeight={"bold"}
                fontFamily={"Work sans"}
              >
                Billing
              </Typography>
              <Typography fontFamily={"Work Sans"}>
                Who said world-class software can only be built in Silicon
                Valley? Zoho CRM empowers 250,000+ global businesses to deliver
                fantastic customer experiences and drive remarkable growth.
              </Typography>
              <Typography fontFamily={"Work Sans"}>
                Made right here in India–try the SaaS from Madras!
              </Typography>
              <Typography fontFamily={"Work Sans"}>
                - Try the SaaS from Madras <br />- India–try the SaaS from
                Madras. <br /> - The SaaS from Madra. <br /> - Made right here
                in India–try
              </Typography>
              <Button
                type="button"
                fontFamily={"Work Sans"}
                sx={{
                  color: "white",
                  width: "186px",
                  height: "48px",
                  fontSize: "20px",
                  bgcolor: "#052973",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#052973",
                    color: "white",
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* for mobile */}
      <Box
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
        width="100%"
        backgroundColor={"#FFDBC0"}
      >
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
                    fontSize: "38px",
                    fontWeight: 600,
                    lineHeight: "31px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  {d.title}
                </Typography>
                <Typography
                  fontFamily={"Work Sans"}
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {d.disc}
                </Typography>
                <Typography
                  fontFamily={"Work Sans"}
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {d.subDisc}
                </Typography>
                <Stack
                  sx={{
                    marginBottom: "25px",
                  }}
                >
                  <ul>
                    <li>
                      <Typography fontFamily={"Work Sans"}>
                        {d.bulltePoints1}
                      </Typography>
                    </li>
                    <li>
                      <Typography fontFamily={"Work Sans"}>
                        {d.bulltePoints2}
                      </Typography>
                    </li>
                    <li>
                      <Typography fontFamily={"Work Sans"}>
                        {d.bulltePoints3}
                      </Typography>
                    </li>
                    <li>
                      <Typography fontFamily={"Work Sans"}>
                        {d.bulltePoints4}
                      </Typography>
                    </li>
                  </ul>
                </Stack>
              </Stack>
            ))}
          </Carousel>
        </Stack>
      </Box>
    </>
  );
};

export default Billing;
