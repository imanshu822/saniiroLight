import { Stack, Typography } from '@mui/material';
import React from 'react'
import Button from '../../utils/Button';
import { Link } from 'react-router-dom';
import icon5section from "../../assets/icon5section.png"
import icon6section from "../../assets/icon6section.png";

const Bluescreen = () => {
  return (
    <Stack alignItems={"center"} p={"100px 0"}>
      <Stack
        bgcolor={"#052973"}
        width={"85%"}
        borderRadius={1}
        p={"30px 24px"}
        direction={"row"}
        gap={4}
        zIndex={1}
      >
        <Stack width={"50%"} bgcolor={"white"} borderRadius={1}>
          <Stack p={"20px 25px"} gap={2} alignItems={"center"}>
            <Button
              sx={{
                borderRadius: 1,
                fontWeight: "bold",
                bgcolor: "#052864",
                color: "white",
                width: "150px",
                height: "25px",
                fontSize: "12px",
              }}
            >
              EXISTING CUSTOMER
            </Button>
            <Stack>
              <img
                src={icon5section}
                alt=""
                style={{ width: "170px", height: "170px" }}
              />
            </Stack>
            <Typography fontSize={"35px"} p={"0 100px"} textAlign={"center"}>
              Visit our help forum for technical support
            </Typography>
            <Typography p={"0 60px"} textAlign={"center"}>
              Experiencing issues with a product you're already using? Browse
              through our help docs, videos, and tutorials, or engage with
              experts from the Zoho support community.
            </Typography>
            <Stack alignItems={"center"}>
              <Button
                sx={{
                  bgcolor: "transparent",
                  color: "#0079FF",
                  fontSize: "16px",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#0079FF",
                    textDecoration: "underline",
                  },
                }}
              >
                TAKE ME TO THE HELP CENTER
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack width={"50%"} bgcolor={"white"} borderRadius={1}>
          <Stack p={"20px 25px"} gap={2} alignItems={"center"}>
            <Button
              sx={{
                borderRadius: 1,
                fontWeight: "bold",
                bgcolor: "#052864",
                color: "white",
                width: "150px",
                height: "25px",
                fontSize: "12px",
              }}
            >
              EXISTING CUSTOMER
            </Button>
            <Stack direction={"row"} gap={5}>
              <Stack gap={2}>
                <Stack alignItems={"center"}>
                  <img
                    src={icon6section}
                    alt=""
                    style={{ width: "170px", height: "170px" }}
                  />
                </Stack>
                <Typography
                  fontSize={"35px"}
                  p={"0 100px"}
                  textAlign={"center"}
                >
                  If you can't find what you're looking for...
                </Typography>
                <Typography p={"0 80px"} textAlign={"center"}>
                  Raise a ticket and detail what you need help with. Our support
                  team will be happy to lend a helping hand!
                </Typography>
                <Stack alignItems={"center"}>
                  <Button
                    sx={{
                      bgcolor: "transparent",
                      color: "#0079FF",
                      fontSize: "16px",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#0079FF",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    SUBMIT A REQUEST
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Bluescreen