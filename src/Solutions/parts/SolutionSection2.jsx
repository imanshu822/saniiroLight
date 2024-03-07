import React from "react";
import { Stack, Typography } from "@mui/material";
import arrowIcon from "../../assets/arrowIcon.svg";
import solutionsection3 from "../../assets/solutionsection3.svg";
import DotGreen from "../../assets/DotGreen.svg";

const SolutionSection2 = () => {
  const lists = Array.from({ length: 11 }, () => ({ title: "Automotive CRM" }));
  const lists2 = Array.from({ length: 3 }, () => ({ title: "Automotive CRM" }));

  return (
    <Stack
      mt={10}
      p={"30px 0"}
      alignItems={"center"}
      bgcolor={"#052973"}
      className="textured-background"
    >
      <Stack width={"80%"} gap={5} alignItems={"center"} zIndex={111}>
        <Stack gap={2}>
          <Typography
            color={"white"}
            fontSize={{
              xs: "25px",
              md: "30px",
              lg: "40px",
            }}
            textAlign={"center"}
          >
            Deliver excellent customer
          </Typography>
          <Typography
            lineHeight={1}
            color={"#FA7241"}
            fontSize={{
              xs: "25px",
              md: "30px",
              lg: "40px",
            }}
            textAlign={"center"}
          >
            Experiences Across Industries
          </Typography>
          <Typography
            color={"white"}
            textAlign={"center"}
            fontSize={{
              xs: "18px",
              md: "21px",
              lg: "25px",
            }}
          >
            Every industry is unique, with different customer expectations,
            unique business processes, distinct pieces of customer information
            to work with, and varying security and compliance requirements. By
            blending powerful features with in-depth customization, Zoho CRM
            helps businesses across all industries engage their customers
            meaningfully and optimize their sales operations, resulting in
            positive customer experiences and better revenue growth
            opportunities for every business.
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          gap={2}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {lists.map((d, index) => (
            <Stack
              key={index}
              p={{
                xs: "2px 8px",
                md: "5px 10px",
                lg: "7px 16px",
              }}
              bgcolor={"#248F41"}
              border={"1px solid white"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"40px"}
              gap={1}
            >
              <Typography
                color={"white"}
                fontWeight={"bold"}
                fontSize={{
                  xs: "8px",
                  sm: "10px",
                  md: "18px",
                  lg: "22px",
                }}
              >
                {d.title}
              </Typography>
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                width={{
                  xs: "30px",
                  lg: "50px",
                }}
                height={{
                  xs: "30px",
                  lg: "50px",
                }}
                bgcolor={"white"}
                borderRadius={"50%"}
              >
                <img
                  src={arrowIcon}
                  alt=""
                  style={{ width: "50%", height: "50%" }}
                />
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack>
          <img
            src={solutionsection3}
            alt=""
            width={"100%"}
            height={"100%"}
            style={{ opacity: "0.2" }}
          />
          <Stack
            borderRadius={2}
            sx={{
              backgroundImage: `url(${DotGreen})`,
              bgcolor: "#248F41",
            }}
            direction={{ xs: "column", lg: "row" }}
            gap={{
              xs: 2,
              lg: 3,
            }}
          >
            <Stack
              margin={"0 auto"}
              gap={2}
              width={{ xs: "95%", lg: "50%" }}
              p={{ xs: 1, lg: 3 }}
              alignItems={{ xs: "center", lg: "flex-start" }}
            >
              <Stack alignSelf={"center"}>
                <Typography
                  fontSize={{ xs: "30px", lg: "40px" }}
                  color={"white"}
                >
                  The Perfect Tool For
                </Typography>
                <Typography
                  fontSize={{ xs: "30px", lg: "40px" }}
                  color={"white"}
                  fontWeight={900}
                >
                  Your Sales Teams
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  color={"white"}
                  fontSize={{
                    xs: "16px",
                    sm: "18px",
                    md: "20px",
                    lg: "22px",
                  }}
                  textAlign={{ xs: "center", sm: "center", lg: "left" }}
                >
                  Are you a sales rep who loves interacting with new prospects
                  and navigating the challenges of a tough deal? Or are you a
                  leader who likes to ensure your team is running like a
                  well-oiled machine with the right forecasts, targets, and a
                  healthy pipeline? Zoho CRM offers all the necessary tools for
                  you to excel at building relationships, closing deals, and
                  growing revenue for your business.
                </Typography>
              </Stack>
              <Stack
                paddingRight={"10px"}
                direction={"row"}
                gap={2}
                flexWrap={"wrap"}
                justifyContent={"center"}
              >
                {lists2.map((d, index) => (
                  <Stack
                    key={index}
                    p={{ xs: "2px 8px", md: "5px 10px", lg: "7px 16px" }}
                    bgcolor={"#248F41"}
                    border={"1px solid white"}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={"40px"}
                    gap={1}
                  >
                    <Typography
                      color={"white"}
                      fontWeight={"bold"}
                      fontSize={{
                        xs: "8px",
                        sm: "10px",
                        md: "18px",
                        lg: "22px",
                      }}
                    >
                      {d.title}
                    </Typography>
                    <Stack
                      alignItems={"center"}
                      justifyContent={"center"}
                      width={{ xs: "30px", lg: "50px" }}
                      height={{ xs: "30px", lg: "50px" }}
                      bgcolor={"white"}
                      borderRadius={"50%"}
                    >
                      <img
                        src={arrowIcon}
                        alt=""
                        style={{ width: "50%", height: "50%" }}
                      />
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
            <Stack
              alignSelf={"center"}
              width={{ xs: "100%", sm: "90%", md: "80%", lg: "50%" }}
              height={{ lg: "100%" }}
            >
              <Stack
                width={"100%"}
                pb={{
                  xs: 0,
                  sm: 2,
                  md: 3,
                  lg: 0,
                }}
                pr={{
                  xs: 0,
                  sm: 2,
                  md: 3,
                  lg: 0,
                }}
              >
                <img
                  src="https://picsum.photos/200/300?grayscale"
                  alt=""
                  style={{ width: "100%", height: "50%", borderRadius: "10px" }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SolutionSection2;
