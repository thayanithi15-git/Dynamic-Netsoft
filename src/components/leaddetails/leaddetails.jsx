import { Box, Divider } from "@mui/material";
import React, { useContext } from "react";
import "../../styles/leaddetails.css";
import Profile from "../../assets/Profile.jpg";
import { TotalContext } from "../usecontext/usecontext";

export default function Leaddetails() {

// const { theme } = useContext(TotalContext)

  return (
    <Box className="leaddetails-container">
      <Box className="leaddetail-maintitle" sx={{ color: (theme) => theme.palette.bodyheader.color}}>Lead Details</Box>
      <Box className="leaddetail-profile">
        <Box className="leaddetail-profilepic-container">
          <img src={Profile} className="leaddetail-profilepic" />
        </Box>
        <Box className="leaddetail-maindetails">
          <Box className="leaddetail-name-status">
            <Box className="leaddetail-name" sx={{ color: (theme) => theme.palette.bodyheader.color}}>Tom Cruise</Box>
            <Box className="leaddetail-status" sx={{ color: (theme) => theme.palette.bodyheader.color}} >Prospect</Box>
          </Box>
          <Box className="leaddetail-no-email">
            <Box className="leaddetail-no" sx={{ color: (theme) => theme.palette.bodyheader.color}}>+91 9090808012</Box>
            <Box className="leaddetail-dot"></Box>
            <Box className="leaddetail-email" sx={{ color: (theme) => theme.palette.bodyheader.color}}>Tomcruise2515@mail.com</Box>
          </Box>
        </Box>
      </Box>
      <Divider className="leaddetail-hr" />
      <Box className="leaddetail-quotation">
        <Box className="leaddetail-quotation-title" sx={{ color: (theme) => theme.palette.bodyheader.color}}>Quotation Details</Box>
        <Box className="leaddetail-dates">
          <Box className="leaddetail-title-date">
            <Box className="leaddetail-title">LEASE START DATE</Box>
            <Box className="leaddetail-date" sx={{ color: (theme) => theme.palette.bodyheader.color}}>30 Jan 22</Box>
          </Box>
          <Box className="leaddetail-title-date">
            <Box className="leaddetail-title">LEASE END DATE</Box>
            <Box className="leaddetail-date" sx={{ color: (theme) => theme.palette.bodyheader.color}}>30 Jan 23</Box>
          </Box>
          <Box className="leaddetail-title-date">
            <Box className="leaddetail-title">RENT START DATE</Box>
            <Box className="leaddetail-date" sx={{ color: (theme) => theme.palette.bodyheader.color}}>30 Jan 23</Box>
          </Box>
          <Box className="leaddetail-title-date">
            <Box className="leaddetail-title">GRACE PERIOD</Box>
            <Box className="leaddetail-date">
              <Box sx={{ color: (theme) => theme.palette.bodyheader.color}}>90 Days</Box>
              <Box sx={{color: "#98A0AC",fontWeight: "500"}}>(Beginning)</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
