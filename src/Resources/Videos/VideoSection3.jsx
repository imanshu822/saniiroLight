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
      <Stack
        width={{
          lg: "88%",
          md: "80%",
          sm: "90%",
          xs: "95%",
        }}
        gap={{
          lg: 4,
          md: 3,
          sm: 2,
          xs: 1,
        }}
      >
        <Stack alignItems={"center"} gap={1}>
          <Typography
            fontSize={{
              lg: "35px",
              md: "30px",
              sm: "25px",
              xs: "20px",
            }}
            fontWeight={"bold"}
          >
            How to videos
          </Typography>
          <Typography
            width={{
              lg: "60%",
              md: "80%",
              sm: "90%",
              xs: "95%",
            }}
            textAlign={"Center"}
            fontSize={{
              lg: "20px",
              md: "18px",
              sm: "16px",
              xs: "14px",
            }}
          >
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
          gap={{
            lg: 4,
            md: 3,
            xs: 2,
          }}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {lists.map((d) => (
            <Stack
              width={{
                lg: "30%",
                md: "45%",
                sm: "95%",
                xs: "95%",
              }}
              gap={2}
            >
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
                    fontSize: {
                      lg: "14px",
                      md: "12px",
                      sm: "10px",
                      xs: "8px",
                    },
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
                    fontSize: {
                      lg: "14px",
                      md: "12px",
                      sm: "10px",
                      xs: "8px",
                    },
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
                <Typography
                  fontSize={{
                    lg: "20px",
                    md: "18px",
                    sm: "16px",
                    xs: "14px",
                  }}
                  fontWeight={"bold"}
                  pl={1}
                >
                  {d.title}
                </Typography>
                <Button
                  endIcon={<EastIcon />}
                  sx={{
                    border: "1px solid #F15B25",
                    bgcolor: "transparent",
                    color: "#F15B25",
                    fontSize: {
                      lg: "16px",
                      md: "14px",
                      sm: "12px",
                      xs: "10px",
                    },
                    fontWeight: "bold",
                    p: {
                      lg: "3px 10px",
                      md: "3px 10px",
                      sm: "3px 10px",
                      xs: "3px 10px",
                    },
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
                width: {
                  lg: "270px",
                  md: "250px",
                  sm: "230px",
                  xs: "200px",
                },
                border: "1px solid #F15B25",
                bgcolor: "transparent",
                color: "#F15B25",
                fontSize: {
                  lg: "18px",
                  md: "16px",
                  sm: "14px",
                  xs: "12px",
                },
                fontWeight: "bold",
                p: {
                  lg: "15px 25px",
                  md: "12px 22px",
                  sm: "10px 20px",
                  xs: "8px 18px",
                },
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
