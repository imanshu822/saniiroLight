import React from "react";
import { Stack, Typography } from "@mui/material";
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
      gap={3}
      p={3}
    >
      {lists.map((item, index) => (
        <Stack
          key={index}
          justifyContent="center"
          alignItems="left"
          border="1px solid black"
          bgcolor={item.bgcolor}
          width="12%"
          height="180px"
          borderRadius={2}
          p={2}
          gap={2}
        >
          <img src={BookImg} alt="Book" width={82} height={82} />
          <Typography fontSize="16px" fontWeight="bold" textAlign="left">
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
