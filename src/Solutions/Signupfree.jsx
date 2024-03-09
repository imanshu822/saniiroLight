import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../utils/Button";
const Signupfree = () => {
  return (
    <Stack
      bgcolor={"#35373E"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={4}
      p={"70px 0"}
    >
      <Typography
        width={"80%"}
        color={"white"}
        fontSize={{
          xs: "20px",
          md: "24px",
          lg: "35px",
        }}
        textAlign={"center"}
        fontWeight={"bold"}
      >
        Ready to build lasting relationships with Zoho CRM?
      </Typography>
      <Stack
        margin={"0 auto"}
        direction={{
          xs: "column",
          lg: "row",
        }}
        alignItems={"center"}
        gap={2}
      >
        <Button
          sx={{
            bgcolor: "white",
            color: "black",
            width: {
              xs: "150px",
              md: "220px",
            },
            height: {
              xs: "40px",
              md: "50px",
            },
            fontWeight: "bold",
            fontSize: {
              xs: "12px",
              md: "16px",
              lg: "20px",
            },
          }}
        >
          SIGN UP NOW
        </Button>
        <Button
          sx={{
            border: "1px solid white",
            bgcolor: "transparent",
            color: "white",
            height: {
              xs: "40px",
              md: "50px",
            },
            width: {
              xs: "200px",
              md: "270px",
            },

            fontWeight: "bold",
            fontSize: {
              xs: "12px",
              md: "16px",
              lg: "17px",
            },
            p: 2,
          }}
        >
          SEE PLANS AND PRICING
        </Button>
      </Stack>
      <Typography
        fontSize={"10px"}
        color={"white"}
        textAlign={"center"}
        p={{
          xs: "0 20px",
          md: "0 40px",
          lg: "0 200px",
        }}
      >
        Disclaimer: Zoho CRM is not an out-of-the-box vertical CRM solution. It
        is an industry-agnostic CRM platform that can be customized to suit
        various industries. The capabilities and solutions showcased above are a
        result of such customization.
      </Typography>
    </Stack>
  );
};

export default Signupfree;
