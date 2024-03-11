import React from "react";
import FeedbackCard from "./FeedbackCard";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Review from "./data";

const column2 = Review.slice(3, 6);

const RecommendedSection = () => {
  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Stack width={"90%"} margin={"40px auto 70px"}>
        <Stack>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "27px",
              letterSpacing: "0em",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Recommended case studies
          </Typography>
        </Stack>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          gap={3}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {column2.map((review) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/Resources/CaseStudy/${review.id}`}
              key={review.id}
              onClick={handleClick} // Use onClick instead of onCllick
            >
              <FeedbackCard {...review} />
            </Link>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default RecommendedSection;
