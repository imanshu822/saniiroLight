
import { Stack, IconButton, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import PhoneNumberInput from "../Home/parts/nm";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CitySelector from "../Home/parts/Cityselctor";
import Button from "../utils/Button";
import Google from "../assets/google.png";
import lo from "../assets/lo.svg";
import LinkedIn from "../assets/linkedIn.png";
import dottedbg from "../assets/dottedbg.svg";
import ImageSignup from "../assets/ImageSignUp.png";
import contactIcon from "../assets/contactIcon.svg";
import Emailicon from "../assets/EmailIcon.svg"
import { Link } from "react-router-dom";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const textStyle = {
    fontWeight: "bold",
    fontFamily: "Work Sans",
    color: "#FFFFFF",
    textShadow: "0px 0px 5px #F15B25",
  };
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log("Form submitted!");
  };
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"} p={"15px 50px"}>
        <Link to={"/"}>
          <Stack>
            <img src={lo} alt="" style={{ width: "181px", height: "43px" }} />
          </Stack>
        </Link>
        <Stack direction={"row"}>
          <Stack justifyContent={"center"}>
            <Typography fontSize={"12px"} pb={1.1}>
              Have a Saniiro Account?
            </Typography>
          </Stack>
          <Link to={"/Login"}>
            <Button
              sx={{
                bgcolor: "transparent",
                color: "#F15B25",
                fontSize: "12px",
                fontWeight: "bold",
                pl: "0px",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#F15B25",
                },
              }}
            >
              Log-in
            </Button>
          </Link>
        </Stack>
      </Stack>
      <Stack direction={"row"}>
        <Stack
          alignItems={"center"}
          width={"50%"}
          p={"60px 0px 0 100px"}
          sx={{
            backgroundImage: `url(${dottedbg})`,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Stack
            justifyContent={"center"}
            width={"145px"}
            height={"145px"}
            borderRadius={"50%"}
          >
            <img src={ImageSignup} alt="" />
          </Stack>
          <Typography
            fontSize={"22px"}
            fontWeight={"bold"}
            p={"20px 80px"}
            textAlign={"center"}
          >
            "The ease and simplicity of the program and the way that the Zoho
            Team have continued to develop solutions around and integrated with
            the CRM. “
          </Typography>
          <Stack textAlign={"end"} width={"69%"}>
            <Typography
              color={"#F15B25"}
              fontSize={"18px"}
              textAlign={"end"}
              f
              fontWeight={"bold"}
            >
              CHRIS SAVOCA
            </Typography>
            <Typography color={"141414"}>
              Executive Officer, Travelhost Network
            </Typography>
          </Stack>
        </Stack>
        <Stack alignItems={"Center"} width={"50%"} gap={2} pt={"20px"}>
          <Typography color={"#052973"} fontWeight={"bold"} fontSize={"22px"}>
            Get started with your 15-day free trial.
          </Typography>
          <Stack gap={2}>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                className="input-new"
                placeholder="Full Name"
              />
              <PersonIcon
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "16px",
                  transform: "translateY(-50%)",
                  color: "#AAAAAA",
                  fontSize: "40px",
                }}
              />
            </div>
            <div style={{ position: "relative" }}>
              <input
                type="Email"
                className="input-new"
                placeholder="Work Email"
              />
              <EmailIcon
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "16px",
                  transform: "translateY(-50%)",
                  color: "#AAAAAA",
                  fontSize: "40px",
                }}
              />
            </div>

            <div style={{ position: "relative" }}>
              <input
                name="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
                className="input-new"
              />
              <IconButton
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "16px",
                  transform: "translateY(-50%)",
                  color: "#AAAAAA",
                  fontSize: "50px",
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </div>
            <PhoneNumberInput />
            <CitySelector />
            <Typography fontSize={"13px"}>
              It looks like you‘re in INDIA based on your IP.
            </Typography>
            <Stack gap={2}>
              <Stack direction={"row"} gap={1}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <Typography fontSize={"15px"}>
                  I agree to the Terms of Service and Privacy Policy.
                </Typography>
              </Stack>
              <Button
                type="button"
                sx={{
                  color: "white",
                  width: "508px",
                  height: "67px",
                  fontSize: "22px",
                  bgcolor: "#D45630",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#D45630",
                    color: "white",
                  },
                }}
                onClick={handleSubmit}
              >
                Get Started
              </Button>
              <Stack direction={"row"} justifyContent={"right"} gap={1}>
                <Typography display={"flex"} alignItems={"center"}>
                  or sign in using
                </Typography>
                <img src={Google} style={{ width: "32px", height: "32px" }} />
                <img src={LinkedIn} style={{ width: "32px", height: "32px" }} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        justifyContent={"space-around"}
        direction={"row"}
        pt={5}
        alignItems={"center"}
      >
        <Typography fontWeight={"bold"} fontSize={"20px"}>
          Need Assitance?
        </Typography>
        <Stack>
          <Typography fontSize={"12px"} textAlign={"center"}>
            Contact our toll free number
          </Typography>
          <Stack direction={"row"} gap={2}>
            <Stack justifyContent={"center"}>
              <img src={contactIcon} alt="" />
            </Stack>
            <Stack>
              <Typography color={"#052973"} fontWeight={"bold"}>
                1800 103 1123
              </Typography>
              <Typography color={"#052973"} fontWeight={"bold"}>
                1800 572 3535
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Typography fontSize={"12px"} textAlign={"center"}>
            Reach out to us
          </Typography>
          <Stack direction={"row"} gap={1}>
            <Stack justifyContent={"center"}>
              <img src={Emailicon} alt="" />
            </Stack>
            <Stack>
              <Typography color={"#052973"} fontWeight={"bold"}>
                sales@zohocorp.com
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Signup;