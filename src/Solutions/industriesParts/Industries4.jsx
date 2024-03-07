import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import IndustryLogo1 from "../../assets/IndustryLogo1.svg";
import LeftBracket from "../../assets/Leftbracket.jsx.svg";
import RightBracket from "../../assets/Rightbracket.svg";
const Industries4 = () => {
  const lists = [
    {
      src: IndustryLogo1,
      left: LeftBracket,
      title: "PCMag<br/>Winner of Business Choice <br/> Awards-CRM 2019",
      right: RightBracket,
    },
    {
      src: IndustryLogo1,
      left: LeftBracket,
      title: "PCMag<br/>Winner of Business Choice <br/> Awards-CRM 2019",
      right: RightBracket,
    },
    {
      src: IndustryLogo1,
      left: LeftBracket,
      title: "PCMag<br/>Winner of Business Choice <br/> Awards-CRM 2019",
      right: RightBracket,
    },
    {
      src: IndustryLogo1,
      left: LeftBracket,
      title: "PCMag<br/>Winner of Business Choice <br/> Awards-CRM 2019",
      right: RightBracket,
    },
  ];
  return (
    <Stack
      bgcolor={"#052973"}
      width={"100%"}
      gap={6}
      p={{
        xs: "40px 0",
        lg: "80px 0",
      }}
    >
      <Box>
        <Typography
          color={"white"}
          fontSize={{
            xs: "20px",
            sm: "24px",
            md: "28px",
            lg: "34px",
            xl: "40px",
          }}
          textAlign={"center"}
          fontWeight={"bold"}
          fontFamily={"Work Sans"}
        >
          Meet Saniiro CRM, <br /> the top-rated CRM software for the real
          estate business.
        </Typography>
      </Box>
      <Stack
        display={{
          xs: "none",
          md: "flex",
        }}
        gap={3}
        direction={"row"}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
      >
        {lists.map((d) => (
          <Stack alignItems={"center"}>
            <Stack>
              <img
                src={d.src}
                alt=""
                style={{ width: "130px", height: "130px" }}
              />
            </Stack>
            <Stack direction={"row"}>
              <img
                src={d.left}
                alt=""
                style={{ width: "28px", height: "85px" }}
              />
              <Typography
                color={"white"}
                textAlign={"center"}
                dangerouslySetInnerHTML={{ __html: d.title }}
              />
              <img
                src={d.right}
                alt=""
                style={{ width: "28px", height: "85px" }}
              />
            </Stack>
          </Stack>
        ))}
      </Stack>
      <Stack
        display={{
          xs: "flex",
          md: "none",
        }}
        gap={2}
        direction={"row"}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
      >
        {lists.map((d) => (
          <Stack alignItems={"center"}>
            <Stack width={"30%"}>
              <img src={d.src} alt="" width={"100%"} height={"100%"} />
            </Stack>
            <Stack direction={"row"} justifyContent={"center"}>
              <Stack width={"10%"}>
                <img
                  src={d.left}
                  alt=""
                  width={"100%"}
                  height={"100%"}

                  // style={{ width: "28px", height: "85px" }}
                />
              </Stack>
              <Typography
                color={"white"}
                textAlign={"center"}
                fontSize={"9px"}
                dangerouslySetInnerHTML={{ __html: d.title }}
              />
              <Stack width={"10%"}>
                <img
                  src={d.right}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  // style={{ width: "28px", height: "85px" }}
                />
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Industries4;
