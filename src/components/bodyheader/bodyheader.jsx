import {React, useContext, useState} from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";
import "../../styles/bodyheader.css";
import { Typography, Select } from "@mui/material"; 
import { TotalContext } from "../usecontext/usecontext";

export default function Bodyheader() {
  
  const { theme } = useContext(TotalContext)
  const [age, setAge] = useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className="bodyheader-contents" sx={theme ? { color: "black"} : {}}>
      <Box className="bodyheader-icon-create">
        <Box className="bodyheader-icon-container">
          <FaChevronLeft />
        </Box>
        <Typography
          className="bodyheader-create"
          sx={{ fontWeight: "500", fontSize: "16px", color: (theme) => theme.palette.bodyheader.color,}}
          >
          Create Quotation To Existing Lead
        </Typography>
      </Box>
      <Box className="bodyheader-selecttag">
        <FormControl fullWidth size="small">
          <Select
            className="no-border-outline"
            value={age}
            onChange={handleChange}
            IconComponent={(props) => (
              <FaChevronDown {...props} style={{ color: "black" }} />
            )}
            sx={{
              height: "30px",
              fontSize: "14px",
              // padding: "0px 14px",
              lineHeight: "1.5",
              borderRadius: "8px",
              color: "black",
              backgroundColor: "#F5F7FA",
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
            <MenuItem value={10}>Casagrand</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
