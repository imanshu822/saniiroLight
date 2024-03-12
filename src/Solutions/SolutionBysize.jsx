import React from "react";
import Industries1 from "./IndustriesBysize/Industries1";
import { Stack } from "@mui/material";
import Nav from "../Navbar/Nav";
import Line from "./IndustriesBysize/Line";
import SliderIndustry from "./IndustriesBysize/SliderIndustry";
import Boxes from "../assets/Boxes.svg";
import Industries2 from "./IndustriesBysize/Industries2";
import ProductSlider from "../About/parts/ProductSlider";
import Clock from "../Home/parts/Clock";
import ContactFaq from "../Home/parts/ContactFaq";
import Footer from "../utils/Footer";

const SolutionBysize = () => {
  return (
    <>
      {/* for desktop view  */}
      <Stack>
        <Stack position={"relative"} gap={5}>
          <Stack>
            <Nav />
            <Industries1 />
          </Stack>
          <Stack gap={5}>
            <Line />
            <SliderIndustry />
          </Stack>
          <Stack
            alignItems={"center"}
            p={"100px 0"}
            display={{
              xs: "none",
              lg: "flex",
            }}
          >
            <img src={Boxes} alt="" style={{ width: "100px" }} />
          </Stack>
          <Industries2 />
        </Stack>
        <Stack bgcolor={"#F8F8F8"} pt={5}>
          <ProductSlider />
          <Clock />
          <ContactFaq />
          <Footer />
        </Stack>
      </Stack>

      {/* for mobile view  */}
      {/* <Stack
        display={{
          xs: "flex",
          lg: "none",
        }}
      >
        <Nav />
        <Industries1 />
        <Line />
        <SliderIndustry />
        <Industries2 />
        <Stack bgcolor={"#F8F8F8"} pt={5}>
          <ProductSlider />
          <Clock />
          <ContactFaq />
          <Footer />
        </Stack>
      </Stack> */}
    </>
  );
};

export default SolutionBysize;
