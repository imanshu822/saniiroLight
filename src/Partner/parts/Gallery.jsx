import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import img1 from "./assets/image 156.png";
import img2 from "./assets/image 161.png";
import img3 from "./assets/image 162.png";

const Gallery = () => {
  return (
    <Box
      sx={{
        width: "90%", // Adjusted width for responsiveness
        margin: "20px auto",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <Image src={img1} alt="img1" />
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Image src={img2} alt="img2" />
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Image src={img2} alt="img2" />
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Image src={img3} alt="img3" />
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Image src={img3} alt="img3" />
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Image src={img2} alt="img2" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Image src={img2} alt="img2" />
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Image src={img3} alt="img3" />
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Image src={img2} alt="img2" />
        </Grid>
      </Grid>
    </Box>
  );
};

// Reusable Image component
const Image = ({ src, alt }) => (
  <img src={src} alt={alt} style={{ width: "100%", height: "100%" }} />
);

export default Gallery;
