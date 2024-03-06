import { Stack } from "@mui/material";
import React, { useState } from "react";

const CitySelector = () => {
  // Sample data for states and cities
  const stateOptions = [
    { id: 1, name: "State 1", cities: ["City 1", "City 2", "City 3"] },
    { id: 2, name: "State 2", cities: ["City 4", "City 5", "City 6"] },
    // Add more states and cities as needed
  ];

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cityOptions, setCityOptions] = useState([]);

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);

    // Find the selected state in the options and update the city options
    const selectedStateData = stateOptions.find(
      (state) => state.name === newState
    );
    setCityOptions(selectedStateData ? selectedStateData.cities : []);
    setSelectedCity(""); // Reset selected city when state changes
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <Stack
      direction={"row"}
      gap={1}
      style={{ position: "relative" }}
      sx={{
        width: {
          xs: "220px",
          sm: "300px",
          md: "480px",
          lg: "385px",
          xl: "480px",
        },
        height: {
          xs: "45px",
          sm: "55px",
          md: "67px",
          lg: "57px",
          xl: "67px",
        },
      }}
    >
      <select
        id="state"
        value={selectedState}
        onChange={handleStateChange}
        className="input-city"
      >
        <option value="">Select State</option>
        {stateOptions.map((state) => (
          <option key={state.id} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>

      <select
        id="city"
        value={selectedCity}
        onChange={handleCityChange}
        disabled={!selectedState}
        className="input-city"
      >
        <option value="">Select City</option>
        {cityOptions.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </Stack>
  );
};

export default CitySelector;
