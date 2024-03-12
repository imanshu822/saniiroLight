import { Stack, Typography } from "@mui/material";
import React from "react";
import IndustryLogo1 from "../../assets/IndustryLogo1.svg";
import LeftBracket from "../../assets/Leftbracket.jsx.svg";
import RightBracket from "../../assets/Rightbracket.svg";
import FeaturesBysize from "./FeaturesBysize";
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
    <>
      {/* for desktop view  */}
      <Stack
        // display={{
        //   xs: "none",
        //   lg: "flex",
        // }}
        bgcolor={"#F8F8F8"}
        width={"100%"}
        height={"fit-content"}
        alignItems={"center"}
      >
        <Stack
          position={{ xl: "absolute", xs: "none" }}
          bgcolor={"#052973"}
          width={{ xl: "85%", xs: "95%" }}
          top={"19.7%"}
          height={"auto"}
          p={"20px 0 40px 0 "}
          gap={5}
          borderRadius={2}
          alignItems={"center"}
        >
          <Stack>
            <Typography
              fontSize={{
                xs: "16px",
                sm: "19px",
                md: "26px",
                xl: "40px",
              }}
              fontWeight={"bold"}
              color={"#FFC849"}
              textAlign={"center"}
              p={{
                xs: "0 10px",
                sm: "0 15px",
                md: "0 20px",
                xl: "0 78px",
              }}
            >
              Saniiro CRM has been featured across multiple Gartner Magic
              Quadrants since 2011
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            gap={5}
            width={{ xs: "95%" }}
            justifyContent={{ xs: "center" }}
          >
            {lists.map((d) => (
              <Stack alignItems={"center"}>
                <Stack direction={"row"} alignItems={"Center"} gap={2}>
                  <img
                    src={d.left}
                    alt=""
                    style={{
                      width: {
                        xs: "20px",
                        sm: "25px",
                        xl: "30px",
                      },
                      height: {
                        xs: "20px",
                        sm: "25px",
                        md: "30px",
                        xl: "85px",
                      },
                    }}
                  />
                  <Typography
                    color={"white"}
                    textAlign={"center"}
                    fontSize={{
                      xs: "8px",
                      sm: "10px",
                      md: "12px",
                      xl:"18px"
                    }}
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

      {/* for mobile view  */}
      {/* <Stack
        display={{
          xs: "flex",
          lg: "none",
        }}
      >
        <Stack
          width={"95%"}
          margin={"0 auto"}
          bgcolor={"#052973"}
          height={"auto"}
          p={"20px 0 40px 0 "}
          gap={5}
          borderRadius={2}
          alignItems={"center"}
        >
          <Stack>
            <Typography
              fontSize={{
                xs: "16px",
                sm: "19px",
                md: "26px",
              }}
              fontWeight={"bold"}
              color={"#FFC849"}
              textAlign={"center"}
              p={{
                xs: "0 10px",
                sm: "0 15px",
                md: "0 20px",
              }}
            >
              Saniiro CRM has been featured across multiple Gartner Magic
              Quadrants since 2011
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            gap={5}
            width={"95%"}
            justifyContent={"center"}
          >
            {lists.map((d) => (
              <Stack alignItems={"center"}>
                <Stack direction={"row"} alignItems={"Center"} gap={0}>
                  <img
                    src={d.left}
                    alt=""
                    style={{
                      width: {
                        xs: "20px",
                        sm: "25px",
                        md: "30px",
                      },
                      height: {
                        xs: "20px",
                        sm: "25px",
                        md: "30px",
                      },
                    }}
                  />
                  <Typography
                    color={"white"}
                    textAlign={"center"}
                    fontSize={{
                      xs: "8px",
                      sm: "10px",
                      md: "12px",
                    }}
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

        <Stack>
          <FeaturesBysize />
        </Stack>
      </Stack> */}
    </>
  );
};

export default Industries2;
