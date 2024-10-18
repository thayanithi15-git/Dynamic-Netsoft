import {
  Box,
  colors,
  Dialog,
  Divider,
  Switch,
  Popover,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import "../../styles/unitdetails.css";
import { BiBed } from "react-icons/bi";
import { PiBathtubLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineTrash } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { FiInfo } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa6";
import { PiSwimmingPoolFill } from "react-icons/pi";
import { RiSparkling2Fill } from "react-icons/ri";
import { PiSquareHalfBottomLight } from "react-icons/pi";
import { RiBook2Line } from "react-icons/ri";
import Amenities1 from "../../assets/Amenities1.jpg";
import Amenities2 from "../../assets/Amenities2.jpg";
import Amenities3 from "../../assets/Amenities3.jpg";
import Amenities4 from "../../assets/Amenities4.jpg";
import Amenities5 from "../../assets/Amenities5.jpg";
import Amenities6 from "../../assets/Amenities6.jpg";
import Utility1 from "../../assets/Utility1.jpg";
import Utility2 from "../../assets/Utility2.jpg";
import Utility3 from "../../assets/Utility3.jpg";
import Utility4 from "../../assets/Utility4.jpg";
import Utility5 from "../../assets/Utility5.jpg";
import Utility6 from "../../assets/Utility6.jpg";
import House from "../../assets/House.jpg";
import Pool from "../../assets/Pool.jpg";
import GreenHouse from "../../assets/GreenHouse.jpg";
import Room from "../../assets/Room.jpg";
import Chairs from "../../assets/Chairs.jpg";

export default function Unitdetails() {
  const [activeSales, setActiveSales] = useState({});

  const [customise, setCustomise] = useState(false);
  const [addpricing, setAddPricing] = useState(false);
  const [addamenities, setAddAmenities] = useState(false);
  const [addutilities, setAddUtilities] = useState(false);
  const [adddiscount, setAddDiscount] = useState(false);
  const [removecomponent, setRemoveComponent] = useState(false);
  const [hoveredInfoId, setHoveredInfoId] = useState(null);
  const [checkedAmenities, setCheckedAmenities] = useState({});

  const [unitdetails, setUnitDetails] = useState(false);
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

  const handleCustomise = (event) => {
    event.stopPropagation();
    setUnitDetails(true);
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

  const handleMouseEnter = (id) => {
    setHoveredInfoId(id);
  };

  const handleMouseLeave = () => {
    setHoveredInfoId(null);
  };

  const Estates = [
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
      id: 3,
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
      id: 4,
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
      id: 5,
      house: House,
      name: "Jumeirah Estate",
      sale: 1200,
      subname: "Jumeirah Golf Estate",
      area: "2000",
      bed: 2,
      tub: 2,
      bhk: 2,
    },
  ];

  const pricingData = [
    { id: 1, name: "Primary", color: "#B3776D", bgColor: "#FEEAEA80" },
    { id: 2, name: "Secondary", color: "#896DB3", bgColor: "#EDE4FE80" },
    { id: 3, name: "One Time Charges", color: "#6DAFB3", bgColor: "#DBF0F180" },
    { id: 4, name: "Refundables", color: "#6D80B3", bgColor: "#E4EDFF80" },
    { id: 5, name: "Inventory Item", color: "#B3A16D", bgColor: "#FFFAD880" },
    { id: 6, name: "Parking Slot", color: "#B3776D", bgColor: "#FEEAEA80" },
  ];

  const handleSwitchChange = (id) => {
    setCheckedAmenities((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const amenitiesData = [
    {
      id: 1,
      name: "Amenities name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Amenities1,
    },
    {
      id: 2,
      name: "Amenities name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Amenities2,
    },
    {
      id: 3,
      name: "Amenities name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Amenities3,
    },
    {
      id: 4,
      name: "Amenities name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Amenities4,
    },
    {
      id: 5,
      name: "Amenities name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Amenities5,
    },
    {
      id: 6,
      name: "Amenities name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Amenities6,
    },
  ];

  const utilitiesData = [
    {
      id: 1,
      name: "Utility name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Utility1,
    },
    {
      id: 2,
      name: "Utility name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Utility2,
    },
    {
      id: 3,
      name: "Utility name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Utility3,
    },
    {
      id: 4,
      name: "Utility name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Utility4,
    },
    {
      id: 5,
      name: "Utility name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Utility5,
    },
    {
      id: 6,
      name: "Utility name",
      price: "$20.00",
      valid: "Valid Feb 22 - 12 Feb 23",
      img: Utility6,
    },
  ];

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

  const initialBills = [
    { id: 1, name: "Bill Name 1", amount: 1000 },
    { id: 2, name: "Bill Name 2", amount: 1200 },
    { id: 3, name: "Bill Name 3", amount: 1500 },
    { id: 4, name: "Bill Name 4", amount: 1000 },
    { id: 5, name: "Bill Name 5", amount: 800 },
    { id: 6, name: "Bill Name 6", amount: 1100 },
  ];

  const [bills, setBills] = useState(initialBills);

  const handleDelete = (id) => {
    const updatedBills = bills.filter((bill) => bill.id !== id);
    setBills(updatedBills);
  };

  const finalTotalafterremoving = bills.reduce(
    (acc, bill) => acc + bill.amount,
    0
  );

  return (
    <Box className="units-container">
      <Box className="units-title">Unit Details</Box>
      <Box className="unit-all-estates">
        {Estates.map((estate) => (
          <Box
            key={estate.id}
            className="unit-estate"
            onClick={handleCustomise}>
            <Box className="unit-img-container">
              <img src={estate.house} className="unit-img" />
              <HiOutlineTrash className="unit-trash" />
            </Box>

            <Box className="unit-details">
              <Box className="unit-estatename">
                <Box>{estate.name}</Box>
                <Box>
                  {/* Conditionally render the discount message */}
                  {activeSales[estate.id] && (
                    <Box className="discount-message"> % Discount Applied </Box>
                  )}
                  {/* Sale amount with toggle click */}
                  <Box
                    onClick={(event) => handleAmtSale(estate.id, event)}
                    className={
                      activeSales[estate.id] ? "sale-active" : "sale-inactive"
                    }>
                    $ {estate.sale}
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

      <Dialog open={addpricing} onClose={() => setAddPricing(false)}>
        <Box className="pricing-main">
          <Box
            className="pricing-header"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
            }}>
            <Box sx={{ fontSize: "20px", fontWeight: "bold" }}>Pricing</Box>
            <RxCross1
              onClick={() => setAddPricing(false)}
              className="cross-icon"
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box className="pricing-body">
            {pricingData.map((item) => (
              <Box
                key={item.id}
                className="pricing-1"
                sx={{
                  backgroundColor: item.bgColor,
                  marginBottom: "8px",
                  padding: "10px",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Box
                  className="pricing-1-title"
                  sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    className="pricing-1-value"
                    sx={{
                      backgroundColor: item.color,
                      color: "white",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                    }}>
                    {item.id < 10 ? `0${item.id}` : item.id}
                  </Box>
                  <Box
                    className="pricing-1-name"
                    sx={{ color: item.color, fontWeight: "500" }}>
                    {item.name}
                  </Box>
                </Box>
                <Box
                  className="pricing-icons"
                  sx={{ display: "flex", alignItems: "center" }}>
                  <FiInfo
                    className="pricing-info"
                    style={{
                      cursor: "pointer",
                      marginRight: "8px",
                      color: hoveredInfoId === item.id ? "#656F7B" : "#CED3DD",
                    }}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  />
                  {hoveredInfoId === item.id && (
                    <Box className="pricing-info-text">
                      Base rent or monthly rental amount. You can have only one
                      primary pricing component per property.
                    </Box>
                  )}

                  <FaAngleRight
                    className="pricing-right"
                    style={{ color: item.color }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Dialog>

      <Dialog open={addamenities} onClose={() => setAddAmenities(false)}>
        <Box className="amenities-main">
          <Box className="amenities-header">
            <Box>Add Amenities</Box>
            <RxCross1
              onClick={() => setAddAmenities(false)}
              className="cross-icon"
            />
          </Box>
          <Box className="amenities-subheader">
            <Box className="amenities-icon-value">
              <PiSwimmingPoolFill style={{ fontSize: "25px" }} />
              <Box sx={{ display: "flex", gap: "0.4rem" }}>
                <Box>05</Box>
                <Box sx={{ fontWeight: "500" }}>Total Amenities</Box>
              </Box>
            </Box>
            <Box>$ 200.00</Box>
          </Box>
          <Box className="amenities-body">
            <Box className="available-amenities">Available Amenities</Box>
            {amenitiesData.map((item) => (
              <Box key={item.id} className="amenities-main-container">
                <Box className="amenities-1">
                  <Box className="amenities-img-details">
                    <Box className="amenities-img-container">
                      <img
                        src={item.img}
                        className="amenities-img"
                        alt={item.name}
                      />
                    </Box>
                    <Box className="amenities-name-status">
                      <Box>{item.name}</Box>
                      <Box className="amenities-status">
                        <Box>{item.price}</Box>
                        <Box className="leaddetail-dot"></Box>
                        <Box>{item.valid}</Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="amenities-switch">
                    <Switch
                      checked={!!checkedAmenities[item.id]}
                      onChange={() => handleSwitchChange(item.id)}
                    />
                  </Box>
                </Box>
                <Divider
                  orientation="horizontal"
                  className="amenities-free-hr"
                />
                {checkedAmenities[item.id] && (
                  <Box className="amenities-checkbox">
                    <label className="custom-checkbox">
                      <input
                        type="checkbox"
                        readOnly
                      />
                      <span className="checkmark"></span>
                    </label>
                    <span>Free applicability</span>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
          <Box className="amenities-update">Update & Save</Box>
        </Box>
      </Dialog>

      <Dialog open={addutilities} onClose={() => setAddUtilities(false)}>
        <Box className="amenities-main">
          <Box className="amenities-header">
            <Box>Add Utility</Box>
            <RxCross1
              onClick={() => setAddUtilities(false)}
              className="cross-icon"
            />
          </Box>
          <Box className="utility-subheader">
            <Box className="amenities-icon-value">
              <RiSparkling2Fill className="utility-icon" />
              <Box sx={{ display: "flex", gap: "0.4rem" }}>
                <Box>05</Box>
                <Box sx={{ fontWeight: "500" }}>Total Utility</Box>
              </Box>
            </Box>
            <Box>$ 200.00</Box>
          </Box>
          <Box className="amenities-body">
            <Box className="available-amenities">Available Utility</Box>
            {utilitiesData.map((item) => (
              <Box key={item.id} className="utilities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={item.img} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>{item.name}</Box>
                    <Box className="amenities-status">
                      <Box>{item.price}</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>{item.valid}</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch />
                </Box>
              </Box>
            ))}
          </Box>
          <Box className="amenities-update">Update & Save</Box>
        </Box>
      </Dialog>

      <Dialog
        open={adddiscount}
        onClose={() => setAddDiscount(false)}
        maxWidth="lg">
        <Box className="discount-contents">
          <Box className="discount-header">
            <Box className="discount-title">Unit Details</Box>
            <RxCross1
              onClick={() => setAddDiscount(false)}
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
                    onClick={() => setAddDiscount(false)}>
                    Apply Discount
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>

      <Dialog
        open={removecomponent}
        onClose={() => setRemoveComponent(false)}
        maxWidth="lg">
        <Box className="discount-contents">
          <Box className="discount-header">
            <Box className="discount-title">Remove Component</Box>
            <RxCross1
              onClick={() => setRemoveComponent(false)}
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
                    onClick={() => setRemoveComponent(false)}>
                    Update & Save
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>

      <Dialog
        open={unitdetails}
        onClose={() => setUnitDetails(false)}
        maxWidth="lg">
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
                        <Box>${amountInSelectedCurrency.toFixed(2)}</Box>
                      </Box>
                      <Box className="bill-discount">
                        <Box>Discount</Box>
                        <Box className="dis-unit-details">$ 1,200</Box>
                      </Box>
                      <Divider className="bill-hr" orientation="horizontal" />
                    </React.Fragment>
                  );
                })}
                <Box className="prices-bottom">
                  <Box className="final-total">
                    <Box>Final Total</Box>
                    <Box>${finalTotal.toFixed(2)}</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
