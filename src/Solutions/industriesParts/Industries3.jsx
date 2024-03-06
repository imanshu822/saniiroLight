import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SliderIndustry from './SliderIndustry';
import Industry3 from "../../assets/Industry3.1.svg"
import globalReach from "../../assets/GlobalReach.svg"
const Industries3 = () => {
  return (
    <Stack gap={5} alignItems={"center"}>
      <Stack pt={15} alignItems={"Center"} gap={7}>
        <Typography fontSize={"35px"} fontWeight={"bold"} textAlign={"center"}>
          Some of the leading real estate businesses that trust Zoho CRM
        </Typography>
        <SliderIndustry />
      </Stack>
      <Stack width={"70%"} gap={2}>
        <Typography
          color={"#052973"}
          textAlign={"Center"}
          fontSize={"30px"}
          fontWeight={"bold"}
        >
          Management Software
        </Typography>
        <Typography color={"#B0B0B0"} fontSize={"21px"} textAlign={"Center"}>
          Billing Software, integrated with inventory management software and
          CRM, is purpose-built to efficiently manage time tracking, billing,
          and invoicing for services and products, providing business owners
          with a comprehensive solution to effortlessly monitor multiple
          invoices and accounts with just a few clicks, making it ideal for
          managing chains of stores and multiple company billing systems, while
          also offering a recurring service and rental business billing
          solution.
        </Typography>
        <img src={Industry3} alt="" />
      </Stack>
      <Stack width={"70%"} gap={2}>
        <Typography
          color={"#052973"}
          textAlign={"Center"}
          fontSize={"30px"}
          fontWeight={"bold"}
        >
          Management Software
        </Typography>
        <Typography color={"#B0B0B0"} fontSize={"21px"} textAlign={"Center"}>
          Billing Software, integrated with inventory management software and
          CRM, is purpose-built to efficiently manage time tracking, billing,
          and invoicing for services and products, providing business owners
          with a comprehensive solution to effortlessly monitor multiple
          invoices and accounts with just a few clicks, making it ideal for
          managing chains of stores and multiple company billing systems, while
          also offering a recurring service and rental business billing
          solution.
        </Typography>
        <img src={Industry3} alt="" />
      </Stack>
      <Stack width={"80%"} direction={"row"}>
        <Stack width={"50%"} justifyContent={"center"} gap={2}>
          <Box>
            <Typography fontSize={"35px"} fontWeight={"bold"}>
              The Global reach of the{" "}
            </Typography>
            <Typography
              fontSize={"35px"}
              fontWeight={"bold"}
              color={"#F15B25"}
              lineHeight={1}
            >
              Financial Management
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={"14px"}>
              We offer a range of financial management systems to help you get a
              better grip on your books. One of our most popular financial
              tracking software is our quotation management software which lets
              you create, track and submit quotes and invoices with ease.
              <br />
              <br />
              Saniiro kept its user interface very user friendly which allows
              anyone to use it without having any trouble. We also provide the
              best CMS software as well, which lets you seamlessly manage your
              web content to your liking. <br />
              <br /> Our CMS system takes into consideration a lot of factors
              before showing you how to best manage your content.
            </Typography>
          </Box>
        </Stack>
        <Stack width={"50%"}>
          <img src={globalReach} alt="" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Industries3