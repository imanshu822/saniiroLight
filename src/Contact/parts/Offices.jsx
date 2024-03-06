import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import indiaFlag from "../../assets/indiaflag.svg";
import USAflag from "../../assets/USAflag.svg"
const Offices = () => {
    const lists = [
      {
        state: "Chennai",
        address:
          "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
        phone1: "044 - 69656070",
        phone2: "044 - 69656070",
        Fax: "044 67447172",
      },
      {
        state: "Bihar",
        address:
          "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
        phone1: "044 - 69656070",
        phone2: "044 - 69656070",
        Fax: "044 67447172",
      },
      {
        state: "Jaipur",
        address:
          "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
        phone1: "044 - 69656070",
        phone2: "044 - 69656070",
        Fax: "044 67447172",
      },
      {
        state: "Delhi",
        address:
          "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
        phone1: "044 - 69656070",
        phone2: "044 - 69656070",
        Fax: "044 67447172",
      },
      {
        state: "Mumbai",
        address:
          "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
        phone1: "044 - 69656070",
        phone2: "044 - 69656070",
        Fax: "044 67447172",
      },
      {
        state: "Bangalore",
        address:
          "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
        phone1: "044 - 69656070",
        phone2: "044 - 69656070",
        Fax: "044 67447172",
      },
    ];
    const list2 = [
      {
        state: "New York",
        address:
          "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
        phone1: "044 - 69656070",
        phone2: "044 - 69656070",
        Fax: "044 67447172",
      },
      {
        state: "Alaska",
        address:
          "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
        phone1: "044 - 69656070",
        phone2: "044 - 69656070",
        Fax: "044 67447172",
      },
      {
        state: "Maryland",
        address:
          "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
        phone1: "044 - 69656070",
        phone2: "044 - 69656070",
        Fax: "044 67447172",
      },
      {
        state: "New jersey",
        address:
          "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
        phone1: "044 - 69656070",
        phone2: "044 - 69656070",
        Fax: "044 67447172",
      },
      {
        state: "Texas",
        address:
          "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
        phone1: "044 - 69656070",
        phone2: "044 - 69656070",
        Fax: "044 67447172",
      },
      {
        state: "Florida",
        address:
          "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri, Chengalpattu District, Tamil Nadu - 603202,India",
        phone1: "044 - 69656070",
        phone2: "044 - 69656070",
        Fax: "044 67447172",
      },
    ];
  return (
    <Stack bgcolor={"#F6F8FF"} pt={5}>
      <Stack alignItems={"center"} gap={1}>
        <Typography fontSize={"45px"} textAlign={"center"}>
          Our offices around the world
        </Typography>
        <Typography textAlign={"center"}>
          Connect with one of our global offices... <br /> or feel free to just
          send us a nifty postcard. We won't mind!
        </Typography>
      </Stack>
      <Stack alignItems={"Center"} pt={6}>
        <Stack bgcolor={"white"} width={"85%"}>
          <Stack direction={"row"} gap={2} justifyContent={"center"} pt={4}>
            <Stack justifyContent={"center"}>
              <img
                src={indiaFlag}
                alt=""
                style={{ width: "51px", height: "35px" }}
              />
            </Stack>
            <Typography fontSize={"35px"}>India</Typography>
          </Stack>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            rowGap={6}
            columnGap={2}
            p={"30px 0px"}
          >
            {lists.map((d) => (
              <Stack width={"23%"} gap={1} p={"0 20px"}>
                <Typography fontWeight={"bold"} fontSize={"25px"}>
                  {d.state}
                </Typography>
                <Typography>{d.address}</Typography>
                <Stack direction={"row"} gap={1}>
                  <Typography fontWeight={"bold"}>Phone:</Typography>
                  <Box>
                    <Typography>{d.phone1}</Typography>
                    <Typography>{d.phone2}</Typography>
                  </Box>
                </Stack>
                <Stack direction={"row"} gap={3.7}>
                  <Typography fontWeight={"bold"}>Fax:</Typography>
                  <Box>
                    <Typography>{d.Fax}</Typography>
                  </Box>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Stack alignItems={"Center"} pt={6} pb={10}>
        <Stack bgcolor={"white"} width={"85%"} pb={2}>
          <Stack direction={"row"} gap={2} justifyContent={"center"} pt={4}>
            <Stack justifyContent={"center"}>
              <img
                src={USAflag}
                alt=""
                style={{ width: "51px", height: "35px" }}
              />
            </Stack>
            <Typography fontSize={"35px"}>USA</Typography>
          </Stack>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            rowGap={6}
            columnGap={2}
            p={"30px 0px"}
          >
            {list2.map((d) => (
              <Stack width={"23%"} gap={1} p={"0 20px"}>
                <Typography fontWeight={"bold"} fontSize={"25px"}>
                  {d.state}
                </Typography>
                <Typography>{d.address}</Typography>
                <Stack direction={"row"} gap={1}>
                  <Typography fontWeight={"bold"}>Phone:</Typography>
                  <Box>
                    <Typography>{d.phone1}</Typography>
                    <Typography>{d.phone2}</Typography>
                  </Box>
                </Stack>
                <Stack direction={"row"} gap={3.7}>
                  <Typography fontWeight={"bold"}>Fax:</Typography>
                  <Box>
                    <Typography>{d.Fax}</Typography>
                  </Box>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Offices