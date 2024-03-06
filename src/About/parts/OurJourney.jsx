import { Stack, Typography } from "@mui/material";
import React from "react";
import problem from "../../assets/problem.svg";
import circleIcon from "../../assets/circleIcon.svg";
import circleIcon2 from "../../assets/circleIcon2.svg";

const OurJourney = () => {
  const lists = [
    {
      year: "2019",
      p: "12px 0 12px 109px",
      left: "8%",
    },
    {
      year: "2020",
      p: "12px 0 12px 210px",
      left: "15%",
    },
    {
      year: "2021",
      p: "12px 0 12px 315px",
      left: "22%",
    },
    {
      year: "2022",
      p: "12px 0 12px 415px",
      left: "29%",
    },
    {
      year: "2023",
      p: "12px 0 12px 515px",
      left: "36%",
    },
  ];
  return (
    <Stack gap={2}>
      <Typography
        pt={5}
        color={"black"}
        fontWeight={"bold"}
        fontSize={"40px"}
        textAlign={"center"}
      >
        Our journey{" "}
      </Typography>
      <Typography
        display={{
          xs: "none",
          lg: "block",
        }}
        color={"#F15B25"}
        fontWeight={"bold"}
        p={"10px 125px"}
      >
        Problem
      </Typography>
      <Stack bgcolor={"#285AC2"} borderTop={"5px solid #F15B25"}>
        <Stack
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
          direction={{
            xs: "column",
            lg: "row",
          }}
          margin={"0 auto"}
          width={{
            xs: "98%",
            lg: "80%",
          }}
          p={"50px 0"}
          position={"relative"}
        >
          <Stack
            sx={{
              display: {
                xs: "none",
                lg: "block",
              },
            }}
          >
            <img
              src={circleIcon}
              alt=""
              style={{ position: "absolute", top: "-3.5%", left: "10%" }}
            />
          </Stack>
          <img
            src={problem}
            alt=""
            style={{ width: "300px", height: "300px" }}
          />
          <Stack
            gap={2}
            color={"white"}
            padding={{
              xs: "0 30px",
              lg: "0 50px",
            }}
            justifyContent={"center"}
          >
            <Typography
              textAlign={{
                xs: "center",
                lg: "left",
              }}
              fontWeight={"bold"}
              sx={{
                fontSize: {
                  xs: "25px",
                  lg: "30px",
                },
              }}
            >
              Problem
            </Typography>
            <Typography
              textAlign={{
                xs: "center",
                md: "left",
              }}
            >
              We offer a range of financial management systems to help you get a
              better grip on your books. One of our most popular financial
              tracking software is our quotation management software which lets
              you create, track and submit quotes and invoices with ease.
              Saniiro kept its user interface very user friendly which allows
              anyone to use it without having any trouble. We also provide the
              best CMS software as well, which lets you seamlessly manage your
              web content to your liking.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap={4}>
        {lists.map((d) => (
          <Stack
            mt={2}
            bgcolor={"#EFEFEF"}
            borderTop={"2px solid #052973"}
            position={"relative"}
          >
            <img
              src={circleIcon2}
              alt=""
              style={{ position: "absolute", top: "-10px", left: `${d.left}` }}
            />
            <Typography
              color={"grey"}
              sx={{ position: "absolute", top: "-30px", left: `${d.left}` }}
            >
              {d.year}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default OurJourney;
