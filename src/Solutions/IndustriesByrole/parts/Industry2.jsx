import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Union from "../../../assets/Union.png";
import IconSectionrole from "../../../assets/IconSectionRole.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Industry2 = () => {
  const lists = [
    {
      title: "Artificial Intelligence",
      description:
        "With an AI assistant pulling prospect and customer data from your sales data, you’re also able to spend less time looking for information. AI assistants can do a lot—make deal win predictions, spot anomalies in your pipeline, and even understand your customer sentiments.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "With an AI assistant pulling prospect and customer data from your sales data, you’re also able to spend less time looking for information. AI assistants can do a lot—make deal win predictions, spot anomalies in your pipeline, and even understand your customer sentiments.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Offer standard, office-based support, available 24x7; that said, we are a no-nonsense team and will always respond promptly when you need us.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "A CRM with good sales content management allows sales teams to create, classify, organize, and optimize their sales collateral in a centralized area. This includes everything from proposals and slideshow templates to contract templates and best practices.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Sales reps can benefit from an integrated calendar to improve their time management. This allows them to depend on their CRM data in order to prioritize their tasks and spend time wisely on closing more deals.",
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
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    bigMobile: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Stack>
      <Stack
        pt={"55px"}
        gap={10}
        sx={{
          backgroundImage: { lg: `url(${Union})` },
          backgroundSize: { lg: "contain" },
          backgroundRepeat: { lg: "no-repeat" },
          backgroundPosition: { lg: "right" },
        }}
      >
        <Stack
          width={{
            xs: "90%",
            lg: "50%",
          }}
          margin={{
            xs: "0 auto",
            lg: "0px",
          }}
          pl={{
            lg: "100px",
          }}
          gap={2}
        >
          <Typography
            fontSize={"35px"}
            fontWeight={"bold"}
            textAlign={{
              xs: "center",
              lg: "left",
            }}
            pr={{
              lg: "100px",
            }}
            lineHeight={1.3}
          >
            Why do sales repsneed a CRM?
          </Typography>
          <Typography
            fontSize={{
              xs: "14px",
              md: "16px",
              lg: "18px",
            }}
            textAlign={{
              xs: "center",
              lg: "left",
            }}
          >
            Your sales reps work on the ground-level, interacting with prospects
            and potentials to bring in new deals. Naturally, they have a lot to
            manage on their hands. Emails, meetings, phone calls, tasks for the
            day, sales targets, and analytics are just a few things a sales rep
            has to juggle throughout the day.
            <br /> <br />
            They need to keep track of their tasks and targets, have access to
            client and prospect information, and recall past interactions so
            they can have intelligent conversations with their leads. In short,
            they need a CRM to reduce time spent on mundane tasks, so that they
            can be more productive.
          </Typography>
        </Stack>
        <Box
          pl={"100px"}
          display={{
            xs: "none",
            lg: "block",
          }}
        >
          <Stack direction={"row"} flexWrap={"wrap"} gap={5}>
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              bgcolor={"#35373E"}
              width={"30%"}
              textAlign={"center"}
              borderRadius={2}
            >
              <Typography fontWeight={"bold"} fontSize={"40px"} color={"white"}>
                What do salesreps expectfrom their CRM?
              </Typography>
            </Stack>
            {lists.map((d) => (
              <>
                <Stack
                  bgcolor={"white"}
                  width={"30%"}
                  border={"1px solid #35373E"}
                  borderRadius={2}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"Center"}
                    p={"40px 40px 0 40px"}
                    gap={2}
                  >
                    <img
                      src={IconSectionrole}
                      alt=""
                      style={{ width: "70px", height: "70px" }}
                    />
                    <Typography
                      fontWeight={"bold"}
                      fontSize={"30px"}
                      color={"black"}
                    >
                      {d.title}
                    </Typography>
                  </Stack>
                  <Typography color={"#3C3C3C"} fontSize={"16px"} p={5}>
                    {d.description}
                  </Typography>
                </Stack>
              </>
            ))}
          </Stack>
        </Box>

        <Stack
          display={{
            xs: "block",
            lg: "none",
          }}
          width={"100%"}
          height={"350px"}
        >
          <Carousel
            responsive={responsive}
            autoPlay
            showDots
            infinite
            autoPlaySpeed={5000}
            removeArrowOnDeviceType={[
              "desktop",
              "tablet",
              "bigMobile",
              "mobile",
            ]}
          >
            <Stack
              key="carousel-title"
              bgcolor={"black"}
              margin={"0 auto"}
              width={{
                xs: "90%",
              }}
              height={{
                xs: "350px",
              }}
              border={"1px solid #35373E"}
              borderRadius={2}
              justifyContent={"center"}
              alignItems={"center"}
              p={"0px 8px"}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={{
                  xs: "18px",
                  sm: "23px",
                  md: "27px",
                  lg: "30px",
                }}
                color={"white"}
                textAlign={"center"}
              >
                What do salesreps expectfrom their CRM?
              </Typography>
            </Stack>
            {lists.map((d, index) => (
              <Stack
                key={`carousel-item-${index}`}
                bgcolor={"white"}
                margin={"0 auto"}
                width={{
                  xs: "90%",
                }}
                height={{
                  xs: "350px",
                }}
                border={"1px solid #35373E"}
                borderRadius={2}
              >
                <Stack
                  direction={"row"}
                  alignItems={"Center"}
                  p={{
                    xs: "10px 10px 0 10px",
                    lg: "40px 40px 0 40px",
                  }}
                  gap={2}
                >
                  <img
                    src={IconSectionrole}
                    alt=""
                    style={{ width: "70px", height: "70px" }}
                  />
                  <Typography
                    fontWeight={"bold"}
                    fontSize={{
                      xs: "18px",
                      sm: "23px",
                      md: "27px",
                      lg: "30px",
                    }}
                    color={"black"}
                  >
                    {d.title}
                  </Typography>
                </Stack>
                <Typography
                  color={"#3C3C3C"}
                  fontSize={{
                    xs: "12px",
                    sm: "14px",
                    md: "16px",
                    lg: "18px",
                  }}
                  p={5}
                >
                  {d.description}
                </Typography>
              </Stack>
            ))}
          </Carousel>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Industry2;
