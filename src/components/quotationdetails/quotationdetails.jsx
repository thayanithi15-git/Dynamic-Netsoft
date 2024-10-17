import { Box, Divider } from "@mui/material";
import React from "react";
import "../../styles/quotationdetails.css";

export default function Quotationdetails() {
  return (
    <Box className="quotation-container">
      <Box className="quotation-title">Quotation Summary</Box>
      <Box className="quotation-summary">
        <Box>
          <Box>
            <Box>DESCRIPTION</Box>
            <Box>QTY</Box>
            <Box>AMOUNT</Box>
          </Box>
          <Divider orientation="horizontal" className="quotation-hr-unique"/>
          <Box>
            <Box>Total Amount</Box>
            <Box>3</Box>
            <Box>$ 3,600.00</Box>
          </Box>
          <Box>
            <Box>Total Discount</Box>
            <Box>10%</Box>
            <Box>- $ 100.00</Box>
          </Box>
          <Divider orientation="horizontal" className="quotation-hr"/>
          <Box>
            <Box>Total Refundable</Box>
            <Box>0%</Box>
            <Box>$ 0</Box>
          </Box>
          <Divider orientation="horizontal" className="quotation-hr"/>
          <Box>
            <Box>Total Tax</Box>
            <Box>18%</Box>
            <Box>$ 648.00</Box>
          </Box>
          <Divider orientation="horizontal" className="quotation-hr"/>
        </Box>
        <Box>
          <Divider orientation="horizontal" className="quotation-hr"/>
          <Box>
            <Box>Quote Amount</Box>
            <Box>$ 4,148.00</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
