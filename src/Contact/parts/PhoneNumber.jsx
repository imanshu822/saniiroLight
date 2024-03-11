import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "./contact.css";
import { Box } from "@mui/material";
const PhoneNumber= () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value, country) => {
    // Update the state with the selected phone number and country code
    setPhone(value);
  };

  return (
    <Box
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
      <PhoneInput
        country={""} // Default country code for India (+91)
        value={phone}
        inputClass="input-new"
        placeholder="Phone Number"
        onChange={handlePhoneChange}
        inputProps={{
          name: "phone",
          id: "phoneInput",
        }}
      />
    </Box>
  );
};

export default PhoneNumber;
