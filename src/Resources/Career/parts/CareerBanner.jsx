import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import BannerImg from "./assets/Group 62842.png";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const CareerBanner = () => {
  const [department, setDepartment] = useState("");
  const [countries, setCountries] = useState("");

  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const handleChangeCountries = (event) => {
    setCountries(event.target.value);
  };

  return (
    <Stack position="relative" height="100%">
      <Box
        component="img"
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: "auto",
        }}
        alt="Banner Image"
        src={BannerImg}
      />
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "860px",
          height: "380px",
          textAlign: "center",
          backgroundColor: "white",
          justifyContent: "center",
        }}
      >
        <Content
          department={department}
          countries={countries}
          handleChangeDepartment={handleChangeDepartment}
          handleChangeCountries={handleChangeCountries}
        />
      </Stack>
    </Stack>
  );
};

const Content = ({
  department,
  countries,
  handleChangeDepartment,
  handleChangeCountries,
}) => {
  return (
    <Stack
      p={2}
      direction="column"
      alignItems="center"
      justifyContent="space-evenly"
      gap={1}
    >
      <Typography
        sx={{
          width: "690px",
          height: "50px",
          fontFamily: "Work Sans",
          fontSize: "50px",
          fontWeight: 600,
          lineHeight: "50px",
          letterSpacing: "0em",
          textAlign: "center",
          color: "#4DB267",
          textTransform: "uppercase",
        }}
      >
        Want to have an impact
      </Typography>
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontSize: "50px",
          fontWeight: 600,
          lineHeight: "53px",
          letterSpacing: "0em",
          textAlign: "center",
          color: "#052973",
        }}
      >
        while having fun?
      </Typography>
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "27px",
          letterSpacing: "0em",
          textAlign: "center",
        }}
      >
        Master in Business Administration, Civil Engineering, or Computer
        Sciences.
      </Typography>
      <Stack>
        <TextField
          sx={{
            width: "540px",
            height: "50px",
            my: 2,
            position: "relative",
          }}
          id="outlined-basic"
          label="Search Job"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    color: "gray",
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
        <Box
          display="flex"
          gap={2}
          sx={{ minWidth: "540px", textAlign: "left" }}
        >
          <FormSelect
            id="department-select"
            label="All Department"
            value={department}
            onChange={handleChangeDepartment}
          >
            <MenuItem value={10}>Department 1</MenuItem>
            <MenuItem value={20}>Department 2</MenuItem>
            <MenuItem value={30}>Department 3</MenuItem>
          </FormSelect>
          <FormSelect
            id="countries-select"
            label="All Countries"
            value={countries}
            onChange={handleChangeCountries}
          >
            <MenuItem value={10}>Country 1</MenuItem>
            <MenuItem value={20}>Country 2</MenuItem>
            <MenuItem value={30}>Country 3</MenuItem>
          </FormSelect>
        </Box>
      </Stack>
    </Stack>
  );
};

const FormSelect = ({ id, label, value, onChange, children }) => {
  return (
    <FormControl sx={{ backgroundColor: "#F5F5F5" }} fullWidth>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default CareerBanner;
