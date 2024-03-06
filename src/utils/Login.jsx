import { Box, Stack, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import lo from "../assets/lo.svg";
import Lock from "../assets/Lock.png";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./Footer.css";
import Google from "../assets/google.png";
import LinkedIn from "../assets/linkedIn.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Stack
      bgcolor={"#052973"}
      className="textured-background-Login"
      background-repeat={"no-repeat"}
      backgroundSize={"cover"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"Center"}
    >
      <Stack
        bgcolor={"rgb(230, 245, 255)"}
        width={"56%"}
        borderRadius={2}
        direction={"row"}
        p={3}
      >
        <Stack width={"50%"} zIndex={11} p={3} gap={8}>
          <Link to={"/"}>
            <Stack>
              <img src={lo} alt="" style={{ width: "150px", height: "30px" }} />
            </Stack>
          </Link>
          <Stack gap={2}>
            <Stack alignItems={"center"}>
              <img
                src={Lock}
                alt=""
                style={{ width: "290px", height: "236px" }}
              />
            </Stack>
            <Typography
              fontSize={"18px"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Enhanced sign-in security
            </Typography>
            <Typography fontSize={"18px"} textAlign={"center"} p={"0 11px"}>
              Move away from risky passwords and experience one-tap access to
              Zoho. Download and install OneAuth.
            </Typography>
            <Button
              sx={{
                bgcolor: "transparent",
                color: "#0079FF",
                fontSize: "16px",
                fontWeight: "bold",
                pl: "0px",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#0079FF",
                  textDecoration: "underline",
                },
              }}
            >
              Know More
            </Button>
          </Stack>
        </Stack>
        <Stack justifyContent={"center"}>
          <Stack
            sx={{
              content: "''",
              width: "2px",
              height: "450px",
              bgcolor: "#0139ff",
            }}
          ></Stack>
        </Stack>
        <Stack width={"50%"} zIndex={11} p={3}>
          <Stack alignItems={"end"}>
            <Link to={"/Sign-up"}>
              <Button
                sx={{
                  bgcolor: "transparent",
                  color: "#0079FF",
                  fontSize: "11px",
                  fontWeight: "bold",
                  pl: "0px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#0079FF",
                    textDecoration: "underline",
                  },
                }}
              >
                Don't have an account?
              </Button>
            </Link>
          </Stack>
          <Stack gap={2}>
            <Stack>
              <Typography fontWeight={"bold"} fontSize={"31px"}>
                Sign in
              </Typography>
              <Typography fontSize={"18px"} color={"grey"}>
                to access Begin
              </Typography>
            </Stack>
            <Stack gap={2}>
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  className="input-Login"
                  placeholder="Customer Login Id"
                />
                <PersonIcon
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "16px",
                    transform: "translateY(-50%)",
                    color: "#AAAAAA",
                    fontSize: "40px",
                  }}
                />
              </div>
              <div style={{ position: "relative" }}>
                <input
                  type="Email"
                  className="input-Login"
                  placeholder="User Name"
                />
                <EmailIcon
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "16px",
                    transform: "translateY(-50%)",
                    color: "#AAAAAA",
                    fontSize: "40px",
                  }}
                />
              </div>
              <div style={{ position: "relative" }}>
                <input
                  name="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  className="input-Login"
                />
                <IconButton
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "16px",
                    transform: "translateY(-50%)",
                    color: "#AAAAAA",
                    fontSize: "50px",
                  }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </div>
            </Stack>
            <Stack alignItems={"center"}>
              <Button
                type="button"
                sx={{
                  width: "100%",
                  color: "white",
                  height: "67px",
                  fontSize: "22px",
                  bgcolor: "#F15B25",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#F15B25",
                    color: "white",
                  },
                }}
              >
                Get Started
              </Button>
            </Stack>
            <Stack alignItems={"end"}>
              <Button
                sx={{
                  bgcolor: "transparent",
                  color: "#0079FF",
                  fontSize: "16px",
                  textDecoration: "underline",
                  fontWeight: "bold",
                  pl: "0px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#0079FF",
                    textDecoration: "underline",
                  },
                }}
              >
                Forgot Password?
              </Button>
            </Stack>
            <Stack direction={"row"} justifyContent={"right"} gap={1}>
              <Typography display={"flex"} alignItems={"center"}>
                or sign in using
              </Typography>
              <img src={Google} style={{ width: "32px", height: "32px" }} />
              <img src={LinkedIn} style={{ width: "32px", height: "32px" }} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
