import { Box, Button, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ title, description, opening, location, department }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Stack
      sx={{
        boxShadow: "0px 0px 10px 0px #0000001F",
        borderRadius: "8px",
      }}
    >
      <Stack
        gap={2}
        marginLeft={{
          xs: "20px",
          sm: "20px",
          md: "20px",
          lg: "44px",
        }}
        sx={{
          marginTop: "20px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: {
                xs: "24px",
                lg: "40px",
              },
              fontWeight: 500,
              lineHeight: "43px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#000000",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              textAlign: {
                xs: "justify",
              },
              fontFamily: "Work Sans",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: "0em",
              marginRight: {
                xs: "20px",
                sm: "20px",
                md: "20px",
                lg: "37px",
              },
              paddingRight: {
                xs: "20px",
                sm: "20px",
                md: "20px",
                lg: "80px",
              },
              paddingBottom: "20px",
              borderBottom: "1px solid #0000001F",
            }}
          >
            {description}
          </Typography>
        </Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"end"}
          gap={2}
          sx={{
            marginRight: {
              xs: "20px",
              sm: "20px",
              md: "20px",
              lg: "37px",
            },
            paddingBottom: "20px",
            borderBottom: "1px solid #0000001F",
          }}
        >
          <Stack gap={2}>
            <Stack direction={"row"} gap={2}>
              <AddIcon
                sx={{
                  width: "13px",
                  height: "13px",
                  margin: "auto auto",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "19px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  margin: "auto auto",
                }}
              >
                {opening}
              </Typography>
            </Stack>
            <Stack direction={"row"} gap={2}>
              <LocationOnIcon
                sx={{
                  width: "13px",
                  height: "13px",
                  margin: "auto auto",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "19px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  margin: "auto auto",
                }}
              >
                {location}
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction={"row"}
            gap={2}
            sx={{
              marginRight: {
                xs: "20px",
                sm: "20px",
                md: "20px",
                lg: "80px",
              },
            }}
          >
            <AddIcon
              sx={{
                width: "13px",
                height: "13px",
                margin: "auto auto",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "19px",
                letterSpacing: "0em",
                textAlign: "left",
                margin: "auto auto",
              }}
            >
              {department}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"end"}
          gap={2}
          sx={{
            marginRight: {
              xs: "20px",
              sm: "20px",
              md: "20px",
              lg: "70px",
            },
            mb: "20px",
          }}
        >
          <Button
            sx={{
              width: {
                xs: "120px",
                lg: "160px",
              },
              height: "46px",
              padding: {
                xs: "7px 10px 7px 10px",
                lg: "14px 20px 14px 20px",
              },
              borderRadius: "4px",
              gap: "10px",
              textAlign: "center",
              color: "#F15B25",
              border: "1px solid #F15B25",
              "&:hover": {
                backgroundColor: "#F15B25",
                color: "#FFFFFF",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: {
                  xs: "14px",
                  lg: "19px",
                },
                fontWeight: 600,
                lineHeight: "18px",
                letterSpacing: "0em",
                textDecoration: "underline",
                textTransform: "capitalize",
              }}
            >
              Apply Now
            </Typography>
          </Button>
          <Link to="/Resources/Career/job-details" onClick={handleClick}>
            <Button
              sx={{
                width: {
                  xs: "130px",
                  lg: "160px",
                },
                height: "46px",
                padding: "14px 20px 14px 20px",
                borderRadius: "4px",
                gap: "10px",
                backgroundColor: "#052973",
                color: "#FFFFFF",
                border: "1px solid #052973",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  color: "#052973",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: {
                    xs: "14px",
                    lg: "19px",
                  },
                  fontWeight: 600,
                  lineHeight: "18px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                More Details
              </Typography>
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default JobCard;
