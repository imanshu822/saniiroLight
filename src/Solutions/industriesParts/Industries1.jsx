import { Stack, Typography } from '@mui/material'
import React from 'react'
import Button from '../../utils/Button';
import Boxes from "../../assets/Boxes.svg"

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
          Real estate CRM software
        </Typography>
        <Typography
          color={"#052973"}
          fontWeight={"bold"}
          lineHeight={1}
          fontSize={"50px"}
          textAlign={"center"}
        >
          for accelerated sales
        </Typography>
      </Stack>
      <Typography fontSize={"18px"} p={"0 200px"} textAlign={"center"}>
        Built for real estate agencies of all sizes, Zoho CRM offers cutting
        edge sales process management, property management, and automation for
        real estate agents, real estate developers, and brokerage firms. Bring
        home more deals with the all-in-one real estate CRM platform that's
        crafted for your business.
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
          Get A Demo
        </Button>
      </Stack>
      <Stack alignItems={"center"} p={"100px 0"}>
        <img src={Boxes} alt="" style={{width:"100px"}} />
      </Stack>
    </Stack>
  );
}

export default Industries1