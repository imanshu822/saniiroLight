import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../../utils/Button";

const Readytosign = () => {
  return (
    <Stack
      bgcolor={"#35373E"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={4}
      p={{
        xs: "35px 0px",
        lg: "70px 0",
      }}
    >
      <Typography
        color={"white"}
        fontSize={{
          xs: "20px",
          lg: "35px",
        }}
        textAlign={"center"}
      >
        Ready to do your best work? <br />
        Let's get you started.
      </Typography>
      <Button
        sx={{
          bgcolor: "white",
          color: "black",
          width: {
            xs: "200px",
            lg: "220px",
          },
          height: "50px",
          fontWeight: "bold",
          fontSize: {
            xs: "15px",
            lg: "20px",
          },
        }}
      >
        SIGN UP NOW
      </Button>
    </Stack>
  );
};

export default Readytosign;
