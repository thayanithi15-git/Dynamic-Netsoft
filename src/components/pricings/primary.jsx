import { Box, Button, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaAngleRight, FaChevronDown } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Primary({ Onback }) {
  const [revenueitem, setRevenueItem] = useState("Lease");
  const [componentitem, setComponentItem] = useState("Amount");

  const revenue = ["Lease", "Sales", "Manage"];
  const component = ["Amount", "UOM"];

  const handleRevenue = (name) => {
    setRevenueItem(name);
  };

  const handleComponent = (name) => {
    setComponentItem(name);
  };

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleBack = () => {
    Onback();
  };

  return (
    <Box className="pricing-bottom-functions">
      <Box className="pricing-top-sub">
        <Box className="pricing-bottom-top">
          <Box className="pricing-opt-first">Revenue Type</Box>
          <Box className="pricing-opt-second">Pricing Component</Box>
        </Box>
        <Box className="pricing-buttons-lsm">
          {revenue.map((revenue) => (
            <button
              key={revenue}
              className={`pricing-buttons-lease ${
                revenueitem == revenue ? "edit" : ""
              }`}
              onClick={() => handleRevenue(revenue)}>
              {revenue}
            </button>
          ))}
          <FormControl size="small">
            <Select
              value={selectedValue}
              onChange={handleChange}
              displayEmpty
              IconComponent={FaChevronDown}
              className="pricing-buttons-select"
              sx={{
                height: "30px",
                fontSize: "14px",
                color: "#091B29",
                borderRadius: "4px",
                backgroundColor: "white",
                ".MuiSvgIcon-root": {
                  color: "#091B29",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #E4E8EE",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #E4E8EE",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #E4E8EE",
                },
              }}>
              <MenuItem value="" disabled>
                Pricing Component
              </MenuItem>
              <MenuItem value={10}>Pricing Component 1</MenuItem>
              <MenuItem value={20}>Pricing Component 2</MenuItem>
              <MenuItem value={30}>Pricing Component 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box className="pricing-top-sub">
        <Box className="pricing-bottom-top">
          <Box className="pricing-opt-first">
            Tax Group For Pricing Component
          </Box>
          <Box className="pricing-opt-second">Component Based On</Box>
        </Box>
        <Box className="pricing-buttons-gu">
          <FormControl size="small">
            <Select
              value={selectedValue}
              onChange={handleChange}
              displayEmpty
              IconComponent={FaChevronDown}
              className="pricing-buttons-gst"
              sx={{
                height: "30px",
                fontSize: "14px",
                color: "#091B29",
                borderRadius: "4px",
                backgroundColor: "white",
                ".MuiSvgIcon-root": {
                  color: "#091B29",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #E4E8EE",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #E4E8EE",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #E4E8EE",
                },
              }}>
              <MenuItem value="" disabled>
                GST
              </MenuItem>
              <MenuItem value={10}>GST 1</MenuItem>
              <MenuItem value={20}>GST 2</MenuItem>
              <MenuItem value={30}>GST 3</MenuItem>
            </Select>
          </FormControl>
          {component.map((component) => (
            <Box
              key={component}
              className={`pricing-buttons-lease ${
                componentitem == component ? "edit" : ""
              }`}
              onClick={() => handleComponent(component)}>
              {component}
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="pricing-top-sub">
        <Box className="pricing-bottom-top">UOM value</Box>
        <Box className="pricing-bottom-input">
          <Box sx={{ fontSize: "14px", color: "#091B29", fontWeight: "600" }}>
            200
          </Box>
          <Box sx={{ color: "#98A0AC" }}>SAR / Total</Box>
        </Box>
      </Box>
      <Box className="rating-buttons-main">
        <Box className="ratings-button">
          <Box>Maximum</Box>
          <ProgressBar
            variant="danger"
            now={100}
            className="ratings-progress"
            style={{ height: "5px" }}
          />
          <Box className="ratings-rate">$ 190</Box>
          <Box sx={{ fontSize: "10px" }}>Sq. Yard/Monthly</Box>
        </Box>
        <Box className="ratings-button">
          <Box>Recommended</Box>
          <ProgressBar
            variant="success"
            now={70}
            className="ratings-progress"
            style={{ height: "5px" }}
          />
          <Box className="ratings-rate">$ 120</Box>
          <Box sx={{ fontSize: "10px" }}>Sq. Yard/Monthly</Box>
        </Box>
        <Box className="ratings-button">
          <Box>Minimum</Box>
          <ProgressBar
            variant="warning"
            now={40}
            className="ratings-progress"
            style={{ height: "5px" }}
          />
          <Box className="ratings-rate">$ 100</Box>
          <Box sx={{ fontSize: "10px" }}>Sq. Yard/Monthly</Box>
        </Box>
      </Box>
      <Box className="pricing-main-buttons">
        <button className="pricing-button-back" onClick={handleBack}>
          Back
        </button>
        <button className="pricing-button-create">
          Create Pricing Component
        </button>
      </Box>
    </Box>
  );
}
