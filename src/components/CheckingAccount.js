import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { faker } from "@faker-js/faker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as d3 from "d3";

const data = [
  { x: 1, y: 90 },
  { x: 2, y: 12 },
  { x: 3, y: 34 },
  { x: 4, y: 53 },
  { x: 5, y: 52 },
  { x: 6, y: 9 },
  { x: 7, y: 18 },
  { x: 8, y: 78 },
  { x: 9, y: 28 },
  { x: 10, y: 34 },
];
const MARGIN = { top: 10, bottom: 50, left: -10, right: -30 };

const manageArr = ["Manage 1", "Manage 2", "Manage 3"];
const monthsArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const hrStyle = {
  color: "#f4f4f5",
  padding: "0",
  margin: "0",
  border: "none",
  backgroundColor: "#f4f4f5",
  height: "1px",
};

const selectStyle = {
  height: "30px",
  width: "110px",
  fontSize: "12px",
  fontWeight: "600",
};

const CheckingAccount = ({months,setMonths}) => {
  const axesRef = useRef(null);
  const [manage, setManage] = useState("");
  const [dataArr, setDataArr] = useState([]);

  const xAxisArr = monthsArr.map(() => faker.number.int({ min: 0, max: 10 }));

  useEffect(() => {
    const xItem = xAxisArr.map((item,index) => {
      return { x: item, y: item + index };
    });
    setDataArr(xItem)
  }, [months]);

  const handleChange = (event) => {
    setManage(event.target.value);
  };

  const height = 250;
  const width = 530;
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // Y axis
  const [min, max] = d3.extent(dataArr, (d) => d.y);
  const yScale = d3
    .scaleLinear()
    .domain([0, max || 0])
    .range([boundsHeight, 0]);

  // X axis
  const [xMin, xMax] = d3.extent(dataArr, (d) => d.x);
  const xScale = d3
    .scaleLinear()
    .domain([0, xMax || 0])
    .range([0, boundsWidth]);

  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();
    const xAxisGenerator = d3.axisBottom(xScale).tickSize(0).tickSizeInner(0);
    const xAxis = svgElement
      .append("g")
      .attr("transform", "translate(0," + boundsHeight + ")")
      .call(xAxisGenerator);
    xAxis.select(".domain").style("stroke", "transparent");
    xAxis
      .selectAll("text")
      .style("font-size", "12px")
      .style("fill", "#bec1c2")
      .style("font-weight", "600");
  }, [xScale, yScale, boundsHeight]);

  // Build the line
  const lineBuilder = d3
    .line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y))
    .curve(d3.curveBasis);
  const linePath = lineBuilder(dataArr);
  if (!linePath) {
    return null;
  }

  return (
    <Box>
      <Box
        padding="15px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography width="100%" fontSize="14px" fontWeight="700">
          Checking account
        </Typography>
        <Box display="flex" gap="10px" width="100%">
          <FormControl fullWidth>
            <Select
              sx={selectStyle}
              value={manage}
              displayEmpty
              IconComponent={ExpandMoreIcon}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <>Manage</>;
                }

                return selected;
              }}
              onChange={handleChange}
            >
              {manageArr.map((item) => {
                return (
                  <MenuItem
                    key={item}
                    sx={{ fontSize: "12px" }}
                    height="30px"
                    value={item}
                  >
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <Select
              sx={selectStyle}
              value={months}
              displayEmpty
              IconComponent={ExpandMoreIcon}
              renderValue={(select) => {
                if (select?.length === 0) {
                  return <>Month</>;
                }

                return select;
              }}
            >
              <Box height="120px" overflow="auto">
                {monthsArr.map((it) => (
                  <MenuItem
                    onClick={() => setMonths(it)}
                    key={it}
                    sx={{ fontSize: "12px" }}
                    height="30px"
                    value={it}
                  >
                    {it}
                  </MenuItem>
                ))}
              </Box>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <hr style={hrStyle} />
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          <path
            d={linePath}
            opacity={1}
            stroke="#9a6fb0"
            fill="none"
            strokeWidth={2}
          />
        </g>
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        />
      </svg>
    </Box>
  );
};

export default CheckingAccount;