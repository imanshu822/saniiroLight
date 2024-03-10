import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Line = () => {
  return (
    <>
      {/* <Stack direction={"row"} justifyContent={"center"} gap={2}>
        <Stack justifyContent={"center"}>
          <Stack
            alignItems={"center"}
            sx={{
              bgcolor: "black",
              content: "''",
              height: "1px",
              width: "300px",
            }}
          ></Stack>
        </Stack>
        <Typography fontSize={"30px"} fontWeight={"bold"}>
          Trusted by 250,000 businesses worldwide
        </Typography>
        <Stack justifyContent={"center"}>
          <Stack
            alignItems={"center"}
            sx={{
              bgcolor: "black",
              content: "''",
              height: "1px",
              width: "300px",
            }}
          ></Stack>
        </Stack>
      </Stack> */}

      <Stack width={"90%"} margin={"10px auto"}>
        <Stack direction={"row"} justifyContent={"center"} gap={2}>
          <Stack justifyContent={"center"}>
            <Stack
              alignItems={"center"}
              sx={{
                bgcolor: "black",
                content: "''",
                height: "1px",
                width: {
                  xs: "40px",
                  sm: "80px",
                  md: "150px",
                },
              }}
            ></Stack>
          </Stack>
          <Typography
            fontSize={{
              xs: "10px",
              sm: "12px",
              md: "16px",
            }}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Trusted by 250,000 businesses worldwide
          </Typography>
          <Stack justifyContent={"center"}>
            <Stack
              alignItems={"center"}
              sx={{
                bgcolor: "black",
                content: "''",
                height: "1px",
                width: {
                  xs: "40px",
                  sm: "80px",
                  md: "150px",
                },
              }}
            ></Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Line;
