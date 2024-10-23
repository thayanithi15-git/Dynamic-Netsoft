import { Box, Button, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaAngleRight, FaChevronDown } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Secondary({ Onback }) {
  const [activeTab, setActiveTab] = useState("Lease");
  const [act, setact] = useState("Yes");
  const [act1, setact1] = useState("Amount");

  const categories = ["Lease", "Sales", "Manage", "Stay"];
  const Chargeble = ["Yes", "No"];
  const Component = ["Amount", "UOM", "%"];

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleBack = () => {
    Onback();
  };

  return (
    <Box className="pricing-sec">
      <Box className="pricing-top-sub">
        <Box className="RevenueType">Revenue Type</Box>
        <Box className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`pricing-buttons-lease ${
                activeTab === category ? "active" : ""
              }`}
              onClick={() => setActiveTab(category)}>
              {category}
            </button>
          ))}
        </Box>
      </Box>
      <Box className="category-tabs">
        <Box className="col">
          <Box>Pricing Component</Box>
          <Box>
            <FormControl size="small">
              <Select
                value={selectedValue}
                onChange={handleChange}
                displayEmpty
                IconComponent={FaChevronDown}
                className="pricing-buttons-gst"
                sx={{
                  height: "40px",
                  fontSize: "14px",
                  width: "200px",
                  marginTop: "10px",
                  borderRadius: "4px",
                  backgroundColor: "#ffffff",
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
                <MenuItem value={10}>GST 1</MenuItem>
                <MenuItem value={20}>GST 2</MenuItem>
                <MenuItem value={30}>GST 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box className="col">
          <Box>Tax Group For Pricing Component</Box>
          <Box>
            <FormControl size="small">
              <Select
                value={selectedValue}
                onChange={handleChange}
                displayEmpty
                IconComponent={FaChevronDown}
                className="pricing-buttons-gst"
                sx={{
                  height: "40px",
                  fontSize: "14px",
                  width: "200px",
                  marginTop: "10px",
                  borderRadius: "4px",
                  backgroundColor: "#ffffff",
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
          </Box>
        </Box>
      </Box>

      <Box className="category-tabs">
        <Box className="col">
          <Box>Chargeble</Box>
          <Box className="category-tabs">
            {Chargeble.map((category) => (
              <button
                key={category}
                className={`pricing-buttons-lease-yesno  ${
                  act === category ? "active" : ""
                }`}
                onClick={() => setact(category)}>
                {category}
              </button>
            ))}
          </Box>
        </Box>
        <Box className="col">
          <Box>Component Based On</Box>
          <Box className="category-tabs">
            {Component.map((category) => (
              <button
                key={category}
                className={`pricing-buttons-lease-yesno ${
                  act1 === category ? "active" : ""
                }`}
                onClick={() => setact1(category)}>
                {category}
              </button>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="pricing-top-sub">
        <Box className="pricing-bottom-top">UOM value</Box>
        <Box className="pricing-bottom-input">
        <input style={{ fontSize: "14px", color: "#091B29",border: "none" }} placeholder="Value" className="inputprimary-box">
            
            </input>
          <Box sx={{ color: "#98A0AC" }}>SAR / Total</Box>
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
