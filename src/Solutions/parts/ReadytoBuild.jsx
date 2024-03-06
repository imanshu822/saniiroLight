import React from 'react'
import { Stack, Typography } from '@mui/material'
import Button from '../../utils/Button';
import "./Solution.css"
const ReadytoBuild = () => {
  return (
    <Stack
      p={"50px 150px"}
      gap={2}
      alignItems={"center"}
      bgcolor={"#052973"}
      className="textured-background-Solution"
    >
      <Typography
        fontSize={"60px"}
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
          width: "200px",
          fontSize: "18px",
          fontWeight: "bold",
          fontFamily: "Work Sans",
          p: 1.5,
        }}
      >
        SIGN UP Now
      </Button>
    </Stack>
  );
}

export default ReadytoBuild