import { Stack, Typography } from "@mui/material";
import React from "react";
import VideoThumbnail from "../../assets/videoThumbnail.png";
import Button from "../../utils/Button";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
const VideoSection3 = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };
  const lists = [
    {
      id: "1",
      src: VideoThumbnail,
      qty: "5 Videos",
      title: "Automation",
      time: "30 Mins",
    },
    {
      id: "2",
      src: VideoThumbnail,
      qty: "5 Videos",
      title: "Automation",
      time: "30 Mins",
    },
    {
      id: "3",
      src: VideoThumbnail,
      qty: "5 Videos",
      title: "Automation",
      time: "30 Mins",
    },
    {
      id: "4",
      src: VideoThumbnail,
      qty: "5 Videos",
      title: "Automation",
      time: "30 Mins",
    },
    {
      id: "5",
      src: VideoThumbnail,
      qty: "5 Videos",
      title: "Automation",
      time: "30 Mins",
    },
    {
      id: "6",
      src: VideoThumbnail,
      qty: "5 Videos",
      title: "Automation",
      time: "30 Mins",
    },
    {
      id: "7",
      src: VideoThumbnail,
      qty: "5 Videos",
      title: "Automation",
      time: "30 Mins",
    },
    {
      id: "8",
      src: VideoThumbnail,
      qty: "5 Videos",
      title: "Automation",
      time: "30 Mins",
    },
    {
      id: "9",
      src: VideoThumbnail,
      qty: "5 Videos",
      title: "Automation",
      time: "30 Mins",
    },
  ];
  return (
    <Stack alignItems={"Center"} pt={10}>
      <Stack width={"70%"} gap={5}>
        <Stack alignItems={"center"} gap={1}>
          <Typography fontSize={"35px"} fontWeight={"bold"}>
            How to videos
          </Typography>
          <Typography p={"0px 220px"} textAlign={"Center"} fontSize={"18px"}>
            Watch these videos to learn the significance of different features
            and how to configure them.
          </Typography>
        </Stack>
        <Stack
          sx={{
            content: "''",
            height: "1px",
            width: "100%",
            bgcolor: "lightgrey",
          }}
        ></Stack>
        <Stack
          direction={"row"}
          gap={4}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {lists.map((d) => (
            <Stack width={"30%"} height={"205px"} gap={2}>
              <Stack position={"relative"}>
                <img src={d.src} alt="" />
                <Button
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    borderRadius: 1,
                    border: "1px solid white",
                    bgcolor: "black",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "bold",
                    p: "3px 10px",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {d.qty}
                </Button>
                <Button
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    borderRadius: 1,
                    border: "1px solid white",
                    bgcolor: "black",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "bold",
                    p: "3px 10px",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {d.time}
                </Button>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography fontWeight={"bold"}>{d.title}</Typography>
                <Button
                  endIcon={<EastIcon />}
                  sx={{
                    border: "1px solid #F15B25",
                    bgcolor: "transparent",
                    color: "#F15B25",
                    fontSize: "16px",
                    fontWeight: "bold",
                    p: "3px 10px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#F15B25",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Explore More
                </Button>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack alignItems={"Center"} p={10}>
          <Link to={"/Resources/Videos/WatchMoreVideos"}>
            {" "}
            <Button
              onClick={handleClick}
              endIcon={<EastIcon />}
              sx={{
                width: "270px",
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
              Watch All videos
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VideoSection3;
