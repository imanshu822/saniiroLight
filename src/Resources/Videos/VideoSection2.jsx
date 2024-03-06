import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../../utils/Button";
import EastIcon from "@mui/icons-material/East";
import Box from "../../assets/Box.svg";
import Boxes from "../../assets/Boxes.svg";
import Industry3 from "../../assets/Industry3.1.svg";
import { Link } from "react-router-dom";

const VideoSection2 = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Stack pt={10} gap={2}>
      <Stack alignItems={"center"} gap={2}>
        <Typography fontSize={"35px"} fontWeight={"bold"}>
          Conceptual Learning Series
        </Typography>
        <Typography p={"0px 435px"} textAlign={"Center"}>
          Need help understanding the jargon used in CRM?Watch this series of
          videos to get the hang of terminology and concepts in CRM.
        </Typography>
        <Link to={"/Resources/Videos/WatchMoreVideos"}>
          <Button
            onClick={handleClick}
            endIcon={<EastIcon />}
            sx={{
              border: "1px solid #F15B25",
              bgcolor: "transparent",
              color: "#F15B25",
              fontSize: "18px",
              fontWeight: "bold",
              p: "15px 25px",

              "&:hover": {
                backgroundColor: "transparent",
                color: "#F15B25",
                textDecoration: "underline",
              },
            }}
          >
            Watch More Videoes
          </Button>
        </Link>
      </Stack>
      <Stack alignItems={"center"}>
        <Stack width={"65%"} gap={"250px"} position={"relative"}>
          <img src={Box} alt="" style={{ width: "106px", height: "99px" }} />
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack justifyContent={"Center"}>
              <Typography fontSize={"12px"}>CRM FOR BEGINNERS</Typography>
              <Typography fontWeight={"bold"} textTransform={"uppercase"}>
                Sales Collaboration
              </Typography>
            </Stack>
            <img
              src={Boxes}
              alt=""
              style={{ width: "223px", height: "209px" }}
            />
          </Stack>
          <Stack
            alignItems={"center"}
            position={"absolute"}
            left={"6%"}
            top={"10%"}
          >
            <img src={Industry3} alt="" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VideoSection2;
