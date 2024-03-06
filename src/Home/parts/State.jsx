import React, { useState } from "react";
import { Grid, Stack, Switch, Typography } from "@mui/material";
import ButtonWithImage from "../../utils/StateButton";
import icon from "../../assets/icon.svg";
import { Link } from "react-router-dom";
import Button from "../../utils/Button";
import EastIcon from "@mui/icons-material/East";
const ToggleSection = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  const buttonsData = [
    {
      id: 1,
      name: "Button 1",
      details: "Button 1 details",
    },
    {
      id: 2,
      name: "Button 2",
      details: "Button 2 details",
    },
    {
      id: 3,
      name: "Button 3",
      details: "Button 3 details",
    },
    {
      id: 4,
      name: "Button 4",
      details: "Button 4 details",
    },
    {
      id: 5,
      name: "Button 5",
      details: "Button 5 details",
    },
    {
      id: 6,
      name: "Button 6",
      details: "Button 6 details",
    },
    {
      id: 7,
      name: "Button 1",
      details: "Button 1 details",
    },
    {
      id: 8,
      name: "Button 1",
      details: "Button 1 details",
    },
    {
      id: 9,
      name: "Button 1",
      details: "Button 1 details",
    },
    {
      id: 10,
      name: "Button 1",
      details: "Button 1 details",
    },
    {
      id: 11,
      name: "Button 1",
      details: "Button 1 details",
    },
    {
      id: 12,
      name: "Button 1",
      details: "Button 1 details",
    },
    {
      id: 13,
      name: "Button 1",
      details: "Button 1 details",
    },
    {
      id: 14,
      name: "Button 1",
      details: "Button 1 details",
    },
    {
      id: 15,
      name: "Button 1",
      details: "Button 1 details",
    },
  ];

  const renderButtons = (startIndex, endIndex) => {
    return buttonsData.slice(startIndex, endIndex).map((button) => (
      <Grid item key={button.id} xs={12} sm={6} md={4} lg={2.5}>
        <Stack>
          <ButtonWithImage iconPosition="start" imageUrl={icon}>
            {button.name}
          </ButtonWithImage>
          {isToggled && <Typography>{button.details}</Typography>}
        </Stack>
      </Grid>
    ));
  };

  return (
    <Stack
      marginTop={"50px"}
      bgcolor={"#F0F0F0"}
      gap={3}
      p={"30px 0"}
      sx={{
        display: {
          xs: "none",
          lg: "block",
        },
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent={"center"}>
        <Switch
          checked={isToggled}
          onChange={handleToggle}
          sx={{
            "& .MuiSwitch-thumb": {
              backgroundColor: isToggled ? "#34A853" : "#F15B25",
            },
            "& .MuiSwitch-track": {
              backgroundColor: "white",
            },
          }}
        />
        <Typography>let me show you something else</Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Grid container spacing={2}>
          <Grid
            container
            item
            xs={12}
            spacing={1}
            sx={{
              justifyContent: "center",
            }}
          >
            {renderButtons(0, 3)}
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={2}
            sx={{
              justifyContent: "center",
            }}
          >
            {renderButtons(3, 5)}
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={2}
            sx={{
              justifyContent: "center",
            }}
          >
            {renderButtons(5, 8)}
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={2}
            sx={{
              justifyContent: "center",
            }}
          >
            {renderButtons(8, 10)}
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={2}
            sx={{
              justifyContent: "center",
            }}
          >
            {renderButtons(10, 13)}
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={2}
            sx={{
              justifyContent: "center",
            }}
          >
            {renderButtons(13, 15)}
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={2}
            sx={{
              justifyContent: "center",
            }}
          >
            {renderButtons(15, 18)}
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={2}
            sx={{
              justifyContent: "center",
            }}
          >
            {renderButtons(18, 20)}
          </Grid>
        </Grid>
      </Stack>
      <Stack alignItems={"center"}>
        <Button
          endIcon={<EastIcon />}
          sx={{
            bgcolor: "transparent",
            color: "#0079FF",
            fontSize: "16px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#0079FF",
              textDecoration: "underline",
            },
          }}
        >
          View all apps
        </Button>
      </Stack>
    </Stack>
  );
};

export default ToggleSection;
