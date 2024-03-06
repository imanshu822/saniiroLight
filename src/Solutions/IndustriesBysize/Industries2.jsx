import { Stack, Typography } from '@mui/material'
import React from 'react'
import IndustryLogo1 from "../../assets/IndustryLogo1.svg";
import LeftBracket from "../../assets/Leftbracket.jsx.svg";
import RightBracket from "../../assets/Rightbracket.svg";
import FeaturesBysize from './FeaturesBysize';
const Industries2 = () => {
    const lists = [
      {
        left: LeftBracket,
        title:
          "A Visionary in Gartner Magic Quadrant <br/> for Sales Force Automation 2022",
        right: RightBracket,
      },
      {
        left: LeftBracket,
        title:
          "A Visionary in Gartner Magic Quadrant <br/> for Sales Force Automation 2022",
        right: RightBracket,
      },
    ];
  return (
    <Stack
      bgcolor={"#F8F8F8"}
      width={"100%"}
      height={"fit-content"}
      alignItems={"center"}
    >
      <Stack
        position={"absolute"}
        bgcolor={"#052973"}
        width={"85%"}
        top={"23%"}
        height={"auto"}
        p={"20px 0 40px 0 "}
        gap={5}
        borderRadius={2}
        alignItems={"center"}
      >
        <Stack>
          <Typography
            fontSize={"40px"}
            fontWeight={"bold"}
            color={"#FFC849"}
            textAlign={"center"}
            p={"0 78px"}
          >
            Saniiro CRM has been featured across multiple Gartner Magic
            Quadrants since 2011
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={5}>
          {lists.map((d) => (
            <Stack alignItems={"center"}>
              <Stack direction={"row"} alignItems={"Center"} gap={2}>
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
      <FeaturesBysize />
    </Stack>
  );
}

export default Industries2