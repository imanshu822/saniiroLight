import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Button from "../../utils/Button";
import section2 from "../../assets/section2.png";
import LogosDesign from "../../assets/LogosDesign.png";
import Slider from "./Slider";

const RequestDemo = () => {
  return (
    <Stack
      alignItems={"center"}
      pt={10}
      gap={2}
      sx={{
        margin: {
          xs: "7px",
          sm: "15px",
          lg: "0px",
        },
        paddingTop: {
          xs: "0px",
          sm: "10px",
          lg: 10,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "20px", sm: "30px", md: "45px" },
          width: { xs: "240px", sm: "360px", md: "642px" },
        }}
        color={"#052973"}
        fontWeight={"bold"}
        textAlign={"center"}
        lineHeight={1}
        fontFamily={"Work Sans"}
      >
        Deliver exceptional employee experiences
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "18px", md: "22px" },
          width: { xs: "270px", sm: "360px", md: "700px", lg: "800px" },
        }}
        textAlign={"center"}
        pt={2}
        fontFamily={"Work Sans"}
      >
        The world of work is changing rapidly and so should your HR practices.
        Zoho People is a cloud-based HR software crafted to nurture employees,
        quickly adapt to changes, and make HR management agile and effective.
        Simplify your HR operations, retain talent, and build a high-performing
        workforce while putting employee experience first.
      </Typography>
      <Stack direction={"row"} gap={2}>
        <Button
          sx={{
            fontSize: {
              xs: "10px",
              sm: "12px",
              md: "18px",
            },

            fontWeight: "bold",
            fontFamily: "Work Sans",
            p: 1.5,
          }}
        >
          SIGN UP FOR FREE
        </Button>
        <Button
          sx={{
            fontSize: {
              xs: "10px",
              sm: "12px",
              md: "18px",
            },
            bgcolor: "white",
            color: "black",
            border: "1px solid black",

            fontWeight: "bold",
            fontFamily: "Work Sans",
            p: "0 20px",
          }}
        >
          REQUEST DEMO
        </Button>
      </Stack>
      <Stack>
        <Box
          margin={"0 auto"}
          sx={{
            width: {
              xs: "200px",
              sm: "330px ",
              md: "600px",
              lg: "1018px",
            },
          }}
        >
          <img src={section2} style={{ width: "100%" }} />
        </Box>
        <Box
          margin={"0 auto"}
          sx={{
            width: {
              xs: "200px",
              sm: "330px ",
              md: "600px",
              lg: "1018px",
            },
          }}
          position={"relative"}
        >
          <img src={LogosDesign} style={{ width: "100%" }} />
          <Slider />
        </Box>
      </Stack>
    </Stack>
  );
};

export default RequestDemo;
