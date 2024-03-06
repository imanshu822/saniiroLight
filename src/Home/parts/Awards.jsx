import { Stack, Typography } from "@mui/material";
import React from "react";
import award1 from "../../assets/award1.svg";
import review from "../../assets/review1.svg";
const Awards = () => {
  return (
    <Stack alignItems={"center"} pb={6}>
      <Stack
        width={"90%"}
        sx={{
          flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}
        justifyContent={"center"}
        gap={3}
      >
        <Stack
          sx={{
            width: {
              xs: "100%",
              lg: "40%",
            },
          }}
          boxShadow={"1px 0px 2px 3px #F1F1F1"}
        >
          <Typography
            color={"grey"}
            fontSize={"20px"}
            fontWeight={"bold"}
            display={"flex"}
            justifyContent={"center"}
          >
            Awards
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
            <Stack
              sx={{
                width: {
                  xs: "30%",
                  md: "180px",
                },
                height: {
                  xs: "20%",
                  md: "110px",
                },
              }}
            >
              <img
                src={award1}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Stack
              sx={{
                width: {
                  xs: "30%",
                  md: "180px",
                },
                height: {
                  xs: "20%",
                  md: "110px",
                },
              }}
            >
              <img
                src={award1}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Stack
              sx={{
                width: {
                  xs: "30%",
                  md: "180px",
                },
                height: {
                  xs: "20%",
                  md: "110px",
                },
              }}
            >
              <img
                src={award1}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Stack
              sx={{
                width: {
                  xs: "30%",
                  md: "180px",
                },
                height: {
                  xs: "20%",
                  md: "110px",
                },
              }}
            >
              <img
                src={award1}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Stack
              sx={{
                width: {
                  xs: "30%",
                  md: "180px",
                },
                height: {
                  xs: "20%",
                  md: "110px",
                },
              }}
            >
              <img
                src={award1}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: {
              xs: "100%",
              lg: "40%",
            },
          }}
          boxShadow={"1px 0px 2px 3px #F1F1F1"}
        >
          <Typography
            color={"grey"}
            fontSize={"20px"}
            fontWeight={"bold"}
            display={"flex"}
            justifyContent={"center"}
          >
            Reviews
          </Typography>
          <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
            <Stack
              sx={{
                width: {
                  xs: "48%",
                  md: "220px",
                },
                height: {
                  xs: "20%",
                  md: "110px",
                },
              }}
            >
              <img
                src={review}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Stack
              sx={{
                width: {
                  xs: "48%",
                  md: "220px",
                },
                height: {
                  xs: "20%",
                  md: "110px",
                },
              }}
            >
              <img
                src={review}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Stack
              sx={{
                width: {
                  xs: "48%",
                  md: "220px",
                },
                height: {
                  xs: "20%",
                  md: "110px",
                },
              }}
            >
              <img
                src={review}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Stack
              sx={{
                width: {
                  xs: "48%",
                  md: "220px",
                },
                height: {
                  xs: "20%",
                  md: "110px",
                },
              }}
            >
              <img
                src={review}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Awards;
