import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../../utils/Button";
import Boxes from "../../assets/Boxes.svg";

const Industries1 = () => {
  return (
    <Stack gap={4} p={"20px 0"}>
      <Stack>
        <Typography
          textTransform={"uppercase"}
          color={"#4DB267"}
          fontSize={"50px"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          SANIIRO CRM
        </Typography>
        <Typography
          color={"#052973"}
          fontWeight={"bold"}
          lineHeight={1}
          fontSize={"50px"}
          textAlign={"center"}
        >
          The operating core of your business
        </Typography>
      </Stack>
      <Typography fontSize={"18px"} p={"0 200px"} textAlign={"center"}>
        Your enterprise CRM needs to evolve as quickly as your enterprise does.
        Zoho CRM offers the customizability, feature depth, and product
        stability required to effectively manage a large-scale organization
        across all departments, markets, and geographic locations.
      </Typography>
      <Stack alignItems={"center"}>
        <Button
          sx={{
            width: "200px",
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Work Sans",
            p: 1.5,
          }}
        >
          CONTACT US
        </Button>
      </Stack>
      
    </Stack>
  );
};

export default Industries1;
