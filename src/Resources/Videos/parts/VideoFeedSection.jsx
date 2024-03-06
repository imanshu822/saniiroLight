import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import VideoCard from "./VideoCard";
import videoImg from "../../../assets/Rectangle 4301.png";
import { Link } from "react-router-dom";

const VideoCategories = [
  { id: 1, category: "Industries" },
  { id: 2, category: "Security" },
  { id: 3, category: "Services" },
  { id: 4, category: "Platform" },
  { id: 5, category: "Global Presence" },
  { id: 6, category: "Partners" },
  { id: 7, category: "Why Zoho?" },
];

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

const VideoFeedSection = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filtered videos based on the selected category
  const filteredVideos = selectedCategory
    ? videos.filter((video) => video.catogery.includes(selectedCategory))
    : videos;

  return (
    <Stack
      marginTop={"40px"}
      marginBottom={"40px"}
      width={"1420px"}
      direction={"row"}
      justifyContent={"center"}
      gap={4}
    >
      <Stack width={"400px"} display={"sticky"}>
        {/* Category Sidebar */}
        <Stack marginLeft={"20%"} marginTop={"20px"}>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "21px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#34A853",
            }}
          >
            CRM FOR BEGINNERS
          </Typography>
          <hr
            style={{
              width: "70%",
              border: "1px solid #34A853",
              marginTop: "3px",
              marginBottom: "30px",
            }}
          />
          <Stack
            direction={"column"}
            justifyContent={"center"}
            paddingLeft={"70px"}
            gap={3}
          >
            {VideoCategories.map((category) => (
              <Typography
                key={category.id}
                onClick={() => handleCategoryClick(category.category)}
                style={{
                  cursor: "pointer",
                  color:
                    selectedCategory === category.category
                      ? "#34A853"
                      : "inherit",
                }}
              >
                {category.category}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Stack>
      {/* Video Display Section */}
      <Stack width={"1020px"} direction={"column"}>
        <Stack padding={"10px 30px "}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "25px",
                fontWeight: 700,
                lineHeight: "37px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#000000",
              }}
            >
              CRM for Beginners
            </Typography>
            <Stack width={"250px"} height={"40px"} marginBottom={"10px"}>
              <input
                type="text"
                placeholder="Search Videos"
                style={{ height: "40px", width: "80%" }}
              />
            </Stack>
          </Stack>
          <hr
            style={{
              width: "100%",
              border: "1px solid #34A853",
              marginTop: "3px",
              marginBottom: "20px",
            }}
          />
          {/* Display filtered videos or no videos found message */}
          {filteredVideos.length > 0 ? (
            <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
              {filteredVideos.map((video) => (
                <Link
                  onClick={handleClick}
                  key={video.id}
                  to={`/Resources/Videos/WatchMoreVideos/PlayVideo/${video.id}`} // Corrected link generation
                  style={{ textDecoration: "none" }} // Ensure proper styling for Link
                >
                  <VideoCard
                    key={video.id}
                    img={video.src}
                    title={video.title}
                    description={video.discription}
                    duration={video.duration}
                  />
                </Link>
              ))}
            </Stack>
          ) : (
            <Typography variant="body1">No videos found.</Typography>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VideoFeedSection;
