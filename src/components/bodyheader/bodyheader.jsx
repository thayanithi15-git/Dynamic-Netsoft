import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";
import "../../styles/bodyheader.css";
import { Typography } from "@mui/material";

export default function Bodyheader() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className="bodyheader-contents">
      <Box className="bodyheader-icon-create">
        <Box className="bodyheader-icon-container">
          <FaChevronLeft />
        </Box>
        <Typography
          className="bodyheader-create"
          sx={{ fontWeight: "550", fontSize: "16px", color: "#071741" }}>
          Create Quotation To Existing Lead
        </Typography>
      </Box>
      <Box className="bodyheader-selecttag">
        <FormControl fullWidth size="small">
          <InputLabel
            id="demo-simple-select-label"
            shrink={false}
            sx={{ fontSize: "14px", lineHeight: "1", color: "#091B29" }}>
            Casagrand
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            IconComponent={FaChevronDown}
            sx={{
              height: "30px",
              fontSize: "14px",
              padding: "0px 14px", 
              lineHeight: "1.5",
              borderRadius: "8px",
              backgroundColor: "#F5F7FA",
              border: "1px solid #E4E8EE", 
              color: "#091B29",
              '&:focus': { // This ensures the border stays during focus
                borderColor: "red", 
                outline: "red", // Disable the outline
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { // Prevent Material-UI focus styles
                borderColor: "#E4E8EE",
              },
              '.MuiSvgIcon-root': {
                color: "#091B29", 
              },
            }}>
            <MenuItem value={10}>Casagrand</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
