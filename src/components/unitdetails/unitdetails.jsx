import {
  Box,
  colors,
  Dialog,
  Divider,
  Switch,
  Popover,
  Button,
} from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import "../../styles/unitdetails.css";
import { BiBed } from "react-icons/bi";
import { PiBathtubLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineTrash } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { PiSquareHalfBottomLight } from "react-icons/pi";
import { RiBook2Line } from "react-icons/ri";
import House from "../../assets/House.jpg";
import GreenHouse from "../../assets/GreenHouse.jpg";
import Room from "../../assets/Room.jpg";
import Chairs from "../../assets/Chairs.jpg";
import EstateHouse from "../../assets/EstateHouse.jpg";
import Pricing from "../customises/pricing";
import Amenities from "../customises/amenities";
import Utilities from "../customises/utilities";
import Discount from "../customises/discount";
import Remove from "../customises/remove";
import {TotalContext} from "../usecontext/usecontext";

export default function Unitdetails() {

  const { setTotal } = useContext(TotalContext);
  const  { setQty } = useContext(TotalContext);
  const [activeSales, setActiveSales] = useState({});
  const [totalSales, setTotalSales] = useState(0);
  const [customise, setCustomise] = useState(false);  
  const [addpricing, setAddPricing] = useState(false);
  const [addamenities, setAddAmenities] = useState(false);
  const [addutilities, setAddUtilities] = useState(false);
  const [adddiscount, setAddDiscount] = useState(false);
  const [removecomponent, setRemoveComponent] = useState(false);

  const [unitdetails, setUnitDetails] = useState(false);
  const [selectedEstate, setSelectedEstate] = useState(null);
  const [customiseAnchor, setCustomiseAnchor] = useState(null);

  const handleAmtSale = (id, event) => {
    event.stopPropagation();
    setActiveSales((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleCustomiseClick = (event) => {
    event.stopPropagation();
    setCustomiseAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setCustomiseAnchor(null);
  };

  const open = Boolean(customiseAnchor);
  const id = open ? "customise-popover" : undefined;

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleCustomise = (estate, event) => {
    event.stopPropagation();
    setUnitDetails(true);
    setSelectedEstate(estate);
  };

  const handleAddPricing = () => {
    setAddPricing(true);
  };

  const handleAddAmenities = () => {
    setAddAmenities(true);
  };

  const handleAddUtilities = () => {
    setAddUtilities(true);
  };

  const handleAddDiscount = () => {
    setAddDiscount(true);
  };

  const handleRemoveComponent = () => {
    setRemoveComponent(true);
  };

  const [Estates, setEstates] = useState([
    {
      id: 1,
      house: House,
      name: "Jumeirah Estate",
      sale: 1200,
      subname: "Jumeirah Golf Estate",
      area: "2000",
      bed: 2,
      tub: 2,
      bhk: 2,
    },
    {
      id: 2,
      house: Chairs,
      name: "Wolverine Estate",
      sale: 1800,
      subname: "Wolverine Golf Estate",
      area: "6000",
      bed: 3,
      tub: 10,
      bhk: 1,
    },
    {
      id: 3,
      house: Room,
      name: "Duplex Estate",
      sale: 500,
      subname: "Duplex House Estate",
      area: "500",
      bed: 1,
      tub: 3,
      bhk: 10,
    },
    {
      id: 4,
      house: GreenHouse,
      name: "Form House",
      sale: 5200,
      subname: "Form House Estate",
      area: "2000",
      bed: 22,
      tub: 10,
      bhk: 5,
    },
    {
      id: 5,
      house: EstateHouse,
      name: "Bungalow Estate",
      sale: 4500,
      subname: "Bungalow Golf Estate",
      area: "2900",
      bed: 7,
      tub: 15,
      bhk: 23,
    },
  ]);

  const priceDetails = [
    {
      id: 1,
      billName: "Form House",
      amount: 3400,
      discount: 100,
      currency: "AED",
    },
    {
      id: 2,
      billName: "Wolverine",
      amount: 800,
      discount: 150,
      currency: "USD",
    },
  ];

  const currencyRates = {
    AED: 1,
    USD: 3.67,
    EUR: 4.0,
  };

  const [selectedCurrencies, setSelectedCurrencies] = useState(
    priceDetails.reduce((acc, item) => {
      acc[item.id] = item.currency;
      return acc;
    }, {})
  );

  const calculateTotalSales = (updatedEstates) => {
    const total = updatedEstates.reduce((acc, estate) => {
      return acc + estate.sale;
    }, 0);
    setTotal(total);
    setQty(updatedEstates.length);
  };

  const handleDeleteEstate = (id, event) => {
    event.stopPropagation();
    const updatedEstates = Estates.filter((estate) => estate.id !== id);
    setEstates(updatedEstates);
    calculateTotalSales(updatedEstates);
  };

  useEffect(() => {
    calculateTotalSales(Estates);
  }, [Estates]); 
  

  // const handleAmtSale = (id, event) => {
  //   event.stopPropagation();
  //   setActiveSales((prevState) => {
  //     const updatedSales = { ...prevState, [id]: !prevState[id] };
  //     const updatedEstates = estates.map((estate) => {
  //       if (estate.id === id) {
  //         return {
  //           ...estate,
  //           sale: updatedSales[id] ? estate.sale - 300 : estate.sale + 300, // Adjust the sale price
  //         };
  //       }
  //       return estate;
  //     });
  //     setEstates(updatedEstates);
  //     calculateTotalSales(updatedEstates);
  //     return updatedSales;
  //   });
  // };

  

  const finalTotal = priceDetails.reduce((acc, item) => {
    const selectedCurrency = selectedCurrencies[item.id];
    const amountInSelectedCurrency =
      item.amount / currencyRates[selectedCurrency];
    const discountInSelectedCurrency =
      item.discount / currencyRates[selectedCurrency];
    const finalAmount = amountInSelectedCurrency - discountInSelectedCurrency;
    return acc + finalAmount;
  }, 0);

  return (
    <Box className="units-container">
      <Box className="units-title">Unit Details</Box>
      <Box className="unit-all-estates">
        {Estates.map((estate) => (
          <Box
            key={estate.id}
            className="unit-estate"
            onClick={(event) => handleCustomise(estate, event)}>
            <Box className="unit-img-container">
              <img src={estate.house} className="unit-img" />
              <HiOutlineTrash className="unit-trash" onClick={(event) => handleDeleteEstate(estate.id, event)}/>
            </Box>

            <Box className="unit-details">
              <Box className="unit-estatename">
                <Box>{estate.name}</Box>
                <Box>
                  {activeSales[estate.id] && (
                    <Box className="discount-message"> % Discount Applied </Box>
                  )}
                  <Box
                    onClick={(event) => handleAmtSale(estate.id, event)}
                    className={
                      activeSales[estate.id] ? "sale-active" : "sale-inactive"
                    }>+
                    $ 
                   { activeSales[estate.id] ? <span>{estate.sale-300}</span> : <span>{estate.sale}</span> }
                  </Box>
                </Box>
              </Box>

              <Box className="unit-estate-subdetails">
                <Box>{estate.subname}</Box>
                <Box className="leaddetail-dot"></Box>
                <Box>{estate.area} Sq.Ft</Box>
              </Box>

              <Box className="unit-estate-quantities">
                <BiBed />
                <Box>{estate.bed}</Box>
                <Box className="leaddetail-dot"></Box>
                <PiBathtubLight />
                <Box>{estate.tub}</Box>
                <Box className="leaddetail-dot"></Box>
                <GoHome />
                <Box>{estate.bhk}BHK</Box>
              </Box>

              <Box className="estate-customise" onClick={handleCustomiseClick}>
                <FaPlus />
                <Box>Customise</Box>
              </Box>
            </Box>
          </Box>
        ))}
        
      <Box></Box>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={customiseAnchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        <Box className="customise-container">
          <Box className="customise-headings">
            <Box className="customise-titles" onClick={handleAddPricing}>
              Add Pricing Component
            </Box>
            <Divider className="customise-hr" />
            <Box className="customise-titles" onClick={handleAddAmenities}>
              Add Amenities
            </Box>
            <Divider className="customise-hr" />
            <Box className="customise-titles" onClick={handleAddUtilities}>
              Add Utilities
            </Box>
            <Divider className="customise-hr" />
            <Box className="customise-titles" onClick={handleAddDiscount}>
              Add Discount
            </Box>
            <Divider className="customise-hr" />
            <Box className="customise-titles" onClick={handleRemoveComponent}>
              Remove Component
            </Box>
          </Box>
        </Box>
      </Popover>

      <Dialog open={addpricing} onClose={() => setAddPricing(false)} sx={{"& .MuiPaper-root": {
        width: "484px",
        height: "600px",
        overflow: "hidden"
      }}}>
        <Pricing onclose={() => setAddPricing(false)} />
      </Dialog>

      <Dialog open={addamenities} onClose={() => setAddAmenities(false)}>
        <Amenities onclose={() => setAddAmenities(false)} />
      </Dialog>

      <Dialog open={addutilities} onClose={() => setAddUtilities(false)}>
        <Utilities onclose={() => setAddUtilities(false)} />
      </Dialog>

      <Dialog
        open={adddiscount}
        onClose={() => setAddDiscount(false)}
        maxWidth="lg">
        <Discount onclose={() => setAddDiscount(false)} />
      </Dialog>

      <Dialog
        open={removecomponent}
        onClose={() => setRemoveComponent(false)}
        maxWidth="lg">
        <Remove onclose={() => setRemoveComponent(false)} />
      </Dialog>

      <Dialog
        open={unitdetails}
        onClose={() => setUnitDetails(false)}
        maxWidth="lg">
          {selectedEstate && (
        <Box className="discount-contents">
          <Box className="discount-header">
            <Box className="discount-title">Unit Details</Box>
            <RxCross1
              onClick={() => setUnitDetails(false)}
              className="cross-icon"
            />
          </Box>
          <Divider className="discount-hr" orientation="horizontal" />
          <Box className="discount-details">
            <Box className="discount-img-name">
              <Box className="discount-img">
                <Box className="discount-main-img">
                  <img src={selectedEstate.house} className="discount-asset" />
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
                  <Box className="discount-name">{selectedEstate.name}</Box>
                  <Box className="discount-status">UNT-1234</Box>
                </Box>
                <Box className="discount-subname">
                {selectedEstate.subname}, K Tower, Floor 1
                </Box>
                <Box className="discount-quantities">
                  <BiBed />
                  <Box className="discount-value">{selectedEstate.bed}</Box>
                  <Box className="leaddetail-dot"></Box>
                  <PiBathtubLight />
                  <Box className="discount-value">{selectedEstate.tub}</Box>
                  <Box className="leaddetail-dot"></Box>
                  <GoHome />
                  <Box className="discount-value">{selectedEstate.bhk}BHK</Box>
                  <Box className="leaddetail-dot"></Box>
                  <PiSquareHalfBottomLight />
                  <Box className="discount-value">{selectedEstate.area}</Box>
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
                <Box className="prices-title">UNIT PRICE DETAILS</Box>

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
                        <Box sx={{fontWeight: "600"}}>${amountInSelectedCurrency.toFixed(2)}</Box>
                      </Box>
                      <Box className="bill-discount">
                        <Box>Discount</Box>
                        <Box className="dis-unit-details" >$ 1,200</Box>
                      </Box>
                      <Divider className="bill-hr" orientation="horizontal" />
                    </React.Fragment>
                  );
                })}
                <Box className="prices-bottom">
                  <Box className="final-total">
                    <Box>Final Total</Box>
                    <Box>
                      {/* ${finalTotal.toFixed(2)} */}
                      $ 1,200
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
          )}
      </Dialog>
    </Box>
  );
}
