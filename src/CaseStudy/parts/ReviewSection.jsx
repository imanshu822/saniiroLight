import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import FeedbackCard from "./FeedbackCard";

import EastSharpIcon from "@mui/icons-material/EastSharp";
import { Link } from "react-router-dom";
import Review from "./data";

const ReviewSection = () => {
  // Divide the Review array into three groups
  const column1 = Review.slice(0, 3);
  const column2 = Review.slice(3, 6);
  const column3 = Review.slice(6, 9);

  return (
    <Stack backgroundColor={"#052973"} height={"1844px"}>
      <Stack
        justifyContent={"center"}
        width={"1210px"}
        margin={"60px auto"}
        direction={"row"}
        gap={3}
      >
        <Stack width={"30%"} direction={"column"} gap={3}>
          {column1.map((review) => (
            <Link
              to={`/Resources/CaseStudy/${review.id}`}
              key={review.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <FeedbackCard {...review} />
            </Link>
          ))}
        </Stack>
        <Stack width={"30%"} direction={"column"} gap={3}>
          {column2.map((review) => (
            <Link
              to={`/Resources/CaseStudy/${review.id}`}
              key={review.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <FeedbackCard {...review} />
            </Link>
          ))}
        </Stack>
        <Stack width={"30%"} direction={"column"} gap={3}>
          {column3.map((review) => (
            <Link
              to={`/Resources/CaseStudy/${review.id}`}
              key={review.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <FeedbackCard {...review} />
            </Link>
          ))}
        </Stack>
      </Stack>
      {/* <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
        <EastSharpIcon
          sx={{
            transform: "rotate(180deg)",
            color: "#FFFFFF",
            "&:hover": {
              color: "gray",
              cursor: "pointer",
            },
          }}
        />
        <Box
          sx={{
            width: "Hug (147px)",
            height: "Hug (42px)",
            padding: "12px 29px 12px 29px",
            borderRadius: "4px",
            gap: "20px",
            backgroundColor: "#FFFFFF",
            margin: "0px 40px 0px 40px",
            border: "1px solid white",
            "&:hover": {
              backgroundColor: "#F15B25",
              border: "1px solid white",
              color: "#FFFFFF",
              cursor: "pointer",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "19px",
              fontWeight: 600,
              lineHeight: "18px",
              letterSpacing: "0em",
              textAlign: "center",
            }}
          >
            View all
          </Typography>
        </Box>

        <EastSharpIcon
          sx={{
            color: "#FFFFFF",
            "&:hover": {
              color: "gray",
              cursor: "pointer",
            },
          }}
        />
      </Stack> */}
      <Stack>
        <Stack
          marginTop={"80px"}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "35px",
                fontWeight: 700,
                lineHeight: "46px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Share your experience with us
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              We love to hear from you and we are always looking to improve our
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "20px",
              padding: "20px 54px 20px 54px",
              gap: "10px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "19px",
                fontWeight: 600,
                lineHeight: "18px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#000000",
              }}
            >
              Share your Story
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ReviewSection;
