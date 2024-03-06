import React, { useState, useEffect } from "react";
import "./Features.css";
import FeatureIcon1 from "../../assets/FeatureIcon1.svg";
import iconSize from "../../assets/iconSize.svg";
import BoxImage from "../../assets/BoxImage.png";
import { Box, Stack, Typography } from "@mui/material";
import Button from "../../utils/Button";
import EastIcon from "@mui/icons-material/East";
import kickStart from "../../assets/kickStart.svg";
function FeaturesBysize() {
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
      title: "A secure and scalable <br/> CRM at the heart of your enterprise",
      description:
        "Enterprise organizations have to manage large volumes of customer data, coordinate and execute complex business processes, maintain impeccable security standards, and comply with local and international regulations.<br/> <br/> Zoho CRM enables enterprise organizations to unify their business data across departments and deliver a more compelling customer experience. With our robust backend infrastructure, rich feature set, and enterprise-grade data security processes, we've empowered highly complex, large-scale businesses to operate seamlessly and securely across the globe.",
      items: [
        {
          id: "1",
          src: iconSize,
          title: "Sales Force Automation",
        },
        {
          id: "2",
          src: iconSize,
          title: "Sales Force Automation",
        },
        {
          id: "3",
          src: iconSize,
          title: "Sales Force Automation",
        },
        {
          id: "4",
          src: iconSize,
          title: "Sales Force Automation",
        },
        {
          id: "5",
          src: iconSize,
          title: "Sales Force Automation",
        },
        {
          id: "6",
          src: iconSize,
          title: "Sales Force Automation",
        },
        {
          id: "7",
          src: iconSize,
          title: "Sales Force Automation",
        },
        {
          id: "8",
          src: iconSize,
          title: "Sales Force Automation",
        },
      ],
    },
    {
      id: "2",
      title: "Bespoke industry solutions",
      description:
        "With their own special challenges, businesses in vertical markets struggle to find solutions that fit their needs. However, the flexibility and depth of customization offered by Zoho CRM empowers every business to implement our solution seamlessly into their operations. From fields and modules to business processes and workflows, every aspect of Zoho CRM can be molded to meet the needs of your respective business and vertical with ease.",
      items: [
        {
          id: "1",
          src: BoxImage,
          title: "Life Science",
        },
        {
          id: "2",
          src: BoxImage,
          title: "Life Science",
        },
        {
          id: "3",
          src: BoxImage,
          title: "Life Science",
        },
        {
          id: "4",
          src: BoxImage,
          title: "Life Science",
        },
        {
          id: "5",
          src: BoxImage,
          title: "Life Science",
        },
        {
          id: "6",
          src: BoxImage,
          title: "Life Science",
        },
        {
          id: "7",
          src: BoxImage,
          title: "Life Science",
        },
      ],
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
    <Stack direction={"row"} alignItems={"start"} pt={40} width={"85%"}>
      <Stack
        className="sidebar"
        alignItems={"center"}
        p={"20px 0"}
        bgcolor={"white"}
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
      <Stack width={"80%"} gap={2}>
        {lists2.map((d) => (
          <Stack className="content" bgcolor={d.bgcolor}>
            <Stack minHeight={0} gap={2} id={`item${d.id}`} className="item">
              <Typography
                fontWeight={"bold"}
                fontSize={"35px"}
                color={d.id === "4" || d.id === "6" ? "white" : "black"}
                textAlign={"center"}
                dangerouslySetInnerHTML={{ __html: d.title }}
              />

              <Typography
                p={d.id === "1" ? "0 52px" : "0"}
                textAlign={"center"}
                fontSize={"16px"}
                dangerouslySetInnerHTML={{ __html: d.description }}
                color={d.id === "4" || d.id === "6" ? "white" : "black"}
              />
              {/* {d.id !== "2.5" && (
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
              )} */}
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
              
              <Stack
                direction={"row"}
                gap={"22px"}
                pt={2}
                flexWrap={"wrap"}
                justifyContent={"center"}
              >
                {d.id==="1"&&d.items?.map((di) => (
                  <Stack
                    width={"27%"}
                    direction={"row"}
                    alignItems={"center"}
                    gap={2}
                    p={"20px"}
                    borderRadius={2}
                    border={"1px solid lightgrey"}
                  >
                    
                    <img
                      src={di.src}
                      alt=""
                      style={{ width: "23px", height: "23px" }}
                    />
                    <Box
                      bgcolor={"lightgray"}
                      sx={{ content: "''", width: "1px", height: "20px" }}
                    ></Box>
                    <Typography
                      fontSize={"16px"}
                      fontWeight={"bold"}
                      color={"black"}
                    >
                      {di.title}
                    </Typography>
                  </Stack>
                ))}
                {d.id==="2"&&d.items?.map((d)=>(
                    
                <Stack
                  width={"30%"}
                  position={"relative"}
                >
                    <img src={d.src} alt="" style={{borderRadius:1,}}/>
                    <Typography color={"white"} position={"absolute"} top={"50%"} left={"33%"}>Life Sciences</Typography>
                </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default FeaturesBysize;
