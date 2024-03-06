import { Stack, Typography } from '@mui/material'
import React from 'react'
import "./Solution.css"
import Button from '../../utils/Button';
const SolutionsBanner = () => {
  return (
    <Stack width={"50%"} alignItems={"Center"}pt={4}>
      <Stack bgcolor={"#248F41"} width={"80%"} gap={2} p={5} borderRadius={2}>
        <Typography
          textTransform={"uppercase"}
          fontSize={"65px"}
          letterSpacing={1}
          fontWeight={"900"}
          color={"transparent"}
          lineHeight={1}
          className="text-stroke"
        >
          BEST CRM PLATFORM
        </Typography>
        <Typography
          textTransform={"uppercase"}
          fontSize={"50px"}
          color={"white"}
          fontWeight={900}
          lineHeight={1}
          letterSpacing={"0.05em"}
        >
          FOR COMPANIES OF ALL SIZES AND INDUSTRIES
        </Typography>
        <Button
          sx={{
            width: "200px",
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Work Sans",
            p: 1.5,
          }}
        >
          Sign Up for Free
        </Button>
        <Typography fontSize={"19px"} color={"white"}>
          With a robust set of functionalities and a flexible system that allows
          deep customization, Zoho CRM allows people in different roles and
          businesses of different sizes and industries to manage their sales
          effectively and build meaningful customer relationships.
        </Typography>
      </Stack>
      <Stack></Stack>
    </Stack>
  );
}

export default SolutionsBanner