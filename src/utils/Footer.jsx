import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ofc from "../assets/ofc.svg";
import ofc2 from "../assets/ofc2.svg";
import { Link } from "react-router-dom";
import play from "../assets/play.svg";
import software from "../assets/software.svg";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropDownIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Footer.css";
const Footer = () => {
  const list1 = [
    {
      item: "About us",
      to: "/About-us",
    },
    {
      item: "Career",
      to: "/Resources/Career",
    },
    {
      item: "Product Reviews",
    },
    {
      item: "Updates",
      to: "/Updates",
    },
    {
      item: "Awards & Recognition",
    },
    {
      item: "Get Offer",
    },
    {
      item: "Contact us",
      to: "/Contact-us",
    },
  ];
  const list2 = [
    {
      item: "Gallery",
    },
    {
      item: "Resources",
    },
    {
      item: "Contact support",
    },
    {
      item: "Help & Training ",
      to: "/HelpAndTraining",
    },
    {
      item: "Security & Performance",
    },
    {
      item: "FAQ’s",
      to: "/Resources/faq",
    },
    {
      item: "Blog",
      to: "/Resources/Blog",
    },
  ];

  const list3 = [
    {
      item: "Case studies",
      to: "/subfooter/legal",
    },
    {
      item: "Testimonials",
      to: "/subfooter/legal",
    },
    {
      item: "Become A Partner",
      to: "/subfooter/legal",
    },
  ];

  const list4 = [
    {
      item: "Legal",
      to: "/subfooter/legal",
    },
    {
      item: "Terms & Conditions",
      to: "/subfooter/terms-and-conditions",
    },
    {
      item: "Privacy Policy",
      to: "/subfooter/privacy-policy",
    },
    {
      item: "Canclenatin/Refund Policy",
      to: "/subfooter/cancalation-and-refund-policy",
    },
    {
      item: "Employee Login",
      to: "/subfooter/employee-login",
    },
  ];

  return (
    <>
      <Stack
        sx={{
          display: {
            xs: "none",
            lg: "flex",
          },
        }}
      >
        <Stack
          bgcolor={"#35373E"}
          p={"40px 0"}
          direction={"row"}
          justifyContent={"space-evenly"}
        >
          <Stack gap={2}>
            <Typography color={"white"} fontWeight={"bold"} fontSize={"25px"}>
              Saniiro Contact
            </Typography>
            <Stack gap={1}>
              <Stack
                p={2}
                border={"1px solid white"}
                bgcolor={"#F15B25"}
                width={"265px"}
                borderRadius={1}
                direction={"row"}
                gap={3}
              >
                <Stack justifyContent={"center"}>
                  <img
                    src={ofc}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                </Stack>
                <Stack>
                  <Typography
                    fontWeight={"bold"}
                    color={"white"}
                    fontSize={"22px"}
                  >
                    Head Office
                  </Typography>
                  <Typography color={"white"}>
                    613-5th Floor, Apex Mall, Lalkothi, Jaipur - 302015
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                p={2}
                border={"1px solid white"}
                bgcolor={"#F15B25"}
                width={"265px"}
                borderRadius={1}
                direction={"row"}
                gap={3}
              >
                <Stack justifyContent={"center"}>
                  <img
                    src={ofc2}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                </Stack>
                <Stack>
                  <Typography
                    fontWeight={"bold"}
                    color={"white"}
                    fontSize={"22px"}
                  >
                    Sale(s) Office
                  </Typography>
                  <Typography color={"white"}>
                    Jaipur, Mumbai, Lucknow, Pune, Ahmedabad
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Typography color={"white"} fontWeight={"bold"} fontSize={"25px"}>
              Company
            </Typography>
            <Typography>
              <ul
                style={{
                  display: "flex",
                  gap: "12px",
                  flexDirection: "column",
                }}
              >
                {list1.map((d) => (
                  <Link
                    to={`${d.to}`}
                    style={{ color: "lightgray", textDecoration: "none" }}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <li className="list-item">{d.item}</li>
                  </Link>
                ))}
              </ul>
            </Typography>
          </Stack>
          <Stack>
            <Typography color={"white"} fontWeight={"bold"} fontSize={"25px"}>
              Resources
            </Typography>
            <Typography color={"lightgray"}>
              <ul
                style={{
                  display: "flex",
                  gap: "12px",
                  flexDirection: "column",
                }}
              >
                {list2.map((d) => (
                  <Link
                    // className="Footer-new"
                    to={`${d.to}`}
                    style={{ color: "lightgray", textDecoration: "none" }}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <li className="list-item">{d.item}</li>
                  </Link>
                ))}
              </ul>
            </Typography>
          </Stack>
          <Stack>
            <Typography color={"white"} fontWeight={"bold"} fontSize={"25px"}>
              Customers
            </Typography>
            <Typography color={"lightgray"}>
              <ul
                style={{
                  display: "flex",
                  gap: "12px",
                  flexDirection: "column",
                }}
              >
                <Link
                  to={"/Resources/CaseStudy"}
                  style={{ color: "lightgray", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li className="list-item">Case studies</li>
                </Link>
                <Link
                  to={"/Resources/Testimonials"}
                  style={{ color: "lightgray", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li className="list-item">Testimonials</li>
                </Link>
                <Link
                  to={"/Resources/BecomeAPartner"}
                  style={{ color: "lightgray", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <li className="list-item">Become A Partner</li>
                </Link>
              </ul>
            </Typography>
            <Stack gap={2}>
              <Typography
                color={"white"}
                fontWeight={"bold"}
                fontSize={"30px"}
                lineHeight={0.7}
              >
                DOWNLOAD APP
              </Typography>
              <Stack direction={"row"} gap={1.5}>
                <img src={play} alt="" />
                <img src={software} alt="" />
              </Stack>
              <Stack gap={1}>
                <Stack
                  direction={"row"}
                  border={"1px solid white"}
                  bgcolor={"#F15B25"}
                  borderRadius={1}
                  width={"157px"}
                  gap={1}
                  p={"3px 8px"}
                >
                  <EmailIcon sx={{ color: "white" }} />
                  <Typography color={"white"}>info@saniiro.com</Typography>
                </Stack>
                {/* <Stack
                  direction={"row"}
                  border={"1px solid white"}
                  bgcolor={"#F15B25"}
                  borderRadius={1}
                  width={"157px"}
                  gap={1}
                  p={"3px 8px"}
                >
                  <CallIcon sx={{ color: "white" }} />
                  <Typography color={"white"}>+91-9829232322</Typography>
                </Stack> */}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          bgcolor={"#43464F"}
          height={"72px"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"Center"}
          gap={5}
        >
          {list4.map((d) => (
            <Link
              to={`${d.to}`}
              style={{ color: "lightgray", textDecoration: "none" }}
              onClick={() => window.scrollTo(0, 0)}
            >
              {d.item}
            </Link>
          ))}
        </Stack>
      </Stack>

      <Stack
        bgcolor={"#35373E"}
        sx={{
          fontFamily: "Work Sans",
          display: {
            xs: "flex",
            lg: "none",
          },
        }}
      >
        <Stack
          sx={{
            margin: {
              xs: "0px 8px",
            },
          }}
        >
          <Stack gap={2}>
            <Stack
              gap={2}
              sx={{
                margin: "0px auto",
              }}
            >
              <Typography
                color={"white"}
                fontWeight={"bold"}
                fontSize={"25px"}
                sx={{
                  margin: "20px auto 0",
                }}
              >
                Saniiro Contact
              </Typography>
              <Stack
                sx={{
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                  gap: {
                    xs: 2,
                    md: 10,
                  },
                }}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Stack
                  p={2}
                  border={"1px solid white"}
                  bgcolor={"#F15B25"}
                  sx={{
                    width: {
                      xs: "80%",
                      md: "265px",
                    },
                  }}
                  borderRadius={1}
                  direction={"row"}
                  gap={3}
                >
                  <Stack justifyContent={"center"}>
                    <img
                      src={ofc}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Stack>
                  <Stack>
                    <Typography
                      fontWeight={"bold"}
                      color={"white"}
                      fontSize={"22px"}
                    >
                      Head Office
                    </Typography>
                    <Typography color={"white"}>
                      613-5th Floor, Apex Mall, Lalkothi, Jaipur - 302015
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  p={2}
                  border={"1px solid white"}
                  bgcolor={"#F15B25"}
                  sx={{
                    width: {
                      xs: "80%",
                      md: "265px",
                    },
                  }}
                  borderRadius={1}
                  direction={"row"}
                  gap={3}
                >
                  <Stack justifyContent={"center"}>
                    <img
                      src={ofc2}
                      alt=""
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Stack>
                  <Stack>
                    <Typography
                      fontWeight={"bold"}
                      color={"white"}
                      fontSize={"22px"}
                    >
                      Sale(s) Office
                    </Typography>
                    <Typography color={"white"}>
                      Jaipur, Mumbai, Lucknow, Pune, Ahmedabad
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <hr
              style={{
                border: "0.5px solid white",
                width: "90%",
              }}
            />
            <Stack>
              <Stack
                width={"80%"}
                margin={"0px auto"}
                gap={2}
                sx={{
                  top: 65,
                  backgroundColor: "#35373E",
                  zIndex: "11",
                }}
              >
                <Accordion
                  sx={{
                    color: "white",
                    backgroundColor: "#35373E",
                    border: "none",
                    boxShadow: "none",
                    alignItems: "center",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ArrowDropDownIcon
                        sx={{
                          color: "white",
                        }}
                      />
                    }
                  >
                    <Typography>
                      {" "}
                      <Box
                        display={"flex"}
                        justifyContent="center"
                        alignItems={"center"}
                      >
                        <Typography
                          alignSelf="center"
                          display="inline-block"
                          fontSize={20}
                          fontFamily={"Work Sans"}
                          className="navlink"
                          sx={{
                            transition: "all 0.4s ease-in",
                            color: "white",
                          }}
                        >
                          Company
                        </Typography>
                      </Box>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack
                      justifyContent={"center"}
                      gap={1}
                      marginLeft={"20px"}
                    >
                      {list1.map((d) => (
                        <Link
                          to={`${d.to}`}
                          style={{ color: "white", textDecoration: "none" }}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <li
                            style={{
                              fontFamily: "Work Sans",
                            }}
                            className="list-item"
                          >
                            {d.item}
                          </li>
                        </Link>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "white",
                    backgroundColor: "#35373E",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ArrowDropDownIcon
                        sx={{
                          color: "white",
                        }}
                      />
                    }
                  >
                    <Typography>
                      <Box
                        display={"flex"}
                        justifyContent="center"
                        alignItems={"center"}
                      >
                        <Typography
                          alignSelf="center"
                          display="inline-block"
                          fontSize={20}
                          fontFamily={"Work Sans"}
                          className="navlink"
                          sx={{
                            transition: "all 0.4s ease-in",
                            color: "white",
                          }}
                        >
                          Features
                        </Typography>
                      </Box>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack
                      justifyContent={"center"}
                      gap={1}
                      marginLeft={"20px"}
                    >
                      {list2.map((d) => (
                        <Link
                          to={`${d.to}`}
                          style={{ color: "white", textDecoration: "none" }}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <li
                            style={{
                              fontFamily: "Work Sans",
                            }}
                            className="list-item"
                          >
                            {d.item}
                          </li>
                        </Link>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{
                    color: "white",
                    backgroundColor: "#35373E",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ArrowDropDownIcon
                        sx={{
                          color: "white",
                        }}
                      />
                    }
                  >
                    <Typography>
                      {" "}
                      <Box
                        display={"flex"}
                        justifyContent="center"
                        alignItems={"center"}
                      >
                        <Typography
                          alignSelf="center"
                          display="inline-block"
                          fontSize={20}
                          fontFamily={"Work Sans"}
                          className="navlink"
                          sx={{
                            transition: "all 0.4s ease-in",
                            color: "white",
                          }}
                        >
                          Customers
                        </Typography>
                      </Box>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack
                      justifyContent={"center"}
                      gap={1}
                      marginLeft={"20px"}
                    >
                      {list3.map((d) => (
                        <Link
                          to={`${d.to}`}
                          style={{ color: "white", textDecoration: "none" }}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <li
                            style={{
                              fontFamily: "Work Sans",
                            }}
                            className="list-item"
                          >
                            {d.item}
                          </li>
                        </Link>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </Stack>
            </Stack>

            <Stack gap={2} alignItems={"center"} marginTop={"10px"}>
              <Typography
                color={"white"}
                fontWeight={"bold"}
                fontSize={"25px"}
                lineHeight={0.7}
                style={{
                  fontFamily: "Work Sans",
                }}
              >
                DOWNLOAD APP
              </Typography>
              <Stack direction={"row"} gap={1.5}>
                <img src={play} alt="" />
                <img src={software} alt="" />
              </Stack>
              <Stack
                gap={2}
                sx={{
                  justifyContent: "center",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                }}
              >
                <Stack
                  direction={"row"}
                  border={"1px solid white"}
                  bgcolor={"#F15B25"}
                  borderRadius={1}
                  gap={1}
                  p={"8px 8px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <EmailIcon sx={{ color: "white" }} />
                  <Typography variant="p" color={"white"}>
                    info@saniiro.com
                  </Typography>
                </Stack>
                {/* <Stack
                  direction={"row"}
                  border={"1px solid white"}
                  bgcolor={"#F15B25"}
                  borderRadius={1}
                  gap={1}
                  p={"8px 5px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <CallIcon sx={{ color: "white" }} />
                  <Typography variant="p" color={"white"}>
                    +91-9829232322
                  </Typography>
                </Stack> */}
              </Stack>
            </Stack>
            <hr
              style={{
                border: "0.5px solid white",
                width: "90%",
              }}
            />
            <Stack
              padding={"20px 0"}
              bgcolor={"#43464F"}
              alignItems={"center"}
              justifyContent={"Center"}
              gap={3}
              sx={{
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              {list4.map((d) => (
                <Link
                  to={`${d.to}`}
                  style={{ color: "lightgray", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {d.item}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
