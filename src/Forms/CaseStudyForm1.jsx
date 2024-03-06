import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import lo from "../assets/lo.svg";

const CaseStudyForm1 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    phone: "",
    email: "",
    industry: "",
    companyIndustry: "",
    crmEdition: "",
    other: "",
  });

  // Update form data state as the user interacts with inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Log form data to the console
    // Add further logic here to submit the data
  };

  return (
    <Stack width={"1420px"}>
      <Stack
        marginTop={"40px"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <img width={"170px"} height={"40px"} src={lo} alt="logo" />
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "26px",
            letterSpacing: "0em",
            textAlign: "center",
            marginTop: "20px",
            opacity: 0.6,
          }}
        >
          Customer Story Form
        </Typography>
      </Stack>
      <Stack width={"750px"} margin={"0px auto"}>
        <form onSubmit={handleSubmit}>
          <hr
            style={{
              width: "750px",
              marginTop: "40px",
              border: "0.5px solid gray",
              backgroundColor: "gray",
            }}
          />
          <Typography
            width={"710px"}
            margin={"0px auto"}
            sx={{
              fontFamily: "Work Sans",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0em",
              textAlign: "center",
              marginTop: "15px",
              marginBottom: "15px",
              opacity: 0.6,
            }}
          >
            We're thrilled you are submitting your story! Just fill out the form
            below. Most questions are multiple choice and it will take only ten
            minutes. We'll get in touch with you soon. Thanks!
          </Typography>
          <hr
            style={{
              width: "750px",
              border: "0.5px solid gray",
              backgroundColor: "gray",
            }}
          />
          <Stack>
            <Stack gap={3}>
              <Stack direction={"row"} gap={4} margin={"0px auto"}>
                <Stack
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <label htmlFor="firstName">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={{
                      marginTop: "5px",
                      width: "330px",
                      height: "55px",
                      border: "1px solid #C4C4C4",
                      paddingLeft: "20px",
                      fontSize: "18px",
                    }}
                  />
                </Stack>
                <Stack
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <label htmlFor="company">Company*</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      marginTop: "5px",
                      width: "330px",
                      height: "55px",
                      border: "1px solid #C4C4C4",
                      paddingLeft: "20px",
                      fontSize: "18px",
                    }}
                  />
                </Stack>
              </Stack>
              <Stack direction={"row"} gap={4} margin={"0px auto"}>
                <Stack
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <label htmlFor="phone">Phone*</label>
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      marginTop: "5px",
                      width: "310px",
                      height: "55px",
                      border: "1px solid #C4C4C4",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      fontSize: "18px",
                    }}
                  />
                </Stack>
                <Stack
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      marginTop: "5px",
                      width: "330px",
                      height: "55px",
                      border: "1px solid #C4C4C4",
                      paddingLeft: "20px",
                      fontSize: "18px",
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <hr
              style={{
                width: "750px",
                marginTop: "40px",
                borderTop: "1px dashed gray",
              }}
            />
            <Stack marginTop={"40px"} gap={3}>
              <Stack direction={"row"} gap={4} margin={"0px auto"}>
                <Stack
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <label htmlFor="industry">Industry</label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    style={{
                      marginTop: "5px",
                      width: "350px",
                      height: "60px",
                      border: "1px solid #C4C4C4",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      fontSize: "18px",
                    }}
                  >
                    <option value="select">Select</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                  </select>
                </Stack>
                <Stack
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  <label htmlFor="companyIndustry">Company Industry*</label>
                  <input
                    type="text"
                    name="companyIndustry"
                    value={formData.companyIndustry}
                    onChange={handleChange}
                    style={{
                      marginTop: "5px",
                      width: "330px",
                      height: "55px",
                      border: "1px solid #C4C4C4",
                      paddingLeft: "20px",
                      fontSize: "18px",
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <hr
              style={{
                width: "750px",
                marginTop: "40px",
                borderTop: "1px dashed gray",
              }}
            />
            <Stack>
              <Typography>Which CRM edition are you on?</Typography>
              <Stack direction="column">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ marginY: "20px" }}
                >
                  <Stack direction="row" gap={2}>
                    <input
                      type="radio"
                      id="free"
                      name="crmEdition"
                      value="Free"
                      onChange={handleChange}
                    />
                    <label htmlFor="free">Free</label>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <input
                      type="radio"
                      id="professional"
                      name="crmEdition"
                      value="Professional"
                      onChange={handleChange}
                    />
                    <label htmlFor="professional">Professional</label>
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ marginY: "20px" }}
                >
                  <Stack direction="row" gap={2}>
                    <input
                      type="radio"
                      id="standard"
                      name="crmEdition"
                      value="Standard"
                      onChange={handleChange}
                    />
                    <label htmlFor="standard">Standard</label>
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <input
                      type="radio"
                      id="enterprise"
                      name="crmEdition"
                      value="Enterprise"
                      onChange={handleChange}
                    />
                    <label htmlFor="enterprise">Enterprise</label>
                  </Stack>
                </Stack>
                <Stack direction="row" gap={2} sx={{ marginY: "20px" }}>
                  <input
                    type="radio"
                    id="crmPlus"
                    name="crmEdition"
                    value="CRM Plus"
                    onChange={handleChange}
                  />
                  <label htmlFor="crmPlus">CRM Plus</label>
                </Stack>
                <Stack direction="row" gap={2} sx={{ marginY: "20px" }}>
                  <input
                    type="radio"
                    id="other"
                    name="crmEdition"
                    value="Others"
                    onChange={handleChange}
                  />
                  <label htmlFor="other">Others (Please specify)</label>
                </Stack>
              </Stack>
              <textarea
                style={{
                  width: "230px",
                  height: "80px",
                  marginLeft: "25px",
                  marginTop: "20px",
                  border: "1px solid #C4C4C4",
                  fontSize: "18px",
                  paddingLeft: "10px",
                }}
                name="other"
                value={formData.other}
                onChange={handleChange}
              />
            </Stack>
          </Stack>
          <button
            type="submit"
            style={{
              width: "140px",
              height: "40px",
              backgroundColor: "#F2994A",
              borderRadius: "5px",
              marginTop: "40px",
              marginLeft: "25px",
            }}
          >
            <Typography>NEXT</Typography>
          </button>
        </form>
      </Stack>
    </Stack>
  );
};

export default CaseStudyForm1;
