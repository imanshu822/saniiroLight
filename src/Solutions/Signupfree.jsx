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
        color={"white"}
        fontSize={"35px"}
        textAlign={"center"}
        fontWeight={"bold"}
      >
        Ready to build lasting relationships with Zoho CRM?
      </Typography>
      <Stack direction={"row"} gap={2}>
        <Button
          sx={{
            bgcolor: "white",
            color: "black",
            width: "220px",
            height: "50px",
            fontWeight: "bold",
            fontSize: "17px",
          }}
        >
          SIGN UP NOW
        </Button>
        <Button
          sx={{
            border: "1px solid white",
            bgcolor: "transparent",
            color: "white",
            height: "50px",
            fontWeight: "bold",
            fontSize: "17px",
            p: 2,
          }}
        >
          SEE PLANS AND PRICING
        </Button>
      </Stack>
      <Typography fontSize={"10px"} color={"white"} textAlign={"center"} p={"0 250px"}>
        Disclaimer: Zoho CRM is not an out-of-the-box vertical CRM solution. It
        is an industry-agnostic CRM platform that can be customized to suit
        various industries. The capabilities and solutions showcased above are a
        result of such customization.
      </Typography>
    </Stack>
  );
};

export default Signupfree;
