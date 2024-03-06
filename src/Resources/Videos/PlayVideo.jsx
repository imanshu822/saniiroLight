import { Stack, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import Nav from "../../Navbar/Nav";
import VideoCard1 from "./parts/VideoCard1";
import videoImg from "../../assets/Rectangle 4301.png";
import Footer from "../../utils/Footer";
import { Link } from "react-router-dom";

const videos = [
  {
    id: 1,
    title: "Lead",
    src: videoImg,
    duration: "30 Min",
    catogery: ["Industries"],
    discription:
      "A can be defined as a raw prospect who might be interested in purchasing from you, but you don't know for sure, until you follow-up with them further.",
  },
  {
    id: 2,
    title: "Lead",
    src: videoImg,
    duration: "25 Min",
    catogery: ["Industries", "Partners", "Services", "Platform"],
    discription:
      "A can be defined as a raw prospect who might be interested in purchasing from you, but you don't know for sure, until you follow-up with them further.",
  },
  {
    id: 3,
    title: "Lead",
    src: videoImg,
    duration: "18 Min",
    catogery: ["Industries", "Security", "Services", "Platform"],
    discription:
      "A can be defined as a raw prospect who might be interested in purchasing from you, but you don't know for sure, until you follow-up with them further.",
  },
  {
    id: 4,
    title: "Lead",
    src: videoImg,
    duration: "22 Min",
    catogery: ["Industries", "Security", "Partners", "Platform"],
    discription:
      "A can be defined as a raw prospect who might be interested in purchasing from you, but you don't know for sure, until you follow-up with them further.",
  },
  {
    id: 5,
    title: "Lead",
    src: videoImg,
    duration: "30 Min",
    catogery: ["Industries", "Security", "Services", "Platform"],
    discription:
      "A can be defined as a raw prospect who might be interested in purchasing from you, but you don't know for sure, until you follow-up with them further.",
  },
  {
    id: 6,
    title: "Lead",
    src: videoImg,
    duration: "30 Min",
    catogery: ["Industries", "Security", "Services", "Platform"],
    discription:
      "A can be defined as a raw prospect who might be interested in purchasing from you, but you don't know for sure, until you follow-up with them further.",
  },
  {
    id: 7,
    title: "Lead",
    src: videoImg,
    duration: "30 Min",
    catogery: ["Industries", "Partners", "Services", "Platform"],
    discription:
      "A can be defined as a raw prospect who might be interested in purchasing from you, but you don't know for sure, until you follow-up with them further.",
  },
  {
    id: 8,
    title: "Lead",
    src: videoImg,
    duration: "30 Min",
    catogery: ["Industries", "Security", "Services", "Platform"],
    discription:
      "A can be defined as a raw prospect who might be interested in purchasing from you, but you don't know for sure, until you follow-up with them further.",
  },
  {
    id: 9,
    title: "Lead",
    src: videoImg,
    duration: "30 Min",
    catogery: ["Industries", "Partners", "Partners", "Platform"],
    discription:
      "A can be defined as a raw prospect who might be interested in purchasing from you, but you don't know for sure, until you follow-up with them further.",
  },
  {
    id: 10,
    title: "Lead",
    src: videoImg,
    duration: "30 Min",
    catogery: ["Industries", "Security", "Partners", "Platform"],
    discription:
      "A can be defined as a raw prospect who might be interested in purchasing from you, but you don't know for sure, until you follow-up with them further.",
  },
];

const PlayVideo = () => {
  return (
    <>
      <Nav />
      <Stack width={"1420px"} margin={"20px auto 50px"}>
        <Stack
          width={"1240px"}
          margin={"30px auto"}
          direction={"column"}
          gap={4}
        >
          <Stack direction={"row"} gap={2}>
            <Stack width={"60%"} height={"400px"} border={"1px solid gray"}>
              <ReactPlayer
                controls
                url="https://www.youtube.com/watch?v=SlhESAKF1Tk"
                width="100%"
                height="100%"
                // controls={true}
                playing
                light={true}
                sx={{ borderRadius: "10px" }}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
              ></ReactPlayer>
            </Stack>
            <Stack
              width={"40%"}
              height={"400px"}
              gap={3}
              sx={{ overflowY: "auto" }}
            >
              {videos.map((video) => (
                <Link
                  key={video.id}
                  to={`/Resources/Videos/WatchMoreVideos/PlayVideo/${video.id}`} // Corrected link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <VideoCard1
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    img={video.src}
                    title={video.title}
                    duration={video.duration}
                    discription={video.discription}
                  />
                </Link>
              ))}
            </Stack>
          </Stack>
          <Stack width={"60%"} gap={1}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "28px",
                fontWeight: 600,
                lineHeight: "30px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Lead
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              A "lead" can be defined as a raw prospect who might be interested
              in purchasing from you, but you don't know for sure, until you
              follow-up with them further.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default PlayVideo;
