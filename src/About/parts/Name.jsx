import React from "react";
import name from "../../assets/Name.svg";
import { Stack, Typography } from "@mui/material";

const Name = () => {
  return (
    <Stack
      direction={{
        xs: "column",
        md: "row",
      }}
      justifyContent="center"
      alignItems="center"
      pt={{ xs: 3, md: 5 }}
      gap={{ xs: 2, md: 0 }}
    >
      <Stack
        alignItems="center"
        position="relative"
        justifyContent="center"
        paddingLeft={{ xs: 0, md: 8 }}
        sx={{
          width: { xs: "90%", md: "85%", lg: "50%" },
          height: { xs: "300px", sm: "400px", md: "450px", lg: "500px" },
        }}
      >
        <img src={name} alt="Name" style={{ width: "100%", height: "100%" }} />
        <Stack
          bgcolor="white"
          borderRadius={1}
          position="absolute"
          width={{ xs: "70%", sm: "45%", md: "60%", lg: "50%" }}
          bottom="10%"
        >
          <Typography p={2} fontSize="12px">
            A Quality Management System (QMS) serves as the backbone for
            organisations aiming for operational and quality excellence
          </Typography>
        </Stack>
      </Stack>
      <Stack
        width={{ xs: "100%", md: "60%", lg: "50%" }}
        justifyContent="center"
        alignItems="flex-start"
        gap={2}
        paddingRight={{ xs: 0, md: 3, lg: 8 }}
      >
        <Typography
          width="100%"
          color="#013E60"
          textAlign={{
            xs: "center",
            md: "left",
          }}
          fontSize={{ xs: "32px", md: "46px" }}
          fontWeight="bold"
        >
          Name
        </Typography>
        <Typography
          letterSpacing={1.1}
          textAlign="left"
          lineHeight={1.3}
          padding={{ xs: "0 20px", md: 0 }}
          fontSize={{ xs: "14px", md: "16px" }}
        >
          <li>
            Jayanthi is an out-of-the-box thinker, strategist, learner, and
            collaborator passionate about delivering quality solutions and
            empowering people and organizations.
          </li>
          <br />
          <li>
            She has a master’s degree in Pharmaceutical Sciences, M Pharm, a
            Registered Pharmacist, with over 18 years of progressive
            international work experience in Quality and Regulatory Compliance
            including leadership roles with major American multinational
            companies like Mylan Inc (now Viatris) and Abbott Inc.
          </li>
          <br />
          <li>
            She lived on three continents and was well-travelled across the US,
            Europe, and Asia, providing solutions to projects that require
            exceptional negotiating and business transforming skills.
          </li>
          <br />
          <li>
            She recently delivered the “Pharmaceutical Quality Compliance -
            Access to Affordable, Quality Medicines” keynote address at a G20
            Nations Global Tech Summit.
          </li>
          <br />
          <li>
            She loves Cakes, Music, and Arts (yes, in that order!) and often
            volunteers among students and young people encouraging them to live
            life to their full potential.
          </li>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Name;
