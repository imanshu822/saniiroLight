import { Stack, Typography } from "@mui/material";
import React from "react";
import horizontalImg from "../../assets/HrUnion.png";
const Quote = () => {
  return (
    <Stack
      width={"100%"}
      margin={"0 auto"}
      sx={{
        backgroundColor: "#8AA3FF",
      }}
    >
      <Stack margin={"0 auto"} width={"1420px"} height={"420px"}>
        <Stack width={"80%"} margin={"40px auto"} gap={2} position={"relative"}>
          <Typography
            sx={{
              position: "absolute",
              top: "-100px",
              left: "80px",
              fontFamily: "Xanh Mono",
              fontSize: "350px",
              fontWeight: 200,
              lineHeight: "100px",
              letterSpacing: "-5.63em",
              textAlign: "left",
              transform: "rotate(-180deg)",
              color: "#052973",
            }}
          >
            {`‘‘`}
          </Typography>
          <Typography
            sx={{
              width: "90%",
              margin: "50px auto 10px",
              fontFamily: "Work Sans",
              fontSize: "30px",
              fontWeight: 500,
              lineHeight: "40px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Saniiro Business Cloud People, delivers amazing workforce
            experiences, so that customers can become great employer brands,
            increasing engagement, performance, and retention, while making it
            easier to acquire top talent.
          </Typography>
          <img src={horizontalImg} alt="horizontalImg" />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            marginRight={"40px"}
          >
            <Stack margin={"0 40px"}>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "22px",
                  fontWeight: 700,
                  lineHeight: "30px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Chester Hull
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "15px",
                  fontWeight: 500,
                  lineHeight: "20px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Founder/CEO at Prosound.
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: "86px",
                height: "36px",
                padding: "12px, 14px, 12px, 14px",
                backgroundColor: "#052973",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "12px",
                  fontWeight: 700,
                  lineHeight: "12px",
                  letterSpacing: "0em",
                  textAlign: "center",

                  color: "#FFFFFF",
                }}
              >
                View all
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Quote;
