import { Box, Divider } from "@mui/material";
import React from "react";
import "../../styles/leaddetails.css";
import Profile from "../../assets/Profile.jpg";

export default function Leaddetails() {
  return (
    <Box className="leaddetails-container">
      <Box className="leaddetail-maintitle">Lead Details</Box>
      <Box className="leaddetail-profile">
        <Box className="leaddetail-profilepic-container">
          <img src={Profile} className="leaddetail-profilepic" />
        </Box>
        <Box className="leaddetail-maindetails">
          <Box className="leaddetail-name-status">
            <Box className="leaddetail-name">Tom Cruise</Box>
            <Box className="leaddetail-status">Prospect</Box>
          </Box>
          <Box className="leaddetail-no-email">
            <Box className="leaddetail-no">+91 9090808012</Box>
            <Box className="leaddetail-dot"></Box>
            <Box className="leaddetail-email">Tomcruise2515@mail.com</Box>
          </Box>
        </Box>
      </Box>
      <Divider className="leaddetail-hr" />
      <Box className="leaddetail-quotation">
        <Box className="leaddetail-quotation-title">Quotation Details</Box>
        <Box className="leaddetail-dates">
          <Box className="leaddetail-title-date">
            <Box className="leaddetail-title">LEASE START DATE</Box>
            <Box className="leaddetail-date">30 Jan 22</Box>
          </Box>
          <Box className="leaddetail-title-date">
            <Box className="leaddetail-title">LEASE END DATE</Box>
            <Box className="leaddetail-date">30 Jan 23</Box>
          </Box>
          <Box className="leaddetail-title-date">
            <Box className="leaddetail-title">RENT START DATE</Box>
            <Box className="leaddetail-date">30 Jan 23</Box>
          </Box>
          <Box className="leaddetail-title-date">
            <Box className="leaddetail-title">GRACE PERIOD</Box>
            <Box className="leaddetail-date">
              <Box>90 Days</Box>
              <Box sx={{color: "#98A0AC",fontWeight: "500"}}>(Beginning)</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
