import { Box, Divider } from "@mui/material";
import React from "react";
import "../../styles/quotationdetails.css";

export default function Quotationdetails() {
  return (
    <Box className="quotation-container">
      <Box className="quotation-title">Quotation Summary</Box>
      <Box className="quotation-summary">
        <Box className="quotation-top-container">
          <Box className="quotation-titles">
            <Box className="quatation-total-title">
              <Box sx={{ width: "100%" }}>DESCRIPTION</Box>
              <Box className="quotation-middle-value">QTY</Box>
            </Box>
            <Box>AMOUNT</Box>
          </Box>
          <Divider orientation="horizontal" className="quotation-hr-unique" />
          <Box className="quotation-totals">
            <Box className="quatation-total-title">
              <Box sx={{ width: "100%" }}>Total Amount</Box>
              <Box className="quotation-middle-value">3</Box>
            </Box>
            <Box sx={{ color: "#091B29",fontWeight: "600" }}>$ 3,600.00</Box>
          </Box>
          <Box className="quotation-totals">
            <Box className="quatation-total-title">
              <Box sx={{ width: "100%" }}>Total Discount</Box>
              <Box className="quotation-middle-value">10%</Box>
            </Box>
            <Box>- $ 100.00</Box>
          </Box>
          <Divider orientation="horizontal" className="quotation-hr" />
          <Box className="quotation-totals">
            <Box className="quatation-total-title">
              <Box sx={{ width: "100%" }}>Total Refundable</Box>
              <Box className="quotation-middle-value">0%</Box>
            </Box>
            <Box sx={{ color: "#091B29",fontWeight: "600"  }}>$ 0</Box>
          </Box>
          <Divider orientation="horizontal" className="quotation-hr" />
          <Box className="quotation-totals">
            <Box className="quatation-total-title">
              <Box sx={{ width: "100%" }}>Total Tax</Box>
              <Box className="quotation-middle-value">18%</Box>
            </Box>
            <Box sx={{ color: "#091B29",fontWeight: "600"  }}>$ 648.00</Box>
          </Box>
          <Divider orientation="horizontal" className="quotation-hr" />
        </Box>
        <Box className="quotation-bottom-container">
          <Divider orientation="horizontal" className="quotation-hr" />
          <Box className="quotation-quote-amt">
            <Box>Quote Amount</Box>
            <Box>$ 4,148.00</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
