import { Box, Stack, Typography } from "@mui/material";
import Button from "../../utils/Button";
import React from "react";
const BuildingSuccess = () => {
  return (
    <Stack
      sx={{
        background:
          "linear-gradient(180deg, rgba(133, 159, 255, 0) 38.85%, #859FFF 84.69%)",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "Start",
        alignItems: "center",
      }}
    >
      <Box
        margin={"0 auto"}
        sx={{
          width: { xs: "95%", lg: "98%" },
        }}
      >
        <Box>
          <Typography
            sx={{
              marginTop: {
                xs: "30px",
                sm: "35px",
                md: "50px",
                lg: "95px",
              },
              fontFamily: "Work Sans",
              fontSize: {
                xs: "24px",
                lg: "30px",
              },
              fontWeight: 600,
              lineHeight: "30px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#4DB267",
            }}
          >
            BUILDING SUCCESS TOGETHER
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              marginTop: "15px",
              fontFamily: "Work Sans",
              fontSize: {
                xs: "24px",
                sm: "30px",
                md: "35px",
                lg: "50px",
              },
              fontWeight: 600,
              lineHeight: "53px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#052973",
            }}
          >
            Saniiro Consulting Partner Program
          </Typography>
        </Box>
        <Box>
          <Typography
            margin={"0 auto"}
            width="95%"
            sx={{
              marginTop: "26px",
              fontFamily: "Work Sans",
              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "16px",
                lg: "18px",
              },
              fontWeight: 400,
              lineHeight: "27px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            Our Partner Program gives you access to one of the broadest SaaS
            product portfolios in the industry, training to build powerful Zoho
            product capabilities, and a dedicated partner support channel to
            help you implement successful solutions for your customers. Join us
            in establishing a partnership built on integrity, respect, and a
            long-term commitment to excellence.
          </Typography>
        </Box>
        <Stack
          direction={{
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          }}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            marginTop: "48px",
            gap: "10px",
          }}
        >
          <Button
            sx={{
              width: {
                xs: "130px",
                md: "214px",
              },
              height: {
                xs: "40px",
                md: "58px",
              },
              padding: {
                xs: "10px 10px",
                md: "25px 20px",
                lg: "25px 20px",
              },
              fontSize: {
                xs: "12px",
                md: "16px",
                lg: "18px",
              },
              backgroundColor: "#F15B25",
              color: "white",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
              },
            }}
          >
            Become a Partner
          </Button>
          <Button
            sx={{
              width: {
                xs: "130px",
                md: "214px",
              },
              height: {
                xs: "40px",
                md: "58px",
              },
              padding: {
                xs: "10px 10px",
                md: "25px 20px",
                lg: "25px 20px",
              },
              fontSize: {
                xs: "12px",
                md: "16px",
                lg: "18px",
              },
              border: "1px solid #000000",
              color: "black",
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#F15B25",
                color: "white",
                border: "1px solid #F15B25",
              },
            }}
          >
            Case Studies
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default BuildingSuccess;
