import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import BookImg from "./assets/MaskGroup.png";

const Industry2 = () => {
  const lists = [
    { bgcolor: "#FEE9E9", title: "Application Name" },
    { bgcolor: "#FEF8E9", title: "Application Name" },
    { bgcolor: "#E9FEFB", title: "Application Name" },
    { bgcolor: "#E9F1FE", title: "Application Name" },
    { bgcolor: "#F0E9FE", title: "Application Name" },
    { bgcolor: "#E9FEEB", title: "Application Name" },
  ];

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={{
        xs: 1,
        sm: 2,
        md: 3,
      }}
      p={3}
    >
      {lists.map((item, index) => (
        <Stack
          p={2}
          key={index}
          justifyContent="center"
          alignItems="left"
          border="1px solid black"
          bgcolor={item.bgcolor}
          width={{
            xs: "32%",
            sm: "36%",
            md: "25%",
            lg: "12%",
          }}
          height={{
            xs: "110px",
            sm: "110px",
            md: "110px",
            lg: "180px",
          }}
          borderRadius={2}
          gap={1}
        >
          <Box
            width={{
              xs: 50,
              sm: 60,
              md: 70,
              lg: 82,
            }}
          >
            <img src={BookImg} alt="Book" width={"100%"} height={"100%"} />
          </Box>
          <Typography
            fontSize={{
              xs: "12px",
              sm: "14px",
              md: "16px",
            }}
            fontWeight="bold"
            textAlign="left"
          >
            {item.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "13px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Work
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default Industry2;
