// Sidebar.js
import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useNavigate } from 'react-router-dom';
import VendorIcon from '@mui/icons-material/DirectionsCar';

import 'react-pro-sidebar/dist/css/styles.css'; // Don't forget to import the styles
import { Height } from '@mui/icons-material';

const MasterSidebar = () => {
    const navigate = useNavigate(); // Get navigate function from the hook
 // Navigate to a specific path

    const handleInputTaxi=(e)=>{
        navigate('/masterInputTaxi'); // Navigate to a specific path
        
    }
    const handleInputModel=(e)=>{
        navigate('/masterInputModel'); // Navigate to a specific path
        
    }
    const handleInputDriver=(e)=>{
        navigate('/masterInputDriver'); // Navigate to a specific path
        
    }
    const handleInputVendor=(e)=>{
        navigate('/masterInputVendor'); // Navigate to a specific path
        
    }
    const handleViewMasterTaxi=(e)=>{
        navigate('/ViewTaxiMaster'); // Navigate to a specific path
        
    }
  return (
    <ProSidebar style={{Height:'800px'}}>
      <Menu iconShape="square">
        <MenuItem icon={<HomeIcon />}>Home</MenuItem>
        <SubMenu title="Input Taxi"  icon={<DirectionsCarIcon />}>
          <MenuItem icon={<ViewListIcon />} onClick={handleInputTaxi}>Taxi Input</MenuItem>
          <MenuItem icon={<FilterListIcon />}onClick={handleViewMasterTaxi}>View Taxi</MenuItem>
        </SubMenu>
        <SubMenu title="Input Model" icon={<DirectionsCarIcon />}>
          <MenuItem icon={<ViewListIcon />}onClick={handleInputModel}>Model Input</MenuItem>
          <MenuItem icon={<FilterListIcon />}>View Model</MenuItem>
        </SubMenu>
        <SubMenu title="Input Vendor" icon={< VendorIcon/>}>
          <MenuItem icon={<ViewListIcon />}onClick={handleInputVendor}>Vendor Input</MenuItem>
          <MenuItem icon={<FilterListIcon />}>View Vendor</MenuItem>
        </SubMenu>
        <SubMenu title="Input Driver" icon={<DirectionsCarIcon />}>
          <MenuItem icon={<ViewListIcon />} onClick={handleInputDriver}>Driver Input</MenuItem>
          <MenuItem icon={<FilterListIcon />}>View Driver</MenuItem>
        </SubMenu>
        <SubMenu title="Input Taxi Class" icon={<DirectionsCarIcon />}>
          <MenuItem icon={<ViewListIcon />}>Class Input</MenuItem>
          <MenuItem icon={<FilterListIcon />}>View Class</MenuItem>
        </SubMenu>
        <SubMenu title="Input Taxi Rate" icon={<DirectionsCarIcon />}>
          <MenuItem icon={<ViewListIcon />}>Rate Input</MenuItem>
          <MenuItem icon={<FilterListIcon />}>View Taxi Rate</MenuItem>
        </SubMenu>
        <SubMenu title="Filter Options" icon={<FilterListIcon />}>
          <MenuItem>Filter by Model</MenuItem>
          <MenuItem>Filter by Vendor</MenuItem>
          <MenuItem>Filter by Status</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default MasterSidebar;
