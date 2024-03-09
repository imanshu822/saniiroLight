import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../../utils/Button";
import EastIcon from "@mui/icons-material/East";

const Industry2 = () => {
  const lists = [
    {
      bgcolor: "#FBEBEA",
      title:
        "Insurance company monitors the quality of their sales and support calls in Saniiro CRM",
    },
    {
      bgcolor: "#EEFFF3",
      title: "Law firm uses Zoho CRM to effectively manage and assign cases",
    },
    {
      bgcolor: "#F0F3FF",
      title:
        "Automated insurance proposal process and stage-based tracking in Zoho CRM",
    },
    {
      bgcolor: "#EAF8FB",
      title: "Customer mapping in Zoho CRM for logistics and distribution",
    },
    {
      bgcolor: "#FBF4EA",
      title: "Hotel chain uses Zoho CRM to view comprehensive guest profiles",
    },
  ];
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      gap={3}
      p={"45px 10px"}
    >
      {lists.map((d) => (
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          border={"1px solid black"}
          bgcolor={d.bgcolor}
          width={{
            xs: "100%",
            sm: "80%",
            md: "28%",
            lg: "28%",
          }}
          height={{
            xs: "280px",
            sm: "300px",
            md: "320px",
            lg: "350px",
          }}
          borderRadius={2}
          p={2}
          gap={2}
        >
          <Typography
            fontSize={{
              xs: "14px",
              sm: "16px",
              md: "18px",
              lg: "20px",
              xl: "22px",
            }}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            {d.title}
          </Typography>
          <Button
            endIcon={<EastIcon />}
            sx={{
              bgcolor: "transparent",
              color:
                d.id === "4" ? "#DF7E00" : d.id === "6" ? "white" : "#0079FF",
              fontSize: "16px",
              fontWeight: "bold",
              pl: "0px",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#0079FF",
                textDecoration: "underline",
              },
            }}
          >
            Read More
          </Button>
        </Stack>
      ))}
    </Stack>
  );
};

export default Industry2;
