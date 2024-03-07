import { Stack, Typography } from "@mui/material";
import React from "react";
import arrowIcon from "../../assets/arrowIcon.svg";
import colors from "../../assets/colors.png";
const SolutionSection3 = () => {
  const lists2 = [
    {
      title: "Automotive CRM",
    },
    {
      title: "Automotive CRM",
    },
  ];
  return (
    <Stack alignItems={"center"}>
      <Stack width={"75%"} gap={3} pt={7}>
        <Stack>
          <Typography
            textAlign={"center"}
            fontSize={{
              xs: "25px",
              sm: "30px",
              lg: "35px",
            }}
          >
            A cornerstone for
          </Typography>
          <Typography
            textAlign={"center"}
            color={"#4DB267"}
            fontWeight={"bold"}
            fontSize={{
              xs: "25px",
              sm: "30px",
              md: "35px",
              lg: "40px",
            }}
            lineHeight={1}
          >
            Businesses of All Sizes
          </Typography>
        </Stack>
        <Typography
          textAlign={"center"}
          fontSize={{
            xs: "12px",
            sm: "14px",
            md: "16px",
            lg: "20px",
          }}
        >
          Whether you're an SMB looking to optimize your sales processes by
          moving away from legacy tools and spreadsheets or a global enterprise
          looking to scale your sales operations across the globe, Zoho CRM is
          the right fit for you. Zoho CRM offers the right combination of
          functional feature sets, intuitive user experience, scalability, and
          ease of use to help every business connect with customers at scale to
          build everlasting relationships.
        </Typography>
        <Stack alignItems={"center"}>
          <Stack
            direction={"row"}
            gap={2}
            flexWrap={"wrap"}
            alignSelf={"center"}
            justifyContent={"center"}
          >
            {lists2.map((d, index) => (
              <Stack
                key={index}
                p={{ xs: "2px 8px", md: "5px 10px", lg: "7px 16px" }}
                bgcolor={"#248F41"}
                border={"1px solid white"}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"40px"}
                gap={1}
              >
                <Typography
                  color={"white"}
                  fontWeight={"bold"}
                  fontSize={{
                    xs: "8px",
                    sm: "10px",
                    md: "18px",
                    lg: "22px",
                  }}
                >
                  {d.title}
                </Typography>
                <Stack
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={{ xs: "30px", lg: "50px" }}
                  height={{ xs: "30px", lg: "50px" }}
                  bgcolor={"white"}
                  borderRadius={"50%"}
                >
                  <img
                    src={arrowIcon}
                    alt=""
                    style={{ width: "50%", height: "50%" }}
                  />
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack sx={{ opacity: "0.7" }}>
          <img src={colors} alt="" />
        </Stack>
      </Stack>
    </Stack>
  );
};
export default SolutionSection3;
