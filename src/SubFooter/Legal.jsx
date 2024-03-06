import React from "react";
import Nav from "../Navbar/Nav";
import { Box, Stack, Typography } from "@mui/material";
import Footer from "../utils/Footer";

const Legal = () => {
  return (
    <>
      <Nav />
      <Stack width={"100%"} alignItems={"center"}>
        <Box
          width={"100%"}
          height={"100%"}
          padding={{ xs: "20px 0px", md: "40px 0px" }}
          sx={{
            backgroundColor: "#00437A",
          }}
        >
          <Stack
            margin={"0 auto"}
            width={"80%"}
            height={"100%"}
            justifyContent={"center"}
            alignItems={"start"}
          >
            <Typography color={"white"} variant="h3">
              Legal Information
            </Typography>
          </Stack>
        </Box>

        <Stack
          width={"80%"}
          justifyContent={"center"}
          gap={3}
          marginTop={"30px"}
        >
          <Stack>
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              Patent Information
            </Typography>
            <Typography>
              Features and services within Saniiro products may be the subject
              matter of pending and issued patents assigned to{" "}
              <b>Saniiro Technologies Pvt. Ltd.</b>
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              Trademark Information
            </Typography>
            <Typography>
              Saniiro, the saniiro logo, among others, are registered trademarks
              and/or registered service marks of{" "}
              <b>Saniiro Technologies Pvt. Ltd.</b> For more information on
              saniiro trademarks, please see our Trademark Information and
              Restrictions page.
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              Copyright Information
            </Typography>
            <Typography>
              Saniiro products, services, Web content and related materials
              (collectively, "Offerings") are owned by saniiro and/or its
              licensors, and all rights in such Offerings are reserved by
              Saniiro and/or its licensors. For information regarding permission
              to use screen displays and other content, please see saniiro
              Permissions Policy. Saniiro Anti–Piracy Information resource
              provides basic information on software piracy and its negative
              effects on businesses and consumers, including the risks
              associated with purchasing or using counterfeit CD media. This
              resource also includes information on how to check certain
              products for authenticity and how to report piracy directly to
              saniiro.
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              Notices of Infringement
            </Typography>
            <Typography>
              Persons who believe that their copyrights have been infringed via
              saniiro sites may notify saniiro Designated Agent. All notices
              must comply with the requirements of Indian Laws and regulations
              promulgated thereunder, each as amended. Such notices not
              complying with these requirements will be returned unprocessed. No
              other notices or inquiries of any type, including requests for
              information, purchase or technical support questions, notices of
              infringement of third–party trademark or patent rights, employment
              inquiries, press inquiries, or investor inquiries, will be read or
              answered under this Agent and Agent Address.
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              Designated Agent and Address of Agent:
            </Typography>
            <Typography>Attn: Legal Department –Copyright Agent</Typography>
            <Typography>Attn: Legal Department –Copyright Agent</Typography>
            <Typography>Saniiro Technologies Pvt. Ltd.</Typography>
            <Typography>
              Address: 613-5th Floor Apex Mall Lalkothi Jaipur
            </Typography>
            <Typography>Email : info@saniiro.com</Typography>
          </Stack>
          <Stack marginBottom={"30px"}>
            <Typography>Risk of Loss</Typography>
            <Typography>
              All items purchased and shipped from saniiro are fulfilled
              pursuant to a shipment contract between saniiro and our carriers.
              This means that both the risk of loss and title for such items
              pass to you upon our delivery of the items to the carrier.
              Licensing and Support
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default Legal;
