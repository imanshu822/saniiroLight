import { Stack, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
// import ContactCTA from "../../assets/ContactCTA.svg";
import Button from "../../utils/Button";
import Nav from "../../Navbar/Nav";
import "./contact.css";
import PhoneNumber from "./PhoneNumber";
import icon1Contact from "../../assets/icon1contact.svg";
import icon2Contact from "../../assets/icon2contact.svg";
import icon3Contact from "../../assets/icon3contact.svg";
import icon4Contact from "../../assets/icon4contact.svg";
import Boxes from "../../assets/Boxes.svg";
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
      height={"auto"}
      position={"relative"}
      bgcolor={"#052973"}
      className="textured-background"
      
    >
      <NavLight />
      <Stack direction={"row"} zIndex={11}>
        <Stack width={"50%"} p={"100px 0px 0 100px"} gap={2}>
          <Typography
            textTransform={"uppercase"}
            fontSize={"90px"}
            letterSpacing={1}
            fontWeight={"bold"}
            color={"transparent"}
            lineHeight={1}
            className="text-stroke"
          >
            Looking For
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={"80px"}
            color={"white"}
            fontWeight={900}
            lineHeight={0.9}
            letterSpacing={"0.05em"}
          >
            something in particular?
          </Typography>

          <Typography fontSize={"26px"} color={"white"}>
            We're here to help.
          </Typography>
        </Stack>
        <Stack alignItems={"Center"} width={"50%"} gap={2} pt={4}>
          <Typography color={"white"} fontWeight={"bold"} fontSize={"22px"}>
            Get started with your free trial
          </Typography>
          <Stack gap={1.5}>
            <Stack direction={"row"} gap={1}>
              <input
                type="name"
                className="input-city"
                placeholder="Full Name"
              />
              <input type="email" className="input-city" placeholder="Email" />
            </Stack>
            <Stack direction={"row"} gap={1}>
              <input type="name" className="input-city" placeholder="Company" />
              <input type="name" className="input-city" placeholder="Subject" />
            </Stack>

            <PhoneNumber />
            <textarea
              name="Question"
              type="text"
              placeholder="Question"
              className="input-question"
              rows="6"
              cols="40"
            />
            <Typography fontSize={"13px"} color={"white"}>
              It looks like you‘re in INDIA based on your IP.
            </Typography>
            <Stack gap={2}>
              <Stack direction={"row"} gap={1}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <Typography fontSize={"15px"} color={"white"}>
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
                    backgroundColor: "#052973",
                    color: "white",
                  },
                }}
                onClick={handleSubmit}
              >
                Get Started
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack alignItems={"center"} pt={4}>
        <Stack
          bgcolor={"#248F41"}
          width={"85%"}
          borderRadius={1}
          p={"20px 24px"}
          direction={"row"}
          gap={2}
          zIndex={1}
        >
          <Stack width={"25%"} bgcolor={"white"} borderRadius={1}>
            <Stack p={"20px 25px"} gap={2}>
              <Button
                sx={{
                  borderRadius: 1,
                  fontWeight: "bold",
                  bgcolor: "#248F41",
                  color: "white",
                  width: "100px",
                  height: "25px",
                  fontSize: "12px",
                }}
              >
                I'M NEW HERE
              </Button>
              <Stack>
                <img
                  src={icon1Contact}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
              </Stack>
              <Typography>
                Looking for a demo, or have questions about our products and
                pricing?
              </Typography>
              <Link to={"#"}>sales@zohocorp.com</Link>
            </Stack>
          </Stack>
          <Stack width={"75%"} bgcolor={"white"} borderRadius={1}>
            <Stack p={"20px 25px"} gap={2}>
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
                <Stack width={"30%"} gap={2} borderRight={"1px solid #248F41"}>
                  <Stack>
                    <img
                      src={icon2Contact}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Stack>
                  <Typography>
                    Looking for a demo, or have questions about our products and
                    pricing?
                  </Typography>
                  <Link to={"#"}>sales@zohocorp.com</Link>
                </Stack>
                <Stack width={"30%"} gap={2} borderRight={"1px solid #248F41"}>
                  <Stack>
                    <img
                      src={icon3Contact}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Stack>
                  <Typography>
                    Looking for a demo, or have questions about our products and
                    pricing?
                  </Typography>
                  <Link to={"#"}>sales@zohocorp.com</Link>
                </Stack>
                <Stack width={"30%"} gap={2}>
                  <Stack>
                    <img
                      src={icon4Contact}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Stack>
                  <Typography>
                    Looking for a demo, or have questions about our products and
                    pricing?
                  </Typography>
                  <Link to={"#"}>sales@zohocorp.com</Link>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          alignItems={"end"}
          width={"98%"}
          position={"absolute"}
          bottom={"-11%"}
        >
          <img src={Boxes} alt="" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactUs;
