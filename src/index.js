import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";
// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 320,
//       xss: 420,
//       sm: 768,
//       md: 1024,
//       lg: 1200,
//       xl: 1800, // Customize this value according to your needs
//     },
//   },
// });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider> */}
  </React.StrictMode>
);
