import { Stack, Typography } from "@mui/material";
import React from "react";

const RelatedPost = () => {
  return (
    <Stack
      direction={"column"}
      gap={3}
      alignItems={"center"}
      marginBottom={"50px"}
      borderTop={"1px solid gray"}
      borderBottom={"1px solid gray"}
      paddingTop={"20px"}
      paddingBottom={"20px"}
    >
      <Stack direction={"column"} gap={3}>
        <Stack>
          <Typography
            textAlign={"center"}
            sx={{
              fontFamily: "Work Sans",
              fontSize: "25px",
              fontWeight: 600,
              lineHeight: "31px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            Related Posts
          </Typography>

          <Stack direction={"row"} gap={2} margin={"0px 20px"}>
            <Stack direction={"column"} gap={1} marginTop={"10px"}>
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
                PREVIOUS
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "19px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Design Systems for Websites using Figma
              </Typography>
            </Stack>
            <Stack gap={1} marginTop={"10px"}>
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
                NEXT
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "19px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Design Systems for Websites using Figma
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RelatedPost;
