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

export default function Discount({onclose}) {

    const priceDetails = [
        {
          id: 1,
          billName: "Bill Name Here",
          amount: 1000,
          discount: 100,
          currency: "AED",
        },
        {
          id: 2,
          billName: "Bill Name Here",
          amount: 1000,
          discount: 150,
          currency: "USD",
        },
      ];

      const [selectedCurrencies, setSelectedCurrencies] = useState(
        priceDetails.reduce((acc, item) => {
          acc[item.id] = item.currency;
          return acc;
        }, {})
      );

      const currencyRates = {
        AED: 1,
        USD: 3.67,
        EUR: 4.0,
      };

    const handleCurrencyChange = (e, itemId) => {
        const newCurrency = e.target.value;
        setSelectedCurrencies((prevCurrencies) => ({
          ...prevCurrencies,
          [itemId]: newCurrency,
        }));
      };

      const finalTotal = priceDetails.reduce((acc, item) => {
        const selectedCurrency = selectedCurrencies[item.id];
        const amountInSelectedCurrency =
          item.amount / currencyRates[selectedCurrency];
        const discountInSelectedCurrency =
          item.discount / currencyRates[selectedCurrency];
        const finalAmount = amountInSelectedCurrency - discountInSelectedCurrency;
        return acc + finalAmount;
      }, 0);
    

const handleclose = () => {
    onclose();
}

  return (
    <Box className="discount-contents">
          <Box className="discount-header">
            <Box className="discount-title">Unit Details</Box>
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

                {priceDetails.map((item) => {
                  const selectedCurrency = selectedCurrencies[item.id];
                  const amountInSelectedCurrency =
                    item.amount / currencyRates[selectedCurrency];
                  const discountInSelectedCurrency =
                    item.discount / currencyRates[selectedCurrency];

                  return (
                    <React.Fragment key={item.id}>
                      <Box className="bill-name">
                        <Box>{item.billName}</Box>
                        <Box>${amountInSelectedCurrency.toFixed(2)}</Box>
                      </Box>
                      <Box className="bill-discount">
                        <Box>Discount</Box>
                        <Box className="dis-amt">
                          <Box className="price-amt">
                            {discountInSelectedCurrency.toFixed(2)}
                          </Box>
                          <Divider className="price-amt-hr" />
                          <Box className="price-aed">
                            <select
                              className="currency-select"
                              value={selectedCurrency}
                              onChange={(e) =>
                                handleCurrencyChange(e, item.id)
                              }>
                              <option value="AED">AED</option>
                              <option value="USD">USD</option>
                              <option value="EUR">EUR</option>
                            </select>
                          </Box>
                        </Box>
                      </Box>
                      <Divider className="bill-hr" orientation="horizontal" />
                    </React.Fragment>
                  );
                })}
                <Box className="prices-bottom">
                  <Box className="amenity-name">
                    <Box>Amenity Name here</Box>
                    <Box>$1,000</Box>
                  </Box>
                  <Box className="final-total">
                    <Box>Final Total</Box>
                    <Box>${finalTotal.toFixed(2)}</Box>
                  </Box>
                  <Box
                    className="apply-dis"
                    onClick={handleclose}>
                    Apply Discount  
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
  )
}
