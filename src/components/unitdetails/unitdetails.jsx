import { Box, colors, Dialog, Divider, Switch , Popover, Button,} from "@mui/material";
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
import House from "../../assets/House.jpg";
import Pool from "../../assets/Pool.jpg";

export default function Unitdetails() {
  const [customise, setCustomise] = useState(false);
  const [addpricing, setAddPricing] = useState(false);
  const [addamenities, setAddAmenities] = useState(false);
  const [addutilities, setAddUtilities] = useState(false);
  const [adddiscount, setAddDiscount] = useState(false);
  const [removecomponent, setRemoveComponent] = useState(false);


  const [customiseAnchor, setCustomiseAnchor] = useState(null);

  const handleCustomiseClick = (event) => {
    setCustomiseAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setCustomiseAnchor(null);
  };

  const open = Boolean(customiseAnchor);
  const id = open ? 'customise-popover' : undefined;
    
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleCustomise = () => {
    setCustomise(true);
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
  ];

  return (
    <Box className="units-container">
      <Box className="units-title">Unit Details</Box>
      <Box className="unit-all-estates">
        {Estates.map((estate) => (
          <Box key={estate.id} className="unit-estate">
            <Box className="unit-img-container">
              <img src={estate.house} className="unit-img" />
              <HiOutlineTrash className="unit-trash" />
            </Box>
            <Box className="unit-details">
              <Box className="unit-estatename">
                <Box>{estate.name}</Box>
                <Box>$ {estate.sale}</Box>
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
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box className="customise-container">
          <Box className="customise-headings">
            <Box className="customise-titles" onClick={handleAddPricing}>
              Add Pricing Component
            </Box>
            <Divider className="customise-hr"/>
            <Box className="customise-titles" onClick={handleAddAmenities}>
              Add Amenities
            </Box>
            <Divider className="customise-hr"/>
            <Box className="customise-titles" onClick={handleAddUtilities}>
              Add Utilities
            </Box>
            <Divider className="customise-hr"/>
            <Box className="customise-titles" onClick={handleAddDiscount}>
              Add Discount
            </Box>
            <Divider className="customise-hr"/>
            <Box className="customise-titles" onClick={handleRemoveComponent}>
              Remove Component
            </Box>
          </Box>
        </Box>
      </Popover>

      <Dialog open={addpricing} onClose={() => setAddPricing(false)}>
        <Box className="pricing-main">
          <Box className="pricing-header">
            <Box>Pricing</Box>
            <RxCross1
              onClick={() => setAddPricing(false)}
              className="cross-icon"
            />
          </Box>
          <Box className="pricing-body">
            <Box className="pricing-1" sx={{ backgroundColor: "#FEEAEA80" }}>
              <Box className="pricing-1-title">
                <Box
                  className="pricing-1-value"
                  sx={{ backgroundColor: "#B3776D" }}>
                  01
                </Box>
                <Box className="pricing-1-name" sx={{ color: "#B3776D" }}>
                  Primary
                </Box>
              </Box>
              <Box className="pricing-icons">
                <FiInfo className="pricing-info" />
                <FaAngleRight
                  className="pricing-right"
                  style={{ color: "#B3776D" }}
                />
              </Box>
            </Box>
            <Box className="pricing-1" sx={{ backgroundColor: "#EDE4FE80" }}>
              <Box className="pricing-1-title">
                <Box
                  className="pricing-1-value"
                  sx={{ backgroundColor: "#896DB3" }}>
                  02
                </Box>
                <Box className="pricing-1-name" sx={{ color: "#896DB3" }}>
                  Secondary
                </Box>
              </Box>
              <Box className="pricing-icons">
                <FiInfo className="pricing-info" />
                <FaAngleRight
                  className="pricing-right"
                  style={{ color: "#896DB3" }}
                />
              </Box>
            </Box>
            <Box className="pricing-1" sx={{ backgroundColor: "#DBF0F180" }}>
              <Box className="pricing-1-title">
                <Box
                  className="pricing-1-value"
                  sx={{ backgroundColor: "#6DAFB3" }}>
                  03
                </Box>
                <Box className="pricing-1-name" sx={{ color: "#6DAFB3" }}>
                  One Time Charges
                </Box>
              </Box>
              <Box className="pricing-icons">
                <FiInfo className="pricing-info" />
                <FaAngleRight
                  className="pricing-right"
                  style={{ color: "#6DAFB3" }}
                />
              </Box>
            </Box>
            <Box className="pricing-1" sx={{ backgroundColor: "#E4EDFF80" }}>
              <Box className="pricing-1-title">
                <Box
                  className="pricing-1-value"
                  sx={{ backgroundColor: "#6D80B3" }}>
                  04
                </Box>
                <Box className="pricing-1-name" sx={{ color: "#6D80B3" }}>
                  Refundables
                </Box>
              </Box>
              <Box className="pricing-icons">
                <FiInfo className="pricing-info" />
                <FaAngleRight
                  className="pricing-right"
                  style={{ color: "#6D80B3" }}
                />
              </Box>
            </Box>
            <Box className="pricing-1" sx={{ backgroundColor: "#FFFAD880" }}>
              <Box className="pricing-1-title">
                <Box
                  className="pricing-1-value"
                  sx={{ backgroundColor: "#B3A16D" }}>
                  05
                </Box>
                <Box className="pricing-1-name" sx={{ color: "#B3A16D" }}>
                  Inventory Item
                </Box>
              </Box>
              <Box className="pricing-icons">
                <FiInfo className="pricing-info" />
                <FaAngleRight
                  className="pricing-right"
                  style={{ color: "#B3A16D" }}
                />
              </Box>
            </Box>
            <Box className="pricing-1" sx={{ backgroundColor: "#FEEAEA80" }}>
              <Box className="pricing-1-title">
                <Box
                  className="pricing-1-value"
                  sx={{ backgroundColor: "#B3776D" }}>
                  06
                </Box>
                <Box className="pricing-1-name" sx={{ color: "#B3776D" }}>
                  Parking Slot
                </Box>
              </Box>
              <Box className="pricing-icons">
                <FiInfo className="pricing-info" />
                <FaAngleRight
                  className="pricing-right"
                  style={{ color: "#B3776D" }}
                />
              </Box>
            </Box>
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
            <Box className="amenities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={Pool} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>Amenities name</Box>
                    <Box className="amenities-status">
                      <Box>$ 20.00</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>Valid Feb 22 - 12 Feb 23</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch {...label} defaultChecked />
                </Box>
            </Box>
            <Box className="amenities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={Pool} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>Amenities name</Box>
                    <Box className="amenities-status">
                      <Box>$ 20.00</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>Valid Feb 22 - 12 Feb 23</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch {...label} defaultChecked />
                </Box>
            </Box>
            <Box className="amenities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={Pool} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>Amenities name</Box>
                    <Box className="amenities-status">
                      <Box>$ 20.00</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>Valid Feb 22 - 12 Feb 23</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch {...label} defaultChecked />
                </Box>
            </Box>
            <Box className="amenities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={Pool} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>Amenities name</Box>
                    <Box className="amenities-status">
                      <Box>$ 20.00</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>Valid Feb 22 - 12 Feb 23</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch {...label} defaultChecked />
                </Box>
            </Box>
            <Box className="amenities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={Pool} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>Amenities name</Box>
                    <Box className="amenities-status">
                      <Box>$ 20.00</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>Valid Feb 22 - 12 Feb 23</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch {...label} defaultChecked />
                </Box>
            </Box>
            <Box className="amenities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={Pool} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>Amenities name</Box>
                    <Box className="amenities-status">
                      <Box>$ 20.00</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>Valid Feb 22 - 12 Feb 23</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch {...label} defaultChecked />
                </Box>
            </Box>
            <Box className="amenities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={Pool} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>Amenities name</Box>
                    <Box className="amenities-status">
                      <Box>$ 20.00</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>Valid Feb 22 - 12 Feb 23</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch {...label} defaultChecked />
                </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>

      <Dialog open={addutilities} onClose={() => setAddUtilities(false)}>
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
            <Box className="amenities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={Pool} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>Amenities name</Box>
                    <Box className="amenities-status">
                      <Box>$ 20.00</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>Valid Feb 22 - 12 Feb 23</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch {...label} defaultChecked />
                </Box>
            </Box>
            <Box className="amenities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={Pool} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>Amenities name</Box>
                    <Box className="amenities-status">
                      <Box>$ 20.00</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>Valid Feb 22 - 12 Feb 23</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch {...label} defaultChecked />
                </Box>
            </Box>
            <Box className="amenities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={Pool} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>Amenities name</Box>
                    <Box className="amenities-status">
                      <Box>$ 20.00</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>Valid Feb 22 - 12 Feb 23</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch {...label} defaultChecked />
                </Box>
            </Box>
            <Box className="amenities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={Pool} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>Amenities name</Box>
                    <Box className="amenities-status">
                      <Box>$ 20.00</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>Valid Feb 22 - 12 Feb 23</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch {...label} defaultChecked />
                </Box>
            </Box>
            <Box className="amenities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={Pool} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>Amenities name</Box>
                    <Box className="amenities-status">
                      <Box>$ 20.00</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>Valid Feb 22 - 12 Feb 23</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch {...label} defaultChecked />
                </Box>
            </Box>
            <Box className="amenities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={Pool} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>Amenities name</Box>
                    <Box className="amenities-status">
                      <Box>$ 20.00</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>Valid Feb 22 - 12 Feb 23</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch {...label} defaultChecked />
                </Box>
            </Box>
            <Box className="amenities-1">
                <Box className="amenities-img-details">
                  <Box className="amenities-img-container">
                    <img src={Pool} className="amenities-img" />
                  </Box>
                  <Box className="amenities-name-status">
                    <Box>Amenities name</Box>
                    <Box className="amenities-status">
                      <Box>$ 20.00</Box>
                      <Box className="leaddetail-dot"></Box>
                      <Box>Valid Feb 22 - 12 Feb 23</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="amenities-switch">
                  <Switch {...label} defaultChecked />
                </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>
      <Dialog open={adddiscount} onClose={() => setAddDiscount(false)}>
        Discount
      </Dialog>
      <Dialog open={removecomponent} onClose={() => setRemoveComponent(false)}>
        Remove Components
      </Dialog>
    </Box>
  );
}
