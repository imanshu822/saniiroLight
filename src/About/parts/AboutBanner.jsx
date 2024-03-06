import { Stack, Typography } from "@mui/material";
import React from "react";
import Aboutbanner from "../../assets/AboutBanner.svg";
import Button from "../../utils/Button";
const AboutBanner = () => {
  return (
    <>
      {/* <Stack>
        <Stack
          pt={1}
          height={"600px"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            backgroundImage: `url(${Aboutbanner})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Stack gap={2}>
            <Typography
              color={"#4DB267"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
              fontSize={"38px"}
              textAlign={"center"}
            >
              Welcome to Saniiro
            </Typography>
            <Typography
              color={"#052973"}
              fontWeight={"bold"}
              fontSize={"46px"}
              width={"700px"}
              textAlign={"center"}
            >
              Online Accounting Software for Every Business
            </Typography>
            <Stack direction={"row"} gap={2} justifyContent={"center"}>
              <Button
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "Work Sans",
                  p: 1.5,
                }}
              >
                SIGN UP FOR FREE
              </Button>
              <Button
                sx={{
                  bgcolor: "white",
                  color: "black",
                  border: "1px solid black",
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontFamily: "Work Sans",
                  p: "0 20px",
                }}
              >
                REQUEST DEMO
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack> */}

      <Stack>
        <Stack
          paddingTop={{
            xs: "20px",
            sm: "25px",
            md: "0px",
          }}
          position={"relative"}
          // height={{
          //   xs: "400px",
          //   sm: "500px",
          //   md: "600px",
          //   lg: "700px",
          //   xl: "800px",
          // }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            sx={{
              width: "100%",
            }}
          >
            <img width={"100%"} height={"100%"} src={Aboutbanner} alt="" />{" "}
          </Stack>

          <Stack
            gap={{
              xs: 1,
              md: 2,
            }}
            alignItems={"center"}
            position={"absolute"}
            top={{
              xs: "10%",
              md: "20%",
            }}
          >
            <Typography
              color={"#4DB267"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
              fontSize={{
                xs: "12px",
                sm: "16px",
                md: "18px",
                lg: "28px",
                xl: "32px",
              }}
              textAlign={"center"}
            >
              Welcome to Saniiro
            </Typography>
            <Typography
              color={"#052973"}
              fontWeight={"bold"}
              fontSize={{
                xs: "12px",
                sm: "16px",
                md: "18px",
                lg: "28px",
                xl: "32px",
              }}
              textAlign={"center"}
              width={{
                xs: "75%",
                sm: "75%",
                md: "80%",
                lg: "100%",
              }}
            >
              Online Accounting Software for Every Business
            </Typography>
            <Stack
              direction={{
                xs: "column",
                md: "row",
              }}
              gap={{
                xs: 1,
                md: 2,
              }}
              width={{
                xs: "100px",
                sm: "150px",
                md: "500px",
                lg: "500px",
                xl: "500px",
              }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Work Sans",
                  p: {
                    xs: "8px 9px",
                    sm: "8px 10px",
                    md: "8px 12px",
                    lg: "8px 16px",
                    xl: "10px 20px",
                  },
                }}
              >
                <Typography
                  fontSize={{
                    xs: "8px",
                    sm: "12px",
                    md: "16px",
                    lg: "18px",
                    xl: "18px",
                  }}
                >
                  SIGN UP FOR FREE
                </Typography>
              </Button>
              <Button
                fontSize={{
                  xs: "8px",
                  sm: "12px",
                  md: "16px",
                  lg: "19px",
                  xl: "20px",
                }}
                sx={{
                  bgcolor: "white",
                  color: "black",
                  border: "1px solid black",
                  fontWeight: "bold",
                  fontFamily: "Work Sans",
                  p: {
                    xs: "8px 9px",
                    sm: "8px 10px",
                    md: "8px 12px",
                    lg: "8px 16px",
                    xl: "10px 20px",
                  },
                }}
              >
                {" "}
                <Typography
                  fontSize={{
                    xs: "8px",
                    sm: "12px",
                    md: "16px",
                    lg: "18px",
                    xl: "18px",
                  }}
                >
                  REQUEST DEMO
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default AboutBanner;
