import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import CompanyImg from "../assets/c36347c59a42b5602f35e77ae7519878.png";

const JoinBusinesses = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        margin: "151px auto",
        width: "100%",
        maxWidth: "1060px",
        height: "375px",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          textTransform: "uppercase",
          margin: "42px auto",
          width: "100%",
          maxWidth: "170px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          Join 250,000+ other businesses
        </Typography>
        <Button
          sx={{
            position: "absolute",
            top: "105px",
            border: "1px solid #F97316",
            background: "#F97316",
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "13px",
            textAlign: "center",
            padding: "13px 16px",
            borderRadius: "5px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "white",
              color: "#F97316",
            },
          }}
        >
          START FREE TRIAL
        </Button>
      </Stack>
      <Stack>
        <img
          style={{
            height: "auto", // Auto adjust height
            width: "100%", // Full width
            maxWidth: "1060px", // Limit maximum width
          }}
          alt="company-logo"
          src={CompanyImg}
        />
      </Stack>
    </Stack>
  );
};

export default JoinBusinesses;
