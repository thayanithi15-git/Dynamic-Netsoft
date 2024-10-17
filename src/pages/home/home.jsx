import React from 'react';
import '../../styles/home.css';
import { Box } from '@mui/material';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import Bodyheader from '../../components/bodyheader/bodyheader';
import Bodyroutings from '../../components/bodyroutings/bodyroutings';
import Leaddetails from '../../components/leaddetails/leaddetails';
import Unitdetails from '../../components/unitdetails/unitdetails';
import Quotationdetails from '../../components/quotationdetails/quotationdetails';
import Bodyfooter from '../../components/bodyfooter/bodyfooter';

export default function Home() {
  return (
    <Box className="home-page">
        <Box className="home-header">
            <Header/>
        </Box>
        <Box className="home-body">
            <Box className="home-sidebar">
                <Sidebar/>
            </Box>
            <Box className="home-main">
                <Box className="home-main-header">
                    <Bodyheader/>
                </Box>
                <Box className="home-maincontents-container">
                    <Box className="home-maincontents">
                        <Box className="home-body-header">
                            <Bodyroutings/>
                        </Box>
                        <Box className="home-body-mainpages">
                            <Box className="home-body-leaddetails"><Leaddetails/></Box>
                            <Box className="home-body-unitdetails"><Unitdetails/></Box>
                            <Box className="home-body-quotationdetails"><Quotationdetails/></Box>
                        </Box>
                        <Box className="home-body-footer"><Bodyfooter/></Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}
