import { Stack, Typography } from "@mui/material";
import React from "react";

const UserContent = ({ content }) => {
  return (
    <>
      <Stack gap={2}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "25px",
            fontWeight: 500,
            lineHeight: "27px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          {content.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "25px",
            letterSpacing: "0em",
            textAlign: "left",
            opacity: "0.7",
          }}
        >
          {content.description}
        </Typography>
      </Stack>
    </>
  );
};

export default UserContent;
