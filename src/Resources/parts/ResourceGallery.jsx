import * as React from "react";
import { Box, Stack } from "@mui/material";
import blogPageSS from "../../assets/blogPageSS.png";
import videoPageSS from "../../assets/videoPageSS.png";

const ResourceGallery = () => {
  return (
    <>
      {/* <Box
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
            {" "}
            <Box
              sx={{
                width: "calc((100% - 20px) * 9 / 12)",
                height: {
                  xs: "150px",
                  md: "300px",
                },
                backgroundColor: "white",

                overflow: "hidden",
                position: "relative",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                  cursor: "pointer",
                },
              }}
            >
              <img
                src={blogPageSS}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "calc((100% - 20px) * 3 / 12)", // span 3 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>
          </Stack>

          <Stack direction={"row"} gap={2}>
            <Box
              sx={{
                width: "calc((100% - 20px) * 3 / 12)", // span 3 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>

            <Box
              sx={{
                width: "calc((100% - 20px) * 9 / 12)", // span 9 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>
          </Stack>

          <Stack direction={"row"} gap={2}>
            <Box
              sx={{
                width: "calc((100% - 20px) * 4 / 12)", // span 4 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>

            <Box
              sx={{
                width: "calc((100% - 20px) * 4 / 12)", // span 4 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>

            <Box
              sx={{
                width: "calc((100% - 20px) * 4 / 12)", // span 4 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <Box
              sx={{
                width: "calc((100% - 20px) * 9 / 12)", // span 9 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>

            <Box
              sx={{
                width: "calc((100% - 20px) * 3 / 12)", // span 3 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>
          </Stack>
        </Stack>
      </Box> */}

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
            {" "}
            <Box
              sx={{
                width: "calc((100% - 20px) * 9 / 12)", // span 9 out of 12
                height: "200px",
                backgroundColor: "white",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                  cursor: "pointer",
                },
              }}
            >
              <img
                src={blogPageSS}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "calc((100% - 20px) * 3 / 12)", // span 3 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>
          </Stack>

          <Stack direction={"row"} gap={2}>
            <Box
              sx={{
                width: "calc((100% - 20px) * 3 / 12)", // span 3 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>

            <Box
              sx={{
                width: "calc((100% - 20px) * 9 / 12)", // span 9 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>
          </Stack>

          <Stack direction={"row"} gap={2}>
            <Box
              sx={{
                width: "calc((100% - 20px) * 4 / 12)", // span 4 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>

            <Box
              sx={{
                width: "calc((100% - 20px) * 4 / 12)", // span 4 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>

            <Box
              sx={{
                width: "calc((100% - 20px) * 4 / 12)", // span 4 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <Box
              sx={{
                width: "calc((100% - 20px) * 9 / 12)", // span 9 out of 12
                height: "300px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            ></Box>

            <Box
              sx={{
                width: "calc((100% - 20px) * 3 / 12)", // span 3 out of 12
                height: "300px",
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
