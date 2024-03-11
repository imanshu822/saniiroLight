import React, { useState, useEffect } from "react";
import "./Features.css";
import FeatureIcon1 from "../assets/FeatureIcon1.svg";
import { Box, Stack, Typography } from "@mui/material";
import Button from "../utils/Button";
import EastIcon from "@mui/icons-material/East";
import kickStart from "../assets/kickStart.svg";
function FeaturesMain() {
  const [activeItem, setActiveItem] = useState("item1");

  const handleScroll = () => {
    const sections = document.querySelectorAll(".item");
    let active = null;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        active = section.id;
      }
    });
    setActiveItem(active);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
    const element = document.getElementById(item);
    if (element) {
      window.removeEventListener("scroll", handleScroll); // Remove scroll event listener temporarily
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.addEventListener("scroll", handleScroll); // Add back the scroll event listener after a short delay
      }, 10000); // Adjust the delay as needed
    }
  };
  const lists = [
    {
      heading: "Solutions",
      id: "1",
    },
    {
      heading: "Industries",
      id: "2",
    },
    {
      heading: "Security",
      id: "3",
    },
    {
      heading: "Services",
      id: "4",
    },
    {
      heading: "Platform",
      id: "5",
    },
    {
      heading: "Global Presence",
      id: "6",
    },
    {
      heading: "Partners",
      id: "7",
    },
    {
      heading: "Why Zoho",
      id: "8",
    },
  ];
  const lists2 = [
    {
      id: "1",
      title: "Sales Force Automation",
      description:
        "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
      items: [
        {
          id: "1",
          src: FeatureIcon1,
          title: "Lead Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "2",
          src: FeatureIcon1,
          title: "Contact Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "3",
          src: FeatureIcon1,
          title: "Deal Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "4",
          src: FeatureIcon1,
          title: "Workflow Automation",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
      ],
      bgcolor: "white",
    },
    {
      id: "2",
      title: "Sales Force Automation",
      description:
        "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
      items: [
        {
          id: "1",
          src: FeatureIcon1,
          title: "Lead Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
          boxcolor: "lightgrey",
        },
        {
          id: "2",
          src: FeatureIcon1,
          title: "Contact Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
          boxcolor: "lightgrey",
        },
        {
          id: "3",
          src: FeatureIcon1,
          title: "Deal Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
          boxcolor: "lightgrey",
        },
        {
          id: "4",
          src: FeatureIcon1,
          title: "Workflow Automation",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
          boxcolor: "lightgrey",
        },
      ],
      bgcolor: "#C2FFD3",
    },
    {
      id: "2.5",
      title: "Start visually analyzing your CRM data today",
      bgcolor: "#F6F8FF",
    },
    {
      id: "3",
      title: "Sales Force Automation",
      description:
        "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
      items: [
        {
          id: "1",
          src: FeatureIcon1,
          title: "Lead Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "2",
          src: FeatureIcon1,
          title: "Contact Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "3",
          src: FeatureIcon1,
          title: "Deal Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "4",
          src: FeatureIcon1,
          title: "Workflow Automation",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
      ],
    },
    {
      id: "4",
      title: "Sales Force Automation",
      description:
        "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
      items: [
        {
          id: "1",
          src: FeatureIcon1,
          title: "Lead Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "2",
          src: FeatureIcon1,
          title: "Contact Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "3",
          src: FeatureIcon1,
          title: "Deal Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "4",
          src: FeatureIcon1,
          title: "Workflow Automation",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
      ],
      bgcolor: "#052973",
    },
    {
      id: "5",
      title: "Sales Force Automation",
      description:
        "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
      items: [
        {
          id: "1",
          src: FeatureIcon1,
          title: "Lead Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "2",
          src: FeatureIcon1,
          title: "Contact Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "3",
          src: FeatureIcon1,
          title: "Deal Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "4",
          src: FeatureIcon1,
          title: "Workflow Automation",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
      ],
    },
    {
      id: "6",
      title: "Sales Force Automation",
      description:
        "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
      items: [
        {
          id: "1",
          src: FeatureIcon1,
          title: "Lead Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "2",
          src: FeatureIcon1,
          title: "Contact Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "3",
          src: FeatureIcon1,
          title: "Deal Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "4",
          src: FeatureIcon1,
          title: "Workflow Automation",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
      ],
      bgcolor: "#F15B25",
    },
    {
      id: "7",
      title: "Sales Force Automation",
      description:
        "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
      items: [
        {
          id: "1",
          src: FeatureIcon1,
          title: "Lead Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "2",
          src: FeatureIcon1,
          title: "Contact Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "3",
          src: FeatureIcon1,
          title: "Deal Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "4",
          src: FeatureIcon1,
          title: "Workflow Automation",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
      ],
    },
    {
      id: "8",
      title: "Sales Force Automation",
      description:
        "Automate routine sales, marketing, and support functions that take up valuable work time, giving you more time to concentrate on your customers. Create optimized workflows that help you reduce manual data entry, eliminate redundancies, and speed up your overall process.",
      items: [
        {
          id: "1",
          src: FeatureIcon1,
          title: "Lead Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "2",
          src: FeatureIcon1,
          title: "Contact Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "3",
          src: FeatureIcon1,
          title: "Deal Management",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
        {
          id: "4",
          src: FeatureIcon1,
          title: "Workflow Automation",
          description:
            "Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.",
        },
      ],
    },
  ];
  return (
    <>
      {/* for Desktip view */}

      <Stack
        display={{
          xs: "none",
          lg: "flex",
        }}
        direction={"row"}
        alignItems={"start"}
        pt={5}
      >
        <Stack
          className="sidebar"
          alignItems={"center"}
          p={"20px 0"}
          bgcolor={"#F6F8FF"}
        >
          <Stack width={"29%"}>
            {lists.map((d) => (
              <ul>
                <li
                  onClick={() => handleItemClick(`item${d.id}`)}
                  className={activeItem === `item${d.id}` ? "active" : ""}
                >
                  {d.heading}
                </li>
              </ul>
            ))}
          </Stack>
        </Stack>
        <Stack width={"100%"}>
          {lists2.map((d) => (
            <Stack className="content" bgcolor={d.bgcolor} width={"100%"}>
              <Stack
                minHeight={0}
                gap={1}
                id={`item${d.id}`}
                className="item"
                alignItems={"flex-start"}
              >
                <Typography
                  fontWeight={"bold"}
                  fontSize={"35px"}
                  color={d.id === "4" || d.id === "6" ? "white" : "black"}
                >
                  {d.title}
                </Typography>
                <Typography
                  color={d.id === "4" || d.id === "6" ? "white" : "black"}
                >
                  {d.description}
                </Typography>
                {d.id !== "2.5" && (
                  <Button
                    endIcon={<EastIcon />}
                    sx={{
                      bgcolor: "transparent",
                      color:
                        d.id === "4"
                          ? "#DF7E00"
                          : d.id === "6"
                          ? "white"
                          : "#0079FF",
                      fontSize: "16px",
                      fontWeight: "bold",
                      pl: "0px",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#0079FF",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                )}
                {d.id === "2.5" && (
                  <Stack pt={1}>
                    <Button
                      sx={{
                        width: "200px",
                        fontSize: "18px",
                        fontWeight: "bold",
                        fontFamily: "Work Sans",
                        p: 1.5,
                      }}
                    >
                      Request Demo
                    </Button>
                  </Stack>
                )}
                <Stack direction={"row"} gap={"22px"} pt={2}>
                  {d.items?.map((di) => (
                    <Stack
                      width={"19%"}
                      gap={2}
                      bgcolor={"white"}
                      pl={2}
                      borderRadius={2}
                      border={`1px solid ${di.boxcolor}`}
                    >
                      <img
                        src={di.src}
                        alt=""
                        style={{ width: "70px", height: "70px" }}
                      />
                      <Typography fontSize={"23px"} fontWeight={"bold"}>
                        {di.title}
                      </Typography>
                      <Typography fontSize={"13px"} color={"grey"}>
                        {di.description}
                      </Typography>
                      <Stack alignItems={"flex-start"}>
                        <Button
                          endIcon={<EastIcon />}
                          sx={{
                            bgcolor: "transparent",
                            color: "#0079FF",
                            fontSize: "16px",
                            fontWeight: "bold",
                            pl: "0px",
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "#0079FF",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          Learn More
                        </Button>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>

      {/* for mobile view  */}
      <Stack
        direction={"column"}
        pt={5}
        display={{
          xs: "flex",
          lg: "none",
        }}
      >
        <Stack alignItems={"center"} p={"20px 0"} bgcolor={"white"}>
          <Stack
            display={"fixed"}
            margin={"0 auto"}
            width={{
              xs: "95%",
            }}
            direction={"row"}
            gap={2}
            sx={{ overflowY: "auto" }}
            justifyContent={"center"}
          >
            {lists.map((d) => (
              <Box
                borderBottom={"2px solid transparent"}
                padding={{
                  xs: "10px 5px",
                  sm: "10px 5px",
                  md: "10px 5px",
                }}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    borderBottom: "1px solid grey",
                  },
                }}
                alignItems={"center"}
                onClick={() => handleItemClick(`item${d.id}`)}
                className={activeItem === `item${d.id}` ? "active" : ""}
              >
                {d.heading}
              </Box>
            ))}
          </Stack>
        </Stack>
        <Stack width={"100%"}>
          {lists2.map((d) => (
            <Stack className="content" bgcolor={d.bgcolor} width={"100%"}>
              <Stack
                minHeight={0}
                gap={1}
                id={`item${d.id}`}
                className="item"
                alignItems={"flex-start"}
                margin={"0 auto"}
              >
                <Typography
                  fontWeight={"bold"}
                  fontSize={{
                    xs: "25px",
                    sm: "25px",
                    md: "35px",
                  }}
                  color={d.id === "4" || d.id === "6" ? "white" : "black"}
                >
                  {d.title}
                </Typography>
                <Typography
                  fontSize={{
                    xs: "12px",
                    sm: "14px",
                    md: "20px",
                  }}
                  color={d.id === "4" || d.id === "6" ? "white" : "black"}
                >
                  {d.description}
                </Typography>
                {d.id !== "2.5" && (
                  <Button
                    endIcon={<EastIcon />}
                    sx={{
                      bgcolor: "transparent",
                      color:
                        d.id === "4"
                          ? "#DF7E00"
                          : d.id === "6"
                          ? "white"
                          : "#0079FF",
                      fontSize: {
                        xs: "14px",
                        md: "16px",
                      },
                      fontWeight: "bold",
                      pl: "0px",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#0079FF",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                )}
                {d.id === "2.5" && (
                  <Stack pt={1}>
                    <Button
                      sx={{
                        width: {
                          xs: "150px",
                          md: "200px",
                        },
                        fontSize: {
                          xs: "14px",
                          md: "16px",
                        },
                        fontWeight: "bold",
                        fontFamily: "Work Sans",
                        p: 1.5,
                      }}
                    >
                      Request Demo
                    </Button>
                  </Stack>
                )}
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  gap={1}
                  pt={1}
                  width={{
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                  }}
                  flexWrap={"wrap"}
                >
                  {d.items?.map((di) => (
                    <Stack
                      width={"40%"}
                      gap={2}
                      bgcolor={"white"}
                      pl={2}
                      borderRadius={2}
                      border={
                        di.boxcolor
                          ? `1px solid {${di.boxcolor}`
                          : "1px solid lightgrey"
                      }
                    >
                      <img
                        src={di.src}
                        alt=""
                        style={{ width: "70px", height: "70px" }}
                      />
                      <Typography
                        fontSize={{
                          xs: "16px",
                          sm: "20px",
                          md: "23px",
                        }}
                        fontWeight={"bold"}
                      >
                        {di.title}
                      </Typography>
                      <Typography
                        fontSize={{
                          xs: "10px",
                          sm: "12px",
                          md: "13px",
                        }}
                        color={"grey"}
                      >
                        {di.description}
                      </Typography>
                      <Stack alignItems={"flex-start"}>
                        <Button
                          endIcon={<EastIcon />}
                          sx={{
                            bgcolor: "transparent",
                            color: "#0079FF",
                            fontSize: {
                              xs: "14px",
                              md: "16px",
                            },
                            fontWeight: "bold",
                            pl: "0px",
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "#0079FF",
                              textDecoration: "underline",
                            },
                          }}
                        >
                          Learn More
                        </Button>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
}

export default FeaturesMain;
