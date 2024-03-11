import { Stack, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
// import ContactCTA from "../../assets/ContactCTA.svg";
import Button from "../../utils/Button";
import Nav from "../../Navbar/Nav";
import "./contact.css";
import PhoneNumber from "./PhoneNumber";

import { Link } from "react-router-dom";
import NavLight from "../../Navbar/NavLight";
const ContactUs = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log("Form submitted!");
  };
  return (
    <Stack
      height={{xl:"930px",xs:"auto"}}
      position={"relative"}
      bgcolor={"#052973"}
      className="textured-background"
    >
      <NavLight />
      <Stack
        zIndex={11}
        sx={{
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          // width: "100%",
          margin: {
            xs: "0px",
            sm: "20px",
          },
        }}
      >
        <Stack
        gap={"10px"}
          sx={{
            width: {
              xs: "100%",
              lg: "40%",
              xl: "54%",
              xxl: "50%",
            },
            margin: {
              lg: "40px auto",
              xl: "84px 37px",
            },
            padding: {
              xs: "10px 0",
            },
          }}
        >
          <Typography
            textTransform={"uppercase"}
            fontFamily={"monospace"}
            sx={{
              wordSpacing: { xl: "-27px" },
              fontSize: {
                xs: "39px",
                sm:"39px",
                md: "68px",
                lg: "63px",
                xl: "97px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
            fontWeight={"bold"}
            color={"transparent"}
            lineHeight={0.9}
            letterSpacing={"0.1em"}
            className="text-stroke"
          >
            Looking For
          </Typography>
          <Typography
            color={"white"}
            textTransform={"uppercase"}
            sx={{
              fontSize: {
                xs: "38px",
                sm:"37px",
                md: "68px",
                lg: "63px",
                xl: "87px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
            fontWeight={900}
            lineHeight={0.9}
            letterSpacing={"0.05em"}
          >
            something in particular?
          </Typography>

          <Typography
            fontFamily={"Work Sans"}
            // color={"white"}
            color={"white"}
            sx={{
              width: {
                xs: "90%",
                sm: "80%",
                lg: "90%",
              },
              margin: {
                xs: "0px auto 0px",
                lg: "5px 5px",
              },

              fontSize: {
                xs: "14px",
                lg: "18px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
          >
            We're here to help.
          </Typography>
        </Stack>
        <Stack
          alignItems={"Center"}
          gap={2}
          sx={{
            width: {
              xs: "100%",
              lg: "50%",
              xl: "50%",
            },
            padding: {
              xs: "20px 0px",
              lg: "20px 0px",
              xl: "40px 0px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "18px",
                sm: "22px",
                md: "24px",
                xl: "32px",
              },
              textAlign: {
                xs: "center",
              },
            }}
            color={"white"}
            fontWeight={"bold"}
            fontSize={"22px"}
            textAlign={"center"}
            fontFamily={"Work Sans"}
          >
            Get started with your free trial
          </Typography>
          <Stack
            alignItems={"center"}
            gap={2}
            margin={"0 auto"}
            sx={{
              width: {
                xs: "80%",
                md: "70%",
                lg: "100%",
                xl: "100%",
              },
            }}
          >
            <Stack
              direction={"row"}
              gap={1}
              sx={{
                width: {
                  xs: "220px",
                  sm: "300px",
                  md: "480px",
                  lg: "385px",
                  xl: "480px",
                },
                height: {
                  xs: "45px",
                  sm: "55px",
                  md: "67px",
                  lg: "57px",
                  xl: "67px",
                },
              }}
            >
              <input
                type="name"
                className="input-city"
                placeholder="Full Name"
              />
              <input type="email" className="input-city" placeholder="Email" />
            </Stack>
            <Stack
              direction={"row"}
              gap={1}
              sx={{
                width: {
                  xs: "220px",
                  sm: "300px",
                  md: "480px",
                  lg: "385px",
                  xl: "480px",
                },
                height: {
                  xs: "45px",
                  sm: "55px",
                  md: "67px",
                  lg: "57px",
                  xl: "67px",
                },
              }}
            >
              <input type="name" className="input-city" placeholder="Company" />
              <input type="name" className="input-city" placeholder="Subject" />
            </Stack>
            <Stack
              sx={{
                width: {
                  xs: "220px",
                  sm: "300px",
                  md: "480px",
                  lg: "385px",
                  xl: "480px",
                },
                height: {
                  xs: "45px",
                  sm: "55px",
                  md: "67px",
                  lg: "57px",
                  xl: "67px",
                },
              }}
            >
              <PhoneNumber />
            </Stack>
            <Stack
              sx={{
                width: {
                  xs: "220px",
                  sm: "300px",
                  md: "480px",
                  lg: "385px",
                  xl: "480px",
                },
              }}
            >
              <textarea
                name="Question"
                type="text"
                placeholder="Question"
                className="input-question"
                rows="6"
                cols="40"
              />
            </Stack>
            <Typography
              // color={"white"}
              color={"white"}
              fontFamily={"Work Sans"}
              fontSize={"13px"}
              sx={{
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              It looks like you‘re in INDIA based on your IP.
            </Typography>

            <Stack
              width={"100%"}
              gap={2}
              sx={{
                alignItems: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              <Stack
                direction={"row"}
                gap={1}
                sx={{
                  textAlign: {
                    xs: "left",
                    lg: "left",
                  },
                }}
              >
                <Stack>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </Stack>
                <Typography
                  fontFamily={"Work Sans"}
                  fontSize={"13px"}
                  // color={"white"}
                  color={"white"}
                >
                  I agree to the Terms of Service and Privacy Policy.
                </Typography>
              </Stack>
              <Button
                type="button"
                fontFamily={"Work Sans"}
                sx={{
                  width: {
                    xs: "220px",
                    sm: "300px",
                    md: "480px",
                    lg: "385px",
                    xl: "480px",
                  },
                  height: {
                    xs: "45px",
                    sm: "55px",
                    md: "67px",
                    lg: "57px",
                    xl: "67px",
                  },
                  color: "white",
                  fontSize: {
                    xs: "16px",
                    sm: "19px",
                    md: "22px",
                  },
                  // border: "1px solid #F15B25",
                  bgcolor: "#F15B25",
                  // bgcolor: "#F15B25",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "transparent",
                    // border: "1px solid #F15B25",
                    border: "1px solid #052973",
                    // color: "white",
                    color: "black",
                  },
                }}
                onClick={handleSubmit}
              >
                Get Started
              </Button>
              {/* <Stack
                direction={"row"}
                alignSelf={{ xs: "center", md: "end" }}
                gap={1}
              >
                <Typography
                  display={"flex"}
                  fontFamily={"Work Sans"}
                  // color={"white"}
                  color={"white"}
                >
                  or sign in using
                </Typography>
              </Stack> */}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
     
    </Stack>
  );
};

export default ContactUs;
