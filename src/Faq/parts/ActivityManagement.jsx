import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import flesImg from "../../assets/files.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DescriptionIcon from "@mui/icons-material/Description";
import { Link } from "react-router-dom";
import { PopulerPost, RecentArticle } from "./data";

const FAQActivity = [
  { id: 1, title: "FAQs: Activities 1" },
  { id: 2, title: "FAQs: Activities 2" },
  { id: 3, title: "FAQs: Activities 3" },
];

const ActivityManagement = () => {
  const [activities, setActivities] = useState([
    { active: false, rotated: false },
    { active: false, rotated: false },
    { active: false, rotated: false },
  ]);

  const handleClick = (index) => {
    const updatedActivities = [...activities];
    updatedActivities[index].active = !updatedActivities[index].active;
    updatedActivities[index].rotated = !updatedActivities[index].rotated;
    setActivities(updatedActivities);
  };

  return (
    <Stack width={"1240px"} margin={"50px auto"} direction={"row"}>
      <Stack width={"60%"}>
        {FAQActivity.map((activity, index) => (
          <Stack
            key={index}
            onClick={() => handleClick(index)}
            borderBottom={"1px solid gray"}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              gap={2}
              padding={"10px 0px"}
            >
              <Stack direction={"row"} alignItems={"center"} gap={2}>
                <Box
                  width={"67px"}
                  height={"67px"}
                  component="img"
                  src={flesImg}
                  alt="Files image"
                />
                <Stack>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "25px",
                      fontWeight: 700,
                      lineHeight: "37px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    Activity Management {index + 1}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    5 Articles
                  </Typography>
                </Stack>
              </Stack>
              <ArrowBackIosIcon
                sx={{
                  paddingTop: "10px",
                  height: "50px",
                  width: "50px",
                  color: "#F15B25",
                  transform: activities[index].rotated
                    ? "rotate(90deg)"
                    : "rotate(270deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Stack>
            {activities[index].active && (
              <>
                {Array.from({ length: 3 }).map((_, i) => (
                  <Link
                    key={i}
                    to={`/Resources/faq/${activity.id}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <Stack direction={"row"} gap={3} margin={"10px 100px"}>
                      <Typography
                        sx={{
                          "&:hover": {
                            textDecoration: "none",
                            color: "#F15B25",
                          },
                        }}
                      >
                        {activity.title}
                      </Typography>
                      <ArrowForwardIosIcon />
                    </Stack>
                  </Link>
                ))}
              </>
            )}
          </Stack>
        ))}
      </Stack>
      <Stack
        width={"40%"}
        paddingLeft={"80px"}
        marginLeft={"40px"}
        borderLeft={"1px solid gray"}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "25px",
            fontWeight: 700,
            lineHeight: "37px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Popular Posts
        </Typography>
        <Stack>
          {PopulerPost.slice(0, 4).map((post, index) => (
            <Stack key={index} gap={1} marginTop="27px">
              <Stack direction="row" gap={1}>
                <DescriptionIcon />
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                  }}
                >
                  {post.title}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Typography
          sx={{
            marginTop: "40px",
            fontFamily: "Work Sans",
            fontSize: "25px",
            fontWeight: 700,
            lineHeight: "37px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Recent Articles
        </Typography>
        <Stack>
          {RecentArticle.slice(0, 4).map((post, index) => (
            <Stack key={index} gap={1} marginTop="27px">
              <Stack direction="row" gap={1}>
                <DescriptionIcon />
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                  }}
                >
                  {post.title}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ActivityManagement;
