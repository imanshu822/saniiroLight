import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const OurGrowth = () => {
  return (
    <>
      {/* desktop  */}
      {/* <Stack
        sx={{
          position: "absolute",
          top: "-187px",
          height: "427px",
          width: "1240px",
          backgroundColor: "#35373E",
        }}
      >
        <Stack
          sx={{
            marginTop: "56px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "43px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Our growth ecosystem
          </Typography>

          <Stack
            sx={{
              marginTop: "40px",
            }}
          >
            <Stack
              direction="row"
              sx={{
                margin: "auto",
                width: "925px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                gap={5}
                sx={{
                  width: "50%",
                  padding: "20px 0px 20px 0px",
                  borderBottom: "1px solid #FFFFFF",
                  borderImageSource:
                    "linear-gradient(270deg, rgba(255, 255, 255, 0) -1.68%, #FFFFFF 47.31%, rgba(255, 255, 255, 0) 100%)",
                  borderImageSlice: "1",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "66px",
                    fontWeight: 100,
                    lineHeight: "70px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#FFE19C",
                  }}
                >
                  2,000+
                </Typography>
                <Typography
                  sx={{
                    margin: "auto",
                    fontFamily: "Work Sans",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "23px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                >
                  CONSULTING PARTNERS
                </Typography>
              </Stack>

              <Stack
                direction="row"
                gap={5}
                sx={{
                  width: "50%",
                  padding: "20px 0px 20px 20px",
                  // borderLeft: "1px solid #FFFFFF",
                  borderBottom: "1px solid #FFFFFF",
                  borderImageSource:
                    "linear-gradient(270deg, rgba(255, 255, 255, 0) -1.68%, #FFFFFF 47.31%, rgba(255, 255, 255, 0) 100%)",
                  borderImageSlice: "1",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "66px",
                    fontWeight: 200,
                    lineHeight: "70px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#A4FF9C",
                    marginLeft: "20px",
                  }}
                >
                  75+
                </Typography>
                <Typography
                  sx={{
                    margin: "auto",
                    fontFamily: "Work Sans",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "23px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                >
                  COUNTRIES WITH PARTNER PRESENCE
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              sx={{
                margin: "auto",
                width: "925px",

                justifyContent: "center",
                alignItems: "center",
                // borderTop: "1px solid #FFFFFF",
                borderTop: "1px solid #FFFFFF",
                borderImageSource:
                  "linear-gradient(270deg, rgba(255, 255, 255, 0) -1.68%, #FFFFFF 47.31%, rgba(255, 255, 255, 0) 100%)",
                borderImageSlice: "1",
              }}
            >
              <Stack
                direction="row"
                gap={5}
                sx={{ width: "50%", padding: "20px 0px 20px 0px" }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "66px",
                    fontWeight: 100,
                    lineHeight: "70px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#BC9CFF",
                  }}
                >
                  900+
                </Typography>
                <Typography
                  sx={{
                    margin: "auto",
                    fontFamily: "Work Sans",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "23px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                >
                  MARKETPLACE INTEGRATIONS BY PARTNERS
                </Typography>
              </Stack>

              <Stack
                direction="row"
                gap={5}
                sx={{
                  width: "50%",
                  padding: "20px 0px 20px 20px",
                  // borderLeft: "1px solid #FFFFFF",
                  borderTop: "1px solid #FFFFFF",
                  borderImageSource:
                    "linear-gradient(270deg, rgba(255, 255, 255, 0) -1.68%, #FFFFFF 47.31%, rgba(255, 255, 255, 0) 100%)",
                  borderImageSlice: "1",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "66px",
                    fontWeight: 200,
                    lineHeight: "70px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#96C8FF",
                    marginLeft: "20px",
                  }}
                >
                  33%
                </Typography>
                <Typography
                  sx={{
                    margin: "auto",
                    fontFamily: "Work Sans",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "23px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                >
                  REVENUE CONTRIBUTION BY PARTNERS
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack> */}

      {/* mobile
       */}
      <Stack
        // pb={4}
        margin={"0 auto"}
        sx={{
          width: {
            xs: "100%",
            md: "100%",
            lg: "80%",
          },
          backgroundColor: "#35373E",
        }}
      >
        <Stack
          sx={{
            marginTop: {
              xs: "30px",
              sm: "35px",
              md: "50px",
              lg: "56px",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: {
                xs: "24px",
                sm: "30px",
                md: "35px",
                lg: "40px",
              },
              fontWeight: 600,
              lineHeight: "43px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Our growth ecosystem
          </Typography>

          <Stack
            sx={{
              marginTop: {
                xs: "20px",
                sm: "25px",
                md: "30px",
                lg: "40px",
              },
            }}
          >
            <Stack
              direction={{
                xs: "column",
                lg: "row",
              }}
              sx={{
                margin: "auto",
                width: "85%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                gap={{
                  xs: 2,
                  md: 5,
                }}
                sx={{
                  width: {
                    xs: "95%",
                    md: "95%",
                    lg: "50%",
                  },
                  justifyContent: "space-between",
                  padding: {
                    xs: "10px 0px 10px 0px",
                    md: "20px 0px 20px 0px",
                  },
                  borderBottom: "1px solid #FFFFFF",
                  borderImageSource:
                    "linear-gradient(270deg, rgba(255, 255, 255, 0) -1.68%, #FFFFFF 47.31%, rgba(255, 255, 255, 0) 100%)",
                  borderImageSlice: "1",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: {
                      xs: "30px",
                      sm: "40px",
                      md: "50px",
                      lg: "60px",
                    },
                    fontWeight: 100,
                    lineHeight: "70px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: "#FFE19C",
                  }}
                >
                  2,000+
                </Typography>
                <Typography
                  sx={{
                    alignSelf: "center",
                    fontFamily: "Work Sans",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px",
                    },
                    fontWeight: 600,
                    lineHeight: "23px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                >
                  CONSULTING PARTNERS
                </Typography>
              </Stack>
              <Stack
                direction="row"
                gap={{
                  xs: 2,
                  md: 5,
                }}
                sx={{
                  width: {
                    xs: "95%",
                    md: "95%",
                    lg: "50%",
                  },
                  justifyContent: "space-between",
                  padding: {
                    xs: "10px 0px 10px 0px",
                    md: "20px 0px 20px 0px",
                  },
                  borderBottom: "1px solid #FFFFFF",
                  borderImageSource:
                    "linear-gradient(270deg, rgba(255, 255, 255, 0) -1.68%, #FFFFFF 47.31%, rgba(255, 255, 255, 0) 100%)",
                  borderImageSlice: "1",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: {
                      xs: "30px",
                      sm: "40px",
                      md: "50px",
                      lg: "60px",
                    },
                    fontWeight: 100,
                    lineHeight: "70px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: "#A4FF9C",
                  }}
                >
                  75+
                </Typography>
                <Typography
                  sx={{
                    alignSelf: "center",
                    fontFamily: "Work Sans",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px",
                    },
                    fontWeight: 600,
                    lineHeight: "23px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                >
                  COUNTRIES WITH PARTNER PRESENCE
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction={{
                xs: "column",
                lg: "row",
              }}
              sx={{
                margin: "auto",
                width: "85%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                gap={{
                  xs: 2,
                  md: 5,
                }}
                sx={{
                  width: {
                    xs: "95%",
                    md: "95%",
                    lg: "50%",
                  },
                  justifyContent: "space-between",
                  padding: {
                    xs: "10px 0px 10px 0px",
                    md: "20px 0px 20px 0px",
                  },
                  borderBottom: "1px solid #FFFFFF",
                  borderImageSource:
                    "linear-gradient(270deg, rgba(255, 255, 255, 0) -1.68%, #FFFFFF 47.31%, rgba(255, 255, 255, 0) 100%)",
                  borderImageSlice: "1",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: {
                      xs: "30px",
                      sm: "40px",
                      md: "50px",
                      lg: "60px",
                    },
                    fontWeight: 100,
                    lineHeight: "70px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: "#BC9CFF",
                  }}
                >
                  900+
                </Typography>
                <Typography
                  sx={{
                    alignSelf: "center",
                    fontFamily: "Work Sans",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px",
                    },
                    fontWeight: 600,
                    lineHeight: "23px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                >
                  MARKETPLACE INTEGRATIONS BY PARTNERS
                </Typography>
              </Stack>
              <Stack
                direction="row"
                gap={{
                  xs: 2,
                  md: 5,
                }}
                sx={{
                  width: {
                    xs: "95%",
                    md: "95%",
                    lg: "50%",
                  },
                  justifyContent: "space-between",
                  padding: {
                    xs: "10px 0px 10px 0px",
                    md: "20px 0px 20px 0px",
                  },
                  borderBottom: "1px solid #FFFFFF",
                  borderImageSource:
                    "linear-gradient(270deg, rgba(255, 255, 255, 0) -1.68%, #FFFFFF 47.31%, rgba(255, 255, 255, 0) 100%)",
                  borderImageSlice: "1",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: {
                      xs: "30px",
                      sm: "40px",
                      md: "50px",
                      lg: "60px",
                    },
                    fontWeight: 100,
                    lineHeight: "70px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: "#96C8FF",
                  }}
                >
                  33%
                </Typography>
                <Typography
                  sx={{
                    alignSelf: "center",
                    fontFamily: "Work Sans",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px",
                    },
                    fontWeight: 600,
                    lineHeight: "23px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                >
                  REVENUE CONTRIBUTION BY PARTNERS
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default OurGrowth;
