import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import amzonImg from "../../../assets/amazon.png";
// import { Translate } from "@mui/icons-material";
import profileImg from "../../../assets/icons/Rectangle 1178.png";
const CustomerFeedback = () => {
  return (
    <Stack width={"100%"}>
      <Stack
        margin={"0 auto"}
        width={"1240px"}
        boxShadow={"0px 3px 8px #00000029"} // Adjust the shadow values as needed
        height={"450px"}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          position={"relative"}
        >
          <Box margin={"65px 0 0 85px"}>
            {" "}
            <img
              src={amzonImg}
              alt="Amazon Logo"
              width={"188px"}
              height={"57px"}
            />
          </Box>

          <Typography
            sx={{
              fontFamily: "Xanh Mono",
              fontSize: "221px",
              fontWeight: 400,
              lineHeight: "297px",
              letterSpacing: "-0.05em",
              textAlign: "left",
              position: "absolute",
              right: "40px",
              top: "-100px",
              transform: "rotate(180deg)",
            }}
          >
            “
          </Typography>
        </Stack>
        <Stack
          direction={"column"}
          alignItems={"start"}
          width={"968px"}
          margin={"auto auto"}
          justifyContent={"center"}
          gap={4}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "30px",
              fontWeight: 500,
              lineHeight: "40px",
              letterSpacing: "0em",
              textAlign: "left",
              opacity: "0.5",
            }}
          >
            Saniiro Business Cloud People, delivers amazing workforce
            experiences, so that customers can become great employer brands,
            increasing engagement, performance, and retention, while making it
            easier to acquire top talent.
          </Typography>
          <Stack direction={"row"} justifyContent={"start"}>
            <Stack direction={"row"} gap={2}>
              <img
                src={profileImg}
                alt="profileImg"
                width={"91px"}
                height={"91px"}
              />
              <Stack direction={"column"}>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "30px",
                    fontWeight: 700,
                    lineHeight: "40px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    opacity: "0.5",
                  }}
                >
                  Chester Hull
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "30px",
                    fontWeight: 700,
                    lineHeight: "40px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    opacity: "0.5",
                  }}
                >
                  Founder/CEO at Prosound.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        marginTop={"90px"}
        marginBottom={"20px"}
        direction={"row"}
        justifyContent={"center"}
        gap={2}
      >
        <Box
          sx={{
            width: "100px",
            height: "12px",
            top: "7238px",
            left: "605px",
            borderRadius: "24px",
            backgroundColor: "#D9D9D9",
          }}
        ></Box>
        <Box
          sx={{
            width: "12px",
            height: "12px",
            borderRadius: "24px",
            backgroundColor: "#F15B25",
          }}
        ></Box>
        <Box
          sx={{
            width: "100px",
            height: "12px",
            top: "7238px",
            left: "605px",
            borderRadius: "24px",
            backgroundColor: "#D9D9D9",
          }}
        ></Box>
      </Stack>
    </Stack>
  );
};

export default CustomerFeedback;
