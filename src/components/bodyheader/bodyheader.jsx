import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import "../../styles/bodyheader.css";

export default function Bodyheader() {

    
  const [anchorEl, setAnchorEl] = useState(null);
  const dropdownOptions = ['Calendar','Calculator', 'Card', 'List'];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="bodyheader-contents">
      <Box className="bodyheader-icon-create">
        <Box className="bodyheader-icon-container"><FaChevronLeft /></Box>
        <Typography className="bodyheader-create" sx={{fontWeight: "550",fontSize: "16px",color: "#071741"}}>Create Quotation To Existing Lead</Typography>
      </Box>
      <Box>
        <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          mt: 1,
          border: '1px solid #E4EAEE',  // Add the border here
          borderRadius: '8px',  // Optional: Rounding the corners
          // Removed the boxShadow property
          '& .MuiMenu-paper': {
            boxShadow: '0px 0px 12px #00000014',
            border:'1px solid #E4EAEE',

          },
        }}
        MenuListProps={{
          sx: {
            padding: '0',  // Remove default padding
            boxShadow:'none'
          }
        }}
      >
            {dropdownOptions.map((option, index) => (
          <MenuItem
            key={index}
            onClick={handleMenuClose}
            sx={{
              fontWeight:'medium',
              boxShadow:'none',
              fontSize: '10px',
              color: '#101010',
              fontFamily: 'Poppins, sans-serif',
              borderBottom: '1px solid #E4EAEE',  // Add border between items
              '&:last-child': {
                borderBottom: 'none',  // Remove the border for the last item
              },
              '&:hover': {
                
                backgroundColor: '#f5f5f5',  // Optional: Add hover effect
              },
              '& .MuiMenu-paper': {
                boxShadow:'none',
              },
            }}
          >
            {option}
          </MenuItem>
        ))}
        </Menu>
      </Box>
    </Box>
  );
}
