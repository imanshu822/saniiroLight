import { Box, Stack, Typography } from "@mui/material";
import React from "react";
// import media from "../../../assets/image 124.png";
// import OfficeImg from "../../../assets/icons/image 122.png";
import globalReach from "../../../assets/GlobalReach.svg";
import ReactPlayer from "react-player";
const BestFichers = () => {
  return (
    <>
      <Stack gap={5} alignItems={"center"}>
        <Stack
          width={{
            xs: "90%",
            lg: "70%",
          }}
          gap={2}
        >
          <Typography
            fontFamily={"Work Sans"}
            color={"#052973"}
            textAlign={"Center"}
            fontSize={{
              xs: "20px",
              sm: "25px",
              md: "30px",
              lg: "40px",
              xl: "50px",
            }}
            fontWeight={"bold"}
          >
            Management Software
          </Typography>
          <Typography
            color={"#B0B0B0"}
            fontSize={{
              xs: "14px",
              sm: "16px",
              md: "18px",
              lg: "20px",
              xl: "22px",
            }}
            textAlign={"Center"}
            fontFamily={"Work Sans"}
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
          <Stack
            margin={"0 auto"}
            width={"95%"}
            height={{
              xs: "200px",
              sm: "300px",
              md: "480px",
            }}
            border={"8px solid black"}
          >
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=SlhESAKF1Tk"
              width="100%"
              height="100%"
              // controls={true}
              playing
              light={true}
              sx={{ borderRadius: "10px" }}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
              }}
            ></ReactPlayer>
          </Stack>
        </Stack>
        <Stack
          width={{
            xs: "90%",
            lg: "70%",
          }}
          gap={2}
        >
          <Typography
            fontFamily={"Work Sans"}
            color={"#052973"}
            textAlign={"Center"}
            fontSize={{
              xs: "20px",
              sm: "25px",
              md: "30px",
              lg: "40px",
              xl: "50px",
            }}
            fontWeight={"bold"}
          >
            Management Software
          </Typography>
          <Typography
            color={"#B0B0B0"}
            fontSize={{
              xs: "14px",
              sm: "16px",
              md: "18px",
              lg: "20px",
              xl: "22px",
            }}
            textAlign={"Center"}
            fontFamily={"Work Sans"}
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
          <Stack
            margin={"0 auto"}
            width={"95%"}
            height={{
              xs: "200px",
              sm: "300px",
              md: "480px",
            }}
            border={"8px solid black"}
          >
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=SlhESAKF1Tk"
              width="100%"
              height="100%"
              // controls={true}
              playing
              light={true}
              sx={{ borderRadius: "10px" }}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
              }}
            ></ReactPlayer>
          </Stack>
        </Stack>

        <Stack
          pb={2}
          gap={2}
          width={{
            xs: "100%",
            lg: "70%",
          }}
          direction={{
            xs: "column",
            lg: "row",
          }}
        >
          <Stack
            margin={"0 auto"}
            width={{
              xs: "90%",
              lg: "50%",
            }}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
          >
            <Box
              justifyContent={{
                xs: "center",
                lg: "left",
              }}
            >
              <Typography
                fontSize={{
                  xs: "20px",
                  sm: "25px",
                  md: "30px",
                  lg: "40px",
                }}
                fontFamily={"Work Sans"}
                fontWeight={"bold"}
              >
                The Global reach of the{" "}
              </Typography>
              <Typography
                fontSize={{
                  xs: "20px",
                  sm: "25px",
                  md: "30px",
                  lg: "40px",
                }}
                fontWeight={"bold"}
                color={"#F15B25"}
                lineHeight={1}
                fontFamily={"Work Sans"}
              >
                Financial Management
              </Typography>
            </Box>
            <Box>
              <Typography
                fontSize={"14px"}
                textAlign={{
                  xs: "center",
                  lg: "left",
                }}
                fontFamily={"Work Sans"}
              >
                We offer a range of financial management systems to help you get
                a better grip on your books. One of our most popular financial
                tracking software is our quotation management software which
                lets you create, track and submit quotes and invoices with ease.
                <br />
                <br />
                Saniiro kept its user interface very user friendly which allows
                anyone to use it without having any trouble. We also provide the
                best CMS software as well, which lets you seamlessly manage your
                web content to your liking. <br />
                <br /> Our CMS system takes into consideration a lot of factors
                before showing you how to best manage your content.
              </Typography>
            </Box>
          </Stack>
          <Stack
            margin={"0 auto"}
            width={{
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "50%",
            }}
          >
            <img width={"100%"} height={"100%"} src={globalReach} alt="" />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default BestFichers;
