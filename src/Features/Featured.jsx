import { Box, Stack, Typography } from "@mui/material";
import React from "react";
// import ContactCTA from "../assets/ContactCTA.svg";
import NavLight from "../Navbar/NavLight";
import TickMark from "../assets/TickMark.svg";
import Button from "../utils/Button";
const Featured = () => {
  const lists = [
    {
      title: "AI",
      description: "No credit card required",
    },
    {
      title: "Journey Orchestration",
      description: "Straightforward pricing, no lock-ins",
    },
    {
      title: "BI",
      description: "50% faster implementation",
    },
    {
      title: "Remote Work",
      description: "Better adoption, easier training",
    },
  ];
  return (
    <>
      <Stack
        height={"auto"}
        position={"relative"}
        bgcolor={"#052973"}
        className="textured-background"
        // sx={{
        //   backgroundImage: `url(${ContactCTA})`,
        //   backgroundSize: "auto",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <NavLight />
        <Stack
          gap={2}
          direction={{
            xs: "column",
            lg: "row",
          }}
        >
          <Stack
            m={"0 auto"}
            width={{
              xs: "95%",
              lg: "50%",
            }}
            p={{
              xs: 0,
              lg: "40px 0px 40px 100px",
            }}
            gap={2}
          >
            <Typography
              textTransform={"uppercase"}
              fontSize={{
                xs: "40px",
                sm: "50px",
                md: "60px",
                lg: "70px",
              }}
              letterSpacing={1}
              fontWeight={"bold"}
              color={"transparent"}
              lineHeight={1}
              className="text-stroke"
              textAlign={{
                xs: "center",
                lg: "left",
              }}
            >
              FEATURES
            </Typography>
            <Typography
              textTransform={"uppercase"}
              fontSize={{
                xs: "30px",
                sm: "40px",
                md: "50px",
                lg: "60px",
              }}
              color={"white"}
              fontWeight={900}
              lineHeight={1}
              letterSpacing={"0.05em"}
              textAlign={{
                xs: "center",
                lg: "left",
              }}
            >
              THAT MAKE SELLING EASIER
            </Typography>

            <Typography
              fontSize={{
                xs: "16px",
                sm: "18px",
                md: "22px",
                lg: "26px",
              }}
              color={"white"}
              textAlign={{
                xs: "center",
                lg: "left",
              }}
            >
              Zoho CRM offers everything you need to increase leads, accelerate
              sales,and measure sales performance.
            </Typography>
            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              justifyContent={{
                xs: "center",
                lg: "flex-start",
              }}
            >
              {lists.map((d) => (
                <Stack direction={"row"} gap={1} width={"250px"}>
                  <Stack pt={0.7}>
                    <img src={TickMark} alt="" />
                  </Stack>
                  <Stack>
                    <Typography
                      fontSize={"20px"}
                      fontWeight={"bold"}
                      color={"white"}
                    >
                      {d.title}
                    </Typography>
                    <Typography fontSize={"13px"} color={"grey"}>
                      {d.description}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
            <Stack
              alignItems={{
                xs: "center",
                lg: "flex-start",
              }}
            >
              <Button
                sx={{
                  width: {
                    xs: "150px",
                    lg: "200px",
                  },
                  fontSize: {
                    xs: "12px",
                    lg: "16px",
                  },
                  fontWeight: "bold",
                  fontFamily: "Work Sans",
                  p: 1.5,
                }}
              >
                Request Demo
              </Button>
            </Stack>
          </Stack>
          <Stack
            width={{
              xs: "100%",
              lg: "50%",
            }}
            height={{
              xs: "auto",
              lg: "auto",
            }}
          >
            <Box
              alignSelf={"center"}
              component="img"
              alt="BannerImage"
              width={"100%"}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Featured;
