import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import contactsection3 from "../../assets/Contactsection3.svg"
import Button from "../../utils/Button";
import indiaFlag from "../../assets/indiaflag.svg"
import gmail1 from "../../assets/gmail1.svg";
import gmail from "../../assets/gmail.svg";
import icon1Contact from "../../assets/icon1contact.svg";
import icon2Contact from "../../assets/icon2contact.svg";
import icon3Contact from "../../assets/icon3contact.svg";
import icon4Contact from "../../assets/icon4contact.svg";
import Boxes from "../../assets/Boxes.svg";
import { Link } from "react-router-dom";
const GrennSection = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Stack
        alignItems={{xl:"center",xs:"none"}}
        pt={{xl:4,xs:"none"}}
        position={{ xl: "absolute", xs: "none" }}
        top={"-11%"}
      >
        <Stack
          bgcolor={"#248F41"}
          width={{xl:"85%",xs:"none"}}
          borderRadius={{xl:1,xs:"none"}}
          p={"20px 24px"}
          direction={{ xl: "row", xs: "column" }}
          gap={2}
          zIndex={1}
        >
          <Stack
            width={{ xl: "25%", xs: "100%" }}
            bgcolor={"white"}
            borderRadius={1}
          >
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
          <Stack
            width={{ xl: "75%", xs: "100%" }}
            bgcolor={"white"}
            borderRadius={1}
          >
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
              <Stack direction={{ xl: "row", xs: "column" }} gap={5}>
                <Stack
                  width={{ xl: "30%", xs: "100%" }}
                  gap={2}
                  borderRight={{ xl: "1px solid #248F41", xs: "none" }}
                >
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
                <Stack
                  width={{ xl: "30%", xs: "100%" }}
                  gap={2}
                  borderRight={{ xl: "1px solid #248F41", xs: "none" }}
                >
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
                <Stack width={{ xl: "30%", xs: "100%" }} gap={2}>
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

      <Stack alignItems={"center"} pt={"19%"} gap={{xl:10,xs:3}}>
        <Stack width={{xl:"90%",xs:"100%"}} direction={{xl:"row",xs:"column"}}>
          <Stack width={{xl:"47%",xs:"100%"}}>
            <img
              src={contactsection3}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Stack>
          <Stack p={"20px 25px"} gap={{xl:3,xs:"10px"}} width={{xl:"40%",xs:"none"}}>
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
            <Typography fontSize={{xl:"40px",xs:"24px"}} letterSpacing={1}>
              Find your way around Saniiro with Concierge
            </Typography>
            <Typography>
              Not sure which Zoho product is the right fit for your company? No
              worries. We'll work with you to determine what solutions will best
              suit your business.
            </Typography>
          </Stack>
        </Stack>
        <Stack width={{xl:"90%",xs:"100%"}} direction={{xl:"row",xs:"column-reverse"}}>
          <Stack p={"20px 25px"} gap={3} width={{xl:"40%",xs:"100%"}}>
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
            <Typography fontSize={{xl:"40px",xs:"24px"}} letterSpacing={1}>
              Interested in a product? Talk to our sales team
            </Typography>
            <Typography>
              From questions about pricing to one-on-one personalized demos,
              we'd love to connect and help get you started.
            </Typography>
          </Stack>
          <Stack width={{xl:"60%",xs:"none"}} alignItems={"center"} justifyContent={"center"}>
            <Stack
              width={{xl:"80%",xs:"90%"}}
              bgcolor={"#FFFFFF"}
              gap={3}
              p={{xl:"50px 70px",xs:"30px 19px"}}
              borderRadius={1}
            >
              <Stack direction={"row"} gap={1} justifyContent={"center"}>
                <Stack justifyContent={"center"}>
                  <img
                    src={indiaFlag}
                    alt=""
                    style={{ width: "25px", height: "20px" }}
                  />
                </Stack>
                <Typography fontSize={"18px"}>India</Typography>
              </Stack>
              <Stack direction={"row"} justifyContent={"center"} gap={5}>
                <Link
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textDecoration: "none",
                    color: "black",
                    gap: 8,
                    border: "1px solid lightgray",
                    padding: "8px",
                    borderRadius: 5,
                  }}
                >
                  <Stack>
                    <img src={gmail1} alt="" />
                  </Stack>
                  1800-201-0000
                </Link>
                <Link
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textDecoration: "none",
                    color: "black",
                    gap: 8,
                    border: "1px solid lightgray",
                    padding: "8px",
                    borderRadius: 5,
                  }}
                >
                  <Stack>
                    <img src={gmail1} alt="" />
                  </Stack>
                  1800-201-0000
                </Link>
              </Stack>
              <Stack direction={"row"} justifyContent={"center"} gap={5}>
                <Link
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textDecoration: "none",
                    color: "black",
                    gap: 8,
                    border: "1px solid lightgray",
                    padding: "8px",
                    borderRadius: 5,
                  }}
                >
                  <Stack>
                    <img src={gmail} alt="" />
                  </Stack>
                  sales@zohocorp.com
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default GrennSection;
