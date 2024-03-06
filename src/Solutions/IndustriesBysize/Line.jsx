import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Line = () => {
  return (
    <Stack direction={"row"} justifyContent={"center"} gap={2}>
      <Stack justifyContent={"center"}>
        <Stack
          alignItems={"center"}
          sx={{ bgcolor: "black", content: "''", height: "1px", width: "300px" }}
        ></Stack>
      </Stack>
      <Typography fontSize={"30px"} fontWeight={"bold"}>
        Trusted by 250,000 businesses worldwide
      </Typography>
      <Stack justifyContent={"center"}>
        <Stack
          alignItems={"center"}
          sx={{ bgcolor: "black", content: "''", height: "1px", width: "300px" }}
        ></Stack>
      </Stack>
    </Stack>
  );
}

export default Line