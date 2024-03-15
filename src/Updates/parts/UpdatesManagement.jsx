import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import utilityUpdateImg from "../../assets/UtilityUpdate.png";
import grayTickImg from "../../assets/GrayTick.png";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DescriptionIcon from "@mui/icons-material/Description";
import { Link } from "react-router-dom";
import { PopulerPost, RecentArticle } from "./data";

const Updates = [
  {
    id: 1,
    image: utilityUpdateImg,
    title: "Utility Update",
    date: "08 May 2023",
    updatesFeatures: [
      "Utility Update",
      "Master Update",
      "Inventory Section",
      "Voucher Entry",
      "General Update",
    ],
  },
  {
    id: 2,
    image: grayTickImg,
    title: "Master Update",
    date: "08 May 2023",
    updatesFeatures: [
      "Utility Update",
      "Master Update",
      "Inventory Section",
      "Voucher Entry",
      "General Update",
    ],
  },
];

const UpdatesManagement = () => {
  const [activities, setActivities] = useState(
    Array(Updates.length).fill(false)
  );

  const handleClick = (index) => {
    const updatedActivities = [...activities];
    updatedActivities[index] = !updatedActivities[index];
    setActivities(updatedActivities);
  };

  return (
    <Stack
      width={{
        xs: "95%",
        xl: "1240px",
      }}
      gap={4}
      margin={"50px auto"}
      direction={{
        xs: "column",
        lg: "row",
      }}
    >
      <Stack
        width={{
          xs: "95%",
          lg: "60%",
        }}
        margin={"0 auto"}
      >
        {Updates.map((update, index) => (
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
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={4}
                opacity={1}
                sx={{
                  "&:hover": {
                    textDecoration: "none",
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  width={{
                    xs: "50px",
                    lg: "67px",
                  }}
                  height={{
                    xs: "50px",
                    lg: "67px",
                  }}
                  component="img"
                  src={update.image}
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
                    {update.title}
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
                    {update.date}
                  </Typography>
                </Stack>
              </Stack>
              <ArrowDropDownIcon
                // className="navlink-link-downarrow"
                sx={{
                  fontSize: 25,
                  transition: "all 0.3s ease-in",
                  color: "#F15B25",
                  width: "60px",
                  height: "60px",
                  transform: activities[index] ? "rotate(180deg)" : "rotate(0)",
                }}
              />
            </Stack>
            {activities[index] && (
              <>
                {update.updatesFeatures.map((feature, i) => (
                  <Link
                    key={i}
                    to={`/Updates/${update.id}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      gap={3}
                      margin={{
                        xs: "10px 50px",
                        lg: "20px 100px",
                      }}
                      sx={{
                        "&:hover": {
                          textDecoration: "none",
                          color: "#F15B25",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          width: "40%",
                        }}
                      >
                        {feature}
                      </Typography>
                      <ArrowForwardIosIcon width={"60%"} />
                    </Stack>
                  </Link>
                ))}
              </>
            )}
          </Stack>
        ))}
      </Stack>
      <Stack
        width={{
          xs: "95%",
          lg: "40%",
        }}
        margin={"0 auto"}
        paddingLeft={{
          xs: "0",
          lg: "80px",
        }}
        borderLeft={{
          xs: "none",
          lg: "1px solid gray",
        }}
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

export default UpdatesManagement;
