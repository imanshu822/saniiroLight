import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const WelcomeToSaniiro = () => {
  return (
    <Stack alignItems={"Center"}>
      <Stack
        bgcolor={"#248F41"}
        width={"90%"}
        alignItems={"center"}
        p={{
          xs: "16px 0",
          sm: "20px 0",
          md: "24px 0",
          lg: "32px 0",
        }}
        gap={2}
      >
        <Typography
          fontWeight={"bold"}
          fontSize={{
            xs: "20px",
            sm: "24px",
            lg: "32px",
          }}
          color={"white"}
          textAlign={"center"}
        >
          What is Saniiro?
        </Typography>
        <Typography
          fontSize={{
            xs: "14px",
            md: "18px",
          }}
          color={"#FFFFFF"}
          textAlign={"center"}
          width={{
            xs: "90%",
            md: "80%",
          }}
        >
          Saniiro Business Cloud People, delivers amazing workforce experiences,
          so that customers can become great employer brands, increasing
          engagement, performance, and retention, while making it easier to
          acquire top talent.
        </Typography>
        <Stack
          bgcolor={"white"}
          width={{
            xs: "80%",
            md: "70%",
          }}
          p={"30px 0"}
          mt={2}
          borderRadius={1}
          alignItems={{
            xs: "center",
            md: "flex-start",
          }}
          direction={{
            xs: "column",
            md: "row",
          }}
        >
          <Stack
            alignItems={"center"}
            width={{
              xs: "80%",
              md: "33%",
            }}
            sx={{
              borderRight: {
                xs: "none",
                md: "3px solid #248F41",
              },
              borderBottom: {
                xs: "3px solid #248F41",
                md: "none",
              },
              padding: {
                xs: "20px 0",
                md: "0",
              },
            }}
          >
            <Typography
              fontSize={{
                xs: "25px",
                sm: "30px",
                md: "35px",
                lg: "45px",
              }}
              color={"#248F41"}
            >
              2800+
            </Typography>
            <Typography>Employees</Typography>
          </Stack>
          <Stack
            alignItems={"center"}
            width={{
              xs: "80%",
              md: "33%",
            }}
            sx={{
              borderRight: {
                xs: "none",
                md: "3px solid #248F41",
              },
              borderBottom: {
                xs: "3px solid #248F41",
                md: "none",
              },
              padding: {
                xs: "20px 0",
                md: "0",
              },
            }}
          >
            <Typography
              fontSize={{
                xs: "25px",
                sm: "30px",
                md: "35px",
                lg: "45px",
              }}
              color={"#248F41"}
            >
              5000+
            </Typography>
            <Typography>Partners</Typography>
          </Stack>

          <Stack
            alignItems={"center"}
            width={{
              xs: "80%",
              md: "33%",
            }}
            sx={{
              padding: {
                xs: "20px 0 20px",
                md: "0",
              },
            }}
          >
            <Typography
              fontSize={{
                xs: "25px",
                sm: "30px",
                md: "35px",
                lg: "45px",
              }}
              color={"#248F41"}
            >
              12 Million
            </Typography>
            <Typography>Users</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WelcomeToSaniiro;
