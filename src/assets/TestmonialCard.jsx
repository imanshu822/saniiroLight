import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import OfficerImg from "../../assets/Rectangle1178.png";
import profileImg from "../../assets/Group 62904.png";
import fedXImg from "../../assets/image 167.png";

const FeedbackCard = ({ video, name, position, feedback }) => {
  return (
    <Stack
      width={"350px"}
      borderRadius={"6.98px"}
      border={"1px solid gray"}
      backgroundColor={"white"}
    >
      <Stack padding={"20px"}>
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          alignItems={"left"}
          paddingX={"29px"}
          paddingY={"29px"}
        >
          <Box
            component="img"
            sx={{
              width: "101.52px",
              height: "32.71px",
              marginBottom: "15px",
            }}
            alt="Fedx Image"
            src={fedXImg}
          />
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "25px",
              letterSpacing: "-0.02em",
              textAlign: "left",
              marginBottom: "10px",
            }}
          >
            {feedback}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "14px",
              letterSpacing: "-0.02em",
              textAlign: "left",
              marginBottom: "10px",
              color: "#006FCE",
            }}
          >
            Read More
            <ArrowRightAltIcon
              sx={{
                fontSize: "14px",
                marginLeft: "5px",
              }}
            />
          </Typography>
          {video === "false" && (
            <Stack direction={"row"} gap={1} alignItems="center">
              <Box
                component="img"
                sx={{
                  width: "41.21px",
                  height: "41.21px",
                  borderRadius: "50%",
                }}
                alt="Profile Image"
                src={profileImg}
              />
              <Stack>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: "18px",
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                    marginBottom: "5px",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "10px",
                    fontWeight: 400,
                    lineHeight: "10px",
                    letterSpacing: "-0.02em",
                    opacity: "60%",
                    textAlign: "left",
                  }}
                >
                  {position}
                </Typography>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Stack>
      <Stack>
        {video === "true" && (
          <Stack position={"relative"}>
            <Box position={"absolute"} top={"10px"} right={"10px"}>
              <PlayCircleIcon sx={{ color: "white" }} />
            </Box>
            <Stack position={"absolute"} bottom={"20px"} left={"20px"}>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "18px",
                  letterSpacing: "-0.02em",
                  textAlign: "left",
                  marginBottom: "5px",
                }}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "10px",
                  fontWeight: 400,
                  lineHeight: "10px",
                  letterSpacing: "-0.02em",
                  textAlign: "left",
                }}
              >
                {position}
              </Typography>
            </Stack>
            <Box
              component="img"
              sx={{
                height: "100%",
                width: "100%",
              }}
              alt="The house from the offer."
              src={OfficerImg}
            />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default FeedbackCard;
