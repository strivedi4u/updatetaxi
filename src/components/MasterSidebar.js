import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useNavigate, useLocation } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import "react-pro-sidebar/dist/css/styles.css"; // Don't forget to import the styles

const MasterSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // State to manage expanded submenus
  const [expandedSubmenus, setExpandedSubmenus] = useState({
    inputTaxi: false,
    inputModel: false,
    inputVendor: false,
    inputDriver: false,
    inputTaxiClass: false,
    inputTaxiRate: false,
    filterOptions: false,
  });

  const handleToggleSubMenu = (menu) => {
    setExpandedSubmenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <ProSidebar style={{ display: "flex", height: "100vh" }}>
      <Menu iconShape="square">
        <MenuItem
          icon={<HomeIcon />}
          active={isActive("/")}
          onClick={() => navigate("/")}
        >
          Home
        </MenuItem>

        <SubMenu
          title="Input Taxi"
          icon={<DirectionsCarIcon />}
          open={expandedSubmenus.inputTaxi}
          onClick={() => handleToggleSubMenu("inputTaxi")}
        >
          <MenuItem
            icon={<DirectionsCarIcon />}
            active={isActive("/masterInputTaxi")}
            onClick={() => {
              navigate("/masterInputTaxi");
              handleToggleSubMenu("inputTaxi");
            }}
          >
            New Taxi Input
          </MenuItem>
          <MenuItem
            icon={<VisibilityIcon />}
            active={isActive("/ViewTaxiMaster")}
            onClick={() => {
              navigate("/ViewTaxiMaster");
              handleToggleSubMenu("inputTaxi");
            }}
          >
            View/Update Taxi Type
          </MenuItem>
        </SubMenu>

        <SubMenu
          title="Input Model"
          icon={<DirectionsCarIcon />}
          open={expandedSubmenus.inputModel}
          onClick={() => handleToggleSubMenu("inputModel")}
        >
          <MenuItem
            icon={<DirectionsCarIcon />}
            active={isActive("/MasterInputModel")}
            onClick={() => {
              navigate("/MasterInputModel");
              handleToggleSubMenu("inputModel");
            }}
          >
            New Model Input
          </MenuItem>
          <MenuItem icon={<VisibilityIcon />}>View/Update Taxi Model</MenuItem>
        </SubMenu>

        <SubMenu
          title="Input Vendor"
          icon={<PersonAddIcon />}
          open={expandedSubmenus.inputVendor}
          onClick={() => handleToggleSubMenu("inputVendor")}
        >
          <MenuItem
            icon={<PersonAddIcon />}
            active={isActive("/masterInputVendor")}
            onClick={() => {
              navigate("/masterInputVendor");
              handleToggleSubMenu("inputVendor");
            }}
          >
            New Vendor Input
          </MenuItem>
          <MenuItem icon={<VisibilityIcon />}>View/Update Taxi Vendor</MenuItem>
        </SubMenu>

        <SubMenu
          title="Input Driver"
          icon={<PersonAddIcon />}
          open={expandedSubmenus.inputDriver}
          onClick={() => handleToggleSubMenu("inputDriver")}
        >
          <MenuItem
            icon={<PersonAddIcon />}
            active={isActive("/masterInputDriver")}
            onClick={() => {
              navigate("/masterInputDriver");
              handleToggleSubMenu("inputDriver");
            }}
          >
            New Driver Input
          </MenuItem>
          <MenuItem icon={<VisibilityIcon />}>
            View /Update Taxi Driver
          </MenuItem>
        </SubMenu>

        <SubMenu
          title="Input Taxi Class"
          icon={<DirectionsCarIcon />}
          open={expandedSubmenus.inputTaxiClass}
          onClick={() => handleToggleSubMenu("inputTaxiClass")}
        >
          <MenuItem
            icon={<ViewListIcon />}
            active={isActive("/MasterInputTaxiClass")}
            onClick={() => {
              navigate("/MasterInputTaxiClass");
              handleToggleSubMenu("inputTaxiClass");
            }}
          >
            New Taxi Class Input
          </MenuItem>
          <MenuItem icon={<VisibilityIcon />}>View/Update Taxi Class</MenuItem>
        </SubMenu>

        <SubMenu
          title="Input Taxi Rate"
          icon={<AttachMoneyIcon />}
          open={expandedSubmenus.inputTaxiRate}
          onClick={() => handleToggleSubMenu("inputTaxiRate")}
        >
          <MenuItem
            icon={<AttachMoneyIcon />}
            active={isActive("/MasterInputTaxiRate")}
            onClick={() => {
              navigate("/MasterInputTaxiRate");
              handleToggleSubMenu("inputTaxiRate");
            }}
          >
            New Taxi Rate Input
          </MenuItem>
          <MenuItem icon={<VisibilityIcon />}>View/Update Taxi Rate</MenuItem>
        </SubMenu>

        <SubMenu
          title="Filter Options"
          icon={<VisibilityIcon />}
          open={expandedSubmenus.filterOptions}
          onClick={() => handleToggleSubMenu("filterOptions")}
        >
          <MenuItem>Filter by Model</MenuItem>
          <MenuItem>Filter by Vendor</MenuItem>
          <MenuItem>Filter by Status</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default MasterSidebar;
