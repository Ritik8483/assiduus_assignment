import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { hrStyle } from "./CheckingAccount";
import * as d3 from "d3";

const MARGIN = { top: 10, bottom: 50, left: -10, right: -30 };

const mm = [
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
];

const TotalCash = ({ months }) => {
  const height = 250;
  const width = 530;

  const data = mm.map((item) => ({
    x: item,
    groupA: Math.floor(Math.random() * 100),
    groupB: Math.floor(Math.random() * 100),
  }));

  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const allGroups = data.map((d) => String(d.x));
  const allSubgroups = ["groupA", "groupB", "groupC", "groupD"]; // todo

  // Data Wrangling: stack the data
  const stackSeries = d3.stack().keys(allSubgroups).order(d3.stackOrderNone);
  //.offset(d3.stackOffsetNone);
  const series = stackSeries(data);

  // Y axis
  const max = 200; // todo
  const yScale = d3
    .scaleLinear()
    .domain([0, max || 0])
    .range([boundsHeight, 0]);

  // X axis
  const xScale = d3
    .scaleBand()
    .domain(allGroups)
    .range([0, boundsWidth])
    .padding(0.7);

  // Color Scale
  var colorScale = d3
    .scaleOrdinal()
    .domain(allGroups)
    .range(["#47b747", "#02bb7d"]);

  // Render the X and Y axis using d3.js, not react
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
      .style("font-weight", "600")
      .style("border-radius", "10px")
      .attr("transform", "translate(0, 20)");
  }, [xScale, boundsHeight]);

  const rectangles = series.map((subgroup, i) => {
    return (
      <g key={i}>
        {subgroup.map((group, j) => {
          return (
            <rect
              key={j}
              x={xScale(group.data.x)}
              y={yScale(group[1])}
              height={yScale(group[0]) - yScale(group[1])}
              width={xScale.bandwidth()}
              fill={colorScale(subgroup.key)}
              opacity={0.9}
              rx={2}
              ry={2}
            ></rect>
          );
        })}
      </g>
    );
  });

  return (
    <Box>
      <Box
        padding="15px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize="14px" fontWeight="700">
          Total cash flow
        </Typography>
        <Box display="flex" alignItems="center" gap="15px">
          <Box display="flex" alignItems="center" gap="10px">
            <Box
              height="15px"
              width="15px"
              borderRadius="5px"
              bgcolor="#02bb7d"
            ></Box>
            <Typography fontWeight="600" fontSize="12px">
              In
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="10px">
            <Box
              height="15px"
              width="15px"
              borderRadius="5px"
              bgcolor="#47b747"
            ></Box>
            <Typography fontWeight="600" fontSize="12px">
              Out
            </Typography>
          </Box>
        </Box>
      </Box>
      <hr style={hrStyle} />
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {rectangles}
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

export default TotalCash;
