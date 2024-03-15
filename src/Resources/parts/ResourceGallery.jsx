import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import becomeApartner from "../../assets/icons/becomeApartner.png";
import career from "../../assets/icons/jobs.png";
import blogPageSS from "../../assets/icons/blogs.png";
import caseStudy from "../../assets/icons/caseStudy.png";
import testimonials from "../../assets/icons/testimonials.png";
import videos from "../../assets/icons/videos.png";
import faq from "../../assets/icons/faq.png";

const ResourceGallery = () => {
  return (
    <>
      <Box
        sx={{
          width: {
            xs: "95%",
            xl: "1230px",
          },
          margin: "20px auto",
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: "100%",
          }}
        >
          <Stack direction={"row"} gap={2}>
            <Box
              position={"relative"}
              style={{
                backgroundImage: `url(${becomeApartner})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#222",

                transition: "all 1s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#999",
                  backgroundPosition: "center",
                  boxShadow: "0 0 4px #fff",
                },
              }}
              alt="become a partner page"
              sx={{
                width: "calc((100% - 20px) * 12 / 12)",
                height: {
                  xs: "150px",
                  md: "230px",
                },
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <Typography
                position={"absolute"}
                left={0}
                right={0}
                ml={"auto"}
                mr={"auto"}
                color={"red"}
                width={"fit-content"}
              ></Typography>
            </Box>

            <Box
              border={"1px solid white"}
              style={{
                backgroundImage: `url(${career})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#222",

                transition: "all 1s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#999",
                  backgroundPosition: "center",
                  boxShadow: "0 0 4px #fff",
                },
              }}
              alt="become a partner page"
              sx={{
                width: "calc((100% - 20px) * 9 / 12)", // span 9 out of 12
                height: {
                  xs: "150px",
                  md: "230px",
                },
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <Box
              border={"1px solid white"}
              style={{
                backgroundImage: `url(${blogPageSS})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#222",

                transition: "all 1s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#999",
                  backgroundPosition: "center",
                  boxShadow: "0 0 4px #fff",
                },
              }}
              alt="become a partner page"
              sx={{
                width: "calc((100%) * 10/ 10)", // span 9 out of 12
                height: {
                  xs: "150px",
                  md: "230px",
                },
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>
          </Stack>

          <Stack direction={"row"} gap={2}>
            <Stack
              border={"1px solid white"}
              style={{
                backgroundImage: `url(${caseStudy})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#222",

                transition: "all 1s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#999",
                  backgroundPosition: "center",
                  boxShadow: "0 0 4px #fff",
                },
              }}
              alt="become a partner page"
              sx={{
                width: "calc((100% - 20px) * 4 / 10)", // span 4 out of 12
                height: {
                  xs: "150px",
                  md: "230px",
                },

                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Stack>

            <Box
              border={"1px solid white"}
              style={{
                backgroundImage: `url(${testimonials})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#222",

                transition: "all 1s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#999",
                  backgroundPosition: "center",
                  boxShadow: "0 0 4px #fff",
                },
              }}
              alt="become a partner page"
              sx={{
                width: "calc((100% - 20px) * 6 / 10)", // span 4 out of 12
                height: {
                  xs: "150px",
                  md: "230px",
                },
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <Box
              border={"1px solid white"}
              style={{
                backgroundImage: `url(${videos})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#222",
                transition: "all 1s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#999",
                  backgroundPosition: "center",
                  boxShadow: "0 0 4px #fff",
                },
              }}
              alt="become a partner page"
              sx={{
                width: "calc((100%) * 10/ 10)",
                height: {
                  xs: "150px",
                  md: "230px",
                },
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <Box
              border={"1px solid white"}
              style={{
                backgroundImage: `url(${faq})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#222",

                transition: "all 1s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#999",
                  backgroundPosition: "center",
                  boxShadow: "0 0 4px #fff",
                },
              }}
              alt="become a partner page"
              sx={{
                width: "calc((100%) * 6/ 10)",
                height: {
                  xs: "150px",
                  md: "230px",
                },
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>
            <Box
              border={"1px solid white"}
              style={{
                backgroundImage: `url(${faq})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#222",

                transition: "all 1s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#999",
                  backgroundPosition: "center",
                  boxShadow: "0 0 4px #fff",
                },
              }}
              alt="become a partner page"
              sx={{
                width: "calc((100%) * 4/ 10)",
                height: {
                  xs: "150px",
                  md: "230px",
                },
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default ResourceGallery;
