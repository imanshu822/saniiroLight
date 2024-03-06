import { Box, Stack } from "@mui/material";
import DottedMap, { Point } from "dotted-map";
import { useMemo, useState } from "react";

const map = new DottedMap({ height: 60, grid: "vertical" });

map.addPin({
  lat: 41.963064,
  lng: 9.162598,
  data: "Point 1",
});
map.addPin({
  lat: 48.8534,
  lng: 2.3488,
  data: "Point 2",
});

const points = map.getPoints();
const pins = points.filter((point) => point.data);

// const pinsMap = pins.reduce((acc, point) => ({
//   ...acc,
//   [point.data]: point
// }),{} as Record<string, Point>);

const svgOptions = {
  backgroundColor: "#FFFFFF",
  color: "#000000",
  radius: 0.35,
};

const svgMap = map.getSVG({
  ...svgOptions,
  shape: "circle",
});

const size = {
  x: 25,
  y: 25,
};

const offset = {
  x: -5,
  y: 2,
};

export default function DottedMaps() {
  const [pin, setActivePin] = useState(pins[0]);
  const viewBox = `0 0 100 100`;
  return (
    <Box
      sx={{
        height: {
          xs: "100%",
        },
      }}
    >
      {/* {pins.map((pin) => (
        <button type="button" onClick={() => setActivePin(pin)}>
          {pin.data}
        </button>
      ))} */}
      <Stack alignItems={"center"} pt={3}>
        <svg
          viewBox={viewBox}
          style={{ background: svgOptions.backgroundColor, width: "80%" }}
        >
          {points.map((point) => (
            <circle
              cx={point.x}
              cy={point.y}
              r={svgOptions.radius}
              fill={svgOptions.color}
              style={{ opacity: pin.data === point.data ? 1 : 0.25 }}
            />
          ))}
        </svg>
      </Stack>
    </Box>
  );
}
