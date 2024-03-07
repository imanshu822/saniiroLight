import React from "react";
import { Stack, Typography } from "@mui/material";
import Button from "../../utils/Button";
import "./Solution.css";
const ReadytoBuild = () => {
  return (
    <Stack
      p={{
        xs: "30px 7px",
        sm: "30px 15px",
        md: "50px 100px",
        lg: "50px 150px",
      }}
      gap={2}
      alignItems={"center"}
      bgcolor={"#052973"}
      className="textured-background-Solution"
    >
      <Typography
        fontSize={{
          xs: "25px",
          sm: "30px",
          md: "40px",
          lg: "60px",
        }}
        fontWeight={"bold"}
        color={"white"}
        textAlign={"center"}
      >
        Ready to build lasting relationships with Saniiro CRM?
      </Typography>

      <Button
        sx={{
          bgcolor: "white",
          color: "black",
          width: {
            xs: "150px",
            sm: "180px",
            md: "150px",
            lg: "200px",
          },
          fontSize: {
            xs: "12px",
            sm: "16px",
            md: "18px",
            lg: "20px",
          },
          fontWeight: "bold",
          fontFamily: "Work Sans",
          p: 1.5,
        }}
      >
        SIGN UP Now
      </Button>
    </Stack>
  );
};

export default ReadytoBuild;
