import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../../utils/Button";
import FeatureIcon1 from "../../assets/FeatureIcon1.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Industries2 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 765 },
      items: 2,
    },
    bigMobile: {
      breakpoint: { max: 765, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const lists = [
    {
      src: FeatureIcon1,
      title: "Ledger outstanding & ledger summary",
      description: "to capture inquiries from multiple channels",
    },
    {
      src: FeatureIcon1,
      title: "Built-in campaigns",
      description: "to capture inquiries from multiple channels",
    },
    {
      src: FeatureIcon1,
      title: "Project management",
      description: "to capture inquiries from multiple channels",
    },
    {
      src: FeatureIcon1,
      title: "Third-party integrations",
      description: "to capture inquiries from multiple channels",
    },
    {
      src: FeatureIcon1,
      title: "Ledger outstanding & ledger summary",
      description: "to capture inquiries from multiple channels",
    },
    {
      src: FeatureIcon1,
      title: "Built-in campaigns",
      description: "to capture inquiries from multiple channels",
    },
    {
      src: FeatureIcon1,
      title: "Project management",
      description: "to capture inquiries from multiple channels",
    },
    {
      src: FeatureIcon1,
      title: "Third-party integrations",
      description: "to capture inquiries from multiple channels",
    },
  ];
  return (
    <>
      <Stack
        display={{
          xs: "none",
          sm: "none",
          md: "none",
          lg: "none",
          xl: "flex",
        }}
        bgcolor={"#f1f1f1"}
        width={"100%"}
        height={"135vh"}
        alignItems={"center"}
      >
        <Stack
          position={"absolute"}
          bgcolor={"#052973"}
          width={"85%"}
          height={"auto"}
          p={"20px 0 40px 0 "}
          gap={5}
          borderRadius={1}
          bottom={"-6%"}
          alignItems={"center"}
        >
          <Stack
            bgcolor={"#052973"}
            width={"85%"}
            borderRadius={1}
            p={"30px 24px"}
            direction={"row"}
            gap={4}
            zIndex={1}
          >
            <Stack width={"50%"} borderRadius={1}>
              <Stack p={"20px 9px"} gap={2} alignItems={"center"}>
                <Button
                  fontFamily={"Work Sans"}
                  sx={{
                    borderRadius: 1,
                    fontWeight: "bold",
                    bgcolor: "#F15B25",
                    color: "white",
                    width: "150px",
                    height: "25px",
                    fontSize: "12px",
                  }}
                >
                  EXISTING CUSTOMER
                </Button>

                <Typography
                  fontSize={"35px"}
                  p={"0 50px"}
                  textAlign={"center"}
                  color={"white"}
                  fontFamily={"Work Sans"}
                >
                  What is a real estate CRM software?
                </Typography>
                <Typography
                  p={"0 32px"}
                  textAlign={"center"}
                  color={"white"}
                  fontSize={"18px"}
                  fontFamily={"Work Sans"}
                >
                  Real estate CRM software is a system that helps manage
                  relationships between buyers, sellers, agents, brokers,
                  developers, and financial institutions and caters to the
                  multiple requirements of real estate agents and real estate
                  firms. From managing incoming requests to preparing price
                  quotes, from selling commercial real-estate to property
                  management, the real estate CRM system takes care of the
                  end-to-end process management for real estate agencies.
                </Typography>
              </Stack>
            </Stack>
            <Stack width={"50%"} bgcolor={"white"} borderRadius={1}>
              <Stack p={"20px 25px"} gap={2} alignItems={"center"}>
                <Button
                  sx={{
                    borderRadius: 1,
                    fontWeight: "bold",
                    bgcolor: "#052864",
                    color: "white",
                    width: "150px",
                    height: "25px",
                    fontSize: "12px",
                  }}
                  fontFamily={"Work Sans"}
                >
                  EXISTING CUSTOMER
                </Button>
                <Stack direction={"row"} gap={5}>
                  <Stack gap={2}>
                    <Typography
                      fontSize={"35px"}
                      p={"0 50px"}
                      textAlign={"center"}
                      fontFamily={"Work Sans"}
                    >
                      How is CRM important for realtors?
                    </Typography>
                    <Typography
                      p={"0 32px"}
                      textAlign={"center"}
                      fontFamily={"Work Sans"}
                    >
                      Real estate is all about building trust, and it's no
                      surprise that 82% of new property sales are referrals from
                      either existing contacts, previous clients, family,
                      friends, or relatives. Moreover, when it comes to real
                      estate businesses, selling or buying is a long process,
                      with many follow-ups and re-negotiations. In such
                      scenarios, implementing a real estate CRM software gives
                      realtors an efficient way to manage contacts, schedule
                      tasks, monitor their pipelines, and stay organized to
                      build successful relationships and close deals.
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              fontSize={"50px"}
              fontWeight={"bold"}
              color={"white"}
              textAlign={"center"}
              p={"0 209px"}
              fontFamily={"Work Sans"}
            >
              Why choose Saniiro CRM for your real estate business?
            </Typography>
          </Stack>
          <Stack
            alignItems={"center"}
            width={"80%"}
            direction={"row"}
            flexWrap={"wrap"}
            gap={2}
          >
            {lists.map((d) => (
              <Stack width={"20%"} bgcolor={"white"} borderRadius={1} p={2}>
                <img
                  src={d.src}
                  alt=""
                  style={{ width: "36px", height: "36px" }}
                />
                <Typography
                  fontFamily={"Work Sans"}
                  fontSize={"10px"}
                  fontWeight={"bold"}
                >
                  {d.title}
                </Typography>
                <Typography fontFamily={"Work Sans"} fontSize={"12px"}>
                  {d.description}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>

      <Stack
        display={{
          xs: "flex",
          sm: "flex",
          md: "flex",
          lg: "flex",
          xl: "none",
        }}
        margin={"0 auto"}
        bgcolor={"#052973"}
        width={"85%"}
        borderRadius={1}
        p={"30px 24px"}
        direction={"column"}
        gap={4}
        zIndex={1}
      >
        <Stack width={"100%"} borderRadius={1} margin={"0 auto"}>
          <Stack p={"20px 9px"} gap={2} alignItems={"center"}>
            <Button
              sx={{
                borderRadius: 1,
                fontWeight: "bold",
                bgcolor: "#F15B25",
                color: "white",
                width: "150px",
                height: "25px",
                fontSize: "12px",
              }}
            >
              EXISTING CUSTOMER
            </Button>

            <Typography
              fontSize={{
                xs: "25px",
                sm: "30px",
                md: "40px",
              }}
              fontFamily={"Work Sans"}
              textAlign={"center"}
              color={"white"}
            >
              What is a real estate CRM software?
            </Typography>
            <Typography
              textAlign={"center"}
              color={"white"}
              fontSize={"18px"}
              fontFamily={"Work Sans"}
            >
              Real estate CRM software is a system that helps manage
              relationships between buyers, sellers, agents, brokers,
              developers, and financial institutions and caters to the multiple
              requirements of real estate agents and real estate firms. From
              managing incoming requests to preparing price quotes, from selling
              commercial real-estate to property management, the real estate CRM
              system takes care of the end-to-end process management for real
              estate agencies.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          bgcolor={"white"}
          width={"100%"}
          borderRadius={1}
          margin={"0 auto"}
        >
          <Stack
            p={{
              xs: "7px 12px",
              sm: "12px 18px",
              md: "20px 25px",
            }}
            gap={2}
            alignItems={"center"}
          >
            <Button
              sx={{
                borderRadius: 1,
                fontWeight: "bold",
                bgcolor: "#052864",
                color: "white",
                width: "150px",
                height: "25px",
                fontSize: "12px",
              }}
            >
              EXISTING CUSTOMER
            </Button>
            <Stack direction={"row"} gap={5}>
              <Stack gap={2}>
                <Typography
                  fontSize={{
                    xs: "25px",
                    sm: "30px",
                    md: "40px",
                  }}
                  fontFamily={"Work Sans"}
                  textAlign={"center"}
                >
                  How is CRM important for realtors?
                </Typography>
                <Typography
                  fontFamily={"Work Sans"}
                  p={"0 7px"}
                  textAlign={"center"}
                >
                  Real estate is all about building trust, and it's no surprise
                  that 82% of new property sales are referrals from either
                  existing contacts, previous clients, family, friends, or
                  relatives. Moreover, when it comes to real estate businesses,
                  selling or buying is a long process, with many follow-ups and
                  re-negotiations. In such scenarios, implementing a real estate
                  CRM software gives realtors an efficient way to manage
                  contacts, schedule tasks, monitor their pipelines, and stay
                  organized to build successful relationships and close deals.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Typography
            fontSize={{
              xs: "25px",
              sm: "30px",
              md: "40px",
            }}
            fontWeight={"bold"}
            color={"white"}
            textAlign={"center"}
            fontFamily={"Work Sans"}
          >
            Why choose Saniiro CRM for your real estate business?
          </Typography>
        </Stack>
        <Stack>
          <Carousel
            responsive={responsive}
            autoPlay
            showDots
            infinite
            autoPlaySpeed={3000}
            removeArrowOnDeviceType={[
              "desktop",
              "tablet",
              "bigMobile",
              "mobile",
            ]}
          >
            {lists.map((d) => (
              <Stack
                margin={"0 auto"}
                width={"95%"}
                height={{
                  xs: "200px",
                  sm: "300px",
                  md: "300px",
                }}
                bgcolor={"white"}
                borderRadius={1}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <img src={d.src} alt="" width={"25%"} height={"25%"} />
                <Typography
                  fontFamily={"Work Sans"}
                  width={"90%"}
                  textAlign={"center"}
                  fontSize={{
                    xs: "20px",
                    sm: "20px",
                    md: "20px",
                  }}
                  fontWeight={"bold"}
                >
                  {d.title}
                </Typography>
                <Typography
                  textAlign={"center"}
                  fontSize={{
                    xs: "15px",
                    sm: "17px",
                    md: "20px",
                  }}
                  fontFamily={"Work Sans"}
                >
                  {d.description}
                </Typography>
              </Stack>
            ))}
          </Carousel>
        </Stack>
      </Stack>
    </>
  );
};

export default Industries2;
