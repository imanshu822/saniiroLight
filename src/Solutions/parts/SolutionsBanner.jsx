import { Stack, Typography } from "@mui/material";
import React from "react";
import "./Solution.css";
import Button from "../../utils/Button";
const SolutionsBanner = () => {
  return (
    <Stack
      margin={"0 auto"}
      width={{
        xs: "100%",
        lg: "80%",
      }}
      direction={{
        xs: "column",
        lg: "row",
      }}
      gap={5}
      alignItems={"Center"}
      pt={{
        xs: 1,
        lg: 0,
      }}
    >
      <Stack
        alignItems={{
          xs: "center",
          lg: "flex-start",
        }}
        bgcolor={"#248F41"}
        width={{
          xs: "80%",
          lg: "63%",
        }}
        gap={2}
        padding={{
          xs: 3,
          sm: 4,
          md: 5,
          lg: 5,
        }}
        borderRadius={2}
      >
        <Typography
          textAlign={{
            xs: "center",
            lg: "left",
          }}
          textTransform={"uppercase"}
          fontSize={{
            xs: "50px",
            lg: "60px",
            xl: "70px",
          }}
          fontWeight={"900"}
          color={"transparent"}
          lineHeight={1}
          className="text-stroke"
        >
          BEST CRM PLATFORM
        </Typography>
        <Typography
          textAlign={{
            xs: "center",
            lg: "left",
          }}
          textTransform={"uppercase"}
          fontSize={{
            xs: "50px",
            lg: "60px",
            xl: "70px",
          }}
          color={"white"}
          fontWeight={900}
          lineHeight={1}
          letterSpacing={"0.01em"}
        >
          FOR COMPANIES OF ALL SIZES AND INDUSTRIES
        </Typography>
        <Button
          sx={{
            width: "200px",
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: "Work Sans",
            p: {
              xs: "7px 15px",
              lg: "10px 20px",
            },
          }}
        >
          Sign Up for Free
        </Button>
        <Typography
          fontSize={{
            xs: "16px",
            lg: "20px",
          }}
          textAlign={{
            xs: "center",
            lg: "left",
          }}
          color={"white"}
        >
          With a robust set of functionalities and a flexible system that allows
          deep customization, Zoho CRM allows people in different roles and
          businesses of different sizes and industries to manage their sales
          effectively and build meaningful customer relationships.
        </Typography>
      </Stack>
      <Stack
        width={{
          xs: "90%",
          sm: "80%",
          md: "87%",
          lg: "33%",
        }}
        padding={{
          xs: 2,
          md: 0,
        }}
        borderRadius={2}
        height={{
          xs: "300px",
          sm: "380px",
          md: "520px",
          lg: "650px",
        }}
        gap={2}
        textAlign={{
          xs: "center",
          lg: "left",
        }}
      >
        <img
          src="https://picsum.photos/seed/picsum/400/400"
          width={"100%"}
          height={"100%"}
          alt=""
          style={{ borderRadius: "10px" }}
        />
      </Stack>
    </Stack>
  );
};

export default SolutionsBanner;
