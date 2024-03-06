import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import IndustryLogo1 from "../../assets/IndustryLogo1.svg"
import LeftBracket from "../../assets/Leftbracket.jsx.svg"
import RightBracket from "../../assets/Rightbracket.svg"
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
    <Stack bgcolor={"#052973"} width={"100%"} gap={6} p={"70px 0"}>
      <Box>
        <Typography
          color={"white"}
          fontSize={"30px"}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Meet Saniiro CRM, <br /> the top-rated CRM software for the real
          estate business.
        </Typography>
      </Box>
      <Stack direction={"row"} justifyContent={"space-evenly"}>
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
    </Stack>
  );
}

export default Industries4