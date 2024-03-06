import { Typography } from "@mui/material";
import React from "react";

const FeqBodytop = () => {
  return (
    <>
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
          width: "1200px",
          margin: "10px auto",
          border: "1px solid #34A853",
        }}
      />
    </>
  );
};

export default FeqBodytop;
