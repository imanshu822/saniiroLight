import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const OurGrowth = () => {
  return (
    <Stack
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
    </Stack>
  );
};

export default OurGrowth;
