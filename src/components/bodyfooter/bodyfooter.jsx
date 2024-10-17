import { Box, Button } from '@mui/material'
import React from 'react';
import "../../styles/bodyfooter.css";

export default function Bodyfooter() {
  return (
    <Box className="bodyfooter-container">
        <button className='bodyfooter-previous'>Previous</button>
        <Box className="bodyfooter-cancel-create">
            <button className='bodyfooter-cancel'>Cancel</button>
            <button className='bodyfooter-create'>Create Quotation</button>
        </Box>
    </Box>
  )
}
