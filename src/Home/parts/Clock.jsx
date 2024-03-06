import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import stopWatch from "../../assets/stopWatch.svg";
import PhoneNumberInput from "./nm";
import Google from "../../assets/google.png";
import LinkedIn from "../../assets/linkedIn.png";
import Button from "../../utils/Button";
import PhoneInput from "react-phone-input-2";

const Clock = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value, country) => {
    // Update the state with the selected phone number and country code
    setPhone(value);
  };
  return (
    <Stack alignItems={"center"} p={"10px 0 40px"} sx={{}}>
      <Stack
        padding={"20px "}
        width={"80%"}
        bgcolor={"#F15B25"}
        gap={4}
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
          height: "100%",
          alignItems: {
            xs: "center",
          },
        }}
      >
        <Stack
          width={"60%"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
          sx={{
            marginTop: {
              xs: "20px",
              lg: "0px",
            },
          }}
        >
          <Typography
            color={"white"}
            fontWeight={"bold"}
            sx={{
              fontSize: {
                xs: "20px",
                lg: "30px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
              letterSpacing: "2px",
            }}
            letterSpacing={2}
          >
            Get Started in Less Then
          </Typography>
          <Stack
            sx={{
              width: {
                xs: "100px",
                lg: "200px",
              },
              height: {
                xs: "150px",
                lg: "200px",
              },
            }}
            gap={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <img
              src={stopWatch}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Stack>
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                lg: "50px",
              },
            }}
            fontWeight={"bold"}
            color={"white"}
          >
            60 seconds
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: {
              xs: "100%",
              md: "60%",
              lg: "40%",
            },
            padding: {
              xs: "0",
              md: "20px 0 0 20px",
            },
          }}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "20px",
                lg: "25px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
              letterSpacing: "2px",
            }}
            color={"white"}
            fontWeight={"bold"}
            letterSpacing={2}
          >
            Get started with your free trial
          </Typography>
          <Stack gap={2} width={"100%"} alignItems={"center"}>
            <Stack
              alignItems={"center"}
              sx={{
                width: {
                  xs: "100%",
                  lg: "85%",
                },
                height: {
                  xs: "55px",
                  lg: "67px",
                },
              }}
            >
              <input
                type="text"
                className="input-clock"
                placeholder="Full Name"
              />
            </Stack>
            <Stack
              alignItems={"center"}
              sx={{
                width: {
                  xs: "100%",
                  lg: "85%",
                },
                height: {
                  xs: "55px",
                  lg: "67px",
                },
              }}
            >
              <input
                type="Email"
                className="input-clock"
                placeholder="Work Email"
              />
            </Stack>
            <Stack
              alignItems={"center"}
              sx={{
                width: {
                  xs: "100%",
                  lg: "85%",
                },
                height: {
                  xs: "55px",
                  lg: "67px",
                },
              }}
            >
              <input
                type="number"
                className="input-clock"
                placeholder="Phone Number"
              />
            </Stack>
            {/* <PhoneInput
              country={""} // Default country code for India (+91)
              value={phone}
              placeholder="Phone Number"
              onChange={handlePhoneChange}
              inputProps={{
                name: "phone",
                id: "phoneInput",
              }}
            /> */}
            <Box textAlign={"left"} width={"85%"}>
              <Typography fontSize={"13px"} color={"white"} textAlign={"left"}>
                It looks like you‘re in INDIA based on your IP.
              </Typography>
            </Box>
            <Stack gap={2} width={"85%"}>
              <Stack direction={"row"} gap={1}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <Typography fontSize={"13px"} color={"white"}>
                  I agree to the Terms of Service and Privacy Policy.
                </Typography>
              </Stack>
              <Button
                type="button"
                sx={{
                  width: "100%",
                  color: "white",
                  height: "67px",
                  fontSize: "22px",
                  bgcolor: "#052973",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#052973",
                    color: "white",
                  },
                }}
              >
                Get Started
              </Button>
              <Stack direction={"row"} justifyContent={"right"} gap={1}>
                <Typography
                  display={"flex"}
                  alignItems={"center"}
                  color={"white"}
                >
                  or sign in using
                </Typography>
                <img src={Google} style={{ width: "32px", height: "32px" }} />
                <img src={LinkedIn} style={{ width: "32px", height: "32px" }} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Clock;
