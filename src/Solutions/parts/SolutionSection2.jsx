import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import arrowIcon from "../../assets/arrowIcon.svg"
import solutionsection3 from "../../assets/solutionsection3.svg"
import DotGreen from "../../assets/DotGreen.svg";
const SolutionSection2 = () => {
    const lists = [
      {
        title: "Automotive CRM",
      },
      {
        title: "Automotive CRM",
      },
      {
        title: "Automotive CRM",
      },
      {
        title: "Automotive CRM",
      },
      {
        title: "Automotive CRM",
      },
      {
        title: "Automotive CRM",
      },
      {
        title: "Automotive CRM",
      },
      {
        title: "Automotive CRM",
      },
      {
        title: "Automotive CRM",
      },
      {
        title: "Automotive CRM",
      },
      {
        title: "Automotive CRM",
      },
    ];
    const lists2 = [
      {
        title: "afpsdjfsjgifug eu t8ag 7na8tya89 ",
      },
      {
        title: "Automotive CRM",
      },
      {
        title: "Automotive CRM",
      },
    ];
  return (
    <Stack
      mt={10}
      p={"30px 0"}
      alignItems={"center"}
      bgcolor={"#052973"}
      // sx={{
      //   backgroundImage: `url(${SolutionSection})`,
      //   backgroundSize: "cover",
      // }}
    >
      <Stack width={"80%"} gap={5} alignItems={"center"}>
        <Stack gap={2}>
          <Typography color={"white"} fontSize={"35px"} textAlign={"center"}>
            Deliver excellent customer
          </Typography>
          <Typography
            lineHeight={1}
            color={"#FA7241"}
            fontSize={"35px"}
            textAlign={"center"}
          >
            Experiences Across Industries
          </Typography>
          <Typography color={"white"} fontSize={"22px"} textAlign={"center"}>
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
          {lists.map((d) => (
            <Stack
              p={"7px 16px"}
              bgcolor={"#248F41"}
              border={"1px solid white"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"40px"}
              gap={1}
            >
              <Typography color={"white"} fontWeight={"bold"} fontSize={"22px"}>
                {d.title}
              </Typography>
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                width={"50px"}
                height={"50px"}
                bgcolor={"white"}
                borderRadius={"50%"}
              >
                <img src={arrowIcon} alt="" />
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack>
          <Stack sx={{ opacity: "0.1" }}>
            <img src={solutionsection3} alt="" />
          </Stack>
          <Stack
            borderRadius={2}
            p={1}
            sx={{
              backgroundImage: `url(${DotGreen})`,
              bgcolor: "#248F41",
            }}
          >
            <Stack gap={2} width={"50%"} p={3}>
              <Stack>
                <Typography fontSize={"35px"} color={"white"}>
                  The Perfect Tool For
                </Typography>
                <Typography fontSize={"40px"} color={"white"} fontWeight={900}>
                  Your Sales Teams
                </Typography>
              </Stack>
              <Stack>
                <Typography color={"white"} fontSize={"19px"}>
                  Are you a sales rep who loves interacting with new prospects
                  and navigating the challenges of a tough deal? Or are you a
                  leader who likes to ensure your team is running like a
                  well-oiled machine with the right forecasts, targets, and a
                  healthy pipeline? Zoho CRM offers all the necessary tools for
                  you to excel at building relationships, closing deals, and
                  growing revenue for your business.
                </Typography>
              </Stack>
              <Stack>
                <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
                  {lists2.map((d) => (
                    <Stack
                      p={"7px 16px"}
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
                        fontSize={"22px"}
                      >
                        {d.title}
                      </Typography>
                      <Stack
                        alignItems={"center"}
                        justifyContent={"center"}
                        width={"50px"}
                        height={"50px"}
                        bgcolor={"white"}
                        borderRadius={"50%"}
                      >
                        <img src={arrowIcon} alt="" />
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SolutionSection2