import { Box, Divider } from '@mui/material';
import React, { useState } from 'react'
import { PiBathtubLight, PiSquareHalfBottomLight } from 'react-icons/pi';
import { RiBook2Line } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import GreenHouse from "../../assets/GreenHouse.jpg";
import Room from "../../assets/Room.jpg";
import Chairs from "../../assets/Chairs.jpg";
import { GoHome } from 'react-icons/go';
import { BiBed } from 'react-icons/bi';
import { HiOutlineTrash } from 'react-icons/hi2';

export default function Remove({onclose}) {

    const initialBills = [
        { id: 1, name: "Bill Name 1", amount: 1000 },
        { id: 2, name: "Bill Name 2", amount: 1200 },
        { id: 3, name: "Bill Name 3", amount: 1500 },
        { id: 4, name: "Bill Name 4", amount: 1000 },
        { id: 5, name: "Bill Name 5", amount: 800 },
        { id: 6, name: "Bill Name 6", amount: 1100 },
      ];
    
      const [bills, setBills] = useState(initialBills);

const handleclose = () => {
    onclose();
}

const handleDelete = (id) => {
    const updatedBills = bills.filter((bill) => bill.id !== id);
    setBills(updatedBills);
  };

  const finalTotalafterremoving = bills.reduce(
    (acc, bill) => acc + bill.amount,
    0
  );

  return (
    <Box className="discount-contents">
          <Box className="discount-header">
            <Box className="discount-title">Remove Component</Box>
            <RxCross1
              onClick={handleclose}
              className="cross-icon"
            />
          </Box>
          <Divider className="discount-hr" orientation="horizontal" />
          <Box className="discount-details">
            <Box className="discount-img-name">
              <Box className="discount-img">
                <Box className="discount-main-img">
                  <img src={GreenHouse} className="discount-asset" />
                </Box>
                <Box className="discount-side-images">
                  <Box className="discount-row-img">
                    <Box className="discount-side-img">
                      <img src={Room} className="discount-asset" />
                    </Box>
                    <Box className="discount-side-img">
                      <img src={Room} className="discount-asset" />
                    </Box>
                  </Box>
                  <Box className="discount-row-img">
                    <Box className="discount-side-img">
                      <img src={Chairs} className="discount-asset" />
                    </Box>
                    <Box className="discount-side-img">
                      <Box className="img-container">
                        <img src={GreenHouse} className="discount-asset-last" />
                        <Box className="overlay-text">+ 8</Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="discount-bottom">
                <Box className="discount-name-status">
                  <Box className="discount-name">Jumeirah Estate</Box>
                  <Box className="discount-status">UNT-1234</Box>
                </Box>
                <Box className="discount-subname">
                  Rubix Apartment, K Tower, Floor 1
                </Box>
                <Box className="discount-quantities">
                  <BiBed />
                  <Box className="discount-value">2</Box>
                  <Box className="leaddetail-dot"></Box>
                  <PiBathtubLight />
                  <Box className="discount-value">2</Box>
                  <Box className="leaddetail-dot"></Box>
                  <GoHome />
                  <Box className="discount-value">3BHK</Box>
                  <Box className="leaddetail-dot"></Box>
                  <PiSquareHalfBottomLight />
                  <Box className="discount-value">2000</Box>
                  <Box>Sq.Ft</Box>
                </Box>
                <Divider
                  className="discount-hr"
                  orientation="horizontal"
                  sx={{ width: "97%" }}
                />
                <Box className="discount-book-view">
                  <Box className="discount-icon-book">
                    <RiBook2Line />
                    <Box>Handbook</Box>
                  </Box>
                  <Box className="discount-view">View / Download</Box>
                </Box>
              </Box>
            </Box>
            <Box className="discount-prices">
              <Box className="discount-prices-container">
                <Box className="prices-title">UNIT PRICE DETAIL</Box>
                <Box className="removing-items">
                  {bills.map((bill) => (
                    <React.Fragment key={bill.id}>
                      <Box className="bill-name">
                        <Box>{bill.name}</Box>
                        <Box className="prices-trash">
                          <Box>${bill.amount}</Box>
                          <Box onClick={() => handleDelete(bill.id)}>
                            <HiOutlineTrash className="prices-trash-icon" />
                          </Box>
                        </Box>
                      </Box>
                      <Divider className="bill-hr" orientation="horizontal" />
                    </React.Fragment>
                  ))}
                </Box>
                <Box className="prices-bottom">
                  <Box className="final-total">
                    <Box>Final Total</Box>
                    <Box>${finalTotalafterremoving}</Box>
                  </Box>
                  <Box
                    className="apply-dis"
                    onClick={handleclose}>
                    Update & Save
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
  )
}
