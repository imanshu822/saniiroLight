import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "./contact.css";
const PhoneNumber= () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value, country) => {
    // Update the state with the selected phone number and country code
    setPhone(value);
  };

  return (
    <div>
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
    </div>
  );
};

export default PhoneNumber;
