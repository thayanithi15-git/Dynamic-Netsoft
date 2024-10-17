import { Box } from "@mui/material";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "../../styles/bodyrouting.css";

export default function Bodyroutings() {
  return (
    <Box className="bodyroutings-contents">
      <Box>Add Contact</Box>
      <Box>
        <FaChevronRight className="bodyroutings-icons" />
      </Box>
      <Box>Lead Details</Box>
      <Box>
        <FaChevronRight className="bodyroutings-icons" />
      </Box>
      <Box>Preview and Create Lead</Box>
      <Box>
        <FaChevronRight className="bodyroutings-icons" />
      </Box>
      <Box>Quotation Details</Box>
      <Box>
        <FaChevronRight className="bodyroutings-icons" />
      </Box>
      <Box className="bodyroutings-preview-container">
        <Box className="bodyroutings-preview">4</Box>
      </Box>
      <Box>Preview and Create</Box>
    </Box>
  );
}
