import { Stack, Typography } from "@mui/material";
import React from "react";
import contactsection3 from "../../assets/Contactsection3.svg"
import Button from "../../utils/Button";
import indiaFlag from "../../assets/indiaflag.svg"
import gmail1 from "../../assets/gmail1.svg";
import gmail from "../../assets/gmail.svg";

import { Link } from "react-router-dom";
const GrennSection = () => {
  return (
    <Stack alignItems={"center"} pt={10} gap={10}>
      <Stack width={"90%"} direction={"row"}>
        <Stack width={"47%"}>
          <img
            src={contactsection3}
            alt=""
            style={{ width: "550px", height: "350px" }}
          />
        </Stack>
        <Stack p={"20px 25px"} gap={3} width={"40%"}>
          <Button
            sx={{
              borderRadius: 1,
              fontWeight: "bold",
              bgcolor: "#248F41",
              color: "white",
              width: "100px",
              height: "25px",
              fontSize: "12px",
            }}
          >
            I'M NEW HERE
          </Button>
          <Typography fontSize={"40px"} letterSpacing={1}>
            Find your way around Saniiro with Concierge
          </Typography>
          <Typography>
            Not sure which Zoho product is the right fit for your company? No
            worries. We'll work with you to determine what solutions will best
            suit your business.
          </Typography>
        </Stack>
      </Stack>
      <Stack width={"90%"} direction={"row"}>
        <Stack p={"20px 25px"} gap={3} width={"40%"}>
          <Button
            sx={{
              borderRadius: 1,
              fontWeight: "bold",
              bgcolor: "#248F41",
              color: "white",
              width: "100px",
              height: "25px",
              fontSize: "12px",
            }}
          >
            I'M NEW HERE
          </Button>
          <Typography fontSize={"40px"} letterSpacing={1}>
            Interested in a product? Talk to our sales team
          </Typography>
          <Typography>
            From questions about pricing to one-on-one personalized demos, we'd
            love to connect and help get you started.
          </Typography>
        </Stack>
        <Stack width={"60%"} alignItems={"center"} justifyContent={"center"}>
          <Stack
            width={"80%"}
            bgcolor={"#FFFFFF"}
            gap={3}
            p={"50px 70px"}
            borderRadius={1}
          >
            <Stack direction={"row"} gap={1} justifyContent={"center"}>
              <Stack justifyContent={"center"}>
                <img
                  src={indiaFlag}
                  alt=""
                  style={{ width: "25px", height: "20px" }}
                />
              </Stack>
              <Typography fontSize={"18px"}>India</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} gap={5}>
              <Link
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textDecoration: "none",
                  color: "black",
                  gap: 8,
                  border: "1px solid lightgray",
                  padding: "8px",
                  borderRadius: 5,
                }}
              >
                <Stack>
                  <img src={gmail1} alt="" />
                </Stack>
                1800-201-0000
              </Link>
              <Link
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textDecoration: "none",
                  color: "black",
                  gap: 8,
                  border: "1px solid lightgray",
                  padding: "8px",
                  borderRadius: 5,
                }}
              >
                <Stack>
                  <img src={gmail1} alt="" />
                </Stack>
                1800-201-0000
              </Link>
            </Stack>
            <Stack direction={"row"} justifyContent={"center"} gap={5}>
              <Link
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textDecoration: "none",
                  color: "black",
                  gap: 8,
                  border: "1px solid lightgray",
                  padding: "8px",
                  borderRadius: 5,
                }}
              >
                <Stack>
                  <img src={gmail} alt="" />
                </Stack>
                sales@zohocorp.com
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default GrennSection;
