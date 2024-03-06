import { Stack, Typography } from '@mui/material'
import React from 'react'
import arrowIcon from "../../assets/arrowIcon.svg";
import colors from "../../assets/colors.png"
const SolutionSection3 = () => {
    const lists2 = [
      
      {
        title: "Automotive CRM",
      },
      {
        title: "Automotive CRM",
      },
    ];
  return (
    <Stack alignItems={"center"}>
      <Stack width={"75%"} gap={3} pt={7}> 
        <Stack>
          <Typography textAlign={"center"} fontSize={"35px"}>
            A cornerstone for
          </Typography>
          <Typography
            textAlign={"center"}
            color={"#4DB267"}
            fontWeight={"bold"}
            fontSize={"40px"}
            lineHeight={1}
          >
            Businesses of All Sizes
          </Typography>
        </Stack>
        <Typography textAlign={"center"} fontSize={"22px"}>
          Whether you're an SMB looking to optimize your sales processes by
          moving away from legacy tools and spreadsheets or a global enterprise
          looking to scale your sales operations across the globe, Zoho CRM is
          the right fit for you. Zoho CRM offers the right combination of
          functional feature sets, intuitive user experience, scalability, and
          ease of use to help every business connect with customers at scale to
          build everlasting relationships.
        </Typography>
        <Stack alignItems={"center"}>
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
        <Stack sx={{ opacity: "0.7" }}>
          <img src={colors} alt="" />
        </Stack>
      </Stack>
    </Stack>
  );}
export default SolutionSection3