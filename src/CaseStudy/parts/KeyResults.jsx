import { Stack, Typography } from "@mui/material";
import React from "react";

const KeyResults = () => {
  return (
    <>
      <Stack marginBottom={"30px"}>
        <Stack>
          <Typography
            sx={{
              marginTop: "30px",
              fontFamily: "Work Sans",
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "27px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Key results:
          </Typography>
        </Stack>
        <Stack
          marginTop={"30px"}
          marginRight={"30px"}
          marginLeft={"30px"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack paddingLeft={"10px"} borderLeft={"3px solid #F15B25"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Adoption
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "37px",
                fontWeight: 300,
                lineHeight: "39px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#F15B25",
              }}
            >
              6 months
            </Typography>
          </Stack>
          <Stack paddingLeft={"10px"} borderLeft={"3px solid #34A853"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Direct benefits
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "37px",
                fontWeight: 300,
                lineHeight: "39px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#34A853",
              }}
            >
              70%
            </Typography>
          </Stack>
          <Stack paddingLeft={"10px"} borderLeft={"3px solid #052973"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Time saved on day to day sales activities
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "37px",
                fontWeight: 300,
                lineHeight: "39px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#052973",
              }}
            >
              18hrs/week
            </Typography>
          </Stack>
          <Stack paddingLeft={"10px"} borderLeft={"3px solid #DF7E00"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#DF7E00",
              }}
            >
              Adoption
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "37px",
                fontWeight: 300,
                lineHeight: "39px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              100%
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default KeyResults;
