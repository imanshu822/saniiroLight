import * as React from "react";
import Box from "@mui/material/Box";

import img1 from "./assets/image 156.png";
import img2 from "./assets/image 161.png";
import img3 from "./assets/image 162.png";

const Gallery = () => {
  return (
    <Box
      sx={{
        width: "785px",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <GridContainer>
        <GridItem gridColumn="span 12" gridRow="span 6">
          <Image src={img1} alt="img1" />
        </GridItem>
        <GridItem gridColumn="span 3" gridRow="span 3">
          <Image src={img3} alt="img3" />
        </GridItem>
        <GridItem gridColumn="span 3" gridRow="span 3">
          <Image src={img2} alt="img2" />
        </GridItem>
        <GridItem gridColumn="span 6" gridRow="span 6">
          <Image src={img2} alt="img2" />
        </GridItem>
        <GridItem gridColumn="span 3" gridRow="span 3">
          <Image src={img3} alt="img3" />
        </GridItem>
        <GridItem gridColumn="span 3" gridRow="span 3">
          <Image src={img2} alt="img2" />
        </GridItem>
        <GridItem gridColumn="span 8" />
      </GridContainer>
    </Box>
  );
};

// Reusable Grid Container component
const GridContainer = ({ children }) => (
  <Box
    display="grid"
    gridTemplateColumns="repeat(12, calc(610px / 12))"
    gridTemplateRows="repeat(12, calc(600px / 12))"
    gap={2}
  >
    {children}
  </Box>
);

// Reusable Grid Item component
const GridItem = ({ children, ...props }) => <Box {...props}>{children}</Box>;

// Reusable Image component
const Image = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ width: "100%", height: "100%" }} />
);

export default Gallery;
