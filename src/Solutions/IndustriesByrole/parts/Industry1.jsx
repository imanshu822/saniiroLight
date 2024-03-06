

import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NavLight from "../../../Navbar/NavLight";
import TickMark from "../../../assets/TickMark.svg";
import Button from "../../../utils/Button";
import SectionImage from "../../../assets/SectionImage1.png"
const Industry1 = () => {

  return (
    <>
      <Stack height={"auto"} position={"relative"} direction={"row"} pt={8}>
        <Stack width={"50%"} p={"20px 0px 40px 100px"} gap={4}>
          <Stack direction={"row"}>
            <Typography
              textTransform={"uppercase"}
              fontSize={"43px"}
              color={"#052973"}
              fontWeight={900}
              lineHeight={1}
              letterSpacing={"0.05em"}
            >
              Sales reps trust Zoho CRM to close more deals in{" "}
              <span
                className="text-stroke"
                style={{
                  textTransform: "uppercase",
                  fontSize: "70px",
                  fontWeight: "bold",
                  letterSpacing: 1,
                  color: "transparent",
                  lineHeight: 1,
                }}
              >
                less time
              </span>
            </Typography>
          </Stack>
          <Typography fontSize={"18px"} color={"black"}>
            Your sales reps work on the ground-level, interacting with prospects
            and potentials to bring in new deals. Naturally, they have a lot to
            manage on their hands. Emails, meetings, phone calls, tasks for the
            day, sales targets, and analytics are just a few things a sales rep
            has to juggle throughout the day.
          </Typography>

          <Button
            sx={{
              width: "200px",
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Work Sans",
              p: 1.5,
            }}
          >
            SIGN UP FOR FREE
          </Button>
        </Stack>
        <Stack width={"50%"}>
          <img src={SectionImage} alt="" style={{width:"600px", height:"500px"}} />
        </Stack>
      </Stack>
    </>
  );
};

export default Industry1;