import { FormControl, Stack, Typography } from "@mui/material";
import React from "react";
import { Form } from "react-router-dom";
import Button from "../../utils/Button";
const CommentForm = () => {
  return (
    <>
      <Stack width={"100%"}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "25px",
            fontWeight: 600,
            lineHeight: "43px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Comments
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "35px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Leave a Reply
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
            opacity: "0.5",
          }}
        >
          Your email address will not be published.Required fields are marked*
        </Typography>
        <Stack
          width={{
            xs: "100%",
            lg: "789px",
          }}
          height={{
            xs: "100%",
            lg: "800px",
          }}
        >
          <FormControl>
            <Stack gap={2}>
              <Stack gap={"5px"}>
                <label
                  style={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  htmlFor="commaents"
                >
                  COMMENTS*
                </label>
                <input
                  style={{
                    height: "200px",
                    border: "1px solid gray",
                  }}
                  type="text"
                />
              </Stack>
              <Stack gap={"5px"}>
                <label
                  style={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  htmlFor="name"
                >
                  NAME*
                </label>
                <input
                  style={{
                    border: "1px solid gray",
                    width: "100%",
                    height: "43px",
                  }}
                  type="text"
                />
              </Stack>

              <Stack gap={"5px"}>
                <label
                  style={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  htmlFor="email"
                >
                  EMAIL*
                </label>
                <input
                  style={{
                    border: "1px solid gray",
                    width: "100%",
                    height: "43px",
                  }}
                  type="text"
                />
              </Stack>
              <Stack gap={"5px"}>
                <label
                  style={{
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "28px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  htmlFor="website"
                >
                  WEBSITE*
                </label>
                <input
                  style={{
                    border: "1px solid gray",
                    width: "100%",
                    height: "43px",
                  }}
                  type="text"
                />
              </Stack>
            </Stack>

            <Typography
              margin={"20px 0px"}
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "28px",
                letterSpacing: "0em",
                textAlign: "left",
                opacity: "0.5",
              }}
            >
              By submitting this form, you agree to the processing of personal
              data according to our Privacy Policy.
            </Typography>
            <Stack
              alignItems={{
                xs: "center",
                lg: "flex-start",
              }}
            >
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  width: {
                    xs: "140px",
                    lg: "187px",
                  },
                  height: {
                    xs: "35px",
                    lg: "46px",
                  },
                  padding: "7px 16px",
                  gap: "10px",
                  backgroundColor: "#F15B25",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: {
                      xs: "12px",
                      lg: "16px",
                    },
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Post Comment
                </Typography>
              </Stack>
            </Stack>
          </FormControl>
        </Stack>
      </Stack>
    </>
  );
};

export default CommentForm;
