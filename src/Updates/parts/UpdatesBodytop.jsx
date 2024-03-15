import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const FeqBodytop = () => {
  return (
    <>
      <Stack
        width={{
          xl: "1200px",
          xs: "95%",
        }}
        margin={"0 auto"}
      >
        <Typography
          sx={{
            margin: "30px auto",
            maxWidth: "1200px",
            fontFamily: "Work Sans",
            fontSize: "9px",
            fontWeight: 400,
            lineHeight: "9px",
            letterSpacing: "0em",
            textAlign: "left",
            marginBottom: "20px",
          }}
        >
          CRM {`>`} SOLUTIONS {`>`} REAL ESTATE CRM
        </Typography>
        <hr
          style={{
            width: "95%",
            margin: "10px auto",
            border: "1px solid #34A853",
          }}
        />
      </Stack>
    </>
  );
};

export default FeqBodytop;
