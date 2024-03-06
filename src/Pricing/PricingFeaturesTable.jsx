import React, { useState } from "react";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Stack,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const packages = [
  ["Sartiro Basic", "(*) up to 10,810.31 Rs / year."],
  ["Sartiro Lite", "(*) up to 108,103.13 Rs / year."],
  ["Sartiro Standard", "(*) up to 108,103.13 Rs / year."],
  ["Sartiro Professional", "(*) up to 108,103.13 Rs / year."],
  ["Sartiro Expert", "(*) up to 108,103.13 Rs / year."],
];

function Banner(props) {
  const features = props.features || [];
  const [openStates, setOpenStates] = useState(features.map(() => false));
  const [popoverState, setPopoverState] = useState({});

  const handleOpen = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  const isPopoverOpen = (linkId) => Boolean(popoverState[linkId]);

  const packageTotals = packages.map((_, packageIndex) => {
    let count = 0;
    let total = 0;
    features.forEach((feature) => {
      feature.items.forEach((item) => {
        total++;
        if (item.availability[packageIndex]) {
          count++;
        }
      });
    });
    return Math.floor((count / total) * 100);
  });

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px 0",
      }}
    >
      <Table
        style={{ width: "90%", margin: "0 auto", borderCollapse: "collapse" }}
      >
        <TableHead style={{ bgcolor: "#F7FCFF" }}>
          <TableRow>
            <TableCell style={{ padding: "10px" }}>Features</TableCell>
            {packages.map((pkg, i) => (
              <TableCell key={i} align="center">
                {pkg[0]}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {features.map((feature, i) => (
            <React.Fragment key={i}>
              <TableRow
                style={{ border: 0, cursor: "pointer" }}
                onClick={() => handleOpen(i)}
              >
                <TableCell
                  style={{ padding: "10px", fontWeight: "bold" }}
                  colSpan={packages.length + 1}
                >
                  <Stack direction="row" alignItems="center">
                    <ArrowDropDownIcon
                      className="navlinkli-link-downarrow"
                      style={{
                        fontSize: 25,
                        transition: "all 0.3s ease-in",
                        color: isPopoverOpen(1) ? "#818181" : "#818181",
                        transform: isPopoverOpen(1)
                          ? "rotate(180deg)"
                          : "rotate(0)",
                      }}
                    />
                    <Typography>{feature.category}</Typography>
                  </Stack>
                </TableCell>
              </TableRow>
              {feature.items.map((item, j) => (
                <TableRow
                  key={j}
                  style={{ display: openStates[i] ? "table-row" : "none" }}
                >
                  <TableCell
                    style={{
                      paddingLeft: "50px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </TableCell>
                  {item.availability.map((available, k) => (
                    <TableCell key={k} align="center">
                      {available ? "✅" : "❌"}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
        <TableFooter style={{ bgcolor: "#F7FCFF" }}>
          <TableRow>
            <TableCell style={{ padding: "10px", fontWeight: "bold" }}>
              Total
            </TableCell>
            {packageTotals.map((total, i) => (
              <TableCell key={i} align="center">
                <Typography
                  style={{
                    padding: "5px",
                    fontFamily: "Work Sans",
                    fontSize: "17px",
                    fontWeight: "bold",
                    lineHeight: "19px",
                    textAlign: "center",
                  }}
                >
                  {total} %
                  <Typography style={{ fontSize: "14px", paddingTop: "5px" }}>
                    {packages[i][0]}
                  </Typography>
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Work Sans",
                    fontSize: "9px",
                    fontWeight: "500",
                    lineHeight: "12px",
                    textAlign: "center",
                  }}
                >
                  {packages[i][1]}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default Banner;
