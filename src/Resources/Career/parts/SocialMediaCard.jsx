import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import instagramImg from "./assets/instagram.png";
import linkedinImg from "./assets/linkedin.png";
const SocialMediaCard = () => {
  return (
    <Stack
      sx={{
        boxShadow: "0px 0px 10px 0px #0000001F",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <Stack gap={2}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "25px",
            fontWeight: 300,
            lineHeight: "27px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Social Platform
        </Typography>
        <Stack
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            gap: "20px",
          }}
        >
          <Stack direction={"row"} gap={2}>
            <Box
              component="img"
              sx={{
                height: "40px",
                width: "43px",
              }}
              alt="instagram Image"
              src={instagramImg}
            />
            <Stack gap={"4px"}>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: "13px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Follow us on Instagram:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "20px",
                  fontWeight: 300,
                  lineHeight: "21px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                @saniiro.official
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <Box
              component="img"
              sx={{
                height: "40px",
                width: "43px",
              }}
              alt="LinkedInImage"
              src={linkedinImg}
            />
            <Stack gap={"4px"}>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: "13px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Join our LinkedIn page::
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "20px",
                  fontWeight: "2px",
                  lineHeight: "21px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                #saniiro
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SocialMediaCard;
