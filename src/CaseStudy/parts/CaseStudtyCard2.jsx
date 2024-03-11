import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import interviewImg from "./../../assets/image 177.png";
import arrowImg from "./../../assets/icons/Arrow 4.png";
import { Link } from "react-router-dom";

const CaseStudtyCard1 = () => {
  return (
    <>
      <Stack
        border={"1px solid  #F15B25"}
        borderRadius={"10px"}
        height={"390px"}
        width={{
          xs: "95%",
          md: "330px",
        }}
        margin={"0 auto"}
      >
        <Stack padding={"45px 20px"} gap={2}>
          <Box
            m={"0 auto"}
            component="img"
            width={{
              xs: "200px",
              md: "300px",
            }}
            height={"136px"}
            alt="FedXImgs"
            src={interviewImg}
          />

          <Stack gap={"4px"} width={"85%"} margin={"0px auto"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "17px",
                letterSpacing: "0em",
                textAlign: "center",
                marginBottom: "5px",
              }}
            >
              Share your Saniiro CRM success story!
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "center",
                opacity: "0.6",
              }}
            >
              Complete a quick survey, and we’ll get in touch with you soon.
            </Typography>
            <Link to={"/CaseStudyForm1"}>
              <Button
                margin={"30px auto 0px"}
                direction={"row"}
                sx={{
                  width: {
                    xs: "100%",
                    md: "250px",
                  },
                  height: "46px",
                  padding: "20px, 20px, 14px, 20px",
                  borderRadius: "4px",
                  gap: "22px",
                  backgroundColor: "#F15B25",
                  justifyContent: "center",
                  border: "1px solid white",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "#F15B25",
                    border: "1px solid #F15B25",
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: {
                      xs: "12px",
                      md: "16px",
                    },
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Dowenload Case Study
                </Typography>
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CaseStudtyCard1;
