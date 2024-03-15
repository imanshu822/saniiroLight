import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import FeaturesCard from "./FeaturesCard";
import gifBox1 from "./assets/giftbox1.png";
import gifBox2 from "./assets/giftbox2.png";
import gifBox3 from "./assets/giftbox3.png";
import CareerGallery from "./CareerGallery";
import mapPin from "./assets/map-pin 3.png";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { Link } from "react-router-dom";
import Gallery from "../../../Partner/parts/Gallery";

const Features = [
  {
    id: 1,
    img: gifBox1,
    title: "Compensation & Perks",
    description: "A full-time position with an attractive salary package.",
  },
  {
    id: 2,
    img: gifBox2,
    title: "Paid leaves",
    description:
      "5 Days working week, 24 paid leaves and public holidays as per the IT Industry",
  },
  {
    id: 3,
    img: gifBox3,
    title: "Prime location",
    description:
      "Work at the best location with easy transportation connectivity.",
  },
  {
    id: 4,
    img: gifBox1,
    title: "Training",
    description:
      "8 hrs of training every month to stay updated with the product and technology",
  },
  {
    id: 5,
    img: gifBox2,
    title: "Eat & Drink",
    description: "Tea, coffee and snacks provided all day.",
  },
  {
    id: 6,
    img: gifBox3,
    title: "Sponsored Events",
    description:
      "Team outing, team lunch, festive celebrations and lots of team building activities",
  },
  {
    id: 7,
    img: gifBox2,
    title: "Exchange Program",
    description: "Apply to a similar positionin a subsidiary of Saniiro.",
  },
];

const JobDiscrption = () => {
  return (
    <>
      <Stack
        width={{
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "95%",
          xl: "90%",
        }}
        margin={"5px auto"}
      >
        <Link
          to="/Resources/Career"
          sx={{
            textDecoration: "none",
          }}
        >
          <Stack
            width={"100px"}
            direction={"row"}
            gap={1}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <ArrowForwardSharpIcon
              sx={{
                color: "#F15B25",
                transform: "rotate(180deg)",
                paddingTop: "5px",
              }}
            />

            <Typography
              sx={{
                padding: "3px 0",
                fontFamily: "Work Sans",
                fontSize: "17px",
                fontWeight: 700,
                lineHeight: "15px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#F15B25",
                marginBottom: "5px",
              }}
            >
              career
            </Typography>
          </Stack>
        </Link>
        <Stack
          direction={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "column",
            xl: "row",
          }}
          alignItems={{
            xs: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
          }}
          p={3}
          gap={10}
        >
          <Stack
            width={{
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "90%",
              xl: "60%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "40px",
                fontWeight: 500,
                lineHeight: "43px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              System Administrator & IT Support
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "25px",
                fontWeight: 500,
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "left",
                marginTop: "57px",
              }}
            >
              What do we look for?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "25px",
                letterSpacing: "0em",
                textAlign: "left",
                marginTop: "24px",
              }}
            >
              Join our dynamic team of Direct Sales and make use of your
              hunting, analytical and negotiation skills to acquir e new
              clients.
              <br />
              <br />
              As Business Advisor, you will engage with SME’s and advise them on
              the best solution to adopt for their business.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "25px",
                fontWeight: 500,
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "left",
                marginTop: "63px",
              }}
            >
              What will you do?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "34px",
                letterSpacing: "0em",
                textAlign: "left",
                marginTop: "24px",
              }}
            >
              <ul>
                <li>
                  Receive leads, initiate contact, and qualify the potential
                  clients
                </li>
                <li>
                  Analyze and understand the customer needs, activities,
                  challenges, and pain points
                </li>
                <li>
                  Present the CRM software by providing tailored demonstration
                  according to the customers'
                </li>
                <li>
                  Provide customized quotes and negotiate conditions of the
                  contract
                </li>
              </ul>
            </Typography>
            <Stack
              direction={{
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
              gap={"20px"}
              marginTop={"40px"}
            >
              <Stack
                pb={3}
                width={{
                  xs: "100%",
                  sm: "100%",
                  md: "50%",
                  lg: "360px",
                }}
                sx={{
                  border: "0.54px solid #00000033",
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "100%",
                      lg: "360px",
                    },

                    borderRadius: "7px 7px 0px 0px",
                    backgroundColor: "#052973",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "18px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#FFFFFF",
                      marginTop: "9px",
                      marginBottom: "9px",
                      marginLeft: "20px",
                    }}
                  >
                    PROFILE
                  </Typography>
                </Box>
                <Stack
                  direction={"column"}
                  gap={"20px"}
                  marginRight={"20px"}
                  marginLeft={{
                    xs: "20px",
                    sm: "20px",
                    md: "50px",
                    lg: "50px",
                  }}
                  marginTop={"20px"}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Strong Business knowledge and curiosity
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Genuine interest in IT and software
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Fluent in: English
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Analytic vision & fighting spirit
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Strong relational & negotiation skills
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Good organizational skills
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                width={{
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "360px",
                }}
                pb={3}
                sx={{
                  border: "0.54px solid #00000033",
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "100%",
                      lg: "360px",
                    },

                    borderRadius: "7px 7px 0px 0px",
                    backgroundColor: "#052973",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "18px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#FFFFFF",
                      marginTop: "9px",
                      marginBottom: "9px",
                      marginLeft: "20px",
                    }}
                  >
                    NICE TO HAVE
                  </Typography>
                </Box>
                <Stack
                  direction={"column"}
                  gap={"20px"}
                  marginRight={"20px"}
                  marginLeft={{
                    xs: "20px",
                    sm: "20px",
                    md: "50px",
                    lg: "50px",
                  }}
                  marginTop={"20px"}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Business degree
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Previous experience in Sales or Consultancy
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Previous experience in IT sector
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Convincing communicator
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Overachiever spirit and pro activity
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Work hard/play hard attitude
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Work hard/play hard attitude
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Stack
                marginTop={"20px"}
                width={"100%"}
                pb={3}
                sx={{
                  border: "0.54px solid #00000033",
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    borderRadius: "7px 7px 0px 0px",
                    backgroundColor: "#052973",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "18px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#FFFFFF",
                      marginTop: "9px",
                      marginBottom: "9px",
                      marginLeft: "20px",
                    }}
                  >
                    WHAT MAKES THIS JOB ESSENTIAL?
                  </Typography>
                </Box>
                <Stack
                  direction={"column"}
                  gap={"28px"}
                  marginRight={"20px"}
                  marginLeft={{
                    xs: "20px",
                    sm: "20px",
                    md: "50px",
                    lg: "50px",
                  }}
                  marginTop={"23px"}
                >
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    No cold calling - you receive leads coming from the
                    different marketing channels{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Solution selling & consulting approach that allows you to
                    use your analytical skills{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Deal with interesting people : SME's CEO, CFO, CTO and your
                    colleagues{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Deal with companies of various industries, sizes, and from
                    different countries{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Large apps scope: CRM, accounting, Inventory, HR, Project
                    Management,etc.{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    High commissions for best sellers, no ceiling{" "}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "25px",
                fontWeight: 500,
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "left",
                marginTop: "63px",
              }}
            >
              What will you do?
            </Typography>
            <Stack
              direction={"row"}
              gap={"50px"}
              flexWrap={"wrap"}
              justifyContent={"space-around"}
            >
              {Features.map((feature) => (
                <FeaturesCard key={feature.id} features={feature} />
              ))}
            </Stack>
            <Stack>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "25px",
                  fontWeight: 500,
                  lineHeight: "27px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  marginTop: "57px",
                }}
              >
                Sneak Peek at our Workplace Culture
              </Typography>
              <Stack
                width={"100%"}
                display={{
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "flex",
                }}
              >
                <CareerGallery />
              </Stack>
              <Stack
                display={{
                  xs: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "none",
                }}
              >
                <Gallery />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            width={{
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "40%",
            }}
          >
            <Stack
              width={{
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "372px",
              }}
              height={{
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "505px",
              }}
              borderRadius={"8px"}
              sx={{
                border: "0.54px solid #00000033",
                background: "#F6F6F6",
              }}
            >
              <Stack padding={"27px"}>
                <Stack>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "25px",
                      fontWeight: 500,
                      lineHeight: "27px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    System Administrator & IT Support
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  margin={"20px 0"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    width: "213px",
                    height: "31px",
                    padding: "3px 5px 3px 5px",
                    borderRadius: "4px",
                    gap: "8px",
                    backgroundColor: "#EBEAFF",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#000033",
                    },
                  }}
                >
                  <Box padding={"auto auto"} margin={"0 10px"}>
                    <img
                      width={"9px"}
                      height={"9px"}
                      sx={{
                        opacity: "0.7",
                      }}
                      src={mapPin}
                      alt=""
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Research & Development
                  </Typography>
                </Stack>
                <hr
                  height={"0.5px"}
                  width={"98%"}
                  border={"0.25px solid gray"}
                />
                <Stack gap={"20px"} marginTop={"30px"} marginBottom={"40px"}>
                  <Stack direction={"row"}>
                    <Box padding={"auto auto"} margin={"0 10px"}>
                      <img
                        width={"9px"}
                        height={"9px"}
                        sx={{
                          opacity: "0.7",
                        }}
                        src={mapPin}
                        alt=""
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "17px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      What do we look for?
                    </Typography>
                  </Stack>
                  <Stack direction={"row"}>
                    <Box padding={"auto auto"} margin={"0 10px"}>
                      <img
                        width={"9px"}
                        height={"9px"}
                        sx={{
                          opacity: "0.7",
                        }}
                        src={mapPin}
                        alt=""
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "17px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      What will you do?
                    </Typography>
                  </Stack>
                  <Stack direction={"row"}>
                    <Box padding={"auto auto"} margin={"0 10px"}>
                      <img
                        width={"9px"}
                        height={"9px"}
                        sx={{
                          opacity: "0.7",
                        }}
                        src={mapPin}
                        alt=""
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "16px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      What do we offer?
                    </Typography>
                  </Stack>
                  <Stack direction={"row"}>
                    <Box padding={"auto auto"} margin={"0 10px"}>
                      <img
                        width={"9px"}
                        height={"9px"}
                        sx={{
                          opacity: "0.7",
                        }}
                        src={mapPin}
                        alt=""
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "15px",
                        fontWeight: 600,
                        lineHeight: "17px",
                        letterSpacing: "0em",
                        textAlign: "left",
                      }}
                    >
                      Sneak Peek at our Workplace Culture
                    </Typography>
                  </Stack>
                </Stack>
                <Stack marginBottom={"14px"}>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "19px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    401 & 402, 4th Floor, IT Tower 3, InfoCity, Gandhinagar
                    382007, Gujarat GJ, India
                  </Typography>
                </Stack>
                <Stack alignItems={"center"}>
                  <Box
                    sx={{
                      width: "100px",
                      height: "18px",
                      top: "553px",
                      left: "1087px",
                      padding: "14px 20px 14px 20px",
                      borderRadius: "4px",
                      gap: "10px",
                      border: "1px solid #052973",
                      backgroundColor: "#052973",
                      "&:hover": {
                        cursor: "pointer",
                        backgroundColor: "#F15B25",
                        border: "1px solid #F15B25",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Work Sans",
                        fontSize: "18px",
                        fontWeight: 600,
                        lineHeight: "18px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      Apply Now
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default JobDiscrption;
